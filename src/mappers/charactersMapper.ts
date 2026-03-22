import { Groups, CharacterApiItem } from "@/interfaces/charactersInterface";

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

export const mapCharacters = (characters: CharacterApiItem[]): Character[] =>
  characters.map((character) => ({
    id: character.id,
    name: character.name,
    img: character.img,
    species: character.species,
    gender: character.gender,
    status: character.status,
    occupation: character.occupation,
    groups: character.groups,
  }));
