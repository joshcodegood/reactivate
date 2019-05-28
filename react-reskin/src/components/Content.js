import React from "react";
import "../styles/Content.css";

class Content extends React.Component {

  toggleClass = event => {
    console.log("menu button toggled");
    this.props.mainIsShown ? this.props.contentUpdate(false) : this.props.contentUpdate(true)
  };

  render() {
    return (
      <main>
        <div
          id="menu-toggle"
          onClick={this.toggleClass}
          className={this.props.className}
        >
          {this.props.value}
        </div>
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
