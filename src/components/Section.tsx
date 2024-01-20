import React from "react";

export default function Section({
  label,
  technologies,
}: {
  label: string;
  technologies: string[];
}) {
  return (
    <div className="w-1/3   flex flex-col p-10  justify-center items-center">
      <div className="text-6xl font-bold text-center tracking-widest mb-4">
        {label}
      </div>
      <ul className="w-4/5 list-none flex flex-wrap justify-center  items-center gap-2">
        {technologies.map((technology: string, index: number) => (
          <li
            key={index}
            className="px-3 py-1 rounded-full bg-green-200 text-primary text-sm tracking-wider font-semibold"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
