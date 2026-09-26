-- =============================================
-- GADYS - Coordenadas dos novos locais 2025
-- =============================================

-- PIAUÍ
UPDATE Localizacao SET coordenadas = '-8.8278,-42.3522' WHERE nome = 'Serra da Capivara';
UPDATE Localizacao SET coordenadas = '-2.9167,-41.7833' WHERE nome = 'Delta do Parnaíba';
UPDATE Localizacao SET coordenadas = '-4.1000,-41.7000' WHERE nome = 'Parque Nacional Sete Cidades';
UPDATE Localizacao SET coordenadas = '-2.8833,-41.6667' WHERE nome = 'Luís Correia';
UPDATE Localizacao SET coordenadas = '-8.5833,-41.4167' WHERE nome = 'Pedra do Castelo';
UPDATE Localizacao SET coordenadas = '-5.0892,-42.8019' WHERE nome = 'Centro Histórico de Teresina';

-- RIO GRANDE DO NORTE
UPDATE Localizacao SET coordenadas = '-5.6333,-35.2000' WHERE nome = 'Dunas de Genipabu';
UPDATE Localizacao SET coordenadas = '-6.2167,-35.0500' WHERE nome = 'Praia de Pipa';
UPDATE Localizacao SET coordenadas = '-5.4833,-35.2667' WHERE nome = 'Maracajaú';
UPDATE Localizacao SET coordenadas = '-5.8167,-35.2167' WHERE nome = 'Parque das Dunas';
UPDATE Localizacao SET coordenadas = '-5.7639,-35.2058' WHERE nome = 'Forte dos Reis Magos';
UPDATE Localizacao SET coordenadas = '-6.3667,-35.0167' WHERE nome = 'Baía Formosa';

-- RIO GRANDE DO SUL
UPDATE Localizacao SET coordenadas = '-29.3783,-50.8769' WHERE nome = 'Gramado';
UPDATE Localizacao SET coordenadas = '-29.0667,-50.0833' WHERE nome = 'Cânion Itaimbezinho';
UPDATE Localizacao SET coordenadas = '-29.1700,-51.5186' WHERE nome = 'Bento Gonçalves';
UPDATE Localizacao SET coordenadas = '-30.0346,-51.2177' WHERE nome = 'Porto Alegre';
UPDATE Localizacao SET coordenadas = '-29.3369,-49.7306' WHERE nome = 'Torres';
UPDATE Localizacao SET coordenadas = '-28.5597,-54.5561' WHERE nome = 'São Miguel das Missões';

-- SANTA CATARINA
UPDATE Localizacao SET coordenadas = '-27.5954,-48.5480' WHERE nome = 'Florianópolis';
UPDATE Localizacao SET coordenadas = '-26.9906,-48.6348' WHERE nome = 'Balneário Camboriú';
UPDATE Localizacao SET coordenadas = '-27.1394,-48.5158' WHERE nome = 'Bombinhas';
UPDATE Localizacao SET coordenadas = '-26.9195,-49.0661' WHERE nome = 'Blumenau e Oktoberfest';
UPDATE Localizacao SET coordenadas = '-28.2950,-49.9317' WHERE nome = 'São Joaquim';
UPDATE Localizacao SET coordenadas = '-26.3044,-48.8487' WHERE nome = 'Joinville';

-- SÃO PAULO
UPDATE Localizacao SET coordenadas = '-23.5614,-46.6558' WHERE nome = 'MASP';

-- SERGIPE
UPDATE Localizacao SET coordenadas = '-9.6500,-37.7833' WHERE nome = 'Cânion do Xingó';

-- RORAIMA
UPDATE Localizacao SET coordenadas = '5.1439,-61.0000'  WHERE nome = 'Monte Roraima';
UPDATE Localizacao SET coordenadas = '5.1000,-60.9000'  WHERE nome = 'Parque Nacional do Monte Roraima';
UPDATE Localizacao SET coordenadas = '2.8167,-60.6667'  WHERE nome = 'Lavrado de Roraima';

-- RONDÔNIA
UPDATE Localizacao SET coordenadas = '-8.7619,-63.9039' WHERE nome = 'Museu Estrada de Ferro Madeira-Mamoré';
UPDATE Localizacao SET coordenadas = '-8.7500,-63.4333' WHERE nome = 'Lago de Samuel';
UPDATE Localizacao SET coordenadas = '-8.7612,-63.9004' WHERE nome = 'Catedral Nossa Senhora das Graças';
UPDATE Localizacao SET coordenadas = '-10.4500,-62.0000' WHERE nome = 'Reserva Biológica do Jaru';

-- TOCANTINS
UPDATE Localizacao SET coordenadas = '-10.3500,-46.6167' WHERE nome = 'Parque Estadual do Jalapão';
UPDATE Localizacao SET coordenadas = '-11.5000,-50.5000' WHERE nome = 'Ilha do Bananal';
UPDATE Localizacao SET coordenadas = '-10.1689,-48.3317' WHERE nome = 'Orla de Palmas';
UPDATE Localizacao SET coordenadas = '-10.1847,-48.3339' WHERE nome = 'Catedral Nossa Senhora da Assunção';
UPDATE Localizacao SET coordenadas = '-10.2500,-48.1667' WHERE nome = 'Cachoeira da Serra do Lajeado';
UPDATE Localizacao SET coordenadas = '-10.1689,-48.3317' WHERE nome = 'Feira Gastronômica de Palmas';

-- VERIFICAR
SELECT id, nome, estado, coordenadas
FROM Localizacao
WHERE coordenadas IS NOT NULL AND enviado_por = 'GADYS'
ORDER BY estado, nome;
