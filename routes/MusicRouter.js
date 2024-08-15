const express = require('express');
const musicController = require('../controllers/musicController');
const router = express.Router();

router.get('/', musicController.getAllMusics);
router.get('/new', musicController.renderCreateForm);
router.post('/', musicController.createMusic);
router.get('/:id', musicController.getMusicById);
router.get('/:id/edit', musicController.renderEditForm);
router.put('/:id', musicController.updateMusic);
router.delete('/:id', musicController.deleteMusic);

module.exports = router;