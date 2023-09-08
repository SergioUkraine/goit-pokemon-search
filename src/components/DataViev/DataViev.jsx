import PropTypes from 'prop-types';

function DataView({ pokemon: { sprites, name, stats } }) {
  console.log(typeof sprites);
  console.log(typeof name);
  console.log(typeof stats);
  return (
    <div>
      <p>Name: {name}</p>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width={'250px'}
      />
      <p>Stats</p>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}:{entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

DataView.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default DataView;
