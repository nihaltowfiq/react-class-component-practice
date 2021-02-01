import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
