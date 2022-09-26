import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCollection from "./components/PokemonCollection";
import { Detail, Pokemon } from "./interface";

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isShowDetail, setIsShowDetail] = useState<Detail>({
    id: 0,
    isShow: false,
  });

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      setNextUrl(response.data.next);
      response.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((prev) => [...prev, poke.data]);
      });
      setLoading(false);
    };
    getPokemons();
  }, []);

  const nextPage = async () => {
    setLoading(true);
    const response = await axios.get(nextUrl);
    setNextUrl(response.data.next);
    response.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((prev) => [...prev, poke.data]);
      setLoading(false); // set o day vi, bat dong do thi cai nay se chay sau ca ben ngoai
      console.log(1);
    });
    console.log(2);
  };

  console.log(pokemons);
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <h1>Pokemon</h1>
      <PokemonCollection
        pokemons={pokemons}
        isShowDetail={isShowDetail}
        setIsShowDetail={setIsShowDetail}
      />
      <div>
        <button
          onClick={nextPage}
          className="bg-white text-black py-1 px-3 font-bold rounded-lg"
        >
          {loading ? "LOADING..." : "LOAD MORE"}
        </button>
      </div>
    </div>
  );
};

export default App;
