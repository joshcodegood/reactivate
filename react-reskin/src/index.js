import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import NavMenu from "./components/NavMenu";
import Photo from "./components/Photo";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { status: "active" }
  // }
  state = { navHidden: true };


  navRef = React.createRef();
  contentRef = React.createRef();

  // updateHandler = event => {
  //   this.navRef.current.toggleClass();
  //   this.contentRef.current.toggleClass();
  // }

  hideProvide = navStatus => {
    console.log(navStatus);
    this.setState({ navHidden: navStatus }, 
      
      e => {
      this.navRef.current.toggleClass();
      this.contentRef.current.toggleClass();
    });
  };

  toggleNav = event => {
    this.navHidden ? "active" : "inactive"
  }

  render() {
    return (
      <div id="page">
        <NavMenu
          ref={this.navRef}
          navHide={this.state.navHidden}
          hidey={this.hideProvide}
        />
        <Photo />
        <Content
          ref={this.contentRef}
          isHidden={this.hideProvide}
          navHider={this.state.navHidden}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
