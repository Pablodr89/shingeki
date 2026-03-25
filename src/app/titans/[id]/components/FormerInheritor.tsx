import CardInheritor from "./CardInheritor";

interface FormerProps {
  formerInheritors: string[] | undefined;
}

export default function FormerInheritor({ formerInheritors }: FormerProps) {
  return (
    <section className="flex flex-col gap-10 px-5 lg:px-0">
      <h3 className="font-headline text-5xl text-on-surface">
        Antecesores del titan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formerInheritors?.length === 0 ? (
          <p className="text-on-surface">
            No existen datos sobre sus antecesores
          </p>
        ) : (
          formerInheritors?.map((inheritor, i) => (
            <CardInheritor key={i} inheritor={inheritor} />
          ))
        )}
      </div>
    </section>
  );
}
