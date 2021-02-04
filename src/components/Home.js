import { Component } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import booksData from "../assets/booksData";
import BookDetail from "./BookDetail";
import BookList from "./BookList";
import NewBook from "./NewBook";

class Home extends Component {
  state = {
    books: booksData,
    selectedBook: null,
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

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    const books = (
      <BookList
        booksState={this.state.books}
        changeWithInput={this.changeWithInput}
        deleteBook={this.deleteBook}
        selectedBookHandler={this.selectedBookHandler}
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

        <Switch>
          <Route path="/books" exact render={() => books} />
          <Route path="/addNewBook" component={NewBook} />
          <Route
            path="/book/:id"
            render={() => <BookDetail book={this.state.selectedBook} />}
          />
          <Redirect from="/" to="/books" />
        </Switch>
      </div>
    );
  }
}

export default Home;
