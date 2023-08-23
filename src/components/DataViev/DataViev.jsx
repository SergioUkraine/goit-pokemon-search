export default function DataView({ pokemon: { sprites, name, stats } }) {
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
