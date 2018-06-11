import React, { Component } from 'react';
import './App.css';
// import Pet from './components/Pet';
import PetCollection from './components/PetCollection';




class App extends Component {
  render() {
    return (
      <div className="App">
      <PetCollection />
      </div>
    );
  }
}

export default App;
