import { useGetCharacter } from "@/app/characters/[id]/hooks/useGetCharacter";
import { AppRoutes } from "@/AppRoutes";
import Image from "next/image";
import Link from "next/link";

interface CardFormerInheritorProps {
  inheritor: string;
}

export default function CardInheritor({ inheritor }: CardFormerInheritorProps) {
  const id = inheritor.split("/").pop() ?? "";
  const { data } = useGetCharacter(id);

  return (
    <Link
      href={`${AppRoutes.characters}/${id}`}
      className="group cursor-pointer"
    >
      <div className="relative aspect-3/4 mb-6 overflow-hidden bg-surface-container-high border-b-2 border-transparent group-hover:border-primary transition-all">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          alt="Portrait of a young man with intense eyes and long hair"
          src={data?.img ?? ""}
          width={300}
          height={400}
          priority
        />

        <div
          className={`absolute top-4 right-4 ${data?.status === "Alive" ? "bg-primary-container" : "bg-tertiary-container"} backdrop-blur-sm px-3 py-1 text-[10px] font-label text-on-primary-container tracking-widest uppercase`}
        >
          {data?.status}
        </div>
      </div>

      <h4 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">
        {data?.name}
      </h4>
    </Link>
  );
}
