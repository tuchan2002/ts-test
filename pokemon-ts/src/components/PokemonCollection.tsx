import { Detail, Pokemon } from "../interface";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: Pokemon[];
  isShowDetail: Detail;
  setIsShowDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = ({
  pokemons,
  isShowDetail,
  setIsShowDetail,
}) => {
  const selectPokemon = (id: number) => {
    if (!isShowDetail.isShow) {
      setIsShowDetail({
        id,
        isShow: true,
      });
    }
  };

  return (
    <>
      {isShowDetail.isShow && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-violet-900"></div>
      )}
      <div className="flex flex-wrap justify-center items-center gap-5">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
            <PokemonCard
              pokemon={pokemon}
              isShowDetail={isShowDetail}
              setIsShowDetail={setIsShowDetail}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonCollection;
