const express = require('express');
const musicController = require('../controllers/musicController');
const router = express.Router();

// Rota para listar todas as músicas
router.get('/', musicController.getAllMusics);

// Rota para exibir o formulário de criação de nova música
router.get('/new', musicController.renderCreateForm);

// Rota para criar uma nova música
router.post('/', musicController.createMusic);

// Rota para exibir detalhes de uma música específica
router.get('/:id', musicController.getMusicById);

// Rota para exibir o formulário de edição de uma música específica
router.get('/:id/edit', musicController.renderEditForm);

// Rota para atualizar uma música específica
router.put('/:id', musicController.updateMusic);

// Rota para deletar uma música específica
router.delete('/:id', musicController.deleteMusic);

module.exports = router;
