import { Component } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

class Book extends Component {
  render() {
    const { id, name, inputName, author, selectedBookHandler } = this.props;
    return (
      <div className="book">
        <h3>Book: {name}</h3>
        <input onChange={inputName} type="text" value={name} />
        <span>
          <i> by</i> {author}
        </span>
        <hr />
        <button onClick={this.props.delete}>Delete</button>
        <span> </span>
        <Link
          to={`/book/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button onClick={() => selectedBookHandler(id)}>Details</button>
        </Link>
      </div>
    );
  }
}

export default Book;
