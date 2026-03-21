import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function Login({ onLogin, isAdminAccess = false }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(isAdminAccess ? 'adm' : 'usuario');
  const [isRegister, setIsRegister] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const showAlert = (primaryMessage, fallbackMessage) => {
    if (typeof primaryMessage === 'string' && primaryMessage) {
        alert(primaryMessage);
    } else {
        alert(fallbackMessage);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isRegister) {
        if (email && password && password === confirmPassword && name) {
          const response = await axios.post(`${API_URL}/api/auth/cadastrar`, { // Corrected endpoint
            nome: name,
            email,
            senha: password,
            tipoUsuario: 'USUARIO'
          });
          
          if (response.data.success) {
            showAlert(response.data.message, 'Cadastro realizado com sucesso!');
            setIsRegister(false);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
          } else {
            showAlert(response.data.error, 'Erro no cadastro.');
          }
        } else if (password !== confirmPassword) {
          alert('Senhas não coincidem!');
        } else {
          alert('Preencha todos os campos!');
        }
      } else {
        if (email && password) {
          const response = await axios.post(`${API_URL}/api/login`, { // Assuming this is correct, but let's check backend if it fails
            email,
            senha: password,
            tipoUsuario: userType === 'adm' ? 'ADMIN' : 'USUARIO'
          });
          
          if (response.data.success) {
            const user = response.data.user;
            
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userType', user.TipoUsuario);
            localStorage.setItem('userName', user.Nome);
            
            if (onLogin) onLogin(user.TipoUsuario, user.Nome);
            alert('Login realizado com sucesso!');
            navigate('/perfil');
          } else {
            showAlert(response.data.error, 'Credenciais inválidas!');
          }
        }
      }
    } catch (error) {
        showAlert(error.response?.data?.error, 'Erro de conexão com o servidor.');
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
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegister && (
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

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
