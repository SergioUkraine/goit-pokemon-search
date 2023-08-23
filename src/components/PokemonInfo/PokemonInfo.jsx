import { Component } from 'react';

class PokemonInfo extends Component {
  state = {
    loading: false,
    pokemon: null,
    error: null,
  };

  getPokemonData = () => {
    const { searchQuery } = this.props;
    if (this.props.searchQuery === '') {
      return;
    }
    this.setState({ loading: true, pokemon: null, error: null });

    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
        .then(response => {
          if (response.ok) return response.json();
          return Promise.reject(
            new Error(`Имя покемона ${searchQuery} не найдено`)
          );
        })
        .then(pokemon => {
          this.setState({ pokemon }, () => {
            console.log(this.state);
          });
        })
        .catch(error => {
          this.setState({ error }, () => {
            console.log(this.state);
          });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 500);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) this.getPokemonData();
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { searchQuery } = this.props;
    return (
      <div>
        {!searchQuery && <p>Put pokemon name</p>}
        {loading && <p>Loading...</p>}
        {pokemon && (
          <div>
            <p>Name: {pokemon.name}</p>{' '}
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width={'150px'}
              height={'150px'}
            />
          </div>
        )}
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default PokemonInfo;
