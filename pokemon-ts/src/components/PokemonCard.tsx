import React, { useEffect, useState } from "react";
import { Detail, Pokemon } from "../interface";

interface Props {
  pokemon: Pokemon;
  isShowDetail: Detail;
  setIsShowDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCard: React.FC<Props> = ({
  pokemon,
  isShowDetail,
  setIsShowDetail,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const {
    id,
    name,
    sprites: { front_default },
    abilities,
  } = pokemon;

  useEffect(() => {
    setIsSelected(id === isShowDetail.id);
  }, [isShowDetail]);

  const closeDetail = () => {
    setIsShowDetail({
      id: 0,
      isShow: false,
    });
  };

  return (
    <>
      {isSelected ? (
        <div className="bg-white rounded-xl cursor-pointer text-black absolute top-[25%] left-[50%] translate-x-[-50%] scale-125">
          <span
            className="absolute right-0 top-0 translate-x-[-50%] text-4xl font-bold"
            onClick={closeDetail}
          >
            x
          </span>
          <div className="bg-orange-200 rounded-xl flex gap-2 items-center pt-8 px-5">
            <img src={front_default} alt="" className="object-cover" />
            <h4 className="text-center">{name}</h4>
          </div>
          <div className="px-5 py-2 font-medium">
            <h4>Abilities: </h4>
            {abilities?.map(
              (
                abilitiesItem: {
                  ability: {
                    name: string;
                  };
                },
                index
              ) => (
                <p key={index}>{abilitiesItem.ability.name}</p>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl px-4 py-1 cursor-pointer text-black">
          <h4 className="text-center">{name}</h4>
          <img src={front_default} alt="" className="object-cover" />
        </div>
      )}
    </>
  );
};

export default PokemonCard;
