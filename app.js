require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
//require('./config/db.config')

const app = express();

app.use(logger('dev'));
app.use(cors)

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`Ready! Listen on port ${port}`);
})
