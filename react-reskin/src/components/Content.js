import React from "react";
import "../styles/Content.css";

class Content extends React.Component {
  state = { menuClass: "" };

  componentDidMount() {
    if (this.props.navHider === true) {
      this.setState({ menuClass: "active" });
    }
  }

  toggleClass = event => {
    console.log("menu button toggled");
    if (this.props.navHider === true) {
      this.setState({ menuClass: "" });
      this.props.isHidden(false);
    }
  };

  render() {
    return (
      <main>
        <span
          id="menu-toggle"
          onClick={this.toggleClass}
          className={this.state.menuClass}
        >
          MENU
        </span>
        <h1>johnnyk</h1>
        <p>My name is Johnny karate</p>
        <p>AKA Burt Macklin</p>
        <p>I have my own TV show.</p>
        <p>I'm available for parties.</p>
      </main>
    );
  }
}

export default Content;
