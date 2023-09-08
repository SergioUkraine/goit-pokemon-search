import { useState, useEffect } from 'react';
import { fetchPokemon } from 'services/pokemon-api';
import PropTypes from 'prop-types';

import ErrorView from '../ErrorView';
import DataView from '../DataViev';
import PendingViev from '../PendingView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function PokemonInfo({ searchQuery }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (searchQuery === '') return;

    setStatus(Status.PENDING);
    fetchPokemon(searchQuery)
      .then(pokemon => {
        setStatus(Status.RESOLVED);
        setPokemon(pokemon);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  if (status === Status.IDLE) {
    return <p>Put pokemon name</p>;
  }

  if (status === Status.PENDING) {
    return <PendingViev pokemonName={searchQuery} />;
  }

  if (status === Status.RESOLVED) {
    return <DataView pokemon={pokemon} />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView message={error.message}></ErrorView>;
  }
}

PokemonInfo.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default PokemonInfo;
