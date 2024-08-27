const express = require('express');
const router = express.Router();
const exercicioController = require('../controllers/exercicioController');

// Rota para listar todos os exercícios
router.get('/', exercicioController.getAllExercicios);

// Rota para exibir o formulário de criação de novo exercício
router.get('/new', exercicioController.renderCreateForm);

// Rota para criar um novo exercício
router.post('/', exercicioController.createExercicio);

// Rota para exibir detalhes de um exercício específico
router.get('/:id', exercicioController.getExercicioById);

// Rota para exibir o formulário de edição de um exercício específico
router.get('/:id/edit', exercicioController.renderEditForm);

// Rota para atualizar um exercício específico
router.put('/:id', exercicioController.updateExercicio);

// Rota para deletar um exercício específico
router.delete('/:id', exercicioController.deleteExercicio);

module.exports = router;
