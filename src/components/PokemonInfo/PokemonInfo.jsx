import { Component } from 'react';
import { fetchPokemon } from 'services/pokemon-api';

import ErrorView from '../ErrorView';
import DataView from '../DataViev';
import PendingViev from '../PendingView';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  getPokemonData = searchQuery => {
    if (searchQuery === '') {
      return;
    }
    this.setState({ status: 'pending' });

    fetchPokemon(searchQuery)
      .then(pokemon => {
        this.setState({ pokemon, status: 'resolved' });
      })
      .catch(error => {
        this.setState({ error, status: 'rejected' });
      });
  };

  componentDidUpdate(prevProps) {
    const { searchQuery } = this.props;
    if (prevProps.searchQuery !== searchQuery) this.getPokemonData(searchQuery);
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <p>Put pokemon name</p>;
    }

    if (status === 'pending') {
      return <PendingViev pokemonName={this.props.searchQuery} />;
    }

    if (status === 'resolved') {
      return <DataView pokemon={pokemon} />;
    }

    if (status === 'rejected') {
      return <ErrorView message={error.message}></ErrorView>;
    }
  }
}

export default PokemonInfo;
