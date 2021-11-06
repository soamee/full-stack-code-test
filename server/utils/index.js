const { Mongoose } = require("mongoose")

module.exports = {

    isBlank: value => value?.length === 0 || !value?.match(/\S/),

}