const { Schema, model} = require("mongoose")

const bookSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            set: (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase(),
        },
        isbn: {
            type: Number,
        },
        author:  {
                type: Schema.Types.ObjectId,
                ref: "Author",
              },
    
    },
    { 
        timestamps: true,
    }
)

const Book = model("Book", bookSchema);

module.exports = Book;

