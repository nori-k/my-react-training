import React, { Component } from 'react';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <NavBar 
            onToggle={() => this.handleToggle()}
            open={this.state.open}
          />
        </div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            This is My first React+Material-UI page anyway.
          </p>
      </div>
    );
  }
}

export default App;
