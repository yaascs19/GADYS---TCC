import { useState } from 'react';
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

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Login({ onLogin, isAdminAccess = false }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(isAdminAccess ? 'adm' : 'usuario');
  const [isRegister, setIsRegister] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordStrength = getPasswordStrength(password);
  const emailInvalid = emailTouched && email && !isValidEmail(email);
  const passwordsMismatch = confirmPassword && password !== confirmPassword;

  const showAlert = (primaryMessage, fallbackMessage) => {
    if (typeof primaryMessage === 'string' && primaryMessage) {
      alert(primaryMessage);
    } else {
      alert(fallbackMessage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        if (!name) { alert('Preencha o nome!'); setLoading(false); return; }
        if (!isValidEmail(email)) { alert('Email inválido!'); setLoading(false); return; }
        if (!passwordStrength || passwordStrength.label === 'Fraca') { alert('Senha muito fraca! Use letras maiúsculas, números e símbolos.'); setLoading(false); return; }
        if (password !== confirmPassword) { alert('Senhas não coincidem!'); setLoading(false); return; }

        const response = await axios.post(
          `${API_URL}/api/auth/cadastrar`,
          { nome: name, email, senha: password, tipoUsuario: 'USUARIO' }
        );

        if (response.data.sucesso) {
          showAlert(response.data.mensagem, 'Cadastro realizado com sucesso!');
          setIsRegister(false);
          setEmail(''); setPassword(''); setConfirmPassword(''); setName('');
        } else {
          showAlert(response.data.mensagem, 'Erro no cadastro.');
        }

      } else {
        if (email && password) {

          const response = await axios.post(
            `${API_URL}/api/auth/login`,
            {
              email,
              senha: password,
              tipoUsuario: userType === 'adm' ? 'ADM' : 'USUARIO'
            }
          );

          if (response.data.sucesso) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userType', response.data.tipoUsuario);
            localStorage.setItem('userName', response.data.nome);
            localStorage.setItem('usuarioId', response.data.usuarioId);

            if (onLogin) {
              onLogin(response.data.tipoUsuario, response.data.nome);
            }

            if (response.data.tipoUsuario === 'ADM') {
              navigate('/');
            } else {
              navigate('/');
            }
          } else {
            showAlert(response.data.mensagem, 'Credenciais inválidas!');
          }
        }
      }

    } catch (error) {
      console.error("ERRO COMPLETO:", error);

      if (error.response) {
        alert(error.response.data?.mensagem || "Erro no servidor.");
      } else if (error.request) {
        alert("Servidor não respondeu. Pode ser CORS ou backend fora do ar.");
      } else {
        alert("Erro inesperado.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
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

          {!isRegister && (
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="user-type-select"
            >
              {!isAdminAccess && <option value="usuario">Usuário</option>}
              <option value="adm">Administrador</option>
            </select>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : (isRegister ? 'Cadastrar' : 'Entrar')}
          </button>
        </form>

        {!isAdminAccess && (
          <p className="toggle-form">
            {isRegister ? 'Já tem conta?' : 'Não tem conta?'}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? ' Entrar' : ' Cadastrar-se'}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;