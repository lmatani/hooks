

const RickInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>{data.name}</h2>
      <p><span>Esatado:</span> {data.status}</p>
      <p><span>Especie:</span> {data.species}</p>
      <p><img src={data.image} alt={data.name}/></p> 
     </div>
  );
};

export default RickInfo;