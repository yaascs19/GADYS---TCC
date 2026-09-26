-- =============================================
-- GADYS - Limpeza de duplicados (SQL Server)
-- =============================================

-- 1. VERIFICAR duplicados antes de deletar
SELECT nome, estado, COUNT(*) AS qtd, MIN(id) AS id_manter, MAX(id) AS id_deletar
FROM Localizacao
WHERE nome IN (
    'Serra da Capivara','Delta do Parnaíba','Parque Nacional Sete Cidades',
    'Luís Correia','Pedra do Castelo','Centro Histórico de Teresina',
    'Dunas de Genipabu','Praia de Pipa','Maracajaú','Parque das Dunas',
    'Forte dos Reis Magos','Baía Formosa',
    'Gramado','Cânion Itaimbezinho','Bento Gonçalves','Porto Alegre',
    'Torres','São Miguel das Missões',
    'Florianópolis','Balneário Camboriú','Bombinhas','Blumenau',
    'São Joaquim','Joinville',
    'MASP',
    'Cânion do Xingó',
    'Monte Roraima','Parque Nacional do Monte Roraima','Lavrado de Roraima',
    'Museu Estrada de Ferro Madeira-Mamoré','Lago de Samuel',
    'Catedral Nossa Senhora das Graças','Reserva Biológica do Jaru',
    'Ilha do Bananal','Orla de Palmas','Catedral Nossa Senhora da Assunção',
    'Cachoeira da Serra do Lajeado','Feira Gastronômica de Palmas'
)
GROUP BY nome, estado
ORDER BY qtd DESC, estado, nome;

-- =============================================
-- 2. DELETAR duplicados (mantém o menor id)
-- =============================================
;WITH duplicados AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY nome ORDER BY id ASC) AS rn
    FROM Localizacao
    WHERE nome IN (
        'Serra da Capivara','Delta do Parnaíba','Parque Nacional Sete Cidades',
        'Luís Correia','Pedra do Castelo','Centro Histórico de Teresina',
        'Dunas de Genipabu','Praia de Pipa','Maracajaú','Parque das Dunas',
        'Forte dos Reis Magos','Baía Formosa',
        'Gramado','Cânion Itaimbezinho','Bento Gonçalves','Porto Alegre',
        'Torres','São Miguel das Missões',
        'Florianópolis','Balneário Camboriú','Bombinhas','Blumenau',
        'São Joaquim','Joinville',
        'MASP',
        'Cânion do Xingó',
        'Monte Roraima','Parque Nacional do Monte Roraima','Lavrado de Roraima',
        'Museu Estrada de Ferro Madeira-Mamoré','Lago de Samuel',
        'Catedral Nossa Senhora das Graças','Reserva Biológica do Jaru',
        'Ilha do Bananal','Orla de Palmas','Catedral Nossa Senhora da Assunção',
        'Cachoeira da Serra do Lajeado','Feira Gastronômica de Palmas'
    )
)
DELETE FROM duplicados WHERE rn > 1;

-- =============================================
-- 3. GARANTIR rota_frontend nos registros originais
-- =============================================
UPDATE l SET l.rota_frontend = m.rota
FROM Localizacao l
INNER JOIN (VALUES
    ('Serra da Capivara',                    '/pi/serra-da-capivara'),
    ('Delta do Parnaíba',                    '/pi/delta-do-parnaiba'),
    ('Parque Nacional Sete Cidades',         '/pi/sete-cidades'),
    ('Luís Correia',                         '/pi/luis-correia'),
    ('Pedra do Castelo',                     '/pi/pedra-do-castelo'),
    ('Centro Histórico de Teresina',         '/pi/teresina-centro'),
    ('Dunas de Genipabu',                    '/rn/genipabu'),
    ('Praia de Pipa',                        '/rn/pipa'),
    ('Maracajaú',                            '/rn/maracajau'),
    ('Parque das Dunas',                     '/rn/parque-das-dunas'),
    ('Forte dos Reis Magos',                 '/rn/forte-dos-reis-magos'),
    ('Baía Formosa',                         '/rn/baia-formosa'),
    ('Gramado',                              '/rs/gramado'),
    ('Cânion Itaimbezinho',                  '/rs/canion-itaimbezinho'),
    ('Bento Gonçalves',                      '/rs/bento-goncalves'),
    ('Porto Alegre',                         '/rs/porto-alegre'),
    ('Torres',                               '/rs/torres'),
    ('São Miguel das Missões',               '/rs/sao-miguel-das-missoes'),
    ('Florianópolis',                        '/sc/florianopolis'),
    ('Balneário Camboriú',                   '/sc/balneario-camboriu'),
    ('Bombinhas',                            '/sc/bombinhas'),
    ('Blumenau',                             '/sc/blumenau'),
    ('São Joaquim',                          '/sc/sao-joaquim'),
    ('Joinville',                            '/sc/joinville'),
    ('MASP',                                 '/sp/masp'),
    ('Cânion do Xingó',                      '/sergipe/canion-xingo'),
    ('Monte Roraima',                        '/roraima/monte-roraima'),
    ('Parque Nacional do Monte Roraima',     '/roraima/parque-monte-roraima'),
    ('Lavrado de Roraima',                   '/roraima/lavrado'),
    ('Museu Estrada de Ferro Madeira-Mamoré','/rondonia/ferrovia-madeira-mamore'),
    ('Lago de Samuel',                       '/rondonia/lago-samuel'),
    ('Catedral Nossa Senhora das Graças',    '/rondonia/catedral-porto-velho'),
    ('Reserva Biológica do Jaru',            '/rondonia/reserva-jaru'),
    ('Ilha do Bananal',                      '/tocantins/ilha-do-bananal'),
    ('Orla de Palmas',                       '/tocantins/orla-de-palmas'),
    ('Catedral Nossa Senhora da Assunção',   '/tocantins/catedral-palmas'),
    ('Cachoeira da Serra do Lajeado',        '/tocantins/serra-lajeado'),
    ('Feira Gastronômica de Palmas',         '/tocantins/feira-gastronomica')
) AS m(nome, rota) ON l.nome = m.nome;

-- Jalapão separado (pode não existir ainda)
UPDATE Localizacao SET rota_frontend = '/tocantins/jalapao' WHERE nome = 'Jalapão';

-- =============================================
-- 4. VERIFICAR resultado final
-- =============================================
SELECT id, nome, estado, rota_frontend
FROM Localizacao
WHERE nome IN (
    'Serra da Capivara','Delta do Parnaíba','Parque Nacional Sete Cidades',
    'Luís Correia','Pedra do Castelo','Centro Histórico de Teresina',
    'Dunas de Genipabu','Praia de Pipa','Maracajaú','Parque das Dunas',
    'Forte dos Reis Magos','Baía Formosa',
    'Gramado','Cânion Itaimbezinho','Bento Gonçalves','Porto Alegre',
    'Torres','São Miguel das Missões',
    'Florianópolis','Balneário Camboriú','Bombinhas','Blumenau',
    'São Joaquim','Joinville',
    'MASP',
    'Cânion do Xingó',
    'Monte Roraima','Parque Nacional do Monte Roraima','Lavrado de Roraima',
    'Museu Estrada de Ferro Madeira-Mamoré','Lago de Samuel',
    'Catedral Nossa Senhora das Graças','Reserva Biológica do Jaru',
    'Jalapão','Ilha do Bananal','Orla de Palmas','Catedral Nossa Senhora da Assunção',
    'Cachoeira da Serra do Lajeado','Feira Gastronômica de Palmas'
)
ORDER BY estado, nome;
