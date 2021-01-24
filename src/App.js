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
    // let obj = new Component();
    // console.log(obj);

    console.log(this.state);
    return (
      <div className="App">
        <h1>Book List</h1>
        <input onChange={this.changeWithInput} type="text" />
        <button
          onClick={() => this.changeBookState("Computer Programming 2nd Part")}
        >
          Change Book
        </button>
        <Book
          inputName={this.changeWithInput}
          name={this.state.books[0].name}
          author={this.state.books[0].author}
        />
        <Book
          name={this.state.books[1].name}
          author={this.state.books[1].author}
        />
        <Book
          change={() => this.changeBookState("Computer Programming 3rd Part")}
          name={this.state.books[2].name}
          author={this.state.books[2].author}
        />
      </div>
    );
  }
}

export default App;
