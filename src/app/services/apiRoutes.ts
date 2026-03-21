const apiBaseUrl = "https://api.attackontitanapi.com";

export const ApiRoutes = {
  humans: `${apiBaseUrl}/characters`,
  titans: `${apiBaseUrl}/titans`,
  singleHuman: (id: number) => `${apiBaseUrl}/characters/${id}`,
  singleTitan: (id: number) => `${apiBaseUrl}/titans/${id}`,
};
