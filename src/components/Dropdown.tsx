"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { icons } from "@/images";

interface DropdownProps<T> {
  title: string;
  options: string[];
  selected: T;
  setSelected: Dispatch<SetStateAction<T>>;
}

export const Dropdown = <T,>({
  title,
  options,
  selected,
  setSelected,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-64 relative">
      <label className="block text-[10px] uppercase tracking-widest text-outline mb-2 font-bold">
        {title}
      </label>

      <button
        onClick={() => setOpen(!open)}
        className="w-full cursor-pointer pl-1 bg-transparent border-0 border-b-2 border-outline-variant pb-1 text-on-surface font-body flex justify-between items-center focus:outline-none focus:border-primary transition-colors"
      >
        {(selected as string) === ""
          ? "All"
          : (selected as string).charAt(0).toUpperCase() +
            (selected as string).slice(1)}

        <Image
          src={icons.arrowDown}
          alt="Dropdown Arrow"
          width={16}
          height={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute top-full left-0 w-full bg-surface-container-high border border-outline-variant rounded-b-lg z-50 overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option as T);
                setOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors hover:bg-surface-container-highest
                ${selected === option ? "text-primary" : "text-on-surface"}`}
            >
              {option === ""
                ? "All"
                : option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
