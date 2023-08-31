const express = require('express');
const router = express.Router();

const livroController = require('./controllers/livroController')

router.get('/livros', livroController.buscarTodos);
router.get('/livro/:codigo', livroController.buscarUm);
router.post('/livro', livroController.inserir);



module.exports = router;
 
