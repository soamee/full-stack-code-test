const router = require("express").Router()
const Book = require("../models/Book.model")
const Author = require("../models/Author.model")
const { isBlank } = require("../utils/index")


router.get('/books/', (req, res)=> {

    
    Book
        .find()
        .lean()
        .then(allBooksFound => res.status(200).json(allBooksFound))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving all the books from the database.", err: err.message }))
})


router.get('/book/:id',(req, res) => {

    const { id } = req.params;


    Book
        .findById(id)
        .lean()
        .populate("author")
        .then(bookFound => res.status(200).json({ bookFound, message: "The book has been found in the database." }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving the book you are looking for in the database.", err: err.message }))
})


router.post('/book', (req, res) => {

    const { name, isbn, author } = req.body
    console.log("////////////////////",req.body)
    if (isBlank(name) || isBlank(isbn) || isBlank(author)) {
        return (res.status(400).json({ code: 400, message: "Please fill in all the fields." })
        )}

   


    Book
        .findOne({ $or: [{ name }, { isbn }] })
        .then(allBooksFound => {
            console.log("-------------------------",allBooksFound)
            if (allBooksFound?.length > 1) {
                return (res.status(400).json({ code: 400, message: 'This book has already been added to the database.' })
                )}

        return Book.create({ name, isbn, author })
        })
        .then(bookCreated => res.status(200).json({ bookCreated, message: "This book has been added to the database." }))
        .catch(err => res.status(500).json({ code: 500, message: "Database error while fetching book.", err: err.message }))       
        })


router.put('/book/:id', (req, res) => {

    const { id } = req.params


    Book
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(bookUpdated => res.status(200).json({ bookUpdated, message: "The book has been updated succesfully." }))
        .catch(err => res.status(500).json({ code: 500, message: "Error on the update of the book.", err: err.message }))
})
        

module.exports = router;