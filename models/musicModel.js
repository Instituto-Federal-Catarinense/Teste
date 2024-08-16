const db = require('../config/db');

const Music = {
    create: (music, callback) => {
        const query = 'INSERT INTO musics (duracao, genero, autores, ritmo, titulo, instru_vocal, role) VALUES (?,?,?,?,?,?,?)';
        db.query(query, [music.duracao, music.genero, music.autores, music.ritmo, music.titulo, music.instru_vocal, music.role], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByMusicname: (musicname, callback) => {
        const query = 'SELECT * FROM musics WHERE musicname = ?';
        db.query(query, [musicname], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, music, callback) => {
        const query = 'UPDATE musics SET duracao = ?, genero = ?,ritmo = ?,autores = ?,instru_vocal = ?,titulo = ?, role = ? WHERE id = ?';
        db.query(query, [music.duracao, music.genero,music.autores,music.ritmo,music.titulo,music.instru_vocal, music.role, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM musics WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM musics';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = Music;
