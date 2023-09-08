import { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handlePokemonFormSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <PokemonForm onSubmit={handlePokemonFormSubmit} />
      <PokemonInfo searchQuery={searchQuery} />
      <ToastContainer />
    </Container>
  );
}

export default App;
