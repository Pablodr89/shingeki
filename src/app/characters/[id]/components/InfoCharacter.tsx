import Button from "@/components/Button";
import { CharacterApiItem } from "@/interfaces/charactersInterface";
import { useCharacterStore } from "@/store/characterStore";

interface InfoCharacterProps {
  data: CharacterApiItem | undefined;
}

export default function InfoCharacter({ data }: InfoCharacterProps) {
  const { setCharacter } = useCharacterStore();

  if (!data) return null;

  const { name, alias, species, occupation } = data;

  return (
    <div className="lg:col-span-7 pt-12">
      <h1 className="font-headline text-4xl lg:text-7xl md:text-8xl italic font-extrabold text-on-surface mb-6 leading-tight tracking-tighter">
        {name}
      </h1>

      {alias.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {alias.map((item, i) => (
            <span
              key={i}
              className="bg-surface-container-high px-4 py-1.5 font-label text-[10px] font-bold uppercase tracking-widest text-secondary border-l-2 border-outline-variant/30"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-y-10 gap-x-12 border-t border-outline-variant/20 pt-10">
        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            Especie
          </label>

          {species.map((item, i) => (
            <p
              key={i}
              className="font-headline text-2xl italic text-on-surface"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="space-y-1">
          <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            Ocupación
          </label>

          <p className="font-headline text-2xl italic text-on-surface">
            {occupation}
          </p>
        </div>
      </div>

      <div className="pt-10">
        <Button
          title="Personaje favorito"
          onClickHandler={() => setCharacter(data)}
          customClasses="w-full"
        />
      </div>
    </div>
  );
}
