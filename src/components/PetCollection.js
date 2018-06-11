import React, { Component } from 'react';
import Pet from './Pet';
import NewPetForm from './NewPetForm';
import axios from 'axios';

class PetCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    }
  }
  // we need state instead of props because props cannot be changed withing the component!


componentDidMount = () => {
  console.log('Component did mount was called');

  // axios.get('').then().catch();
  axios.get('https://petdibs.herokuapp.com/pets')
    .then( (response) => {
      console.log(response); //to see how the data looks like and decide what we want.
      this.setState({
        pets: response.data
      });
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      })
    });
}

  renderPetList = () => {
      const componentList = this.state.pets.map((pet, index) => {
        return (
          <Pet
           key={index}
           name={pet.name}
           age={pet.age}
           breed={pet.breed}
           about={pet.about}
          />
        );
      });
      return componentList;
    }

    addPet = (pet) => {
      const petList = this.state.pets;

      petList.push(pet);
      this.setState({
        petList,
      });
    }

  render() {
    return (
      <section>
      <p>{this.state.error}</p>
      {this.renderPetList()}
      <NewPetForm addPetCallback={this.addPet}/>
      </section>
    )
  }
}


export default PetCollection;
