import { ImSpinner } from 'react-icons/im';
import pendingImage from '../../images/unknown.jpg';
import DataViev from '../DataViev';

export default function PendingViev({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <DataViev pokemon={pokemon} />
      <ImSpinner size="32" />
      Loading...
    </div>
  );
}
