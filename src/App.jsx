import useFecthCharacters from './hooks/useFecthCharacters';
import './App.css';
import PokemonInfo from './components/pokeInfo';
import RickInfo from './components/rickInfo';


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const { data, error } = useFecthCharacters('');
  const poke = useFecthCharacters(urlPokemon);
  const rick = useFecthCharacters(urlRick);

  if (poke.error) return <div>Error: {poke.error.message}</div>;

  return (
    <>
      <div>
        <h1>Personaje Pokemon</h1>
        <PokemonInfo data={poke.data} />
      </div>
      <div>
        <h1>Personaje Rick And Morty</h1>
        <RickInfo data={rick.data} />
      </div>
    </>
  );
}

export default App;

