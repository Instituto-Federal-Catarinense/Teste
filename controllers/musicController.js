const Music = require('../models/musicModel');

const musicController = {
    createMusic: (req, res) => {
        const newMusic = {
            duracao: req.body.duracao,
            genero: req.body.genero,
            autores: req.body.autores,
            ritmo: req.body.ritmo,
            titulo: req.bory.titulo,
            role: req.body.role,
        };

        Music.create(newMusic, (err, musicId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/musics');
        });
    },

    getMusicById: (req, res) => {
        const musicId = req.params.id;

        Music.findById(musicId, (err, music) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!user) {
                return res.status(404).json({ message: 'music not found' });
            }
            res.render('musics/show', { user });
        });
    },

    getAllMusics: (req, res) => {
        Music.getAll((err, musics) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('musics/index', { music });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('musics/create');
    },

    renderEditForm: (req, res) => {
        const musicId = req.params.id;

        Music.findById(musicId, (err, music) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!music) {
                return res.status(404).json({ message: 'Music not found' });
            }
            res.render('musics/edit', { music });
        });
    },

    updateMusic: (req, res) => {
        const musicId = req.params.id;
        const updatedMusic = {
            duracao: req.body.duracao,
            genero: req.body.genero,
            autores: req.body.autores,
            ritmo: req.body.ritmo,
            titulo: req.bory.titulo,
            role: req.body.role,
        };

        User.update(musicId, updatedUser, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/musics');
        });
    },

    deleteMusic: (req, res) => {
        const musicId = req.params.id;

        Music.delete(userId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/musics');
        });
    },
};

module.exports = musicController;
