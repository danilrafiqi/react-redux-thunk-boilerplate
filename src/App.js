import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log(this.props)}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
