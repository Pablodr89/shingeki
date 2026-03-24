import isHttpUrl from "@/utils/validateUrl";
import { useGetCharacter } from "../hooks/useGetCharacter";

interface FamilyMemberProps {
  member: string;
}

export default function FamilyMember({ member }: FamilyMemberProps) {
  const isUrl = isHttpUrl(member);
  const id = isUrl ? (member.split("/").pop() ?? "") : "";
  const { data } = useGetCharacter(id);

  return (
    <div className="text-sm font-label text-on-surface-variant font-medium">
      • {isUrl ? data?.name : member}
    </div>
  );
}
