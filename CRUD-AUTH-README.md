# CRUD de Autenticação - GADYS

## Visão Geral
Sistema completo de autenticação com API REST, hash de senhas e JWT tokens.

## Arquivos Criados

### Backend
- `server/auth-crud.js` - API REST completa de autenticação
- `server/package.json` - Atualizado com dependências (bcryptjs, jsonwebtoken)

### Frontend
- `src/services/authService.js` - Serviço de autenticação para React
- `src/Login.jsx` - Atualizado para usar a nova API

## Funcionalidades

### CRUD Completo
- **CREATE**: Registrar usuário com hash de senha
- **READ**: Login, obter perfil, listar usuários (admin)
- **UPDATE**: Atualizar perfil, alterar senha
- **DELETE**: Excluir conta, excluir usuário (admin)

### Segurança
- Senhas com hash bcrypt (salt rounds: 10)
- JWT tokens com expiração de 24h
- Middleware de autenticação
- Verificação de permissões (admin)

## Como Usar

### 1. Iniciar o Servidor
```bash
cd server
npm start
# ou para desenvolvimento:
npm run dev
```

### 2. Endpoints da API

#### Autenticação
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/verify` - Verificar token

#### Perfil
- `GET /api/auth/profile` - Obter perfil (requer token)
- `PUT /api/auth/profile` - Atualizar perfil (requer token)
- `PUT /api/auth/change-password` - Alterar senha (requer token)
- `DELETE /api/auth/account` - Excluir conta (requer token)

#### Admin
- `GET /api/auth/users` - Listar usuários (admin)
- `DELETE /api/auth/users/:id` - Excluir usuário (admin)

### 3. Exemplo de Uso no Frontend

```javascript
import authService from './services/authService'

// Login
const result = await authService.login('user@email.com', 'senha123')
if (result.success) {
  console.log('Logado:', result.user)
}

// Registrar
const registerResult = await authService.register({
  nome: 'João Silva',
  email: 'joao@email.com',
  senha: 'senha123',
  tipoUsuario: 'usuario'
})

// Alterar senha
const changeResult = await authService.changePassword('senhaAtual', 'novaSenha')
```

### 4. Estrutura do Token JWT
```json
{
  "id": 1,
  "email": "user@email.com",
  "tipoUsuario": "usuario",
  "iat": 1640995200,
  "exp": 1641081600
}
```

### 5. Variáveis de Ambiente (.env)
```
DB_SERVER=localhost
DB_NAME=GADYS_DB
DB_USER=sa
DB_PASSWORD=sua_senha
JWT_SECRET=gadys_secret_key_2025
PORT=3001
```

## Banco de Dados

### Tabela Usuarios
```sql
CREATE TABLE Usuarios (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Senha NVARCHAR(255) NOT NULL, -- Hash bcrypt
    TipoUsuario NVARCHAR(20) DEFAULT 'usuario',
    DataCadastro DATETIME DEFAULT GETDATE(),
    UltimoAcesso DATETIME,
    TotalAcessos INT DEFAULT 0
)
```

## Segurança Implementada

1. **Hash de Senhas**: bcrypt com salt rounds 10
2. **JWT Tokens**: Expiração de 24h
3. **Middleware de Autenticação**: Verificação automática de tokens
4. **Validação de Dados**: Campos obrigatórios e formatos
5. **Controle de Acesso**: Permissões por tipo de usuário
6. **Proteção contra Duplicatas**: Email único

## Status Codes
- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `401` - Não autorizado
- `403` - Acesso negado
- `404` - Não encontrado
- `500` - Erro interno

## Próximos Passos
1. Implementar refresh tokens
2. Adicionar rate limiting
3. Implementar recuperação de senha
4. Adicionar logs de auditoria
5. Implementar 2FA (autenticação de dois fatores)