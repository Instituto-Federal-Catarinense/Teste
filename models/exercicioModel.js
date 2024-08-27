const db = require('../config/db');

const Exercicios = {
    // Criar um novo exercício
    create: (exercicio, callback) => {
        const query = 'INSERT INTO exercicios (duracao_media, series, repeticao, restricao, aplicabilidade, descricao, nome, categoria, obs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [
            exercicio.duracao_media,
            exercicio.series,
            exercicio.repeticao,
            exercicio.restricao,
            exercicio.aplicabilidade,
            exercicio.descricao,
            exercicio.nome,
            exercicio.categoria,
            exercicio.obs
        ], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    // Encontrar um exercício por ID
    findById: (id, callback) => {
        const query = 'SELECT * FROM exercicios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    // Atualizar um exercício
    update: (id, exercicio, callback) => {
        const query = 'UPDATE exercicios SET duracao_media = ?, series = ?, repeticao = ?, restricao = ?, aplicabilidade = ?, descricao = ?, nome = ?, categoria = ?, obs = ? WHERE id = ?';
        db.query(query, [
            exercicio.duracao_media,
            exercicio.series,
            exercicio.repeticao,
            exercicio.restricao,
            exercicio.aplicabilidade,
            exercicio.descricao,
            exercicio.nome,
            exercicio.categoria,
            exercicio.obs,
            id
        ], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Deletar um exercício
    delete: (id, callback) => {
        const query = 'DELETE FROM exercicios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Obter todos os exercícios
    getAll: (callback) => {
        const query = 'SELECT * FROM exercicios';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
};

module.exports = Exercicios;
