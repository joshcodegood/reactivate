import React, { Component } from "react";
import "../styles/NavMenu.css";

class NavMenu extends Component {
  toggleClass = event => {
    console.log("nav menu toggled");
    this.props.navIsHidden
      ? this.props.navUpdate(false)
      : this.props.navUpdate(true);
  };

  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a
              href="https://cash.app/$ogjlaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Give me money
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
