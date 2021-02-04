import React, { Component, createRef } from "react";

class NewBook extends Component {
  name = createRef();
  author = createRef();
  description = createRef();

  handleSubmit = (e) => {
    console.log(
      this.name.current.value,
      this.author.current.value,
      this.description.current.value
    );
    e.preventDefault();
    //after submitting input field will be empty
    this.name.current.value = "";
    this.author.current.value = "";
    this.description.current.value = "";
  };

  render() {
    return (
      <div>
        <h3>New Book Entry</h3>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label>Book Name</label>
          <br />
          <input type="text" name="name" ref={this.name} />
          <br />
          <label>Author Name</label>
          <br />
          <input type="text" name="author" ref={this.author} />
          <br />
          <label>Description</label>
          <br />
          <input type="text" name="description" ref={this.description} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
