import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';
import pendingImage from '../../images/unknown.jpg';
import DataViev from '../DataViev';

function PendingViev({ pokemonName }) {
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

PendingViev.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PendingViev;
