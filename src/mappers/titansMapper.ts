import { TitanApiItem } from "@/interfaces/titansInterface";

export interface Titan {
  id: number;
  name: string;
  img: string;
  height: string;
  abilities: string[];
  allegiance: string;
}

export const mapTitans = (titans: TitanApiItem[]): Titan[] =>
  titans.map((titan) => ({
    id: titan.id,
    name: titan.name,
    img: titan.img,
    height: titan.height,
    abilities: titan.abilities,
    allegiance: titan.allegiance,
  }));
