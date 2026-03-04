-- =============================================
-- ESTADOS RESTANTES DO BRASIL - DADOS COMPLETOS
-- Acre, Alagoas, Amapá, Distrito Federal, Espírito Santo, Maranhão, Paraíba, Piauí, Rio Grande do Norte, Rondônia, Roraima, Sergipe, Tocantins
-- =============================================

-- Mais cidades para estados restantes
INSERT INTO Cidades (Nome, EstadoID) VALUES 
-- Acre (1)
(N'Rio Branco', 1),
(N'Cruzeiro do Sul', 1),
-- Alagoas (2)
(N'Maceió', 2),
(N'Penedo', 2),
-- Amapá (3)
(N'Macapá', 3),
(N'Santana', 3),
-- Distrito Federal (7)
(N'Brasília', 7),
-- Espírito Santo (8)
(N'Vitória', 8),
(N'Guarapari', 8),
-- Maranhão (10)
(N'São Luís', 10),
(N'Barreirinhas', 10),
-- Paraíba (15)
(N'João Pessoa', 15),
(N'Campina Grande', 15),
-- Piauí (18)
(N'Teresina', 18),
(N'São Raimundo Nonato', 18),
-- Rio Grande do Norte (20)
(N'Natal', 20),
(N'Pipa', 20),
-- Rondônia (22)
(N'Porto Velho', 22),
(N'Ji-Paraná', 22),
-- Roraima (23)
(N'Boa Vista', 23),
(N'Caracaraí', 23),
-- Sergipe (26)
(N'Aracaju', 26),
(N'São Cristóvão', 26),
-- Tocantins (27)
(N'Palmas', 27),
(N'Jalapão', 27);

-- =============================================
-- LOCAIS DOS ESTADOS RESTANTES
-- =============================================

INSERT INTO Locais (Nome, Descricao, CidadeID, CategoriaID, CriadoPor, HorarioFuncionamento, Preco, InformacoesAdicionais) VALUES 

-- ACRE (1) - COMPLETO
-- Monumentos Acre
(N'Palácio Rio Branco', N'Sede do governo acreano com arquitetura moderna', 28, 1, 1, N'Seg-Sex: 8h-17h', N'Gratuito', N'Visitas guiadas. Arquitetura contemporânea.'),
(N'Memorial dos Autonomistas', N'Museu da história da Revolução Acreana', 28, 1, 1, N'Ter-Dom: 8h-17h', N'R$ 5,00', N'História da anexação do Acre ao Brasil.'),

-- Natureza Acre
(N'Floresta Acreana', N'Floresta amazônica preservada com seringais históricos', 28, 2, 1, N'Tours programados', N'R$ 80-200', N'Seringais tradicionais. Observação da fauna amazônica.'),
(N'Rio Acre', N'Rio que dá nome ao estado com navegação fluvial', 28, 2, 1, N'24 horas', N'Varia por passeio', N'Passeios fluviais. Pesca esportiva e turismo ecológico.'),

-- Gastronomia Acre
(N'Paca Assada', N'Prato típico acreano com carne de caça', 28, 3, 1, N'Restaurantes: 11h-22h', N'R$ 40-70', N'Carne de caça preparada tradicionalmente.'),
(N'Farofa de Banana', N'Acompanhamento típico acreano', 28, 3, 1, N'Disponível o ano todo', N'R$ 8-15', N'Farofa doce com banana da terra.'),

-- Cultura Acre
(N'Festival da Macaxeira', N'Festival gastronômico e cultural acreano', 28, 4, 1, N'Julho', N'R$ 20-50', N'Celebração da cultura local e gastronomia.'),
(N'Artesanato Seringueiro', N'Arte tradicional dos trabalhadores da borracha', 28, 4, 1, N'Cooperativas: 8h-17h', N'R$ 15-100', N'Peças feitas com látex e materiais da floresta.'),

-- ALAGOAS (2) - COMPLETO
-- Monumentos Alagoas
(N'Centro Histórico de Penedo', N'Arquitetura colonial às margens do São Francisco', 30, 1, 1, N'Diário: 9h-17h', N'Gratuito', N'Patrimônio histórico colonial. Arquitetura portuguesa.'),
(N'Igreja do Rosário dos Pretos', N'Igreja histórica com arte sacra barroca', 29, 7, 1, N'Diário: 6h-18h', N'Gratuito', N'Arte sacra barroca. Importância histórica afro-brasileira.'),

-- Natureza Alagoas
(N'Praia de Maragogi', N'Praia com piscinas naturais e águas cristalinas', 29, 5, 1, N'24 horas', N'Gratuito', N'Piscinas naturais de corais. Mergulho e snorkeling.'),
(N'Cânion do Xingó', N'Cânion no Rio São Francisco com paisagens espetaculares', 30, 2, 1, N'Passeios: 8h-16h', N'R$ 60-120', N'Passeios de catamarã. Formações rochosas únicas.'),

-- Gastronomia Alagoas
(N'Sururu', N'Molusco típico das lagoas alagoanas', 29, 3, 1, N'Restaurantes: 11h-22h', N'R$ 25-45', N'Frutos do mar das lagoas. Preparado refogado ou em caldos.'),
(N'Tapioca Alagoana', N'Tapioca recheada com queijo coalho e coco', 29, 3, 1, N'Praias: 6h-22h', N'R$ 6-12', N'Massa de goma com recheios regionais.'),

-- Cultura Alagoas
(N'Festa de Iemanjá AL', N'Celebração à rainha do mar no litoral alagoano', 29, 4, 1, N'2 de fevereiro', N'Gratuito', N'Oferendas ao mar. Sincretismo religioso.'),
(N'Folguedos Alagoanos', N'Manifestações folclóricas tradicionais', 29, 4, 1, N'Festivais juninos', N'Gratuito', N'Reisado, pastoril e outras tradições.'),

-- AMAPÁ (3) - COMPLETO
-- Monumentos Amapá
(N'Fortaleza de São José', N'Fortaleza colonial francesa em Macapá', 31, 1, 1, N'Ter-Dom: 9h-17h', N'R$ 8,00', N'Arquitetura militar francesa. Museu histórico.'),
(N'Marco Zero do Equador', N'Monumento na linha do Equador', 31, 1, 1, N'24 horas', N'Gratuito', N'Linha imaginária do Equador. Fenômeno do meio-dia.'),

-- Natureza Amapá
(N'Parque Nacional do Cabo Orange', N'Parque com manguezais e vida selvagem', 31, 2, 1, N'Tours programados', N'R$ 50-150', N'Observação de aves. Manguezais preservados.'),
(N'Rio Amazonas AP', N'Foz do Amazonas com encontro das águas', 31, 2, 1, N'Passeios fluviais', N'R$ 80-200', N'Encontro do rio com o oceano. Fenômeno natural único.'),

-- Gastronomia Amapá
(N'Pirarucu de Casaca', N'Prato típico amapaense com pirarucu e farofa', 31, 3, 1, N'Restaurantes: 11h-22h', N'R$ 35-60', N'Peixe amazônico preparado com temperos locais.'),
(N'Açaí Amapaense', N'Açaí servido com peixe e camarão', 31, 3, 1, N'Disponível o ano todo', N'R$ 10-20', N'Açaí salgado, tradição amazônica.'),

-- Cultura Amapá
(N'Marabaixo', N'Dança folclórica afro-amapaense', 31, 4, 1, N'Festivais culturais', N'Gratuito', N'Patrimônio Imaterial. Dança de origem africana.'),
(N'Artesanato Ribeirinho', N'Arte dos povos das águas amapaenses', 31, 4, 1, N'Feiras: 8h-17h', N'R$ 20-150', N'Peças feitas com materiais da várzea.'),

-- DISTRITO FEDERAL (7) - COMPLETO
-- Monumentos Distrito Federal
(N'Congresso Nacional', N'Sede do Poder Legislativo brasileiro', 32, 1, 1, N'Seg-Sex: 9h-17h', N'Gratuito', N'Arquitetura de Oscar Niemeyer. Visitas guiadas.'),
(N'Catedral de Brasília', N'Catedral modernista com vitrais coloridos', 32, 7, 1, N'Diário: 8h-18h', N'Gratuito', N'Arquitetura única de Niemeyer. Vitrais de Marianne Peretti.'),
(N'Palácio da Alvorada', N'Residência oficial do Presidente', 32, 1, 1, N'Visitas agendadas', N'Gratuito', N'Arquitetura modernista. Jardins de Burle Marx.'),

-- Natureza Distrito Federal
(N'Parque Nacional de Brasília', N'Cerrado preservado com trilhas e piscinas naturais', 32, 2, 1, N'Ter-Dom: 8h-16h', N'R$ 18,00', N'Trilhas no cerrado. Piscinas naturais cristalinas.'),
(N'Jardim Botânico de Brasília', N'Jardim com flora do cerrado e orquidário', 32, 2, 1, N'Ter-Dom: 9h-17h', N'R$ 10,00', N'Flora do cerrado. Orquidário e jardim sensorial.'),

-- Gastronomia Distrito Federal
(N'Pamonha Goiana', N'Pamonha doce típica do Centro-Oeste', 32, 3, 1, N'Disponível o ano todo', N'R$ 5-12', N'Milho verde cozido na palha. Tradição goiana.'),
(N'Pequi com Arroz', N'Prato típico do cerrado brasiliense', 32, 3, 1, N'Restaurantes: 11h-22h', N'R$ 20-35', N'Fruto do cerrado com arroz. Sabor marcante.'),

-- Cultura Distrito Federal
(N'Festival de Inverno de Brasília', N'Festival cultural com música e arte', 32, 4, 1, N'Julho', N'R$ 30-100', N'Música, teatro e artes visuais. Programação diversificada.'),
(N'Memorial JK', N'Memorial do fundador de Brasília', 32, 4, 1, N'Ter-Dom: 9h-18h', N'R$ 10,00', N'História da construção de Brasília. Acervo de JK.'),

-- ESPÍRITO SANTO (8) - COMPLETO
-- Monumentos Espírito Santo
(N'Centro Histórico de Vitória', N'Arquitetura colonial capixaba preservada', 33, 1, 1, N'Diário: 9h-17h', N'Gratuito', N'Casarões coloniais. Museus e centros culturais.'),
(N'Convento da Penha', N'Santuário no alto do rochedo em Vila Velha', 33, 7, 1, N'Diário: 6h-18h', N'Gratuito', N'Vista panorâmica da Grande Vitória. Romaria tradicional.'),

-- Natureza Espírito Santo
(N'Parque Estadual de Itaúnas', N'Dunas, restinga e vila histórica', 34, 2, 1, N'24 horas', N'R$ 15,00', N'Dunas móveis, forró pé de serra e vila soterrada.'),
(N'Pedra Azul', N'Formação rochosa com mudança de cor', 33, 2, 1, N'Diário: 8h-17h', N'R$ 25,00', N'Rocha que muda de cor. Trilhas e escalada.'),

-- Gastronomia Espírito Santo
(N'Moqueca Capixaba', N'Moqueca preparada na panela de barro sem dendê', 33, 3, 1, N'Restaurantes: 11h-22h', N'R$ 40-80', N'Sem dendê e leite de coco. Tradição capixaba única.'),
(N'Torta Capixaba', N'Torta salgada com frutos do mar', 33, 3, 1, N'Páscoa', N'R$ 80-150', N'Tradição pascal capixaba. Diversos frutos do mar.'),

-- Cultura Espírito Santo
(N'Congo Capixaba', N'Manifestação cultural afro-capixaba', 33, 4, 1, N'Festivais religiosos', N'Gratuito', N'Dança e música de origem africana. Patrimônio cultural.'),
(N'Forró Pé de Serra ES', N'Forró tradicional nas dunas de Itaúnas', 34, 4, 1, N'Fins de semana', N'R$ 20-40', N'Forró autêntico nas dunas. Tradição musical.'),

-- MARANHÃO (10) - COMPLETO
-- Monumentos Maranhão
(N'Centro Histórico de São Luís', N'Patrimônio Mundial com azulejos portugueses', 35, 4, 1, N'Diário: 9h-18h', N'Gratuito', N'Patrimônio Mundial UNESCO. Azulejos portugueses únicos.'),
(N'Teatro Arthur Azevedo', N'Teatro histórico no centro de São Luís', 35, 1, 1, N'Conforme programação', N'Varia por evento', N'Arquitetura eclética. Principal teatro maranhense.'),

-- Natureza Maranhão
(N'Lençóis Maranhenses', N'Dunas com lagoas cristalinas sazonais', 36, 2, 1, N'Diário: 8h-17h', N'R$ 30,00', N'Dunas brancas e lagoas azuis. Melhor época: jul-set.'),
(N'Delta do Parnaíba', N'Único delta em mar aberto das Américas', 36, 2, 1, N'Passeios: 8h-16h', N'R$ 80-150', N'Manguezais, igarapés e vida selvagem.'),

-- Gastronomia Maranhão
(N'Arroz de Cuxá', N'Prato típico com vinagreira e camarão seco', 35, 3, 1, N'Restaurantes: 11h-22h', N'R$ 25-45', N'Folha de vinagreira refogada. Tradição maranhense.'),
(N'Bumba Meu Boi Culinário', N'Pratos servidos durante o festival', 35, 3, 1, N'Junho-julho', N'R$ 15-30', N'Comidas típicas do período junino.'),

-- Cultura Maranhão
(N'Bumba Meu Boi', N'Auto folclórico Patrimônio da Humanidade', 35, 4, 1, N'Junho-julho', N'Gratuito', N'Patrimônio Imaterial da Humanidade UNESCO.'),
(N'Tambor de Crioula', N'Dança afro-maranhense com tambores', 35, 4, 1, N'Apresentações culturais', N'Gratuito', N'Patrimônio Imaterial. Dança de roda com tambores.'),

-- PARAÍBA (15) - COMPLETO
-- Monumentos Paraíba
(N'Centro Histórico de João Pessoa', N'Arquitetura colonial e barroca preservada', 37, 1, 1, N'Diário: 9h-17h', N'Gratuito', N'Casarões coloniais e igrejas barrocas.'),
(N'Farol do Cabo Branco', N'Ponto mais oriental das Américas', 37, 1, 1, N'Ter-Dom: 8h-17h', N'R$ 8,00', N'Ponto extremo oriental. Vista panorâmica do oceano.'),

-- Natureza Paraíba
(N'Praia de Tambaba', N'Primeira praia naturista oficial do Nordeste', 37, 5, 1, N'24 horas', N'Gratuito', N'Falésias coloridas e naturismo opcional.'),
(N'Areia Vermelha', N'Banco de areia que emerge na maré baixa', 37, 5, 1, N'Passeios: maré baixa', N'R$ 40-80', N'Piscinas naturais que surgem na maré baixa.'),

-- Gastronomia Paraíba
(N'Rubacão', N'Prato típico paraibano com feijão verde e queijo', 37, 3, 1, N'Restaurantes: 11h-22h', N'R$ 20-35', N'Feijão verde com queijo coalho. Tradição sertaneja.'),
(N'Carne de Sol Paraibana', N'Carne seca preparada tradicionalmente', 37, 3, 1, N'Restaurantes: 11h-22h', N'R$ 30-55', N'Carne seca com macaxeira e queijo coalho.'),

-- Cultura Paraíba
(N'Forró Paraibano', N'Berço do forró com Luiz Gonzaga', 37, 4, 1, N'Casas de forró: 21h-4h', N'R$ 15-40', N'Terra natal de Luiz Gonzaga. Forró autêntico.'),
(N'Literatura de Cordel PB', N'Tradição cordelista paraibana', 37, 4, 1, N'Feiras: 8h-17h', N'R$ 3-10', N'Grandes cordelistas paraibanos. Xilogravura artesanal.'),

-- PIAUÍ (18) - COMPLETO
-- Monumentos Piauí
(N'Centro Histórico de Teresina', N'Arquitetura do século XIX preservada', 39, 1, 1, N'Diário: 9h-17h', N'Gratuito', N'Casarões do século XIX. Mercado da Troca.'),
(N'Serra da Capivara', N'Sítio arqueológico com pinturas rupestres', 40, 1, 1, N'Ter-Dom: 8h-17h', N'R$ 20,00', N'Patrimônio Mundial UNESCO. Arte rupestre pré-histórica.'),

-- Natureza Piauí
(N'Parque Nacional Serra da Capivara', N'Maior sítio arqueológico das Américas', 40, 2, 1, N'Ter-Dom: 8h-17h', N'R$ 20,00', N'Pinturas rupestres de 50 mil anos. Caatinga preservada.'),
(N'Delta do Parnaíba PI', N'Parte piauiense do delta do rio Parnaíba', 39, 2, 1, N'Passeios: 8h-16h', N'R$ 60-120', N'Manguezais e igarapés. Observação de aves.'),

-- Gastronomia Piauí
(N'Maria Isabel', N'Arroz com carne seca típico piauiense', 39, 3, 1, N'Restaurantes: 11h-22h', N'R$ 18-30', N'Arroz com carne de sol e temperos regionais.'),
(N'Paçoca de Pilão', N'Doce tradicional feito no pilão', 39, 3, 1, N'Disponível o ano todo', N'R$ 5-12', N'Amendoim pilado com rapadura. Tradição sertaneja.'),

-- Cultura Piauí
(N'Bumba Meu Boi Piauiense', N'Versão piauiense do auto folclórico', 39, 4, 1, N'Junho-julho', N'Gratuito', N'Tradição junina com características locais.'),
(N'Cerâmica de Picos', N'Artesanato em cerâmica tradicional', 39, 4, 1, N'Ateliês: 8h-17h', N'R$ 15-80', N'Cerâmica utilitária e decorativa. Tradição familiar.'),

-- RIO GRANDE DO NORTE (20) - COMPLETO
-- Monumentos Rio Grande do Norte
(N'Forte dos Reis Magos', N'Fortaleza em formato de estrela em Natal', 41, 1, 1, N'Ter-Dom: 8h-16h', N'R$ 6,00', N'Arquitetura militar portuguesa. Marco da colonização.'),
(N'Centro Histórico de Natal', N'Arquitetura colonial na capital potiguar', 41, 1, 1, N'Diário: 9h-17h', N'Gratuito', N'Casarões coloniais e republicanos preservados.'),

-- Natureza Rio Grande do Norte
(N'Praia de Pipa', N'Praia com falésias e vida noturna agitada', 42, 5, 1, N'24 horas', N'Gratuito', N'Falésias coloridas, golfinhos e tartarugas.'),
(N'Dunas de Genipabu', N'Dunas móveis com passeios de buggy', 41, 2, 1, N'Diário: 8h-17h', N'R$ 80-150', N'Passeios de buggy e dromedário. Lagoas cristalinas.'),

-- Gastronomia Rio Grande do Norte
(N'Ginga com Tapioca', N'Peixe típico potiguar com tapioca', 41, 3, 1, N'Restaurantes: 11h-22h', N'R$ 25-45', N'Peixe ginga grelhado com tapioca de goma.'),
(N'Cajuína Potiguar', N'Bebida típica feita do caju cristalino', 41, 3, 1, N'Disponível o ano todo', N'R$ 8-15', N'Suco de caju cristalino. Bebida típica regional.'),

-- Cultura Rio Grande do Norte
(N'Forró Potiguar', N'Forró tradicional norte-rio-grandense', 41, 4, 1, N'Casas de forró: 21h-4h', N'R$ 15-40', N'Forró pé de serra autêntico. Grandes mestres potiguares.'),
(N'Artesanato em Renda', N'Renda de bilro e labirinto potiguares', 41, 4, 1, N'Cooperativas: 8h-17h', N'R$ 25-150', N'Renda de bilro e labirinto. Técnicas seculares.'),

-- RONDÔNIA (22) - COMPLETO
-- Monumentos Rondônia
(N'Estrada de Ferro Madeira-Mamoré', N'Ferrovia histórica da época da borracha', 43, 1, 1, N'Ter-Dom: 8h-17h', N'R$ 15,00', N'Museu ferroviário. História da exploração da borracha.'),
(N'Casa do Artesão', N'Centro de artesanato rondoniense', 43, 1, 1, N'Seg-Sáb: 8h-18h', N'Gratuito', N'Artesanato local. Produtos da floresta amazônica.'),

-- Natureza Rondônia
(N'Parque Nacional de Pacaás Novos', N'Parque com floresta amazônica preservada', 43, 2, 1, N'Tours programados', N'R$ 50-150', N'Floresta amazônica. Observação da fauna silvestre.'),
(N'Rio Madeira', N'Importante afluente do Amazonas', 43, 2, 1, N'Passeios fluviais', N'R$ 60-180', N'Pesca esportiva e turismo fluvial. Hidrelétricas.'),

-- Gastronomia Rondônia
(N'Peixe Pintado', N'Peixe amazônico preparado tradicionalmente', 43, 3, 1, N'Restaurantes: 11h-22h', N'R$ 35-65', N'Peixe de água doce grelhado ou assado.'),
(N'Farofa de Banana Rondônia', N'Farofa doce típica rondoniense', 43, 3, 1, N'Disponível o ano todo', N'R$ 8-15', N'Farofa com banana da terra e açúcar.'),

-- Cultura Rondônia
(N'Festival Folclórico de Porto Velho', N'Festival com danças e música regional', 43, 4, 1, N'Agosto', N'R$ 20-50', N'Cultura amazônica e migrante. Diversidade cultural.'),
(N'Artesanato Indígena RO', N'Arte dos povos indígenas rondonienses', 43, 4, 1, N'Aldeias e feiras', N'R$ 20-200', N'Cestaria, cerâmica e adornos tradicionais.'),

-- RORAIMA (23) - COMPLETO
-- Monumentos Roraima
(N'Centro Cívico de Boa Vista', N'Complexo administrativo da capital', 45, 1, 1, N'Seg-Sex: 8h-17h', N'Gratuito', N'Arquitetura moderna. Centro administrativo estadual.'),
(N'Orla Taumanan', N'Orla urbana às margens do Rio Branco', 45, 8, 1, N'24 horas', N'Gratuito', N'Área de lazer urbana. Vista do Rio Branco.'),

-- Natureza Roraima
(N'Monte Roraima', N'Tepui na fronteira Brasil-Venezuela-Guiana', 45, 2, 1, N'Expedições: 6 dias', N'R$ 800-1500', N'Trekking de 6 dias. Paisagens únicas no mundo.'),
(N'Parque Nacional do Viruá', N'Parque com campinaranas e floresta amazônica', 45, 2, 1, N'Tours programados', N'R$ 100-300', N'Ecossistemas únicos. Observação da fauna.'),

-- Gastronomia Roraima
(N'Damorida', N'Prato típico com peixe e legumes', 45, 3, 1, N'Restaurantes: 11h-22h', N'R$ 30-50', N'Peixe com legumes cozidos. Influência indígena.'),
(N'Beiju de Tapioca', N'Beiju tradicional roraimense', 45, 3, 1, N'Disponível o ano todo', N'R$ 5-12', N'Massa de mandioca assada. Tradição indígena.'),

-- Cultura Roraima
(N'Cultura Indígena Roraimense', N'Tradições dos povos Yanomami e Macuxi', 45, 4, 1, N'Aldeias: agendamento', N'Varia', N'Cultura ancestral preservada. Artesanato e rituais.'),
(N'Festival de Inverno de Roraima', N'Festival cultural na estação seca', 45, 4, 1, N'Julho-agosto', N'R$ 25-60', N'Música regional e nacional. Cultura local.'),

-- SERGIPE (26) - COMPLETO
-- Monumentos Sergipe
(N'Centro Histórico de São Cristóvão', N'Primeira capital sergipana', 48, 4, 1, N'Diário: 9h-17h', N'Gratuito', N'Patrimônio Mundial UNESCO. Arquitetura colonial.'),
(N'Mercado Municipal de Aracaju', N'Mercado com artesanato e produtos locais', 47, 1, 1, N'Seg-Sáb: 6h-18h', N'Gratuito entrada', N'Artesanato sergipano e produtos regionais.'),

-- Natureza Sergipe
(N'Cânion do Xingó SE', N'Parte sergipana do cânion do São Francisco', 47, 2, 1, N'Passeios: 8h-16h', N'R$ 80-150', N'Catamarã pelo São Francisco. Paisagens espetaculares.'),
(N'Praia do Saco', N'Praia com coqueirais e águas calmas', 47, 5, 1, N'24 horas', N'Gratuito', N'Águas calmas protegidas por recifes. Coqueirais.'),

-- Gastronomia Sergipe
(N'Caranguejada Sergipana', N'Caranguejo preparado com temperos locais', 47, 3, 1, N'Restaurantes: 18h-23h', N'R$ 40-80', N'Caranguejo dos manguezais sergipanos.'),
(N'Queijadinha Sergipana', N'Doce tradicional feito com queijo', 47, 3, 1, N'Confeitarias: 8h-20h', N'R$ 3-8', N'Doce de queijo com coco. Tradição conventual.'),

-- Cultura Sergipe
(N'São João Sergipano', N'Festivais juninos tradicionais', 47, 4, 1, N'Junho', N'Gratuito', N'Quadrilhas, forró e comidas típicas juninas.'),
(N'Artesanato em Renda Sergipe', N'Renda irlandesa e filé sergipanas', 47, 4, 1, N'Cooperativas: 8h-17h', N'R$ 30-200', N'Renda irlandesa e filé. Tradição das rendeiras.'),

-- TOCANTINS (27) - COMPLETO
-- Monumentos Tocantins
(N'Palmas', N'Capital planejada mais nova do Brasil', 49, 8, 1, N'24 horas', N'Varia por local', N'Cidade planejada. Arquitetura moderna e sustentável.'),
(N'Memorial Coluna Prestes', N'Memorial da marcha histórica brasileira', 49, 1, 1, N'Ter-Dom: 8h-17h', N'Gratuito', N'História da Coluna Prestes. Acervo histórico.'),

-- Natureza Tocantins
(N'Jalapão', N'Região com dunas, cachoeiras e fervedouros', 50, 2, 1, N'Tours: 4-7 dias', N'R$ 400-800/dia', N'Dunas douradas, fervedouros e cachoeiras cristalinas.'),
(N'Ilha do Bananal', N'Maior ilha fluvial do mundo', 49, 2, 1, N'Tours programados', N'R$ 200-500', N'Parque Nacional do Araguaia. Observação da fauna.'),

-- Gastronomia Tocantins
(N'Pacu Assado', N'Peixe do Araguaia preparado na brasa', 49, 3, 1, N'Restaurantes: 11h-22h', N'R$ 30-55', N'Peixe de água doce assado com temperos regionais.'),
(N'Pequi Tocantinense', N'Fruto do cerrado em pratos típicos', 49, 3, 1, N'Safra: Out-Fev', N'R$ 10-25', N'Fruto do cerrado usado em diversos pratos.'),

-- Cultura Tocantins
(N'Festival de Inverno de Bonópolis', N'Festival cultural tocantinense', 49, 4, 1, N'Julho', N'R$ 30-80', N'Música sertaneja e regional. Cultura do cerrado.'),
(N'Artesanato do Capim Dourado', N'Artesanato típico do Jalapão', 50, 4, 1, N'Cooperativas: 8h-17h', N'R$ 25-300', N'Capim dourado e seda do buriti. Arte sustentável.');

-- Avaliações e comentários para os novos estados
INSERT INTO Avaliacoes (LocalID, UsuarioID, Nota) VALUES 
(100, 2, 5), (110, 3, 4), (120, 4, 5),
(130, 2, 4), (140, 3, 5), (150, 4, 4);

INSERT INTO Comentarios (LocalID, UsuarioID, Texto) VALUES 
(100, 2, N'Acre surpreende com sua natureza preservada e cultura única.'),
(120, 3, N'Distrito Federal impressiona com a arquitetura modernista de Brasília.'),
(140, 2, N'Lençóis Maranhenses é um dos lugares mais belos do Brasil.');

PRINT '✅ Estados restantes adicionados com sucesso!';
PRINT '📊 Novos dados completos:';
PRINT '   - Acre: 8 locais completos';
PRINT '   - Alagoas: 8 locais completos';
PRINT '   - Amapá: 8 locais completos';
PRINT '   - Distrito Federal: 8 locais completos';
PRINT '   - Espírito Santo: 8 locais completos';
PRINT '   - Maranhão: 8 locais completos';
PRINT '   - Paraíba: 8 locais completos';
PRINT '   - Piauí: 8 locais completos';
PRINT '   - Rio Grande do Norte: 8 locais completos';
PRINT '   - Rondônia: 8 locais completos';
PRINT '   - Roraima: 8 locais completos';
PRINT '   - Sergipe: 8 locais completos';
PRINT '   - Tocantins: 8 locais completos';
PRINT '';
PRINT '🎉 TODOS OS 27 ESTADOS BRASILEIROS AGORA TÊM DADOS COMPLETOS!';