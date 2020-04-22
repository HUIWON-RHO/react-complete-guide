import React, { Component } from "react";
import "./App.css";
import Validation from "./validation.js";
import Char from "./Char.js";

class App extends Component {
  state = {
    userInput: "",
  };

  userInputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const inputChar = this.state.userInput.split("");
    inputChar.splice(index, 1);
    const updated = inputChar.join("");
    this.setState({ userInput: updated });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div>
        <input onChange={this.userInputChangedHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
