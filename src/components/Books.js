import { Component } from "react";
import "./Book.css";

class Book extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="book">
        <h3 onClick={this.props.change}>Book: {this.props.name}</h3>
        <input
          onChange={this.props.inputName}
          type="text"
          value={this.props.name}
        />
        <span>
          <i> by</i> {this.props.author}
        </span>
      </div>
    );
  }
}

export default Book;
