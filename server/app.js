require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const app = express();

//Middlewares
app.use("/books", router); //localhost:5000/books

mongoose
  .connect(
    `mongodb+srv://admin-bookstore:${process.env.MONGODB_PASSWORD}@cluster0.bhwff.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Server running on PORT 5000"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));


