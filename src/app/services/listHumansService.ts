import { HumanApiResponse, HumanResponse } from "../interfaces/humanInterface";
import { mapHumans } from "../mappers/humansMapper";
import { ApiRoutes } from "./apiRoutes";

export const getListHumans = async ({
  pageParam = 1,
}): Promise<HumanResponse> => {
  try {
    const response = await fetch(`${ApiRoutes.humans}?page=${pageParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: HumanApiResponse = await response.json();

    return {
      info: data.info,
      results: mapHumans(data.results),
    };
  } catch (error) {
    throw error;
  }
};
