import Image from "next/image";
import { icons } from "@/images";
import { Character } from "@/mappers/charactersMapper";
import Link from "next/link";
import { AppRoutes } from "@/AppRoutes";

export default function CardListCharacters({
  character,
}: {
  character: Character;
}) {
  return (
    <Link
      href={`${AppRoutes.characters}/${character.id}`}
      className="group cursor-pointer bg-surface-container-low hover:bg-surface-container rounded-lg transition-all duration-500 overflow-hidden relative border-l-2 border-primary/20"
    >
      <div className="aspect-3/4 overflow-hidden relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={character.img ? character.img : icons.person}
          alt="image character"
          width={300}
          height={400}
          priority
        />

        <div
          className={`absolute top-4 right-4 ${character.status === "Alive" ? "bg-primary-container" : "bg-tertiary-container"} text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-DEFAULT`}
        >
          {character.status}
        </div>
      </div>

      <div className="flex flex-col justify-between min-h-40 p-6">
        <div className="flex flex-col items-start gap-2">
          <span className="text-[10px] text-outline font-label uppercase tracking-widest block">
            {character.species.join(", ")} / {character.occupation}
          </span>

          <h3 className="text-3xl font-headline font-bold text-on-background italic leading-none">
            {character.name}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-label uppercase tracking-tighter text-outline-variant">
          <span className="flex items-center gap-1">
            <Image src={icons.person} alt="gender" width={20} height={20} />
            {character.gender === "Ambiguous[9]" ? "Female" : character.gender}
          </span>

          {character.groups.length > 0 && (
            <span className="flex items-center gap-1">
              <Image src={icons.shield} alt="group" width={20} height={20} />
              {character.groups.map((group) => group.name).join(", ")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
