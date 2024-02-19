import React from "react";
import LottieAnimation from "@/components/common/LottieAnimation";
import table from "../../public/table.json";
import Section from "@/components/Section";

export default function FrontendAndBackend() {
  const frontendTechnologies = [
    {
      title: "Html",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { title: "Css", link: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { title: "React", link: "https://react.dev/" },
    { title: "Nextjs", link: "https://nextjs.org/" },
    { title: "TypeScript", link: "//www.typescriptlang.org/" },
    { title: "TailwindCss", link: "https://tailwindcss.com/" },
  ];
  const backendTechnologies = [
    {
      title: "Node JS",
      link: "https://nodejs.org/en",
    },
    { title: "Express JS", link: "https://expressjs.com/" },
    { title: "MongoDB", link: "https://www.mongodb.com/" },
    { title: "PostMan", link: "https://www.postman.com/" },
    { title: "Swagger", link: "https://swagger.io/" },
    { title: "RESTful Api", link: "https://restfulapi.net/" },
  ];

  return (
    <div className="flex w-full h-[500px] bg-primary text-primary-foreground">
      <Section label="Frontend" technologies={frontendTechnologies} />
      <div className=" w-1/3  flex justify-center items-center -z-0">
        <LottieAnimation animationData={table} />
      </div>
      <Section label="Backend" technologies={backendTechnologies} />
    </div>
  );
}
