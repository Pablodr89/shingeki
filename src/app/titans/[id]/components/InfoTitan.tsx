interface InfoTitan {
  height: string;
  allegiance: string;
  abilities: string[];
}

export default function InfoTitan({
  height,
  allegiance,
  abilities,
}: InfoTitan) {
  return (
    <div className="md:col-span-4 space-y-12">
      <div className="border-l-2 border-outline-variant/20 pl-8">
        <h2 className="font-label text-xs text-secondary tracking-[0.3em] uppercase mb-8">
          Información Táctica
        </h2>

        <div className="space-y-8">
          <div className="group">
            <div className="text-xs text-outline tracking-widest uppercase mb-1">
              Altura
            </div>

            <div className="font-headline text-5xl text-on-surface font-light">
              {height}
            </div>
          </div>

          <div className="group">
            <div className="text-xs text-outline tracking-widest uppercase mb-1">
              Alianza
            </div>

            <div className="font-headline text-4xl text-primary font-medium">
              {allegiance}
            </div>
          </div>

          <div className="group">
            <div className="text-xs text-outline tracking-widest uppercase mb-1">
              Habilidades
            </div>

            <div className="flex flex-col gap-2">
              {abilities.map((ability, i) => (
                <span
                  key={i}
                  className="inline-block bg-surface-container-high px-4 py-2 text-on-surface-variant text-sm border border-outline-variant/20"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
