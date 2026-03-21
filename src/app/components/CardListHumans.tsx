import Image from "next/image";
import { icons } from "../images";
import { Human } from "../mappers/humansMapper";

export default function CardListHumans({ human }: { human: Human }) {
  return (
    <div className="group bg-surface-container-low hover:bg-surface-container rounded-lg transition-all duration-500 overflow-hidden relative border-l-2 border-primary/20">
      <div className="aspect-3/4 overflow-hidden relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          data-alt="Stoic soldier portrait with sharp features"
          src={human.img}
          alt="image character"
          width={300}
          height={400}
        />

        <div
          className={`absolute top-4 right-4 ${human.status === "Alive" ? "bg-primary-container" : "bg-tertiary-container"} text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-DEFAULT`}
        >
          {human.status}
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] text-outline font-label uppercase tracking-widest block mb-1">
              {human.species.join(", ")} / {human.occupation}
            </span>

            <h3 className="text-3xl font-headline font-bold text-on-background italic leading-none">
              {human.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-label uppercase tracking-tighter text-outline-variant">
          <span className="flex items-center gap-1">
            <Image src={icons.person} alt="gender" width={20} height={20} />
            {human.gender}
          </span>

          {human.groups.length > 0 && (
            <span className="flex items-center gap-1">
              <Image src={icons.shield} alt="gender" width={20} height={20} />
              {human.groups.map((group) => group.name).join(", ")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
