import { TitanApiResponse } from "@/interfaces/titansInterface";
import { mapTitans, Titan } from "@/mappers/titansMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListTitans = async (
  {
    // searchText?,
    // alliance?,
  },
): Promise<Titan[]> => {
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
