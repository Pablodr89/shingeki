import { Human } from "../mappers/humansMapper";

export interface HumanApiItem {
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

// La respuesta completa de la API
export interface HumanApiResponse {
  info: {
    count: number;
    pages: number;
    next_page: string | null;
    prev_page: string | null;
  };
  results: HumanApiItem[]; // ← usa HumanApiItem, no HumanApiResponse
}

export interface HumanResponse {
  info: HumanApiResponse["info"];
  results: Human[];
}

export interface Relative {
  family: string;
  members: string[];
}

export interface Groups {
  name: string;
  sub_groups: string[];
}
