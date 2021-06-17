const createError = require('http-errors')
const Author = require('../models/Author')

module.exports.getAuthors = (req, res, next) => {

    Author.find({})
        .then((authors) => {
            res.status(201).json(authors)
        })
        .catch(createError(404, 'Authors not found'))
}

module.exports.getAuthor = (req, res, next) => {
    const { id } = req.params

    Author.findById(id)
        .then((author) => {
            res.status(201).json(author)
        })
        .catch(createError(404, 'Author not found'))
}

module.exports.createAuthor = (req, res, next) => {

    Author.create(req.body)
        .then((author) => {
            res.status(201).json(author)
        })
        .catch(next)
}

module.exports.editAuthor = (req, res, next) => {

    const { id } = req.params

    Author.findByIdAndUpdate(id, req.body, {
        safe: true,
        upsert: true,
        new: true
    })
        .then((author) => {
            if (!author) {
                next(createError(404, "Author not found"));
            } else {
                res.json(author);
            }
        })

}