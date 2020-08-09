import React, { Component } from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {navbar} from reactstrap;
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rushi"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
