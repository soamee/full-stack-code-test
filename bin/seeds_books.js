require('dotenv').config()
const mongoose = require('mongoose')
const Books = require('../models/Book')
const books_data = require('../data/Books')
require('../config/db.config')

mongoose.connection.once("open", () => {
    console.info(
        `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
    );
    Promise.all([Books.deleteMany()])
        .then(() => {
            Books.insertMany(books_data);
        })
        .then(console.log(`Books added successfully`))
        .catch((e) => console.log(e));
})