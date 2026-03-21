import {
  CharacterApiResponse,
  CharacterResponse,
} from "../interfaces/characterInterface";
import { mapCharacters } from "../mappers/charactersMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListCharacters = async ({
  pageParam = 1,
}): Promise<CharacterResponse> => {
  try {
    const response = await fetch(`${ApiRoutes.Characters}?page=${pageParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: CharacterApiResponse = await response.json();

    return {
      info: data.info,
      results: mapCharacters(data.results),
    };
  } catch (error) {
    throw error;
  }
};
