import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'
import './App.css'

function AdminPanel() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedCard, setExpandedCard] = useState(null)
  const [pendingLocations, setPendingLocations] = useState([])
  const [approvedLocations, setApprovedLocations] = useState([])
  const [activeTab, setActiveTab] = useState('pending')
  const [userAccess, setUserAccess] = useState([])
  const [rankings, setRankings] = useState([])
  const [comments, setComments] = useState({})
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [newUser, setNewUser] = useState({ userName: '', email: '', senha: '', userType: 'usuario' })
  const [siteLocations, setSiteLocations] = useState([])
  const [trashedLocations, setTrashedLocations] = useState([])
  const [contactMessages, setContactMessages] = useState([])
  const [locationFilter, setLocationFilter] = useState('')
  const [editingLocation, setEditingLocation] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  
  const API_URL = import.meta.env.VITE_API_URL;

  const loadUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/usuarios`)
      if (response.ok) {
        const users = await response.json()
        setUserAccess(users)
      } else {
        console.error('Erro ao carregar usuários do servidor')
        setUserAccess([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar usuários:', error)
      setUserAccess([])
    }
  }

  const loadRanking = async () => {
    try {
      const response = await fetch(`${API_URL}/api/ranking`)
      if (response.ok) {
        const ranking = await response.json()
        setRankings(ranking)
      } else {
        console.error('Erro ao carregar ranking do servidor')
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar ranking:', error)
    }
  }

  const loadComments = async () => {
    try {
      const response = await fetch(`${API_URL}/api/comentarios/all`)
      if (response.ok) {
        const commentsData = await response.json()
        setComments(commentsData)
      } else {
        console.error('Erro ao carregar comentários do servidor')
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar comentários:', error)
    }
  }

  const loadPendingLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais/pendentes`)
      if (response.ok) {
        const pending = await response.json()
        setPendingLocations(pending)
      } else {
        console.error('Erro ao carregar locais pendentes do servidor')
        setPendingLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar locais pendentes:', error)
      setPendingLocations([])
    }
  }

  const loadApprovedLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais/aprovados`)
      if (response.ok) {
        const approved = await response.json()
        setApprovedLocations(approved)
      } else {
        console.error('Erro ao carregar locais aprovados do servidor')
        setApprovedLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar locais aprovados:', error)
      setApprovedLocations([])
    }
  }

  const loadSiteLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais`)
      if (response.ok) {
        const locais = await response.json()
        setSiteLocations(locais)
      } else {
        console.error('Erro ao carregar locais do site do servidor')
        setSiteLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar locais do site:', error)
      setSiteLocations([])
    }
  }

  const loadTrashedLocations = async () => {
    try {
      const response = await fetch(`${API_URL}/api/locais/lixeira`)
      if (response.ok) {
        const lixeira = await response.json()
        setTrashedLocations(lixeira)
      } else {
        console.error('Erro ao carregar lixeira do servidor')
        setTrashedLocations([])
      }
    } catch (error) {
      console.error('Erro de conexão ao carregar lixeira:', error)
      setTrashedLocations([])
    }
  }

  const loadContactMessages = async () => {
    try {
        const response = await fetch(`${API_URL}/api/mensagens`);
        if(response.ok) {
            const messages = await response.json();
            setContactMessages(messages);
        } else {
            console.error("Erro ao carregar mensagens de contato");
            setContactMessages([]);
        }
    } catch (error) {
        console.error('Erro de conexão ao carregar mensagens:', error)
        setContactMessages([]);
    }
  }

  useEffect(() => {
    loadPendingLocations()
    loadApprovedLocations()
    loadUsers()
    loadRanking()
    loadComments()
    loadSiteLocations()
    loadTrashedLocations()
    loadContactMessages()
  }, [])

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/locais/aprovar/${id}`, {
        method: 'POST'
      })
      
      if (response.ok) {
        alert('Local aprovado com sucesso!')
        loadPendingLocations()
        loadApprovedLocations()
        loadSiteLocations()
      } else {
        alert('Erro ao aprovar local')
      }
    } catch (error) {
      console.error('Erro de conexão ao aprovar local:', error)
      alert('Erro de conexão. Tente novamente.')
    }
  }

  const handleReject = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/locais/rejeitar/${id}`, {
        method: 'POST'
      })
      
      if (response.ok) {
        alert('Local rejeitado!')
        loadPendingLocations()
        loadTrashedLocations()
      } else {
        alert('Erro ao rejeitar local')
      }
    } catch (error) {
      console.error('Erro de conexão ao rejeitar local:', error)
      alert('Erro de conexão. Tente novamente.')
    }
  }

  const handleRemoveLocation = async (id) => {
    if (confirm('Tem certeza que deseja mover este local para a lixeira?')) {
      try {
        const response = await fetch(`${API_URL}/api/locais/excluir/${id}`, {
          method: 'POST'
        })
        
        if (response.ok) {
          alert('Local movido para a lixeira!')
          loadSiteLocations()
          loadTrashedLocations()
          loadApprovedLocations()
        } else {
          alert('Erro ao mover local para lixeira')
        }
      } catch (error) {
        console.error('Erro de conexão ao mover local para a lixeira:', error)
        alert('Erro de conexão. Tente novamente.')
      }
    }
  }

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const handleRemoveUser = async (userId) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        const response = await fetch(`${API_URL}/api/usuarios/${userId}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          alert('Usuário excluído com sucesso!')
          loadUsers()
        } else {
          alert('Erro ao excluir usuário')
        }
      } catch (error) {
        console.error('Erro de conexão ao excluir usuário:', error)
        alert('Erro de conexão. Tente novamente.')
      }
    }
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    if (newUser.userName.trim() && newUser.email.trim() && newUser.senha.trim()) {
      try {
        const response = await fetch(`${API_URL}/api/usuarios`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: newUser.userName,
            email: newUser.email,
            senha: newUser.senha,
            tipoUsuario: newUser.userType
          })
        })
        
        if (response.ok) {
          setNewUser({ userName: '', email: '', senha: '', userType: 'usuario' })
          setShowAddUserModal(false)
          alert('Usuário cadastrado com sucesso!')
          loadUsers()
        } else {
          const error = await response.json()
          alert(error.error || 'Erro ao cadastrar usuário')
        }
      } catch (error) {
        alert('Erro de conexão com o servidor')
      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios (Nome, Email e Senha)!')
    }
  }

  const handleRestoreLocation = async (id) => {
    if (confirm('Tem certeza que deseja restaurar este local?')) {
      try {
        const response = await fetch(`${API_URL}/api/locais/restaurar/${id}`, {
          method: 'POST'
        });
        if (response.ok) {
          alert('Local restaurado com sucesso!');
          loadTrashedLocations();
          loadSiteLocations();
          loadApprovedLocations();
        } else {
          alert('Erro ao restaurar o local.');
        }
      } catch (error) {
        console.error('Erro de conexão ao restaurar local:', error)
        alert('Erro de conexão. Tente novamente.')
      }
    }
  }

  const handlePermanentDelete = async (id) => {
    if (confirm('Tem certeza que deseja excluir permanentemente este local? Esta ação não pode ser desfeita!')) {
      try {
        const response = await fetch(`${API_URL}/api/locais/lixeira/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          alert('Local excluído permanentemente!');
          loadTrashedLocations();
        } else {
          alert('Erro ao excluir o local permanentemente.');
        }
      } catch (error) {
        console.error('Erro de conexão ao excluir local permanentemente:', error)
        alert('Erro de conexão. Tente novamente.')
      }
    }
  }

  const handleEdit = (id) => {
    const locationToEdit = pendingLocations.find(location => location.id === id)
    setEditingLocation({...locationToEdit})
    setShowEditModal(true)
  }

  const handleSaveEdit = async () => {
    if (editingLocation) {
        try {
            const response = await fetch(`${API_URL}/api/locais/pendentes/${editingLocation.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingLocation)
            });

            if (response.ok) {
                setShowEditModal(false)
                setEditingLocation(null)
                alert('Local editado com sucesso! Agora você pode aprová-lo.')
                loadPendingLocations();
            } else {
                alert('Erro ao salvar edição do local.');
            }
        } catch (error) {
            console.error('Erro de conexão ao salvar edição:', error);
            alert('Erro de conexão. Tente novamente.');
        }
    }
  }
  
  const handleSaveAndApprove = async () => {
    await handleSaveEdit();
    if (editingLocation) {
      handleApprove(editingLocation.id);
    }
  }

  const responderMensagem = async (id) => {
    const resposta = prompt('Digite sua resposta:')
    if (resposta && resposta.trim()) {
        try {
            const response = await fetch(`${API_URL}/api/mensagens/responder/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resposta: resposta.trim() })
            });
            if (response.ok) {
                alert('Resposta enviada com sucesso!');
                loadContactMessages();
            } else {
                alert('Erro ao enviar resposta.');
            }
        } catch (error) {
            console.error('Erro de conexão ao responder mensagem:', error);
            alert('Erro de conexão. Tente novamente.');
        }
    }
  }

  return (
    <div>
      <header style={{
        background: darkMode ? 'rgba(15, 12, 41, 0.8)' : '#1a237e',
        backdropFilter: 'blur(30px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/images/logos/logo.png" alt="GADYS" style={{ height: '40px', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '50%', padding: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', color: 'white' }}>GADYS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => { const n = !darkMode; setDarkMode(n); localStorage.setItem('darkMode', n) }} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', zIndex: 1002 }} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
            <span style={{ width: '25px', height: '3px', background: 'white', margin: '3px 0' }} />
          </div>
        </div>
        {menuOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }} onClick={() => setMenuOpen(false)} />}
        <ul className="nav-links" style={{
          position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '300px', height: '100vh',
          background: darkMode ? 'rgba(15,12,41,0.95)' : '#1a237e',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
          margin: 0, padding: '5rem 0', listStyle: 'none', transition: 'right 0.3s ease', zIndex: 1001, overflowY: 'auto'
        }}>
          {[
            { label: 'Início', path: '/' },
            { label: 'Lugares', path: '/lugares' },
            { label: 'Mapa', path: '/mapa' },
            { label: 'Adicionar Local', path: '/adicionar-local' },
            { label: 'Meu Perfil', path: '/perfil' },
            { label: 'Sobre', path: '/sobre' },
            { label: 'Contato', path: '/contato' },
          ].map(({ label, path }) => (
            <li key={path}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(path); setMenuOpen(false) }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.target.style.background = 'transparent'}
                style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '5px', display: 'block' }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false) }}
              onMouseOver={(e) => e.target.style.background = 'rgba(255,215,0,0.15)'}
              onMouseOut={(e) => e.target.style.background = 'transparent'}
              style={{ color: '#ffd700', textDecoration: 'none', padding: '0.5rem 1rem', fontWeight: '700', borderRadius: '5px', display: 'block' }}>
              ⚙️ Painel Admin (atual)
            </a>
          </li>
        </ul>
      </header>
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Painel Administrativo</h1>
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pendentes ({pendingLocations.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'approved' ? 'active' : ''}`}
            onClick={() => setActiveTab('approved')}
          >
            Aprovados ({approvedLocations.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Usuários ({userAccess.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ranking' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranking')}
          >
            Ranking
          </button>
          <button 
            className={`tab-btn ${activeTab === 'locations' ? 'active' : ''}`}
            onClick={() => setActiveTab('locations')}
          >
            Locais ({siteLocations.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'trash' ? 'active' : ''}`}
            onClick={() => setActiveTab('trash')}
          >
            Lixeira ({trashedLocations.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Mensagens ({contactMessages.filter(m => m.status === 'nova').length})
          </button>
        </div>
      </div>
      
      {activeTab === 'users' && (
        <div className="action-button-container">
          <button 
            onClick={() => setShowAddUserModal(true)}
            className="primary-action-btn"
          >
            + Cadastrar Usuário
          </button>
        </div>
      )}
      
      {activeTab === 'locations' && (
        <div className="filter-container">
          <select 
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as categorias</option>
            <option value="Monumentos">Monumentos</option>
            <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
            <option value="Restaurantes">Restaurantes</option>
            <option value="Costume Cultural">Costume Cultural</option>
          </select>
        </div>
      )}
      
      <div className="admin-grid">
        {activeTab === 'addLocal' && (
          <div className="action-button-container">
            <button 
              onClick={() => window.open('/adicionar-locais.html', '_blank')}
              className="primary-action-btn"
            >
              + Adicionar Local
            </button>
          </div>
        )}
        
        {activeTab === 'ranking' && (rankings.length === 0 ? (
            <div className="empty-state-message">
              <p>Nenhuma avaliação encontrada ainda.</p>
            </div>
          ) : (
            rankings.map((local, index) => (
              <div key={index} className="admin-card">
                <div className="card-header">
                  <h3>#{index + 1} {local.nome}</h3>
                  <span className={`category-badge ${index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}`}>
                    {index === 0 ? '🥇 1º Lugar' : index === 1 ? '🥈 2º Lugar' : index === 2 ? '🥉 3º Lugar' : `${index + 1}º`}
                  </span>
                </div>
                
                <div className="card-info">
                  <p><strong>Média:</strong> {local.media.toFixed(1)} ({'★'.repeat(Math.floor(local.media)) + '☆'.repeat(5 - Math.floor(local.media))})</p>
                  <p><strong>Total de Avaliações:</strong> {local.totalAvaliacoes}</p>
                </div>
              </div>
            ))
          ))}

        {activeTab === 'approved' && (approvedLocations.length === 0 ? (
          <div className="empty-state-message"><p>Nenhum local aprovado.</p></div>
        ) : approvedLocations.map((location, index) => (
          <div key={location.id || index} className={`admin-card ${expandedCard === `approved-${location.id}` ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{location.name || location.nome}</h3>
              <span className="category-badge ATIVO">{location.subcategoria || location.category}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.city || location.cidade}</p>
              <p><strong>Aprovado em:</strong> {new Date(location.approvedAt).toLocaleDateString() || 'N/A'}</p>
              <p><strong>Categoria:</strong> {location.subcategoria || location.category}</p>
            </div>

            {expandedCard === `approved-${location.id}` && (
              <div className="card-details">
                <p><strong>Descrição:</strong> {location.description || location.descricao}</p>
                <p><strong>Localização:</strong> {location.localizacao || 'N/A'}</p>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(`approved-${location.id}`)}
              >
                {expandedCard === `approved-${location.id}` ? 'Recolher' : 'Expandir'}
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleRemoveLocation(location.id)}
              >
                Remover
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'pending' && (pendingLocations.length === 0 ? (
            <div className="empty-state-message"><p>Nenhum local pendente.</p></div>
        ) : pendingLocations.map(location => (
          <div key={location.id} className={`admin-card ${expandedCard === location.id ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{location.name}</h3>
              <span className="category-badge PENDENTE">{location.subcategoria || location.category}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.city}</p>
              <p><strong>Enviado por:</strong> {location.submittedBy}</p>
              <p><strong>Data:</strong> {new Date(location.date).toLocaleDateString()}</p>
            </div>

            {expandedCard === location.id && (
              <div className="card-details">
                <p><strong>Descrição:</strong> {location.description}</p>
                <p><strong>Coordenadas:</strong> {location.coordinates}</p>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(location.id)}
              >
                {expandedCard === location.id ? 'Recolher' : 'Expandir'}
              </button>
              <button 
                className="expand-btn"
                onClick={() => handleEdit(location.id)}
              >
                Editar
              </button>
              <button 
                className="approve-btn"
                onClick={() => handleApprove(location.id)}
              >
                Aprovar
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleReject(location.id)}
              >
                Rejeitar
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'locations' && (siteLocations.length === 0 ? (
          <div className="empty-state-message"><p>Nenhum local cadastrado no site.</p></div>
        ) : siteLocations
          .filter(location => {
            if (!locationFilter) return true;
            const categoria = location.subcategoria || location.category;
            return categoria === locationFilter;
          })
          .map((location, index) => (
          <div key={location.id || index} className={`admin-card ${expandedCard === location.id ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{location.nome || location.name}</h3>
              <span className="category-badge ATIVO">{location.subcategoria || location.category}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.cidade || location.city}, {location.estado}</p>
              <p><strong>Categoria:</strong> {location.subcategoria || location.category}</p>
            </div>

            {expandedCard === location.id && (
              <div className="card-details">
                <p><strong>Descrição:</strong> {location.descricao || location.description}</p>
                <p><strong>Localização:</strong> {location.localizacao || 'N/A'}</p>
                <p><strong>Horário:</strong> {location.horario || 'N/A'}</p>
                <p><strong>Preço:</strong> {location.preco || 'N/A'}</p>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(location.id)}
              >
                {expandedCard === location.id ? 'Recolher' : 'Expandir'}
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleRemoveLocation(location.id)}
              >
                Excluir Local
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'users' && (userAccess.length === 0 ? (
            <div className="empty-state-message"><p>Nenhum usuário cadastrado.</p></div>
        ) : userAccess.map((user, index) => (
          <div key={index} className={`admin-card ${expandedCard === `user-${index}` ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{user.nome || user.userName || 'Usuário'}</h3>
              <span className={`category-badge ${user.tipoUsuario === 'adm' ? 'ADM' : 'USUARIO'}`}>
                {user.tipoUsuario === 'adm' ? 'Admin' : 'Usuário'}
              </span>
            </div>
            
            <div className="card-info">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Cadastrado em:</strong> {new Date(user.dataCadastro).toLocaleDateString() || 'N/A'}</p>
            </div>

            <div className="card-actions">
              <button 
                className="reject-btn"
                onClick={() => handleRemoveUser(user.id, index)}
              >
                Excluir
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'trash' && (trashedLocations.length === 0 ? (
            <div className="empty-state-message"><p>A lixeira está vazia.</p></div>
        ) : trashedLocations.map((location, index) => (
          <div key={location.id || index} className={`admin-card ${expandedCard === `trash-${location.id}` ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{location.nome || location.name}</h3>
              <span className="category-badge INATIVO">{location.subcategoria || location.category}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Cidade:</strong> {location.cidade || location.city}</p>
              <p><strong>Excluído em:</strong> {new Date(location.trashedAt).toLocaleDateString()}</p>
            </div>

            {expandedCard === `trash-${location.id}` && (
              <div className="card-details">
                <p><strong>Descrição:</strong> {location.descricao || location.description}</p>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(`trash-${location.id}`)}
              >
                {expandedCard === `trash-${location.id}` ? 'Recolher' : 'Expandir'}
              </button>
              <button 
                className="approve-btn"
                onClick={() => handleRestoreLocation(location.id)}
              >
                Restaurar
              </button>
              <button 
                className="reject-btn"
                onClick={() => handlePermanentDelete(location.id)}
              >
                Excluir Permanentemente
              </button>
            </div>
          </div>
        )))}
        
        {activeTab === 'messages' && (contactMessages.filter(message => message.status === 'nova').length === 0 ? (
          <div className="empty-state-message"><p>Nenhuma mensagem nova.</p></div>
        ) : contactMessages.filter(message => message.status === 'nova').map((message) => (
          <div key={message.id} className={`admin-card ${expandedCard === message.id ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{message.nome}</h3>
              <span className={`category-badge ${message.status === 'nova' ? 'nova' : ''}`}>{message.status}</span>
            </div>
            
            <div className="card-info">
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Assunto:</strong> {message.assunto}</p>
              <p><strong>Data:</strong> {new Date(message.data).toLocaleString()}</p>
            </div>

            {expandedCard === message.id && (
              <div className="card-details">
                <p><strong>Mensagem:</strong></p>
                <div className="message-content-box">
                  {message.mensagem}
                </div>
              </div>
            )}

            <div className="card-actions">
              <button 
                className="expand-btn"
                onClick={() => toggleExpand(message.id)}
              >
                {expandedCard === message.id ? 'Recolher' : 'Ver Mensagem'}
              </button>
              <button 
                className="approve-btn"
                onClick={() => responderMensagem(message.id)}
              >
                Responder
              </button>
            </div>
          </div>
        )))}
      </div>
      
      {showAddUserModal && (
        <div className="modal-overlay" onClick={() => setShowAddUserModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Cadastrar Novo Usuário</h2>
            <form onSubmit={handleAddUser} className="add-user-form">
                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" value={newUser.userName} onChange={e => setNewUser({...newUser, userName: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" value={newUser.senha} onChange={e => setNewUser({...newUser, senha: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Tipo:</label>
                    <select value={newUser.userType} onChange={e => setNewUser({...newUser, userType: e.target.value})}>
                        <option value="usuario">Usuário</option>
                        <option value="adm">Administrador</option>
                    </select>
                </div>
                <div className="modal-actions">
                    <button type="submit" className="approve-btn">Cadastrar</button>
                    <button type="button" className="reject-btn" onClick={() => setShowAddUserModal(false)}>Cancelar</button>
                </div>
            </form>
          </div>
        </div>
      )}
      
      {showEditModal && editingLocation && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Editar Local</h2>
            <div className="edit-form">
              <div className="form-group">
                <label>Nome:</label>
                <input 
                  type="text" 
                  value={editingLocation.name} 
                  onChange={(e) => setEditingLocation({...editingLocation, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Cidade:</label>
                <input 
                  type="text" 
                  value={editingLocation.city} 
                  onChange={(e) => setEditingLocation({...editingLocation, city: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Categoria:</label>
                <select 
                  value={editingLocation.category} 
                  onChange={(e) => setEditingLocation({...editingLocation, category: e.target.value})}
                >
                  <option value="Monumentos">Monumentos</option>
                  <option value="Lugar Paradísíaco">Lugar Paradísíaco</option>
                  <option value="Restaurantes">Restaurantes</option>
                  <option value="Costume Cultural">Costume Cultural</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <textarea 
                  value={editingLocation.description} 
                  onChange={(e) => setEditingLocation({...editingLocation, description: e.target.value})}
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Localização:</label>
                <input 
                  type="text" 
                  value={editingLocation.localizacao || ''} 
                  onChange={(e) => setEditingLocation({...editingLocation, localizacao: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button className="approve-btn" onClick={() => {
                  handleSaveEdit()
                  handleApprove(editingLocation.id)
                }}>Salvar e Aprovar</button>
                <button className="reject-btn" onClick={() => setShowEditModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default AdminPanel
