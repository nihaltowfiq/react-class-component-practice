import { Component } from "react";
import "./App.css";
import Book from "./components/Books";

class App extends Component {
  state = {
    books: [
      { id: 1, name: "Computer Programming", author: "Tamim Shahriar Subeen" },
      {
        id: 2,
        name: "Python Diye Programming Shekha",
        author: "Tamim Shahriar Subeen",
      },
      { id: 3, name: "Habluder Jonno Programming", author: "Jhankar Mahbub" },
    ],
    otherProp: "I am Other Prop!",
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
    console.log("clicked");
  };

  render() {
    // console.log(this.state);
    const bookState = this.state.books;

    const books = bookState.map((book, index) => {
      return (
        <Book
          key={book.id}
          delete={() => this.deleteBook(index)}
          inputName={(event) => this.changeWithInput(event, index)}
          name={book.name}
          author={book.author}
        />
      );
    });
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

        {books}
      </div>
    );
  }
}

export default App;
