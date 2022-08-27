//dependecies
const express = require("express");
const books = express.Router();
const Book = require("../models/book.js");
const bookSeed = require("../models/seed-books.js");

//GET /books
//returns all books
books.get("/", async (req, res) => {
    try {
        const foundBooks = await Book.find();
        res.status(200).json(foundBooks);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET /seed
//add 3 books to the DB
books.get("/seed", async (req, res) => {
    try {
        await Book.insertMany(bookSeed);
        res.status(200).json({
            message: "Seed Successful"
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//PUT /books.:id
//update book by ID
books.put("/:id", async (req, res) => {
    try {
        const foundBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(foundBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE /books/:id
//delete book by id
books.delete("/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Successfuly Deleted Book at ID ${req.params.id}` });
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST /books
//add new book
books.post("/", async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(200).json(newBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET /books/:id
//get book by ID
books.get("/:id", async (req, res) => {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.status(200).json(foundBook);
    } catch (err) {
        res.status(500).json(err);
    }
})

//export
module.exports = books