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
    next_page: string | null;
    prev_page: string | null;
  };
  results: TitanApiItem[];
}
