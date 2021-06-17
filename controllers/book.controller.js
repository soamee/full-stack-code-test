const createError = require('http-errors')
const Book = require('../models/Book')

module.exports.getBooks = (req, res, next) => {

    Book.find({})
        .then((books) => {
            res.status(201).json(books)
        })
        .catch(createError(404, 'Books not found'))
}