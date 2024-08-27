const Exercicio = require('../models/exercicioModel');

const exercicioController = {
    createExercicio: (req, res) => {
        const newExercicio = {
            duracao_media: req.body.duracao_media,
            series: req.body.series,
            repeticao: req.body.repeticao,
            restricao: req.body.restricao,
            aplicabilidade: req.body.aplicabilidade,
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
            res.render('exercicios/show', { exercicio });
        });
    },

    getAllExercicios: (req, res) => {
        Exercicio.getAll((err, exercicios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('exercicios/index', { exercicios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('exercicios/create');
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
            res.render('exercicios/edit', { exercicio });
        });
    },

    updateExercicio: (req, res) => {
        const exercicioId = req.params.id;
        const updatedExercicio = {
            duracao_media: req.body.duracao_media,
            series: req.body.series,
            repeticao: req.body.repeticao,
            restricao: req.body.restricao,
            aplicabilidade: req.body.aplicabilidade,
            descricao: req.body.descricao,
            nome: req.body.nome,
            categoria: req.body.categoria,
            obs: req.body.obs
        };

        Exercicio.update(exercicioId, updatedExercicio, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/exercicios');
        });
    },

    deleteExercicio: (req, res) => {
        const exercicioId = req.params.id;

        Exercicio.delete(exercicioId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/exercicios');
        });
    },
};

module.exports = exercicioController;
