import { CharacterApiItem } from "@/interfaces/charactersInterface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CharacterStore {
  character: CharacterApiItem | null;
  setCharacter: (character: CharacterApiItem) => void;
}

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      character: null,

      setCharacter: (character) => {
        set({ character: character });
      },
    }),
    {
      name: "character-storage",
    },
  ),
);
