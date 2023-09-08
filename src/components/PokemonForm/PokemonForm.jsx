import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { Container, SearchInput, SearchButton } from './PokemonForm.styled';

import { toast } from 'react-toastify';

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (pokemonName.trim() === '') {
      toast.warn('Put request query');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };
  return (
    <Container onSubmit={handleFormSubmit}>
      <SearchInput
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <SearchButton type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </SearchButton>
    </Container>
  );
}

PokemonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PokemonForm;
