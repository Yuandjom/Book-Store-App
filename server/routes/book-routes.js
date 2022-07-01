const express = require("express")
const router = express.Router();
const Book = require("../model/Book") //this is to get the model 
const booksController = require("../controllers/books-controller");

router.get('/', booksController.getAllBooks);
//this is to send the data to the database
router.post('/', booksController.addBook);
//get the product by id
router.get('/:id', booksController.getById);

router.put("/:id", booksController.updateBook);

router.delete("/:id", booksController.deleteBook);

module.exports = router