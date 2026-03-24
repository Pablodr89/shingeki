"use client";
import Spinner from "@/components/Spinner/Spinner";
import { useGetCharacter } from "../hooks/useGetCharacter";
import CharacterFamily from "./CharacterFamily";
import Header from "./Header";
import PersonalData from "./PersonalData";
import Roles from "./Roles";

export default function CharacterPage({ id }: { id: string }) {
  const { data, isLoading } = useGetCharacter(id);

  return (
    <div className="pt-28 pb-32 min-h-screen relative overflow-hidden">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header data={data} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PersonalData data={data} />
            <CharacterFamily
              family={data?.relatives[0].family}
              members={data?.relatives[0].members}
            />
            <Roles roles={data?.roles} />
          </div>
        </>
      )}
    </div>
  );
}
