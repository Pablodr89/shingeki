export interface TitanApiItem {
  id: number;
  name: string;
  img: string;
  height: string;
  abilities: string[];
  current_inheritor: string;
  former_inheritors: string[];
  allegiance: string;
}

// La respuesta completa de la API
export interface TitanApiResponse {
  info: {
    count: number;
    pages: number;
    next_page: null;
    prev_page: null;
  };
  results: TitanApiItem[];
}
