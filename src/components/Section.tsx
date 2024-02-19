import Link from "next/link";
import React from "react";

export default function Section({
  label,
  technologies,
}: {
  label: string;
  technologies: { title: string; link: string }[];
}) {
  return (
    <div className="w-1/3 flex flex-col p-10  justify-center items-center">
      <div className="text-4xl font-bold text-center tracking-widest mb-4">
        {label}
      </div>
      <ul className="w-4/5 list-none flex flex-wrap justify-center  items-center gap-2">
        {technologies.map((technology: any, index: number) => (
          <Link
            key={index}
            href={`${technology.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-white text-primary  font-semibold text-sm tracking-wider"
          >
            {technology.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
