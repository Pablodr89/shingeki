import {
  CharacterApiItem,
  CharacterApiResponse,
  CharacterResponse,
} from "@/interfaces/charactersInterface";
import { mapCharacters } from "@/mappers/charactersMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListCharacters = async ({
  pageParam = 1,
  // searchText?,
  // gender?,
  // status?,
}): Promise<CharacterResponse> => {
  try {
    const response = await fetch(
      // `${ApiRoutes.Characters}?page=${pageParam}&name=${searchText}&gender=${gender}&status=${status}`,
      `${ApiRoutes.characters}?page=${pageParam}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data: CharacterApiResponse = await response.json();

    return {
      info: data.info,
      results: mapCharacters(data.results),
    };
  } catch (error) {
    throw error;
  }
};

export const getCharacter = async (id: string): Promise<CharacterApiItem> => {
  try {
    const response = await fetch(`${ApiRoutes.characters}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: CharacterApiItem = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
