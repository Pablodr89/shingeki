import Image from "next/image";
import InfoCharacter from "./InfoCharacter";
import { CharacterApiItem } from "@/interfaces/charactersInterface";

interface HeaderProps {
  data: CharacterApiItem | undefined;
}

export default function Header({ data }: HeaderProps) {
  if (!data) return null;

  const { img, status } = data;
  return (
    <section>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-container/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-primary/40 pointer-events-none"></div>

            <div className="bg-surface-container shadow-[0_32px_64px_rgba(0,0,0,0.6)] relative overflow-visible">
              <div className="absolute inset-0 grain-texture"></div>
              <Image
                alt="image character"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                src={img ?? ""}
                width={0}
                height={0}
                sizes="100vw"
              />

              <div
                className={`absolute top-6 right-0 translate-x-1/2 ${data.status === "Alive" ? "bg-primary-container" : "bg-tertiary-container"} text-on-primary-container px-6 py-2 font-label text-xs font-bold tracking-[0.2em] uppercase shadow-xl`}
              >
                Estado: {status}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary/40 pointer-events-none"></div>
          </div>

          <InfoCharacter data={data} />
        </div>
      </div>
    </section>
  );
}
