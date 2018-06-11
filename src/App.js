import React, { Component } from 'react';
import './App.css';
// import Pet from './components/Pet';
import PetCollection from './components/PetCollection';

const PET_LIST = [
  {
    name: 'Bogart',
    age: 8,
    breed: 'Mixed',
    about: 'Bogart was Kirsten\'s great cat!'
  },
  {
    name: 'Atticuts',
    age: 2003,
    breed: 'Irish Wolfhound',
    about: 'Atticus is a senior citizen!'
  },
  {
    name: 'Bagel',
    age: 1,
    breed: 'Beagel',
    about: 'Bagel the beagle!'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <PetCollection petList={PET_LIST} />
      </div>
    );
  }
}

export default App;
