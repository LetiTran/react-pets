import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPetForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      breed: '',
      about: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue =
      fieldName ==='age' ? parseInt(event.target.value) : event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if(this.valid()) {

      this.props.addPetCallback(this.state);

      this.clearForm();
    }
  }

  valid =()=>{
    return this.state.name.length > 0 &&
    this.state.age > 0;
  }

  clearForm=()=>{
    this.setState({
      name: '',
      age: 0,
      breed: '',
      about: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          value={this.state.name}
          type="text"
          onChange= {this.onFieldChange}
        />
      </div>
      <div>
      <label htmlFor="age">Age: </label>
      <input
          name="age"
          value={this.state.age}
          type="number"
          onChange= {this.onFieldChange}
        />
      </div>
      <div>
        <label htmlFor="breed">Breed: </label>
        <input
          name="breed"
          value={this.state.breed}
          type="text"
          onChange= {this.onFieldChange}
        />
      </div>
      <div>
        <label htmlFor="about">About: </label>
        <textarea
          name="about"
          value={this.state.about}
          onChange= {this.onFieldChange}
        />
      </div>
        <input type="submit" value="Ada Pet"
      />
      </form>
    );
  }

}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
}

export default NewPetForm;
