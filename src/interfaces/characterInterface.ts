import { Character } from "@/mappers/charactersMapper";

export interface CharacterApiItem {
  id: number;
  name: string;
  img: string;
  alias: string[];
  species: string[];
  gender: string;
  age: number;
  relatives: Relative[];
  birthplace: string;
  residence: string;
  status: string;
  occupation: string;
  groups: Groups[];
  roles: string[];
  episodes: string[];
}

export interface CharacterApiResponse {
  info: {
    count: number;
    pages: number;
    next_page: string | null;
    prev_page: string | null;
  };
  results: CharacterApiItem[];
}

export interface CharacterResponse {
  info: CharacterApiResponse["info"];
  results: Character[];
}

export interface Relative {
  family: string;
  members: string[];
}

export interface Groups {
  name: string;
  sub_groups: string[];
}
