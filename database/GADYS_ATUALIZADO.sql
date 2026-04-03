-- =============================================
-- GADYS - Banco de Dados Atualizado
-- Alinhado com o frontend React
-- =============================================

-- Tabela de Usuários
CREATE TABLE Usuario (
    id            INT IDENTITY(1,1) PRIMARY KEY,
    nome          NVARCHAR(100)  NOT NULL,
    email         NVARCHAR(150)  NOT NULL UNIQUE,
    senha         NVARCHAR(255)  NOT NULL,
    tipo_usuario  VARCHAR(10)    DEFAULT 'USUARIO' CHECK (tipo_usuario IN ('USUARIO', 'ADM')),
    ultimo_acesso DATETIME2,
    total_acesso  INT            DEFAULT 0,
    ip_acesso     VARCHAR(45),
    data_cadastro DATETIME2      DEFAULT GETDATE()
);

-- Tabela de Localizacao
-- categoria:    'curiosidades' | 'lugares-visitar'
-- subcategoria: 'gastronomia' | 'cultura' | 'natureza' | 'monumentos'
CREATE TABLE Localizacao (
    id                     INT IDENTITY(1,1) PRIMARY KEY,
    nome                   NVARCHAR(200)  NOT NULL,
    descricao              VARCHAR(MAX),
    categoria              VARCHAR(20)    NOT NULL CHECK (categoria IN ('curiosidades', 'lugares-visitar')),
    subcategoria           VARCHAR(20)    NOT NULL CHECK (subcategoria IN ('gastronomia', 'cultura', 'natureza', 'monumentos')),
    cidade                 NVARCHAR(100),
    estado                 NVARCHAR(100),
    endereco               VARCHAR(MAX),
    coordenadas            NVARCHAR(50),
    horario_funcionamento  VARCHAR(MAX),
    preco                  NVARCHAR(100),
    informacoes_adicionais VARCHAR(MAX),
    imagem_url             NVARCHAR(500),
    status                 VARCHAR(10)    DEFAULT 'PENDENTE' CHECK (status IN ('ATIVO', 'INATIVO', 'PENDENTE')),
    enviado_por            NVARCHAR(100),
    criado_por             INT,
    data_criacao           DATETIME2      DEFAULT GETDATE(),
    data_aprovacao         DATETIME2,
    aprovado_por           INT,

    FOREIGN KEY (criado_por)   REFERENCES Usuario(id) ON DELETE SET NULL,
    FOREIGN KEY (aprovado_por) REFERENCES Usuario(id) ON DELETE NO ACTION
);

-- Tabela de Avaliações
CREATE TABLE Avaliacao (
    id              INT IDENTITY(1,1) PRIMARY KEY,
    localizacao_id  INT  NOT NULL,
    usuario_id      INT  NOT NULL,
    nota            INT  NOT NULL CHECK (nota BETWEEN 1 AND 5),
    data_avaliacao  DATETIME2 DEFAULT GETDATE(),

    FOREIGN KEY (localizacao_id) REFERENCES Localizacao(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id)     REFERENCES Usuario(id)     ON DELETE CASCADE,
    UNIQUE (localizacao_id, usuario_id)
);

-- Tabela de Comentários
CREATE TABLE Comentario (
    id               INT IDENTITY(1,1) PRIMARY KEY,
    localizacao_id   INT          NOT NULL,
    usuario_id       INT          NOT NULL,
    texto            VARCHAR(MAX) NOT NULL,
    data_comentario  DATETIME2    DEFAULT GETDATE(),

    FOREIGN KEY (localizacao_id) REFERENCES Localizacao(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id)     REFERENCES Usuario(id)     ON DELETE CASCADE
);

-- Tabela de Mensagens de Contato
CREATE TABLE MensagemContato (
    id        INT IDENTITY(1,1) PRIMARY KEY,
    nome      NVARCHAR(100) NOT NULL,
    email     NVARCHAR(150) NOT NULL,
    assunto   NVARCHAR(200),
    mensagem  VARCHAR(MAX)  NOT NULL,
    resposta  VARCHAR(MAX),
    status    VARCHAR(15)   DEFAULT 'nova' CHECK (status IN ('nova', 'respondida')),
    data      DATETIME2     DEFAULT GETDATE()
);

-- =============================================
-- ÍNDICES
-- =============================================
CREATE INDEX IX_Localizacao_status       ON Localizacao(status);
CREATE INDEX IX_Localizacao_categoria    ON Localizacao(subcategoria);
CREATE INDEX IX_Localizacao_criado_por   ON Localizacao(criado_por);
CREATE INDEX IX_Avaliacao_localizacao    ON Avaliacao(localizacao_id);
CREATE INDEX IX_Avaliacao_usuario        ON Avaliacao(usuario_id);
CREATE INDEX IX_Comentario_localizacao   ON Comentario(localizacao_id);
CREATE INDEX IX_Usuario_email            ON Usuario(email);
GO

-- =============================================
-- VIEWS
-- =============================================

-- Locais com média de avaliação
CREATE VIEW vw_Locais AS
    SELECT
        l.*,
        AVG(CAST(a.nota AS FLOAT)) AS media_avaliacoes,
        COUNT(a.id)                AS total_avaliacoes
    FROM Localizacao l
    LEFT JOIN Avaliacao a ON a.localizacao_id = l.id
    GROUP BY
        l.id, l.nome, l.descricao, l.categoria, l.subcategoria,
        l.cidade, l.estado, l.endereco, l.coordenadas,
        l.horario_funcionamento, l.preco, l.informacoes_adicionais,
        l.imagem_url, l.status, l.enviado_por, l.criado_por,
        l.data_criacao, l.data_aprovacao, l.aprovado_por;
GO

-- =============================================
-- ADMIN PADRÃO
-- Senha gerada com bcrypt (hash de 'Cun*1925')
-- Para gerar outro hash: node -e "require('bcryptjs').hash('SUA_SENHA', 10).then(console.log)"
-- =============================================
INSERT INTO Usuario (nome, email, senha, tipo_usuario)
VALUES (
    'Yasmin Admin',
    'yasmincunegundes25@gmail.com',
    '$2a$10$EPxngSRv2NohULodCHRo7eklYXm3B7HFLOSzaR99VQqqGSfAdM92.',
    'ADM'
);
GO
