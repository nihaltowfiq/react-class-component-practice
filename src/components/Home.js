import { Component } from "react";
import booksData from "../assets/booksData";
import BookList from "./BookList";

class Home extends Component {
  state = {
    books: booksData,
    showBooks: true,
  };

  changeWithInput = (event, index) => {
    const book = { ...this.state.books[index] };
    book.name = event.target.value;

    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });
  };

  deleteBook = (index) => {
    // const books = this.state.books.slice();
    // const books = this.state.books.map((item) => item);
    const books = [...this.state.books];

    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
  };

  render() {
    // console.log(this.state);
    // const bookState = this.state.books;

    const books = (
      <BookList
        booksState={this.state.books}
        changeWithInput={this.changeWithInput}
        deleteBook={this.deleteBook}
      />
    );

    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
      padding: "5px",
    };
    return (
      <div className="app">
        <h1 style={style}>Book List</h1>

        <button onClick={this.toggleBooks}>Toggle Books</button>

        {/* {this.state.showBooks ? books : null} */}
        {this.state.showBooks && books}
      </div>
    );
  }
}

export default Home;
