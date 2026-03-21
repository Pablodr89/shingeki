const apiBaseUrl = "https://api.attackontitanapi.com";

export const ApiRoutes = {
  Characters: `${apiBaseUrl}/characters`,
  titans: `${apiBaseUrl}/titans`,
  singleCharacter: (id: number) => `${apiBaseUrl}/characters/${id}`,
  singleTitan: (id: number) => `${apiBaseUrl}/titans/${id}`,
};
