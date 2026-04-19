import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useGoogleLogin } from '@react-oauth/google';
import './Login.css';
import axios from 'axios';

const RAW_API_URL = import.meta.env.VITE_API_URL;
const API_URL = RAW_API_URL.replace(/\/$/, '');

const getPasswordStrength = (pwd) => {
  if (!pwd) return null;
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { label: 'Fraca', color: '#f43f5e', width: '25%' };
  if (score === 2) return { label: 'Razoável', color: '#f59e0b', width: '50%' };
  if (score === 3) return { label: 'Boa', color: '#3b82f6', width: '75%' };
  return { label: 'Forte', color: '#10b981', width: '100%' };
};

const sanitize = (str) => (str || '').replace(/<[^>]*>/g, '').trim()

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ICONS = { success: '✓', error: '✕', info: 'ℹ' };

function Login({ onLogin }) {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [cooldown, setCooldown] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const MAX_ATTEMPTS = 5;
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const passwordStrength = getPasswordStrength(password);
  const emailInvalid = emailTouched && email && !isValidEmail(email);
  const passwordsMismatch = confirmPassword && password !== confirmPassword;

  const showToast = useCallback((message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
        })
        const response = await axios.post(`${API_URL}/api/auth/google`, {
          token: tokenResponse.access_token,
          email: userInfo.data.email,
          nome: userInfo.data.name
        })
        if (response.data.sucesso) {
          localStorage.setItem('isLoggedIn', 'true')
          localStorage.setItem('userType', response.data.tipoUsuario)
          localStorage.setItem('userName', response.data.nome)
          localStorage.setItem('userEmail', userInfo.data.email)
          localStorage.setItem('usuarioId', response.data.usuarioId)
          localStorage.setItem('loginExpiry', Date.now() + 8 * 60 * 60 * 1000)
          if (onLogin) onLogin(response.data.tipoUsuario, response.data.nome)
          navigate('/')
        } else {
          showToast(response.data.mensagem || 'Erro ao entrar com Google.')
        }
      } catch { showToast('Erro ao autenticar com Google.') }
    },
    onError: () => showToast('Login com Google cancelado.')
  })

  const handleForgotPassword = async () => {
    if (!forgotEmail || !isValidEmail(forgotEmail)) { showToast('Digite um email válido.'); return }
    try {
      await axios.post(`${API_URL}/api/auth/esqueci-senha`, { email: forgotEmail })
      showToast('Email enviado com instruções para redefinir sua senha.', 'success')
      setShowForgotPassword(false)
      setForgotEmail('')
    } catch { showToast('Erro ao enviar email. Tente novamente.') }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown) { showToast('Aguarde antes de tentar novamente.', 'info'); return; }
    if (failedAttempts >= MAX_ATTEMPTS) { showToast('Muitas tentativas. Tente novamente mais tarde.', 'error'); return; }
    if (!executeRecaptcha) { showToast('reCAPTCHA não carregado. Recarregue a página.', 'error'); return; }
    setLoading(true);
    try {
      const recaptchaToken = await executeRecaptcha(isRegister ? 'cadastro' : 'login');
      if (isRegister) {
        if (!name) { showToast('Preencha o nome!'); setLoading(false); return; }
        if (!isValidEmail(email)) { showToast('Email inválido!'); setLoading(false); return; }
        if (!passwordStrength || passwordStrength.label === 'Fraca') { showToast('Senha muito fraca! Use letras maiúsculas, números e símbolos.'); setLoading(false); return; }
        if (password !== confirmPassword) { showToast('Senhas não coincidem!'); setLoading(false); return; }

        const response = await axios.post(
          `${API_URL}/api/auth/cadastrar`,
          { nome: name, email, senha: password, tipoUsuario: 'USUARIO', recaptchaToken }
        );

        if (response.data.sucesso) {
          showToast(response.data.mensagem || 'Cadastro realizado com sucesso!', 'success');
          setIsRegister(false);
          setEmail(''); setPassword(''); setConfirmPassword(''); setName('');
        } else {
          showToast(response.data.mensagem || 'Erro no cadastro.');
        }

      } else {
        if (email && password) {
          const response = await axios.post(
            `${API_URL}/api/auth/login`,
            { email, senha: password, recaptchaToken }
          );

          if (response.data.sucesso) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userType', response.data.tipoUsuario);
            localStorage.setItem('userName', response.data.nome);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('usuarioId', response.data.usuarioId);
            localStorage.setItem('loginExpiry', Date.now() + 8 * 60 * 60 * 1000);
            if (onLogin) onLogin(response.data.tipoUsuario, response.data.nome);
            navigate('/');
          } else {
            setFailedAttempts(prev => prev + 1)
            showToast(response.data.mensagem || 'Credenciais inválidas!');
          }
        }
      }

    } catch (error) {
      if (error.response) {
        showToast(error.response.data?.mensagem || 'Erro no servidor.');
      } else if (error.request) {
        showToast('Servidor não respondeu. Tente novamente.');
      } else {
        showToast('Erro inesperado.');
      }
    } finally {
      setLoading(false);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 3000);
    }
  };

  return (
    <div className="login-container">

      {toast && (
        <div className={`login-toast login-toast--${toast.type}`}>
          <span className="login-toast-icon">{ICONS[toast.type]}</span>
          <span>{toast.message}</span>
          <button className="login-toast-close" onClick={() => setToast(null)}>×</button>
        </div>
      )}

      <div className="login-form">
        <img src="/images/logos/logo.png" alt="GADYS" className="login-logo" />
        <h2>{isRegister ? 'Cadastrar' : 'Bem-vindo'}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            required
            style={{ borderColor: emailInvalid ? '#f43f5e' : '' }}
          />
          {emailInvalid && <p className="field-error">Email inválido</p>}

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegister && password && (
            <div className="password-strength">
              <div className="password-strength-bar">
                <div style={{ width: passwordStrength.width, background: passwordStrength.color }} />
              </div>
              <span style={{ color: passwordStrength.color }}>{passwordStrength.label}</span>
            </div>
          )}

          {isRegister && (
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ borderColor: passwordsMismatch ? '#f43f5e' : confirmPassword && !passwordsMismatch ? '#10b981' : '' }}
            />
          )}
          {passwordsMismatch && <p className="field-error">Senhas não coincidem</p>}

<button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : (isRegister ? 'Cadastrar' : 'Entrar')}
          </button>
        </form>

        <p className="toggle-form">
            {isRegister ? 'Já tem conta?' : 'Não tem conta?'}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? ' Entrar' : ' Cadastrar-se'}
            </span>
          </p>

        {!isRegister && (
          <p className="toggle-form">
            <span onClick={() => setShowForgotPassword(true)}>Esqueci minha senha</span>
          </p>
        )}

        <div className="login-divider"><span>ou</span></div>

        <button type="button" className="google-btn" onClick={() => handleGoogleLogin()}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="20" />
          Entrar com Google
        </button>

      </div>

      {showForgotPassword && (
        <div className="login-modal-overlay" onClick={() => setShowForgotPassword(false)}>
          <div className="login-modal-box" onClick={e => e.stopPropagation()}>
            <h3>Redefinir Senha</h3>
            <p>Digite seu email e enviaremos um link para redefinir sua senha.</p>
            <input
              type="email"
              placeholder="Seu email"
              value={forgotEmail}
              onChange={e => setForgotEmail(e.target.value)}
            />
            <div className="login-modal-box-actions">
              <button onClick={handleForgotPassword} className="login-button">Enviar</button>
              <button onClick={() => setShowForgotPassword(false)} className="back-button">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
