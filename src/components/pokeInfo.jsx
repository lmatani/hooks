

const PokeInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>{data.name}</h2>
      <p><span>Peso:</span> {data.weight}</p>
      <p><span>Altura:</span> {data.height}</p>
      <p><img src={data.sprites.other.dream_world.front_default} alt={data.name}/></p> 
      </div>
  );
};

export default PokeInfo;
