require('dotenv').config()
const mongoose = require('mongoose')
const Authors = require('../models/Author')
const author_data = require('../data/Authors')
require('../config/db.config')

console.log(author_data)

Promise.all([Authors.deleteMany()])
    .then(() => {
        Authors.insertMany(author_data);
    })
    .then(console.log(`Authors added successfully`))
    .catch((e) => console.log(e));
