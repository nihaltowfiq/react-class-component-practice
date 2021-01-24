import { Component } from "react";
import "./App.css";
import Book from "./components/Books";

class App extends Component {
  state = {
    books: [
      { name: "Computer Programming", author: "Tamim Shahriar Subeen" },
      {
        name: "Python Diye Programming Shekha",
        author: "Tamim Shahriar Subeen",
      },
      { name: "Habluder Jonno Programming", author: "Jhankar Mahbub" },
    ],
    otherProp: "I am Other Prop!",
  };

  changeBookState = (bookName) => {
    this.setState({
      books: [
        {
          name: bookName,
          author: "Tamim Shahriar Subeen",
        },
        {
          name: "Python Diye Programming Shekha 2nd Part",
          author: "Tamim Shahriar Subeen",
        },
        { name: "Programming Er Bolod To Boss", author: "Jhankar Mahbub" },
      ],
    });
  };

  changeWithInput = (event) => {
    this.setState({
      books: [
        {
          name: event.target.value,
          author: "Tamim Shahriar Subeen",
        },
        {
          name: "Python Diye Programming Shekha 2nd Part",
          author: "Tamim Shahriar Subeen",
        },
        { name: "Programming Er Bolod To Boss", author: "Jhankar Mahbub" },
      ],
    });
  };

  render() {
    // console.log(this.state);
    const bookState = this.state.books;

    const books = bookState.map((book) => {
      return <Book name={book.name} author={book.author} />;
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
        <input onChange={this.changeWithInput} type="text" />
        <button
          onClick={() => this.changeBookState("Computer Programming 2nd Part")}
        >
          Change Book
        </button>

        {books}
      </div>
    );
  }
}

export default App;
