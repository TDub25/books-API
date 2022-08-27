//dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//dotenv config
require("dotenv").config();
const PORT = process.env.PORT;

//express config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//mongoose config
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
);

//books router
const booksController = require("./controllers/books-controller.js");
app.use("/books", booksController);

//test route
app.get("/", (req, res) => {
    res.send("test route");
});

//run server
app.listen(PORT, port => {
    console.log("listening on port", PORT);
})