import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }
  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray
    });
  }

  render() {
    return (
      <div className="to-do-list-main">
        <input
          onChange={e => this.changeUserInput(e.target.value)}
          value={this.state.userinput}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          push me
        </button>
        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">

//          <div className="to-do-list-main">

//          </div>

//         </header>
//       </div>
//     );
//   }
// }
