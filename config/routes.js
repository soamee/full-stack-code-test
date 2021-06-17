const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book.controller')

//endpoints
router.get('/books', BookController.getBooks)

module.exports = router