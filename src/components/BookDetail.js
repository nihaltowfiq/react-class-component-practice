import React, { Component } from "react";

class BookDetail extends Component {
  render() {
    if (this.props.book === null) {
      return <div></div>;
    }
    const { name, author, description } = this.props.book;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default BookDetail;
