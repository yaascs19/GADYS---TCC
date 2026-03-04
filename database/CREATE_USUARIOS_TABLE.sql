-- Criar tabela de usuários para autenticação
CREATE TABLE Usuarios (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Senha NVARCHAR(255) NOT NULL,
    TipoUsuario NVARCHAR(20) DEFAULT 'usuario' CHECK (TipoUsuario IN ('usuario', 'adm')),
    DataCadastro DATETIME DEFAULT GETDATE(),
    UltimoAcesso DATETIME NULL,
    TotalAcessos INT DEFAULT 0
);

-- Inserir usuário admin padrão (senha: admin123)
INSERT INTO Usuarios (Nome, Email, Senha, TipoUsuario) 
VALUES ('Admin', 'admin@gadys.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'adm');