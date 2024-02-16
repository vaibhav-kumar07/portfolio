import React from "react";
import LottieAnimation from "@/components/common/LottieAnimation";
import table from "../../public/table.json";
import Section from "@/components/Section";

export default function FrontendAndBackend() {
  const frontendTechnologies = [
    "Html",
    "Css",
    "React",
    "Nextjs",
    "TypeScript",
    "TailwindCss",
  ];
  const backendTechnologies = [
    "Node JS",
    "Express JS",
    "MongoDB",
    "PostMan",
    "Swagger",
  ];

  return (
    <div className="flex w-full h-[500px] bg-primary text-primary-foreground">
      <Section label="Frontend" technologies={frontendTechnologies} />
      <div className=" w-1/3  flex justify-center items-center -z-0">
        {/* <LottieAnimation animationData={table} /> */}
      </div>
      <Section label="Backend" technologies={backendTechnologies} />
    </div>
  );
}
