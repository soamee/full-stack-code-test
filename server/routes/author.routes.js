const router = require("express").Router()
const Author = require("../models/Author.model")
const { isBlank } = require("../utils/index")


router.get('/authors/', (req, res)=> {


    Author
        .find()
        .lean()
        .then(allAuthorsFound => res.status(200).json(allAuthorsFound))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving all the authors from the database.", err: err.message }))
})


router.get('/author/:id',(req, res) => {

    const { id } = req.params;


    Author
        .findById(id)
        .lean()
        .then(authorFound => res.status(200).json({ authorFound, message: "The author has been found in the database." }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving the author you are looking for in the database.", err: err.message }))
})


router.post('/author', (req, res) => {

    const { first_name, last_name } = req.body
    console.log(req.body)

    if (isBlank(first_name) || isBlank(last_name)) {
        return (res.status(400).json({ code: 400, message: 'Please fill in all the fields' })
        )}


    Author
        .find({ $and: [{ first_name }, { last_name }] })
        .then(author => {

            if (author?.length >= 1) {
                
                return author
            }

        return Author.create({ first_name, last_name })
        })
        .then(author => res.status(200).json({ author, message: "This author has been added to the database." }))
        .catch(err => res.status(500).json({ code: 500, message: "Database error while fetching author.", err: err.message }))       
        })


router.put('/author/:id', (req, res) => {
   
    const { id } = req.params


    Author
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(authorUpdated => res.status(200).json({ authorUpdated, message: "The author has been updated succesfully." }))
        .catch(err => res.status(500).json({ code: 500, message: "Error on the update of the author.", err: err.message }))
})

module.exports = router;
