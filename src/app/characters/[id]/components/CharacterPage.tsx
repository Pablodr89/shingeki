"use client";
import Spinner from "@/components/Spinner/Spinner";
import { useGetCharacter } from "../hooks/useGetCharacter";
import CharacterFamily from "./CharacterFamily";
import Header from "./Header";
import PersonalData from "./PersonalData";
import Roles from "./Roles";

export default function CharacterPage({ id }: { id: string }) {
  const { data, isLoading } = useGetCharacter(id);
  console.log(data);

  return (
    <div className="pt-28 pb-32 min-h-screen relative overflow-hidden">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header data={data} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PersonalData data={data} />

            <CharacterFamily name={data?.name} relatives={data?.relatives} />

            <Roles roles={data?.roles} />
          </div>
        </>
      )}
    </div>
  );
}
