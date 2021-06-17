const moongose = require('mongoose')
const Book = require('./Book')

const authorScheme = moongose.Schema(
    {
        first_name:{
            type: String,
            require: "First name is required"
        },
        last_name:{
            type: String,
            require: "First name is required"
        }, 
        image: {
            type: String,
            validate: {
                validator: (value) => {
                    try {
                        const url = new URL(value);
                        return url.protocol === "http:" || url.protocol === "https:";
                    } catch (err) {
                        return false;
                    }
                },
                message: () => "Invalid image URL",
            },
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        }
    }
)

authorScheme.virtual('Book', {
    ref: Book.modelName,
    localField: '_id',
    foreignField: 'author'
})

const Author = moongose.model('Author', authorScheme)

module.exports = Author