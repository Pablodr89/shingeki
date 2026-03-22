import { useMemo } from "react";
import { Titan } from "@/mappers/titansMapper";
import { Alliance } from "@/interfaces";

export const useFilteredTitans = (
  data: Titan[] | undefined,
  searchText: string,
  alliance: Alliance,
) => {
  const filteredTitans = useMemo(() => {
    const filteredSearch = data?.filter((titan) =>
      titan.name.toLowerCase().includes(searchText),
    );
    const filteredAlliance = data?.filter(
      (titan) => titan.allegiance === alliance,
    );

    return searchText !== ""
      ? filteredSearch
      : alliance !== Alliance.ALL
        ? filteredAlliance
        : data;
  }, [alliance, data, searchText]);

  return filteredTitans;
};
