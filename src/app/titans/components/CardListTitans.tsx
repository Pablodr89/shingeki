import Image from "next/image";
import { icons } from "@/images";
import { Titan } from "@/mappers/titansMapper";

export default function CardListTitans({ titan }: { titan: Titan }) {
  return (
    <div className="group cursor-pointer bg-surface-container-low hover:bg-surface-container rounded-lg transition-all duration-500 overflow-hidden relative border-l-2 border-primary/20">
      <div className="aspect-3/4 overflow-hidden relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={titan.img ? titan.img : icons.person}
          alt="image titan"
          width={300}
          height={400}
        />

        <div
          className={`absolute top-4 right-4 ${titan.allegiance === "Eldia" ? "bg-primary-container" : "bg-tertiary-container"} text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-DEFAULT`}
        >
          {titan.allegiance}
        </div>
      </div>

      <div className="flex flex-col justify-between min-h-48 p-6">
        <div className="flex flex-col items-start gap-2">
          <span className="text-md text-outline font-label uppercase tracking-widest block">
            {titan.height}
          </span>

          <h3 className="text-3xl font-headline font-bold text-on-background italic leading-none">
            {titan.name}
          </h3>
        </div>

        <div className="flex items-start gap-2 text-xs font-label tracking-tighter text-outline-variant">
          <Image src={icons.shield} alt="abilities" width={20} height={20} />

          {titan.abilities.join(", ")}
        </div>
      </div>
    </div>
  );
}
