import React, { Component } from "react";

class NewBook extends Component {
  state = {
    name: "",
    author: "",
    description: "",
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    e.target = "";
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
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            name="name"
            defaultValue={this.state.name}
          />
          <br />
          <label>Author Name</label>
          <br />
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            name="author"
            value={this.state.author}
          />
          <br />
          <label>Description</label>
          <br />
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            name="description"
            value={this.state.description}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
