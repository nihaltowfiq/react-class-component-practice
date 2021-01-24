import { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  render() {
    return this.props.booksState.map((book, index) => {
      return (
        <Book
          key={book.id}
          delete={() => this.props.deleteBook(index)}
          inputName={(event) => this.props.changeWithInput(event, index)}
          name={book.name}
          author={book.author}
        />
      );
    });
  }
}

export default BookList;
