import React, { Component } from 'react';
import '../styles/NavMenu.css';

class NavMenu extends Component {
  // componentDidMount() {
  //   console.log(this.state.status)
  // }
  render() {
    return (
      <nav>
        <span>Menu</span>
        <ul>
          <li>Home</li>
          <li>Give me money</li>
        </ul>
      </nav>
    )
  }
}

export default NavMenu;