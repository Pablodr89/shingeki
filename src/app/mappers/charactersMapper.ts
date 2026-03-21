import { Groups, CharacterApiItem } from "../interfaces/characterInterface";

export interface Character {
  id: number;
  name: string;
  img: string;
  species: string[];
  gender: string;
  status: string;
  occupation: string;
  groups: Groups[];
}

export const mapCharacters = (Characters: CharacterApiItem[]): Character[] =>
  Characters.map((Character) => ({
    id: Character.id,
    name: Character.name,
    img: Character.img,
    species: Character.species,
    gender: Character.gender,
    status: Character.status,
    occupation: Character.occupation,
    groups: Character.groups,
  }));
