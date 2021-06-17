const moongose = require('mongoose')

const bookScheme = moongose.Schema(

    {
        name:{
            type: String,
            require: "Name is required"
        },
        isbn:{
            type: String,
            require: "ISBN is required"
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
        },
        author:{
            type: String,
            require: "Author is required"
        },
        id_author:{
            type: moongose.Types.ObjectId,
            required: 'A author needs to be referenced',
            ref: 'Author'
        }
    }
)

const Book = moongose.model('Book', bookScheme)

module.exports = Book