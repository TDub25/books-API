// DEPENDENCIES
const express = require("express")
const mongoose = require('mongoose')

// CONFIGURATION
require("dotenv").config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello World!");
  })

// Books
const booksController = require("./controllers/books-controller");
app.use("/books", booksController)

// LISTEN
app.listen(PORT, () => {
    console.log("listening on port", PORT);
  })

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)