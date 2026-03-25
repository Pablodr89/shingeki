"use client";
import Link from "next/link";
import { AppRoutes } from "@/AppRoutes";
import { usePathname } from "next/navigation";
import { useTitanStore } from "@/store/titanStore";
import { useCharacterStore } from "@/store/characterStore";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { character } = useCharacterStore();
  const { titan } = useTitanStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b-2 border-zinc-800/50 shadow-2xl shadow-black/50 flex justify-between items-center px-6 h-20">
      <div className="flex justify-between items-center gap-8 max-[2000px]:max-w-7xl min-[2000px]:max-w-400 mx-auto w-full">
        <div className="flex items-center gap-8">
          <h1 className="hidden lg:inline-block text-2xl font-bold italic text-emerald-100 uppercase tracking-widest font-headline">
            Shingeki No Kyojin
          </h1>

          <nav className="flex items-center gap-6 font-headline tracking-tight">
            <Link
              className={
                pathname.includes(AppRoutes.characters)
                  ? "text-emerald-200 underline underline-offset-4"
                  : "text-zinc-500 hover:text-emerald-200 transition-colors duration-300"
              }
              href={AppRoutes.characters}
            >
              Personajes
            </Link>

            <Link
              className={
                pathname.includes(AppRoutes.titans)
                  ? "text-emerald-200 underline underline-offset-4"
                  : "text-zinc-500 hover:text-emerald-200 transition-colors duration-300"
              }
              href={AppRoutes.titans}
            >
              Titanes
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          {character && (
            <Link href={`${AppRoutes.characters}/${character.id}`}>
              <Image
                src={character?.img ?? ""}
                alt="image character"
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-full"
                priority
              />
            </Link>
          )}

          {titan && (
            <Link href={`${AppRoutes.titans}/${titan.id}`}>
              <Image
                src={titan?.img ?? ""}
                alt="image titan"
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-full"
                priority
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
