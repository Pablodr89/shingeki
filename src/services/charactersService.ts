import {
  CharacterApiItem,
  CharacterApiResponse,
  CharacterResponse,
} from "@/interfaces/charactersInterface";
import { mapCharacters } from "@/mappers/charactersMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListCharacters = async ({
  pageParam = 1,
  name = "",
  gender = "",
  status = "",
}): Promise<CharacterResponse> => {
  const params = new URLSearchParams();
  params.set("page", String(pageParam));
  if (name) params.set("name", name);
  if (gender) params.set("gender", gender);
  if (status) params.set("status", status);

  try {
    const response = await fetch(
      `${ApiRoutes.characters}?${params.toString()}`,
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
