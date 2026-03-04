-- GADYS - Banco de Dados Compatível com Java Spring Boot
-- Criado para ser 100% compatível com as entidades JPA

-- Criar banco de dados
CREATE DATABASE GADYS_DB;
USE GADYS_DB;

-- Tabela de Estados
CREATE TABLE estados (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    sigla NVARCHAR(2) NOT NULL,
    regiao NVARCHAR(50)
);

-- Tabela de Cidades
CREATE TABLE cidades (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    estado_id INT,
    populacao INT,
    FOREIGN KEY (estado_id) REFERENCES estados(id)
);

-- Tabela de Categorias
CREATE TABLE categorias (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(50) NOT NULL,
    icone NVARCHAR(10),
    cor NVARCHAR(7)
);

-- Tabela de Usuários
CREATE TABLE usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    email NVARCHAR(150) UNIQUE NOT NULL,
    senha NVARCHAR(255) NOT NULL,
    tipo_usuario NVARCHAR(20) CHECK (tipo_usuario IN ('ADMIN', 'USUARIO')) DEFAULT 'USUARIO',
    data_cadastro DATETIME2 DEFAULT GETDATE(),
    ativo BIT DEFAULT 1
);

-- Tabela de Locais (compatível com Java)
CREATE TABLE locais (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(200) NOT NULL,
    descricao NTEXT,
    cidade_id INT,
    categoria_id INT,
    endereco NTEXT,
    coordenadas NVARCHAR(50),
    horario_funcionamento NTEXT,
    preco NVARCHAR(100),
    informacoes_adicionais NTEXT,
    imagem_url NVARCHAR(500),
    status NVARCHAR(20) CHECK (status IN ('ATIVO', 'INATIVO', 'PENDENTE')) DEFAULT 'ATIVO',
    criado_por INT,
    data_criacao DATETIME2 DEFAULT GETDATE(),
    data_aprovacao DATETIME2,
    aprovado_por INT,
    FOREIGN KEY (cidade_id) REFERENCES cidades(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    FOREIGN KEY (criado_por) REFERENCES usuarios(id),
    FOREIGN KEY (aprovado_por) REFERENCES usuarios(id)
);

-- Tabela de Avaliações
CREATE TABLE avaliacoes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    local_id INT,
    usuario_id INT,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario NTEXT,
    data_avaliacao DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (local_id) REFERENCES locais(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de Comentários
CREATE TABLE comentarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    local_id INT,
    usuario_id INT,
    texto NTEXT NOT NULL,
    data_comentario DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (local_id) REFERENCES locais(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserir Estados
INSERT INTO estados (nome, sigla, regiao) VALUES 
(N'Amazonas', N'AM', N'Norte'),
(N'São Paulo', N'SP', N'Sudeste'),
(N'Rio de Janeiro', N'RJ', N'Sudeste'),
(N'Bahia', N'BA', N'Nordeste'),
(N'Minas Gerais', N'MG', N'Sudeste');

-- Inserir Cidades
INSERT INTO cidades (nome, estado_id, populacao) VALUES 
(N'Manaus', 1, 2219580),
(N'São Paulo', 2, 12325232),
(N'Rio de Janeiro', 3, 6748000),
(N'Salvador', 4, 2886698),
(N'Belo Horizonte', 5, 2521564);

-- Inserir Categorias
INSERT INTO categorias (nome, icone, cor) VALUES 
(N'Monumentos', N'🏛️', N'#8b4513'),
(N'Natureza', N'🌳', N'#228b22'),
(N'Gastronomia', N'🍽️', N'#ff8c00'),
(N'Cultura', N'🎨', N'#800080'),
(N'Praias', N'🏖️', N'#4169e1'),
(N'Religioso', N'⛪', N'#daa520');

-- Inserir Usuário Admin
INSERT INTO usuarios (nome, email, senha, tipo_usuario) VALUES 
(N'Administrador', N'admin@gadys.com', N'$2a$10$N9qo8uLOickgx2ZMRZoMye', N'ADMIN');

-- Inserir Locais de Exemplo
INSERT INTO locais (nome, descricao, cidade_id, categoria_id, horario_funcionamento, preco, informacoes_adicionais, status, criado_por) VALUES 
(N'Teatro Amazonas', N'Majestoso teatro da época áurea da borracha na Amazônia', 1, 1, N'Ter-Dom: 9h-17h', N'R$ 20', N'Visitas guiadas disponíveis', N'ATIVO', 1),
(N'Encontro das Águas', N'Fenômeno natural onde Rio Negro e Solimões se encontram', 1, 2, N'24 horas', N'Gratuito', N'Melhor visualização de barco', N'ATIVO', 1),
(N'Açaí na Tigela', N'Superfruit amazônico servido gelado', 1, 3, N'6h-22h', N'R$ 8-15', N'Energia pura da Amazônia', N'ATIVO', 1),
(N'Festival de Parintins', N'Disputa folclórica entre bois Garantido e Caprichoso', 1, 4, N'Junho', N'R$ 50-200', N'Maior festival folclórico do Brasil', N'ATIVO', 1),
(N'Catedral da Sé', N'Imponente catedral gótica no marco zero de São Paulo', 2, 1, N'8h-19h', N'Gratuito', N'Torres de 92 metros de altura', N'ATIVO', 1);

-- Criar índices para performance
CREATE INDEX IX_locais_cidade_id ON locais(cidade_id);
CREATE INDEX IX_locais_categoria_id ON locais(categoria_id);
CREATE INDEX IX_locais_status ON locais(status);
CREATE INDEX IX_avaliacoes_local_id ON avaliacoes(local_id);
CREATE INDEX IX_comentarios_local_id ON comentarios(local_id);