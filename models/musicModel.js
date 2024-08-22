const db = require('../config/db');

const Music = {
    // Criar uma nova música
    create: (music, callback) => {
        const query = 'INSERT INTO musics (nome, duracao, genero, autores, ritmo, instru_vocal) VALUES (?,?,?,?,?,?)';
        db.query(query, [music.nome, music.duracao, music.genero, music.autores, music.ritmo, music.instru_vocal], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    // Encontrar uma música por ID
    findById: (id, callback) => {
        const query = 'SELECT * FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    // Atualizar uma música
    update: (id, music, callback) => {
        const query = 'UPDATE musics SET nome = ?, duracao = ?, genero = ?, ritmo = ?, autores = ?, instru_vocal = ? WHERE id = ?';
        db.query(query, [music.nome, music.duracao, music.genero, music.autores, music.ritmo, music.instru_vocal, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Deletar uma música
    delete: (id, callback) => {
        const query = 'DELETE FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    // Obter todas as músicas
    getAll: (callback) => {
        const query = 'SELECT * FROM musics';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
};

module.exports = Music;
