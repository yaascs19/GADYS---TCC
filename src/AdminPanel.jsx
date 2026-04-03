import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'

function AdminPanel() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('pending')
  const [allLocais, setAllLocais] = useState([])
  const [users, setUsers] = useState([])
  const [rankings, setRankings] = useState([])
  const [contactMessages, setContactMessages] = useState([])
  const [expandedCard, setExpandedCard] = useState(null)
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [newUser, setNewUser] = useState({ userName: '', email: '', senha: '', userType: 'usuario' })
  const [editingLocation, setEditingLocation] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
  const adminId = localStorage.getItem('usuarioId')

  const pendingLocations = allLocais.filter(l => l.status === 'PENDENTE')
  const approvedLocations = allLocais.filter(l => l.status === 'ATIVO')
  const rejectedLocations = allLocais.filter(l => l.status === 'INATIVO')

  const loadLocais = async () => {
    try {
      const res = await fetch(`${API_URL}/api/locais`)
      if (res.ok) setAllLocais(await res.json())
    } catch (e) { console.error(e) }
  }

  const loadUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/usuarios`)
      if (res.ok) setUsers(await res.json())
    } catch (e) { console.error(e) }
  }

  const loadRanking = async () => {
    try {
      const res = await fetch(`${API_URL}/api/ranking`)
      if (res.ok) setRankings(await res.json())
    } catch (e) { console.error(e) }
  }

  const loadContactMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/api/mensagens`)
      if (res.ok) setContactMessages(await res.json())
    } catch (e) { console.error(e) }
  }

  useEffect(() => {
    loadLocais()
    loadUsers()
    loadRanking()
    loadContactMessages()
  }, [])

  const handleApprove = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/locais/${id}/aprovar?adminId=${adminId}`, { method: 'PUT' })
      if (res.ok) { alert('Local aprovado!'); loadLocais() }
      else alert('Erro ao aprovar local')
    } catch (e) { alert('Erro de conexão') }
  }

  const handleReject = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/locais/${id}/rejeitar?adminId=${adminId}`, { method: 'PUT' })
      if (res.ok) { alert('Local rejeitado!'); loadLocais() }
      else alert('Erro ao rejeitar local')
    } catch (e) { alert('Erro de conexão') }
  }

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir permanentemente este local?')) return
    try {
      const res = await fetch(`${API_URL}/api/locais/${id}`, { method: 'DELETE' })
      if (res.ok) { alert('Local excluído!'); loadLocais() }
      else alert('Erro ao excluir local')
    } catch (e) { alert('Erro de conexão') }
  }

  const handleRemoveUser = async (userId) => {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) return
    try {
      const res = await fetch(`${API_URL}/api/usuarios/${userId}`, { method: 'DELETE' })
      if (res.ok) { alert('Usuário excluído!'); loadUsers() }
      else alert('Erro ao excluir usuário')
    } catch (e) { alert('Erro de conexão') }
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    if (!newUser.userName.trim() || !newUser.email.trim() || !newUser.senha.trim()) {
      alert('Preencha todos os campos!')
      return
    }
    try {
      const res = await fetch(`${API_URL}/api/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: newUser.userName, email: newUser.email, senha: newUser.senha, tipoUsuario: newUser.userType })
      })
      if (res.ok) {
        setNewUser({ userName: '', email: '', senha: '', userType: 'usuario' })
        setShowAddUserModal(false)
        alert('Usuário cadastrado!')
        loadUsers()
      } else {
        const err = await res.json()
        alert(err.error || 'Erro ao cadastrar usuário')
      }
    } catch (e) { alert('Erro de conexão') }
  }

  const handleSaveEdit = async () => {
    if (!editingLocation) return
    try {
      const res = await fetch(`${API_URL}/api/locais/${editingLocation.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingLocation)
      })
      if (res.ok) {
        setShowEditModal(false)
        setEditingLocation(null)
        alert('Local editado!')
        loadLocais()
      } else alert('Erro ao salvar edição')
    } catch (e) { alert('Erro de conexão') }
  }

  const responderMensagem = async (id) => {
    const resposta = prompt('Digite sua resposta:')
    if (!resposta?.trim()) return
    try {
      const res = await fetch(`${API_URL}/api/mensagens/responder/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resposta: resposta.trim() })
      })
      if (res.ok) { alert('Resposta enviada!'); loadContactMessages() }
      else alert('Erro ao enviar resposta')
    } catch (e) { alert('Erro de conexão') }
  }

  const toggleExpand = (id) => setExpandedCard(expandedCard === id ? null : id)

  const LocationCard = ({ location, cardKey, actions }) => (
    <div className={`admin-card ${expandedCard === cardKey ? 'expanded' : ''}`}>
      <div className="card-header">
        <h3>{location.nome}</h3>
        <span className={`category-badge ${location.status === 'ATIVO' ? 'approved' : location.status === 'PENDENTE' ? 'pending' : ''}`}>
          {location.status}
        </span>
      </div>
      <div className="card-info">
        <p><strong>Cidade:</strong> {location.cidade}</p>
        <p><strong>Estado:</strong> {location.estado}</p>
        <p><strong>Categoria:</strong> {location.categoria} / {location.subcategoria}</p>
        <p><strong>Enviado por:</strong> {location.enviadoPor || 'N/A'}</p>
        <p><strong>Data:</strong> {location.dataCriacao ? new Date(location.dataCriacao).toLocaleDateString('pt-BR') : 'N/A'}</p>
      </div>
      {expandedCard === cardKey && (
        <div className="card-details">
          <p><strong>Descrição:</strong> {location.descricao}</p>
          <p><strong>Horário:</strong> {location.horarioFuncionamento || 'N/A'}</p>
          <p><strong>Preço:</strong> {location.preco || 'N/A'}</p>
          <p><strong>Coordenadas:</strong> {location.coordenadas || 'N/A'}</p>
          {location.imagemUrl && <img src={location.imagemUrl} alt={location.nome} style={{width:'100%', borderRadius:'8px', marginTop:'0.5rem'}} />}
        </div>
      )}
      <div className="card-actions">
        <button className="expand-btn" onClick={() => toggleExpand(cardKey)}>
          {expandedCard === cardKey ? 'Recolher' : 'Expandir'}
        </button>
        {actions}
      </div>
    </div>
  )

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Painel Administrativo</h1>
        <div className="admin-tabs">
          <button className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>
            Pendentes ({pendingLocations.length})
          </button>
          <button className={`tab-btn ${activeTab === 'approved' ? 'active' : ''}`} onClick={() => setActiveTab('approved')}>
            Aprovados ({approvedLocations.length})
          </button>
          <button className={`tab-btn ${activeTab === 'rejected' ? 'active' : ''}`} onClick={() => setActiveTab('rejected')}>
            Rejeitados ({rejectedLocations.length})
          </button>
          <button className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            Usuários ({users.length})
          </button>
          <button className={`tab-btn ${activeTab === 'ranking' ? 'active' : ''}`} onClick={() => setActiveTab('ranking')}>
            Ranking
          </button>
          <button className={`tab-btn ${activeTab === 'addLocal' ? 'active' : ''}`} onClick={() => setActiveTab('addLocal')}>
            Adicionar Local
          </button>
          <button className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
            Mensagens ({contactMessages.filter(m => m.status === 'nova').length})
          </button>
        </div>
      </div>

      {activeTab === 'users' && (
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <button onClick={() => setShowAddUserModal(true)} style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem'}}>
            + Cadastrar Usuário
          </button>
        </div>
      )}

      <div className="admin-grid">
        {activeTab === 'addLocal' && (
          <div style={{textAlign: 'center'}}>
            <button onClick={() => navigate('/adicionar-local')} style={{background: '#28a745', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem'}}>
              + Adicionar Local
            </button>
          </div>
        )}

        {activeTab === 'ranking' && (rankings.length === 0
          ? <p style={{textAlign:'center', color:'#666'}}>Nenhuma avaliação encontrada.</p>
          : rankings.map((local, index) => (
            <div key={index} className="admin-card">
              <div className="card-header">
                <h3>#{index + 1} {local.nome}</h3>
                <span className={`category-badge ${index === 0 ? 'approved' : 'pending'}`}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index+1}º`}
                </span>
              </div>
              <div className="card-info">
                <p><strong>Média:</strong> {local.media} ({'★'.repeat(Math.floor(local.media))}{'☆'.repeat(5 - Math.floor(local.media))})</p>
                <p><strong>Total de Avaliações:</strong> {local.totalAvaliacoes}</p>
              </div>
            </div>
          ))
        )}

        {activeTab === 'pending' && (pendingLocations.length === 0
          ? <p style={{textAlign:'center', color:'#666'}}>Nenhum local pendente.</p>
          : pendingLocations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              cardKey={location.id}
              actions={<>
                <button className="expand-btn" onClick={() => { setEditingLocation({...location}); setShowEditModal(true) }}>Editar</button>
                <button className="approve-btn" onClick={() => handleApprove(location.id)}>Aprovar</button>
                <button className="reject-btn" onClick={() => handleReject(location.id)}>Rejeitar</button>
              </>}
            />
          ))
        )}

        {activeTab === 'approved' && (approvedLocations.length === 0
          ? <p style={{textAlign:'center', color:'#666'}}>Nenhum local aprovado.</p>
          : approvedLocations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              cardKey={`approved-${location.id}`}
              actions={<>
                <button className="reject-btn" onClick={() => handleDelete(location.id)}>Excluir</button>
              </>}
            />
          ))
        )}

        {activeTab === 'rejected' && (rejectedLocations.length === 0
          ? <p style={{textAlign:'center', color:'#666'}}>Nenhum local rejeitado.</p>
          : rejectedLocations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              cardKey={`rejected-${location.id}`}
              actions={<>
                <button className="approve-btn" onClick={() => handleApprove(location.id)}>Reativar</button>
                <button className="reject-btn" onClick={() => handleDelete(location.id)}>Excluir</button>
              </>}
            />
          ))
        )}

        {activeTab === 'users' && users.map((user, index) => (
          <div key={user.id || index} className="admin-card">
            <div className="card-header">
              <h3>{user.nome || 'Usuário'}</h3>
              <span className={`category-badge ${user.tipoUsuario === 'ADM' ? 'approved' : 'pending'}`}>
                {user.tipoUsuario === 'ADM' ? 'Admin' : 'Usuário'}
              </span>
            </div>
            <div className="card-info">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Cadastrado:</strong> {user.dataCadastro || 'N/A'}</p>
            </div>
            <div className="card-actions">
              <button className="reject-btn" onClick={() => handleRemoveUser(user.id)}>Excluir</button>
            </div>
          </div>
        ))}

        {activeTab === 'messages' && contactMessages.filter(m => m.status === 'nova').map(message => (
          <div key={message.id} className={`admin-card ${expandedCard === message.id ? 'expanded' : ''}`}>
            <div className="card-header">
              <h3>{message.nome}</h3>
              <span className="category-badge pending">{message.status}</span>
            </div>
            <div className="card-info">
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Assunto:</strong> {message.assunto}</p>
              <p><strong>Data:</strong> {message.data}</p>
            </div>
            {expandedCard === message.id && (
              <div className="card-details">
                <p><strong>Mensagem:</strong></p>
                <div style={{background:'#f8f9fa', padding:'1rem', borderRadius:'8px', marginTop:'0.5rem'}}>{message.mensagem}</div>
              </div>
            )}
            <div className="card-actions">
              <button className="expand-btn" onClick={() => toggleExpand(message.id)}>
                {expandedCard === message.id ? 'Recolher' : 'Ver Mensagem'}
              </button>
              <button className="approve-btn" onClick={() => responderMensagem(message.id)}>Responder</button>
            </div>
          </div>
        ))}
      </div>

      {showEditModal && editingLocation && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Editar Local</h2>
            <div className="edit-form">
              {[
                { label: 'Nome', field: 'nome', type: 'input' },
                { label: 'Cidade', field: 'cidade', type: 'input' },
                { label: 'Estado', field: 'estado', type: 'input' },
                { label: 'Horário', field: 'horarioFuncionamento', type: 'input' },
                { label: 'Preço', field: 'preco', type: 'input' },
                { label: 'Descrição', field: 'descricao', type: 'textarea' },
              ].map(({ label, field, type }) => (
                <div className="form-group" key={field}>
                  <label>{label}:</label>
                  {type === 'textarea'
                    ? <textarea value={editingLocation[field] || ''} onChange={e => setEditingLocation({...editingLocation, [field]: e.target.value})} rows="4" />
                    : <input type="text" value={editingLocation[field] || ''} onChange={e => setEditingLocation({...editingLocation, [field]: e.target.value})} />
                  }
                </div>
              ))}
              <div className="form-group">
                <label>Categoria:</label>
                <select value={editingLocation.categoria || ''} onChange={e => setEditingLocation({...editingLocation, categoria: e.target.value})}>
                  <option value="curiosidades">Curiosidades</option>
                  <option value="lugares-visitar">Lugares para Visitar</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="approve-btn" onClick={handleSaveEdit}>Salvar</button>
                <button className="reject-btn" onClick={() => setShowEditModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddUserModal && (
        <div className="modal-overlay" onClick={() => setShowAddUserModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Cadastrar Usuário</h2>
            <form onSubmit={handleAddUser} className="edit-form">
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
    </div>
  )
}

export default AdminPanel
