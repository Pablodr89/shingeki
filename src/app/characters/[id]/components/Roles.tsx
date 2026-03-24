import { icons } from "@/images";
import Image from "next/image";

interface RolesProps {
  roles: string[] | undefined;
}

export default function Roles({ roles }: RolesProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-label text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">
          Titan
        </h3>

        <div className="space-y-4">
          {roles?.map((role, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-4 bg-surface-container-high hover:bg-emerald-900/10 transition-colors duration-300"
            >
              <Image
                src={icons.roles}
                alt="icon attack"
                width={40}
                height={40}
              />

              <div>
                <p className="font-label text-xs font-black uppercase tracking-widest text-on-surface">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
