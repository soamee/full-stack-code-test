const createError = require('http-errors')
const Book = require('../models/Book')

module.exports.getBooks = (req, res, next) => {

    Book.find({})
        .then((books) => {
            res.status(201).json(books)
        })
        .catch(createError(404, 'Books not found'))
}

module.exports.getBook = (req, res, next) => {

    const { id } = req.params

    Book.findById(id)
        .then((book) => {
            res.status(201).json(book)
        })
        .catch(createError(404, 'Book not found'))
}

module.exports.createBook = (req, res, next) => {
    Book.create(req.body)
        .then((book) => {
            res.status(201).json(book)
        })
        .catch(next)
}

module.exports.editBook = (req, res, next) => {

    const { id } = req.params

    Book.findByIdAndUpdate(id, req.body, {
        safe: true,
        upsert: true,
        new: true
    })
    .then((book) => {
        if (!book) {
            next(createError(404, "Book not found"));
        } else {
            res.json(book);
        }
    })
       
}