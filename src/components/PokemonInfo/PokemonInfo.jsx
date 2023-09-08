import { useState, useEffect } from 'react';
import { fetchPokemon } from 'services/pokemon-api';
import PropTypes from 'prop-types';

import ErrorView from '../ErrorView';
import DataView from '../DataViev';
import PendingViev from '../PendingView';

function PokemonInfo({ searchQuery }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchQuery === '') return;

    setStatus('pending');
    fetchPokemon(searchQuery)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchQuery]);

  if (status === 'idle') {
    return <p>Put pokemon name</p>;
  }

  if (status === 'pending') {
    return <PendingViev pokemonName={searchQuery} />;
  }

  if (status === 'resolved') {
    return <DataView pokemon={pokemon} />;
  }

  if (status === 'rejected') {
    return <ErrorView message={error.message}></ErrorView>;
  }
}

PokemonInfo.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default PokemonInfo;
