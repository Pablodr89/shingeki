import { Relative } from "@/interfaces/charactersInterface";
import FamilyMember from "./FamilyMember";

interface CharacterFamilyProps {
  name: string | undefined;
  relatives: Relative[] | undefined;
}
export default function CharacterFamily({
  name,
  relatives,
}: CharacterFamilyProps) {
  const members =
    (relatives ?? []).length > 0 ? (relatives ?? [])[0].members : [];
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-label text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">
          Familia
        </h3>

        <div className="bg-surface-container-low p-6 border-t-2 border-outline-variant/20">
          <p className="font-headline text-xl italic mb-4">{name} family</p>

          <div className="grid grid-cols-2 gap-4">
            {members.map((member, i) => (
              <FamilyMember key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
