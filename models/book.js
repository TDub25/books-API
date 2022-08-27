//dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema
const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, default: "No Description"},
    year: {type: Number, required: true},
    quantity: {type: Number, default: 0},
    imageURL: {type: String, default: "http://placekitten.com/400/400"}
});

//model and export
const Book = mongoose.model("Book", bookSchema);
module.exports = Book