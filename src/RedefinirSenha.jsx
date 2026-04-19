import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

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

const ICONS = { success: '✓', error: '✕', info: 'ℹ' };

function RedefinirSenha() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const passwordStrength = getPasswordStrength(novaSenha);
  const passwordsMismatch = confirmarSenha && novaSenha !== confirmarSenha;

  const showToast = (message, type = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) { showToast('Token inválido. Solicite um novo link.'); return; }
    if (!passwordStrength || passwordStrength.label === 'Fraca') {
      showToast('Senha muito fraca! Use letras maiúsculas, números e símbolos.'); return;
    }
    if (novaSenha !== confirmarSenha) { showToast('Senhas não coincidem!'); return; }

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/auth/redefinir-senha`, {
        token,
        novaSenha
      });
      if (response.data.sucesso) {
        showToast('Senha redefinida com sucesso!', 'success');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        showToast(response.data.mensagem || 'Link inválido ou expirado.');
      }
    } catch {
      showToast('Erro ao redefinir senha. Tente novamente.');
    } finally {
      setLoading(false);
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
        <h2>Nova Senha</h2>

        {!token ? (
          <div>
            <p style={{ color: '#f43f5e', marginBottom: '1.5rem' }}>
              Link inválido. Solicite um novo link de redefinição.
            </p>
            <button onClick={() => navigate('/login')}>Voltar ao Login</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
            {novaSenha && passwordStrength && (
              <div className="password-strength">
                <div className="password-strength-bar">
                  <div style={{ width: passwordStrength.width, background: passwordStrength.color }} />
                </div>
                <span style={{ color: passwordStrength.color }}>{passwordStrength.label}</span>
              </div>
            )}
            <input
              type="password"
              placeholder="Confirmar nova senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              style={{ borderColor: passwordsMismatch ? '#f43f5e' : confirmarSenha && !passwordsMismatch ? '#10b981' : '' }}
            />
            {passwordsMismatch && <p className="field-error">Senhas não coincidem</p>}
            <button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : 'Redefinir Senha'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RedefinirSenha;
