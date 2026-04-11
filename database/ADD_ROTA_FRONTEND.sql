-- =============================================
-- Adiciona coluna rota_frontend na Localizacao
-- =============================================
ALTER TABLE Localizacao ADD rota_frontend NVARCHAR(200) NULL;
GO

-- Atualiza a view para incluir a nova coluna
ALTER VIEW vw_Locais AS
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
        l.imagem_url, l.rota_frontend, l.status, l.enviado_por, l.criado_por,
        l.data_criacao, l.data_aprovacao, l.aprovado_por;
GO

-- =============================================
-- Popular rota_frontend dos locais GADYS
-- =============================================

-- AMAZONAS
UPDATE Localizacao SET rota_frontend = '/teatro-amazonas'        WHERE nome = 'Teatro Amazonas'                AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/encontro-aguas'         WHERE nome = 'Encontro das Águas'             AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/arquipelago-anavilhanas' WHERE nome = 'Arquipélago de Anavilhanas'   AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/amazonico-peixaria'     WHERE nome = 'Amazônico Peixaria Regional'   AND enviado_por = 'GADYS';

-- CEARÁ
UPDATE Localizacao SET rota_frontend = '/ceara/jericoacoara'              WHERE nome = 'Jericoacoara'                   AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/canoa-quebrada'            WHERE nome = 'Canoa Quebrada'                 AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/dragao-do-mar'             WHERE nome = 'Centro Dragão do Mar'           AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/beach-park'                WHERE nome = 'Beach Park'                     AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/praia-do-futuro'           WHERE nome = 'Praia do Futuro'                AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/serra-de-baturite'         WHERE nome = 'Serra de Baturité'              AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/chapada-do-araripe'        WHERE nome = 'Chapada do Araripe'             AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/ceara/centro-historico-fortaleza' WHERE nome = 'Centro Histórico de Fortaleza' AND enviado_por = 'GADYS';

-- ACRE
UPDATE Localizacao SET rota_frontend = '/acre/parque-chandless'  WHERE nome = 'Parque Estadual Chandless'          AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/acre/centro-historico'  WHERE nome = 'Centro Histórico de Rio Branco'     AND enviado_por = 'GADYS';

-- AMAPÁ
UPDATE Localizacao SET rota_frontend = '/amapa/fortaleza-sao-jose'       WHERE nome = 'Fortaleza de São José de Macapá' AND enviado_por = 'GADYS';

-- RONDÔNIA
UPDATE Localizacao SET rota_frontend = '/rondonia/ferrovia-madeira-mamore' WHERE nome = 'Ferrovia Madeira-Mamoré'       AND enviado_por = 'GADYS';

-- RORAIMA
UPDATE Localizacao SET rota_frontend = '/roraima/monte-roraima'  WHERE nome = 'Monte Roraima'                     AND enviado_por = 'GADYS';

-- TOCANTINS
UPDATE Localizacao SET rota_frontend = '/tocantins/jalapao'      WHERE nome = 'Jalapão'                           AND enviado_por = 'GADYS';

-- MINAS GERAIS
UPDATE Localizacao SET rota_frontend = '/mg/ouro-preto'          WHERE nome = 'Ouro Preto'                        AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/mg/inhotim'             WHERE nome = 'Instituto Inhotim'                  AND enviado_por = 'GADYS';

-- ESPÍRITO SANTO
UPDATE Localizacao SET rota_frontend = '/es/pedra-azul'          WHERE nome = 'Pedra Azul'                        AND enviado_por = 'GADYS';
UPDATE Localizacao SET rota_frontend = '/es/guarapari'           WHERE nome = 'Guarapari'                         AND enviado_por = 'GADYS';

-- Verificar resultado
SELECT id, nome, rota_frontend FROM Localizacao WHERE enviado_por = 'GADYS' ORDER BY id;
