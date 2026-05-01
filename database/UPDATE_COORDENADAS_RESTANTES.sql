-- Coordenadas dos 22 locais restantes
UPDATE Localizacao SET coordenadas = '-2.619722,-60.619444'  WHERE id = 5;  -- Bumbódromo, Parintins
UPDATE Localizacao SET coordenadas = '-1.977778,-60.021667'  WHERE id = 6;  -- Cachoeira do Santuário
UPDATE Localizacao SET coordenadas = '-3.143056,-59.908333'  WHERE id = 8;  -- Ponte Rio Negro, Manaus
UPDATE Localizacao SET coordenadas = '-22.912778,-43.180556' WHERE id = 13; -- Arcos da Lapa, RJ
UPDATE Localizacao SET coordenadas = '-23.587500,-46.657222' WHERE id = 21; -- Parque Ibirapuera, SP
UPDATE Localizacao SET coordenadas = '-3.741667,-38.476944'  WHERE id = 27; -- Praia do Futuro, Fortaleza
UPDATE Localizacao SET coordenadas = '-7.233333,-39.416667'  WHERE id = 29; -- Chapada do Araripe, Crato
UPDATE Localizacao SET coordenadas = '-2.503333,-54.730556'  WHERE id = 31; -- Alter do Chão, Santarém
UPDATE Localizacao SET coordenadas = '-1.453333,-48.503056'  WHERE id = 32; -- Mercado Ver-o-Peso, Belém
UPDATE Localizacao SET coordenadas = '-1.455278,-48.501944'  WHERE id = 33; -- Feliz Lusitânia, Belém
UPDATE Localizacao SET coordenadas = '-0.833333,-49.666667'  WHERE id = 34; -- Ilha de Marajó
UPDATE Localizacao SET coordenadas = '-1.446944,-48.504167'  WHERE id = 35; -- Mangal das Garças, Belém
UPDATE Localizacao SET coordenadas = '-9.166667,-70.666667'  WHERE id = 36; -- Parque Chandless
UPDATE Localizacao SET coordenadas = '-9.975000,-67.824722'  WHERE id = 37; -- Centro Histórico Rio Branco
UPDATE Localizacao SET coordenadas = '0.038889,-51.066667'   WHERE id = 38; -- Fortaleza São José, Macapá
UPDATE Localizacao SET coordenadas = '-8.761944,-63.900278'  WHERE id = 39; -- Ferrovia Madeira-Mamoré
UPDATE Localizacao SET coordenadas = '5.143611,-60.762222'   WHERE id = 40; -- Monte Roraima
UPDATE Localizacao SET coordenadas = '-10.366667,-46.883333' WHERE id = 41; -- Jalapão, Mateiros
UPDATE Localizacao SET coordenadas = '-20.385278,-43.503611' WHERE id = 42; -- Ouro Preto
UPDATE Localizacao SET coordenadas = '-20.133333,-44.416667' WHERE id = 43; -- Instituto Inhotim
UPDATE Localizacao SET coordenadas = '-20.366667,-41.000000' WHERE id = 44; -- Pedra Azul, Domingos Martins
UPDATE Localizacao SET coordenadas = '-20.671944,-40.499722' WHERE id = 45; -- Guarapari

-- Verificar
SELECT id, nome, coordenadas FROM Localizacao WHERE id IN (5,6,8,13,21,27,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45);
