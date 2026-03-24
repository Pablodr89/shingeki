import { CharacterApiItem } from "@/interfaces/charactersInterface";

interface PersonalDataProps {
  data: CharacterApiItem | undefined;
}

export default function PersonalData({ data }: PersonalDataProps) {
  if (!data) return null;

  const { gender, age, height, birthplace, residence } = data;
  return (
    <div className="space-y-8">
      <h3 className="font-label text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">
        Personal Data
      </h3>

      <div className="bg-surface-container p-10 border-l-2 border-outline-variant/20 relative">
        <div className="absolute inset-0 grain-texture"></div>

        <ul className="space-y-8">
          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">
              Género
            </span>

            <span className="font-body font-medium text-lg tracking-tight">
              {gender}
            </span>
          </li>

          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">
              Edad
            </span>

            <span className="font-body font-medium text-lg tracking-tight">
              {age}
            </span>
          </li>

          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">
              Altura
            </span>

            <span className="font-body font-medium text-lg tracking-tight">
              {height}
            </span>
          </li>

          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">
              Lugar de nacimiento
            </span>

            <span className="font-body font-medium text-lg tracking-tight">
              {birthplace}
            </span>
          </li>

          <li className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
            <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">
              Residencia
            </span>

            <span className="font-body font-medium text-lg tracking-tight">
              {residence}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
