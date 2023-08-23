import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handlePokemonFormSubmit = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Container>
        <PokemonForm onSubmit={this.handlePokemonFormSubmit} />
        <PokemonInfo searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
