var express = require('express')
var path = require("path");
var burgersBook = require('../models/burgers_book')

var app = express();

pp.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/burgers_books", function(req, res) {
    burgersBook.getBooks(function (result) {
        res.json(result)
    });
});

app.post("/api/burgers_books", function(req, res) {
    burgersBook.addBook(req.body.bookName, function (result) {
        res.json(result)
    });
});

app.put("/api/burgers_books/:id", function(req, res) {
    burgersBook.updateBook(req.params.id, req.body.bookRead, function (result) {
        res.json(result)
    });
});


