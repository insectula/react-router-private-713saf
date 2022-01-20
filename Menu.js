import React, { Component } from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="test">Test</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}