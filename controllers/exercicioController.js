const Exercicio = require('../models/exercicioModel');

const exercicioController = {
    createExercicio: (req, res) => {
        const newExercicio = {
            duracao_media: req.body.duracao_media,
            series: req.body.series,
            repeticao: req.body.repeticao,
            restricao: req.body.restricao,
            descricao: req.body.descricao,
            nome: req.body.nome,
            categoria: req.body.categoria,
            obs: req.body.obs
        };

        Exercicio.create(newExercicio, (err, exercicioId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/exercicios');
        });
    },

    getExercicioById: (req, res) => {
        const exercicioId = req.params.id;

        Exercicio.findById(exercicioId, (err, exercicio) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!exercicio) {
                return res.status(404).json({ message: 'Exercício não encontrado' });
            }
            res.render('exercicio/show', { exercicio });
        });
    },

    getAllExercicios: (req, res) => {
        Exercicio.getAll((err, exercicios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('exercicio/index', { exercicios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('exercicio/create');
    },

    renderEditForm: (req, res) => {
        const exercicioId = req.params.id;

        Exercicio.findById(exercicioId, (err, exercicio) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!exercicio) {
                return res.status(404).json({ message: 'Exercício não encontrado' });
            }
            res.render('exercicio/edit', { exercicio });
        });
    },

    updateExercicio: (req, res) => {
        const exercicioId = req.params.id;
        const updatedExercicio = {
            duracao_media: req.body.duracao_media,
            series: req.body.series,
            repeticao: req.body.repeticao,
            restricao: req.body.restricao,
            descricao: req.body.descricao,
            nome: req.body.nome,
            categoria: req.body.categoria,
            obs: req.body.obs
        };

        Exercicio.update(exercicioId, updatedExercicio, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/exercicio');
        });
    },

    deleteExercicio: (req, res) => {
        const exercicioId = req.params.id;

        Exercicio.delete(exercicioId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/exercicio');
        });
    },
};

module.exports = exercicioController;
