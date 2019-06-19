import axios from "axios";


export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData, callback) {

    var books = require('google-books-search');
    console.log(bookData);
    
    books.search(bookData.title, function (error, results) {
      if (!error) {
        // console.log(bookData.synopsis = results[0].description)
        bookData.title = results[0].title
        bookData.authors = results[0].authors[0]
        bookData.synopsis = results[0].description
        




        console.log(bookData);
        return axios.post("/api/books", bookData).then(function(){
          callback()
        });

      } else {
        console.log(error);
      }
    })









  }
};
