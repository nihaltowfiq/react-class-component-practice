import { Component } from "react";
import { withRouter } from "react-router-dom";
import Book from "./Book";

class BookList extends Component {
  render() {
    return this.props.booksState.map((book, index) => {
      return (
        <Book
          key={book.id}
          id={book.id}
          delete={() => this.props.deleteBook(index)}
          inputName={(event) => this.props.changeWithInput(event, index)}
          selectedBookHandler={this.props.selectedBookHandler}
          name={book.name}
          author={book.author}
        />
      );
    });
  }
}

export default withRouter(BookList);
