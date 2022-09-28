const mongoose = require("mongoose");
const url = "mongodb+srv://ayeshasiddika:ayesha321@cluster0.2k9xok7.mongodb.net/libraryDatabase";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 

const booksSchema = mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  rating: String,
  image: String,
});

const booksData = mongoose.model("booksDetails", booksSchema);

module.exports = booksData;
