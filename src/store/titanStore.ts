import { TitanApiItem } from "@/interfaces/titansInterface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TitanStore {
  titan: TitanApiItem | null;
  setTitan: (titan: TitanApiItem) => void;
}

export const useTitanStore = create<TitanStore>()(
  persist(
    (set) => ({
      titan: null,

      setTitan: (titan) => {
        set({ titan: titan });
      },
    }),
    {
      name: "titan-storage",
    },
  ),
);
