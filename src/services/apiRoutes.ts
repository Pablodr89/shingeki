const apiBaseUrl = "https://api.attackontitanapi.com";

export const ApiRoutes = {
  characters: `${apiBaseUrl}/characters`,
  titans: `${apiBaseUrl}/titans`,
  singleCharacter: (id: number) => `${apiBaseUrl}/characters/${id}`,
  singleTitan: (id: number) => `${apiBaseUrl}/titans/${id}`,
};
