export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export interface Detail {
  id: number;
  isShow: boolean;
}
