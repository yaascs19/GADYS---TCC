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
