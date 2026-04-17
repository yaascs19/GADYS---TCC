import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [cooldown, setCooldown] = useState(false);

  const passwordStrength = getPasswordStrength(password);
  const emailInvalid = emailTouched && email && !isValidEmail(email);
  const passwordsMismatch = confirmPassword && password !== confirmPassword;

  const showToast = useCallback((message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown) { showToast('Aguarde antes de tentar novamente.', 'info'); return; }
    setLoading(true);

    try {
      if (isRegister) {
        if (!name) { showToast('Preencha o nome!'); setLoading(false); return; }
        if (!isValidEmail(email)) { showToast('Email inválido!'); setLoading(false); return; }
        if (!passwordStrength || passwordStrength.label === 'Fraca') { showToast('Senha muito fraca! Use letras maiúsculas, números e símbolos.'); setLoading(false); return; }
        if (password !== confirmPassword) { showToast('Senhas não coincidem!'); setLoading(false); return; }

        const response = await axios.post(
          `${API_URL}/api/auth/cadastrar`,
          { nome: name, email, senha: password, tipoUsuario: 'USUARIO' }
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
            { email, senha: password }
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
      </div>
    </div>
  );
}

export default Login;
