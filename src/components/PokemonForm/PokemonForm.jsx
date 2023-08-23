import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Container, SearchInput, SearchButton } from './PokemonForm.styled';

import { toast } from 'react-toastify';

class PokemonForm extends Component {
  state = { pokemonName: '' };

  handleNameChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value.toLowerCase(),
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.warn('Put request query');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <Container onSubmit={this.handleFormSubmit}>
        <SearchInput
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <SearchButton type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </SearchButton>
      </Container>
    );
  }
}

export default PokemonForm;
