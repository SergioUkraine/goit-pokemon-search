export function fetchPokemon(searchQuery) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`).then(
    response => {
      if (response.ok) return response.json();
      return Promise.reject(
        new Error(`Имя покемона ${searchQuery} не найдено`)
      );
    }
  );
}
