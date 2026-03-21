import { Groups, HumanApiItem } from "../interfaces/humanInterface";

export interface Human {
  id: number;
  name: string;
  img: string;
  species: string[];
  gender: string;
  status: string;
  occupation: string;
  groups: Groups[];
}

export const mapHumans = (humans: HumanApiItem[]): Human[] =>
  humans.map((human) => ({
    id: human.id,
    name: human.name,
    img: human.img,
    species: human.species,
    gender: human.gender,
    status: human.status,
    occupation: human.occupation,
    groups: human.groups,
  }));
