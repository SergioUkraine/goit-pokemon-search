import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <div>
        <PokemonForm onSubmit={this.handlePokemonFormSubmit} />
        <PokemonInfo searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
