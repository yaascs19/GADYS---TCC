const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const config = {
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'GADYS_DB',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'sua_senha',
    options: { encrypt: false, trustServerCertificate: true },
    pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }
};

sql.connect(config)
    .then(() => console.log('✅ Conectado ao SQL Server'))
    .catch(err => console.error('❌ Erro ao conectar:', err));

// =============================================
// USUÁRIOS
// =============================================

app.get('/api/usuarios', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT id, nome, email, tipo_usuario, ultimo_acesso, total_acesso, ip_acesso, data_cadastro
            FROM Usuario ORDER BY data_cadastro DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const { nome, email, senha, tipoUsuario } = req.body;
        await sql.query`
            INSERT INTO Usuario (nome, email, senha, tipo_usuario)
            VALUES (${nome}, ${email}, ${senha}, ${tipoUsuario || 'USUARIO'})
        `;
        res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
    } catch (err) {
        if (err.number === 2627) return res.status(400).json({ error: 'Email já cadastrado!' });
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/usuarios/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await sql.query`DELETE FROM Usuario WHERE id = ${id}`;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const result = await sql.query`
            SELECT id, nome, email, tipo_usuario
            FROM Usuario WHERE email = ${email} AND senha = ${senha}
        `;
        if (!result.recordset.length) return res.status(401).json({ error: 'Credenciais inválidas!' });

        const user = result.recordset[0];
        await sql.query`
            UPDATE Usuario SET ultimo_acesso = GETDATE(), total_acesso = total_acesso + 1
            WHERE id = ${user.id}
        `;
        res.json({ success: true, user });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// =============================================
// LOCAIS
// =============================================

app.get('/api/locais', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT * FROM vw_Locais WHERE status = 'ATIVO' ORDER BY nome
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/locais/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await sql.query`SELECT * FROM vw_Locais WHERE id = ${id}`;
        if (!result.recordset.length) return res.status(404).json({ error: 'Local não encontrado' });
        res.json(result.recordset[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/locais/pendentes', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT * FROM Localizacao WHERE status = 'PENDENTE' ORDER BY data_criacao DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/locais/aprovados', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT * FROM Localizacao WHERE status = 'ATIVO' ORDER BY data_aprovacao DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/locais/lixeira', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT * FROM Localizacao WHERE status = 'INATIVO' ORDER BY data_criacao DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/locais', async (req, res) => {
    try {
        const { nome, descricao, categoria, subcategoria, cidade, estado,
                coordenadas, horario, preco, imagem, infoAdicional, submittedBy } = req.body;
        await sql.query`
            INSERT INTO Localizacao
                (nome, descricao, categoria, subcategoria, cidade, estado,
                 coordenadas, horario_funcionamento, preco, imagem_url,
                 informacoes_adicionais, enviado_por, status)
            VALUES
                (${nome}, ${descricao}, ${categoria}, ${subcategoria}, ${cidade}, ${estado},
                 ${coordenadas}, ${horario}, ${preco}, ${imagem},
                 ${infoAdicional}, ${submittedBy || 'Anônimo'}, 'PENDENTE')
        `;
        res.json({ sucesso: true, mensagem: 'Local enviado para aprovação!' });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/locais/aprovar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await sql.query`
            UPDATE Localizacao
            SET status = 'ATIVO', data_aprovacao = GETDATE()
            WHERE id = ${id}
        `;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/locais/rejeitar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await sql.query`UPDATE Localizacao SET status = 'INATIVO' WHERE id = ${id}`;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/locais/excluir/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await sql.query`UPDATE Localizacao SET status = 'INATIVO' WHERE id = ${id}`;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/locais/restaurar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await sql.query`UPDATE Localizacao SET status = 'ATIVO' WHERE id = ${id}`;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// =============================================
// AVALIAÇÕES
// =============================================

app.post('/api/avaliacoes', async (req, res) => {
    try {
        const { localId, usuarioId, nota } = req.body;
        await sql.query`
            INSERT INTO Avaliacao (localizacao_id, usuario_id, nota)
            VALUES (${localId}, ${usuarioId}, ${nota})
        `;
        res.json({ success: true });
    } catch (err) {
        if (err.number === 2627) return res.status(400).json({ error: 'Você já avaliou este local!' });
        res.status(500).json({ error: err.message });
    }
});

// =============================================
// COMENTÁRIOS
// =============================================

app.get('/api/comentarios/:localId', async (req, res) => {
    try {
        const localId = parseInt(req.params.localId);
        const result = await sql.query`
            SELECT c.texto, c.data_comentario, u.nome AS usuario
            FROM Comentario c
            JOIN Usuario u ON c.usuario_id = u.id
            WHERE c.localizacao_id = ${localId}
            ORDER BY c.data_comentario DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/comentarios/all', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT l.nome AS localNome, c.texto, c.data_comentario, u.nome AS usuario
            FROM Comentario c
            JOIN Usuario u ON c.usuario_id = u.id
            JOIN Localizacao l ON c.localizacao_id = l.id
            ORDER BY l.nome, c.data_comentario DESC
        `;
        const grouped = {};
        result.recordset.forEach(({ localNome, usuario, texto, data_comentario }) => {
            if (!grouped[localNome]) grouped[localNome] = [];
            grouped[localNome].push({ userName: usuario, text: texto, date: data_comentario });
        });
        res.json(grouped);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/comentarios', async (req, res) => {
    try {
        const { localId, usuarioId, texto } = req.body;
        await sql.query`
            INSERT INTO Comentario (localizacao_id, usuario_id, texto)
            VALUES (${localId}, ${usuarioId}, ${texto})
        `;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// =============================================
// RANKING
// =============================================

app.get('/api/ranking', async (req, res) => {
    try {
        const result = await sql.query`
            SELECT TOP 20 nome, subcategoria, cidade, estado, media_avaliacoes, total_avaliacoes
            FROM vw_Locais
            WHERE status = 'ATIVO' AND total_avaliacoes > 0
            ORDER BY media_avaliacoes DESC, total_avaliacoes DESC
        `;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// =============================================
// MENSAGENS DE CONTATO
// =============================================

app.get('/api/mensagens', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM MensagemContato ORDER BY data DESC`;
        res.json(result.recordset);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/mensagens', async (req, res) => {
    try {
        const { nome, email, assunto, mensagem } = req.body;
        await sql.query`
            INSERT INTO MensagemContato (nome, email, assunto, mensagem)
            VALUES (${nome}, ${email}, ${assunto}, ${mensagem})
        `;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/mensagens/responder/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { resposta } = req.body;
        await sql.query`
            UPDATE MensagemContato SET resposta = ${resposta}, status = 'respondida' WHERE id = ${id}
        `;
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📡 API disponível em http://localhost:${PORT}`);
});

module.exports = app;
