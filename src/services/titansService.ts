import { TitanApiItem, TitanApiResponse } from "@/interfaces/titansInterface";
import { mapTitans, Titan } from "@/mappers/titansMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListTitans = async (): Promise<Titan[]> => {
  try {
    const response = await fetch(
      // `${ApiRoutes.titans}&name=${searchText}&alliance=${alliance}`,
      `${ApiRoutes.titans}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: TitanApiResponse = await response.json();

    return mapTitans(data.results);
  } catch (error) {
    throw error;
  }
};

export const getTitan = async (id: string): Promise<TitanApiItem> => {
  try {
    const response = await fetch(`${ApiRoutes.titans}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: TitanApiItem = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
