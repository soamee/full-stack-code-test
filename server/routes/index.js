const router = require("express").Router()


const bookRouter =  require('./book.routes.js')
const authorRouter = require('./author.routes.js')


  router.use('/book', bookRouter)
  router.use('/author', authorRouter)


module.exports = router;