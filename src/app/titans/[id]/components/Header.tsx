import Image from "next/image";
import InfoTitan from "./InfoTitan";
import { TitanApiItem } from "@/interfaces/titansInterface";
import CardInheritor from "./CardInheritor";
import { useTitanStore } from "@/store/titanStore";
import Button from "@/components/Button";

interface HeaderProps {
  data: TitanApiItem | undefined;
}

export default function Header({ data }: HeaderProps) {
  const { setTitan } = useTitanStore();

  if (!data) return null;

  const { img, name, current_inheritor } = data;

  return (
    <section className="flex flex-col gap-10">
      <div className="relative lg:h-204.75 w-full overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest via-transparent to-transparent z-10"></div>
        <Image
          className="w-full h-full"
          alt="image titan"
          src={img ?? ""}
          width={0}
          height={0}
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-end px-12 pb-12 lg:pb-24">
          <div className="max-w-4xl">
            <h1 className="font-headline text-6xl lg:text-7xl md:text-9xl font-bold tracking-tighter text-on-surface uppercase mb-4 leading-none">
              {name}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-14 w-full px-5 lg:px-0">
        <InfoTitan data={data} />

        <div className="md:col-span-8">
          <CardInheritor inheritor={current_inheritor} />

          <div className="lg:hidden pt-10 w-full">
            <Button
              title="Titan favorito"
              onClickHandler={() => setTitan(data)}
              customClasses="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
