import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import NavMenu from "./components/NavMenu";
import Photo from "./components/Photo";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  state = { navHidden: true };

  updateyMcgee = navStatus => {
    this.setState({ navHidden: navStatus });
  };

  render() {
    return (
      <div id="page">
        <NavMenu
          className={this.state.navHidden ? "" : "active"}
          navIsHidden={this.state.navHidden}
          navUpdate={this.updateyMcgee}
        />
        <Photo />
        <Content
          className={this.state.navHidden ? "active" : ""}
          value={this.state.navHidden ? "menu" : "x"}
          contentUpdate={this.updateyMcgee}
          mainIsShown={this.state.navHidden}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
