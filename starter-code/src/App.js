import React, { Component } from 'react';
import './App.css';
import CharList from './CharList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <CharList />
      </div>   
    );
  }
}

export default App;
