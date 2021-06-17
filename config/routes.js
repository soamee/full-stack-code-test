const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book.controller')
const AuthorController = require('../controllers/author.controller')

//endpoints
router.get('/books', BookController.getBooks)
router.get('/book/:id', BookController.getBook)
router.post('/book', BookController.createBook)
router.post('/book/:id', BookController.editBook)

router.get('/authors', AuthorController.getAuthors)
router.get('/author/:id', AuthorController.getAuthor)
router.post('/author', AuthorController.createAuthor)
router.post('/author/:id', AuthorController.editAuthor)

module.exports = router