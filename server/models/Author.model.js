const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const authorSchema = new Schema(
    {
        first_name: {
          type: String,
          trim: true,
          set: (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase(),
          match: [/^[a-zA-Z0-9]+$/, "is invalid"],
        },
        last_name: {
          type: String,
          trim: true,
          set: (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase(),
          match: [/^[a-zA-Z0-9]+$/, "is invalid"],
        },   
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
);

const Author = model("Author", authorSchema);

module.exports = Author;
