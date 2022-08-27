const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: { type: String, default: 'https://placekitten.com/500/500' },
  }
)

const Book = mongoose.model('Book', bookSchema)
module.exports = Book