import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import NavMenu from './components/NavMenu';
import Photo from './components/Photo';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { status: "active" }
  // }
  state = { status: "active" };

  // componentDidMount() {
  //   console.log(this.state.status);
  // }

  render() {
    return (
      <div id='page'>
        <NavMenu />
        <Photo />
        <Content />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);