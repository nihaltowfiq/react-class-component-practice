import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import booksData from "../assets/booksData";
import BookList from "./BookList";
import NewBook from "./NewBook";

class Home extends Component {
  state = {
    books: booksData,
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

  render() {
    const books = (
      <BookList
        booksState={this.state.books}
        changeWithInput={this.changeWithInput}
        deleteBook={this.deleteBook}
      />
    );

    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/addNewBook">Add New Book</NavLink>
            </li>
          </ul>
        </nav>

        {/* {this.state.showBooks ? books : null} */}
        {/* {books} */}

        <Route path="/" exact render={() => books} />
        <Route path="/addNewBook" component={NewBook} />
      </div>
    );
  }
}

export default Home;
