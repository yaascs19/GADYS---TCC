-- =============================================
-- GADYS - Banco de Dados
-- Alinhado com o frontend React (versão atual)
-- =============================================

-- Tabela de Usuários
-- tipo_usuario: 'usuario' | 'adm' (minúsculas, alinhado com localStorage)
CREATE TABLE Usuario (
    id            INT IDENTITY(1,1) PRIMARY KEY,
    nome          NVARCHAR(100)  NOT NULL,
    email         NVARCHAR(150)  NOT NULL UNIQUE,
    senha         NVARCHAR(255)  NOT NULL,
    tipo_usuario  VARCHAR(10)    DEFAULT 'usuario' CHECK (tipo_usuario IN ('usuario', 'adm')),
    ultimo_acesso DATETIME2,
    total_acesso  INT            DEFAULT 0,
    ip_acesso     VARCHAR(45),
    data_cadastro DATETIME2      DEFAULT GETDATE()
);

-- Tabela de Localizacao
-- categoria:    'lugares-visitar' (único tipo aceito pelo site atual)
-- subcategoria: 'Lugar Paradísíaco' | 'Monumentos' | 'Restaurantes' | 'Costume Cultural'
--               (exatamente como aparecem nos filtros do site)
CREATE TABLE Localizacao (
    id                     INT IDENTITY(1,1) PRIMARY KEY,
    nome                   NVARCHAR(200)  NOT NULL,
    descricao              VARCHAR(MAX),
    categoria              VARCHAR(20)    NOT NULL DEFAULT 'lugares-visitar'
                                          CHECK (categoria = 'lugares-visitar'),
    subcategoria           NVARCHAR(30)   NOT NULL
                                          CHECK (subcategoria IN (
                                              'Lugar Paradísíaco',
                                              'Monumentos',
                                              'Restaurantes',
                                              'Costume Cultural'
                                          )),
    cidade                 NVARCHAR(100),
    estado                 NVARCHAR(100),
    endereco               VARCHAR(MAX),
    coordenadas            NVARCHAR(50),
    horario_funcionamento  VARCHAR(MAX),
    preco                  NVARCHAR(100),
    informacoes_adicionais VARCHAR(MAX),
    imagem_url             NVARCHAR(500),
    status                 VARCHAR(10)    DEFAULT 'PENDENTE'
                                          CHECK (status IN ('ATIVO', 'INATIVO', 'PENDENTE')),
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
CREATE INDEX IX_Localizacao_status      ON Localizacao(status);
CREATE INDEX IX_Localizacao_subcategoria ON Localizacao(subcategoria);
CREATE INDEX IX_Localizacao_estado      ON Localizacao(estado);
CREATE INDEX IX_Localizacao_criado_por  ON Localizacao(criado_por);
CREATE INDEX IX_Avaliacao_localizacao   ON Avaliacao(localizacao_id);
CREATE INDEX IX_Avaliacao_usuario       ON Avaliacao(usuario_id);
CREATE INDEX IX_Comentario_localizacao  ON Comentario(localizacao_id);
CREATE INDEX IX_Usuario_email           ON Usuario(email);
GO

-- =============================================
-- VIEWS
-- =============================================

-- Locais com média de avaliação (usada pelo AdminPanel ranking)
CREATE VIEW vw_Locais AS
    SELECT
        l.*,
        ROUND(AVG(CAST(a.nota AS FLOAT)), 1) AS media_avaliacoes,
        COUNT(a.id)                           AS total_avaliacoes
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
-- Senha: hash bcrypt de 'Cun*1925'
-- Para gerar novo hash:
-- node -e "require('bcryptjs').hash('SUA_SENHA', 10).then(console.log)"
-- =============================================
INSERT INTO Usuario (nome, email, senha, tipo_usuario)
VALUES (
    'Yasmin Admin',
    'yasmincunegundes25@gmail.com',
    '$2a$10$EPxngSRv2NohULodCHRo7eklYXm3B7HFLOSzaR99VQqqGSfAdM92.',
    'adm'
);
GO

-- =============================================
-- DADOS INICIAIS - Locais do site
-- =============================================
INSERT INTO Localizacao (nome, descricao, categoria, subcategoria, cidade, estado, status, enviado_por) VALUES

-- AMAZONAS
('Teatro Amazonas',         'Majestoso teatro construído durante o período áureo da borracha, inaugurado em 1896. Símbolo da riqueza e cultura de Manaus.',                                          'lugares-visitar', 'Monumentos',        'Manaus',              'Amazonas',       'ATIVO', 'GADYS'),
('Encontro das Águas',      'Fenômeno natural onde as águas escuras do Rio Negro e as barrentas do Rio Solimões correm lado a lado por cerca de 6km sem se misturar.',                              'lugares-visitar', 'Lugar Paradísíaco', 'Manaus',              'Amazonas',       'ATIVO', 'GADYS'),
('Arquipélago de Anavilhanas', 'Maior arquipélago fluvial do mundo, com mais de 400 ilhas no Rio Negro. Rica biodiversidade amazônica.',                                                            'lugares-visitar', 'Lugar Paradísíaco', 'Novo Airão',          'Amazonas',       'ATIVO', 'GADYS'),
('Amazônico Peixaria Regional', 'Restaurante tradicional de Manaus especializado em peixes amazônicos como pirarucu, tambaqui e tucunaré.',                                                        'lugares-visitar', 'Restaurantes',      'Manaus',              'Amazonas',       'ATIVO', 'GADYS'),
('Bumbódromo',              'Arena do Festival de Parintins, palco da disputa entre os bois Garantido e Caprichoso. Símbolo da cultura amazônica.',                                                'lugares-visitar', 'Costume Cultural',  'Parintins',           'Amazonas',       'ATIVO', 'GADYS'),
('Cachoeira do Santuário',  'Uma das mais belas quedas d''água da região, com piscinas naturais ideais para banho em meio à floresta.',                                                             'lugares-visitar', 'Lugar Paradísíaco', 'Presidente Figueiredo','Amazonas',      'ATIVO', 'GADYS'),
('Coreto Peixaria & Café Regional', 'Com um menu repleto de pratos tradicionais e ingredientes frescos, cada refeição é uma celebração das riquezas da região.',                                  'lugares-visitar', 'Restaurantes',      'Manaus',              'Amazonas',       'ATIVO', 'GADYS'),
('Ponte Rio Negro',         'Impressionante ponte estaiada de 3,5 km sobre o Rio Negro, conectando Manaus a Iranduba.',                                                                            'lugares-visitar', 'Monumentos',        'Manaus',              'Amazonas',       'ATIVO', 'GADYS'),

-- RIO DE JANEIRO
('Cristo Redentor',         'Uma das Sete Maravilhas do Mundo Moderno, com 38 metros de altura no topo do Corcovado. Símbolo do Brasil no mundo.',                                                 'lugares-visitar', 'Monumentos',        'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Pão de Açúcar',           'Conjunto de dois morros com teleférico, oferecendo vista panorâmica da cidade e da Baía de Guanabara.',                                                               'lugares-visitar', 'Lugar Paradísíaco', 'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Theatro Municipal',       'Teatro histórico com arquitetura inspirada na Ópera de Paris, inaugurado em 1909.',                                                                                   'lugares-visitar', 'Monumentos',        'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Escadaria Selarón',       'Obra de arte urbana com azulejos coloridos de todo o mundo, criada pelo artista chileno Jorge Selarón.',                                                              'lugares-visitar', 'Costume Cultural',  'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Arcos da Lapa',           'Aqueduto colonial do século XVIII transformado em símbolo da boemia carioca.',                                                                                        'lugares-visitar', 'Monumentos',        'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Museu do Amanhã',         'Museu de ciências com arquitetura futurista de Santiago Calatrava na zona portuária do Rio.',                                                                         'lugares-visitar', 'Monumentos',        'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Praia de Copacabana',     'A praia mais famosa do mundo, com 4 km de areia branca e o famoso calçadão de pedras portuguesas.',                                                                   'lugares-visitar', 'Lugar Paradísíaco', 'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),
('Praia de Ipanema',        'Praia sofisticada imortalizada na música de Tom Jobim e Vinícius de Moraes.',                                                                                         'lugares-visitar', 'Lugar Paradísíaco', 'Rio de Janeiro',      'Rio de Janeiro', 'ATIVO', 'GADYS'),

-- SÃO PAULO
('MASP',                    'Museu de Arte de São Paulo, um dos mais importantes do hemisfério sul, suspenso sobre a Avenida Paulista.',                                                            'lugares-visitar', 'Monumentos',        'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),
('Teatro Municipal SP',     'Majestoso teatro inaugurado em 1911, com arquitetura inspirada na Ópera de Paris.',                                                                                   'lugares-visitar', 'Monumentos',        'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),
('Mercadão',                'O Mercado Municipal de São Paulo, famoso pelo sanduíche de mortadela e pela variedade de produtos.',                                                                  'lugares-visitar', 'Restaurantes',      'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),
('Edifício Copan',          'Ícone da arquitetura moderna brasileira projetado por Oscar Niemeyer, com sua curva característica.',                                                                 'lugares-visitar', 'Monumentos',        'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),
('Parque Ibirapuera',       'O Central Park paulistano, com museus, lagos e espaços de lazer no coração da cidade.',                                                                               'lugares-visitar', 'Lugar Paradísíaco', 'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),
('Beco do Batman',          'Famoso beco coberto de grafites e arte urbana, símbolo da cena artística alternativa paulistana.',                                                                    'lugares-visitar', 'Costume Cultural',  'São Paulo',           'São Paulo',      'ATIVO', 'GADYS'),

-- CEARÁ
('Jericoacoara',            'Vila paradisíaca com dunas, lagoas e pôr do sol considerado um dos mais bonitos do mundo.',                                                                           'lugares-visitar', 'Lugar Paradísíaco', 'Jijoca de Jericoacoara', 'Ceará',        'ATIVO', 'GADYS'),
('Canoa Quebrada',          'Famosa pelas falésias vermelhas, praias de areia branca e vida noturna animada.',                                                                                     'lugares-visitar', 'Lugar Paradísíaco', 'Aracati',             'Ceará',          'ATIVO', 'GADYS'),
('Centro Dragão do Mar',    'Centro cultural com museus, teatro, planetário e espaços de arte e entretenimento.',                                                                                  'lugares-visitar', 'Costume Cultural',  'Fortaleza',           'Ceará',          'ATIVO', 'GADYS'),
('Beach Park',              'Um dos maiores parques aquáticos da América Latina, com toboáguas e atrações para toda a família.',                                                                   'lugares-visitar', 'Lugar Paradísíaco', 'Aquiraz',             'Ceará',          'ATIVO', 'GADYS'),
('Praia do Futuro',         'A praia mais popular de Fortaleza, famosa pelas barracas de frutos do mar e águas mornas.',                                                                           'lugares-visitar', 'Lugar Paradísíaco', 'Fortaleza',           'Ceará',          'ATIVO', 'GADYS'),
('Serra de Baturité',       'Região serrana com clima ameno, cachoeiras, trilhas e plantações de café e banana.',                                                                                  'lugares-visitar', 'Lugar Paradísíaco', 'Baturité',            'Ceará',          'ATIVO', 'GADYS'),
('Chapada do Araripe',      'Patrimônio natural com fontes de água cristalina, fósseis e rica biodiversidade.',                                                                                    'lugares-visitar', 'Lugar Paradísíaco', 'Crato',               'Ceará',          'ATIVO', 'GADYS'),
('Centro Histórico de Fortaleza', 'Conjunto de edificações históricas com o Mercado Central, Catedral e Theatro José de Alencar.',                                                                'lugares-visitar', 'Monumentos',        'Fortaleza',           'Ceará',          'ATIVO', 'GADYS'),

-- PARÁ
('Alter do Chão',           'Conhecida como o Caribe Amazônico, famosa por suas praias de areia branca e águas cristalinas do Rio Tapajós.',                                                      'lugares-visitar', 'Lugar Paradísíaco', 'Santarém',            'Pará',           'ATIVO', 'GADYS'),
('Mercado Ver-o-Peso',      'Um dos mercados públicos mais antigos do Brasil, uma explosão de cores, cheiros e sabores da Amazônia.',                                                              'lugares-visitar', 'Restaurantes',      'Belém',               'Pará',           'ATIVO', 'GADYS'),
('Feliz Lusitânia',         'O marco inicial de Belém, complexo histórico que abriga o Forte do Presépio e a Casa das Onze Janelas.',                                                             'lugares-visitar', 'Monumentos',        'Belém',               'Pará',           'ATIVO', 'GADYS'),
('Ilha de Marajó',          'A maior ilha fluviomarinha do mundo, com praias selvagens e cultura marajoara única.',                                                                                'lugares-visitar', 'Lugar Paradísíaco', 'Arquipélago de Marajó','Pará',          'ATIVO', 'GADYS'),
('Mangal das Garças',       'Parque naturalístico no coração de Belém, com borboletário, viveiro de aves e mirante com vista para o rio.',                                                        'lugares-visitar', 'Lugar Paradísíaco', 'Belém',               'Pará',           'ATIVO', 'GADYS'),

-- ACRE
('Parque Estadual Chandless','Unidade de conservação com 695 mil hectares de floresta amazônica intocada na fronteira com o Peru.',                                                                'lugares-visitar', 'Lugar Paradísíaco', 'Santa Rosa do Purus', 'Acre',           'ATIVO', 'GADYS'),
('Centro Histórico de Rio Branco', 'Conjunto histórico com o Palácio Rio Branco, Museu da Borracha e Calçadão da Gameleira às margens do Rio Acre.',                                             'lugares-visitar', 'Monumentos',        'Rio Branco',          'Acre',           'ATIVO', 'GADYS'),

-- AMAPÁ
('Fortaleza de São José de Macapá', 'Maior fortaleza do Brasil colonial, construída entre 1764 e 1782. Marco histórico da ocupação portuguesa no Amapá.',                                        'lugares-visitar', 'Monumentos',        'Macapá',              'Amapá',          'ATIVO', 'GADYS'),

-- RONDÔNIA
('Ferrovia Madeira-Mamoré', 'Conhecida como "Ferrovia do Diabo", construída entre 1907 e 1912. Hoje é patrimônio histórico com museu em Porto Velho.',                                            'lugares-visitar', 'Monumentos',        'Porto Velho',         'Rondônia',       'ATIVO', 'GADYS'),

-- RORAIMA
('Monte Roraima',           'Tepui com 2.875 metros de altitude na fronteira entre Brasil, Venezuela e Guiana. Ponto mais alto do Brasil.',                                                        'lugares-visitar', 'Lugar Paradísíaco', 'Uiramutã',            'Roraima',        'ATIVO', 'GADYS'),

-- TOCANTINS
('Jalapão',                 'Região de cerrado com dunas, fervedouros, cachoeiras e rios de águas cristalinas. Um dos destinos ecoturísticos mais belos do Brasil.',                              'lugares-visitar', 'Lugar Paradísíaco', 'Mateiros',            'Tocantins',      'ATIVO', 'GADYS'),

-- MINAS GERAIS
('Ouro Preto',              'Cidade histórica Patrimônio Mundial da UNESCO, com arquitetura barroca do século XVIII e museus de arte sacra.',                                                      'lugares-visitar', 'Monumentos',        'Ouro Preto',          'Minas Gerais',   'ATIVO', 'GADYS'),
('Instituto Inhotim',       'Maior museu de arte contemporânea a céu aberto do mundo, com obras de artistas internacionais em jardins botânicos de 140 hectares.',                                'lugares-visitar', 'Monumentos',        'Brumadinho',          'Minas Gerais',   'ATIVO', 'GADYS'),

-- ESPÍRITO SANTO
('Pedra Azul',              'Monólito de granito com 1.822 metros de altitude no Parque Estadual da Pedra Azul. Muda de cor ao longo do dia.',                                                    'lugares-visitar', 'Lugar Paradísíaco', 'Domingos Martins',    'Espírito Santo', 'ATIVO', 'GADYS'),
('Guarapari',               'Cidade litorânea famosa pelas praias de areia monazítica com propriedades terapêuticas e águas cristalinas.',                                                        'lugares-visitar', 'Lugar Paradísíaco', 'Guarapari',           'Espírito Santo', 'ATIVO', 'GADYS');
GO

-- =============================================
-- VERIFICAÇÃO
-- =============================================
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';
SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Localizacao';
SELECT COUNT(*) AS total_locais FROM Localizacao;
