import React, { Component } from "react";
import "../styles/NavMenu.css";

class NavMenu extends Component {
  state = { menuClass: "" };

  componentDidMount() {
    // if (this.props.navHide === true) {
    //   console.log("menuClass is true");
    //   this.setState({ menuClass: "" });
    // } else {
    //   this.setState({ menuClass: "active" });
    // }
    this.toggleClass();
  }

  toggleClass = event => {
    console.log("nav menu toggled");
    // !this.props.navHide && this.state.menuClass === ""
    //   ? this.setState({ menuClass: "active" })
    //   : this.setState({ menuClass: "" });
      
    // // console.log(`in navMenu, parent state is: ${this.props.navHide}`);
    if (!this.props.navHide && this.state.menuClass === "") {
      console.log('a');
      return this.setState({ menuClass: "active" });
    } else {
      console.log('b')
      this.setState({menuClass: ""})
      return this.props.hidey(true);
    }
    // if (this.props.navHide === false && this.state.menuClass === "active") {
    //   console.log('b');
    //   this.setState({ menuClass: "" });
    //   return this.props.hidey(true);
    // }

    // if (this.props.navHide === true && this.state.menuClass === "active") {
    //   console.log('c');
    //   return this.setState({ menuClass: ""})
    // }
    // else {
    //   this.setState({ menuClass: "" });
    //   this.props.hidey(true);
    // }
  };

  render() {
    return (
      <nav className={this.state.menuClass}>
        <span
          id="close"
          onClick={this.toggleClass}
          className={this.state.menuClass}
        >
          X
        </span>
        <ul>
          <li>Home</li>
          <li>Give me money</li>
          <li>{this.props.navHide}</li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
