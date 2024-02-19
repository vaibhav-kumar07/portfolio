import { cn } from "@/lib/utils";
import { link } from "fs";
import Link from "next/link";
import { describe } from "node:test";

export default function ProjectList() {
  const projectList = [
    {
      title: "tic-tac-toe",
      link: "https://tic-07tac-toe.netlify.app/",
      description:
        "Classic tic-tac-toe game with a sleek user interface for an enjoyable gaming experience.",
    },
    {
      title: "QR-generator",
      link: "https://github.com/vaibhav-kumar07/Qr-generator.git",
      description:
        "Backend for versatile QR code generator tool allowing users to create QR codes for various purposes.",
    },
    {
      title: "gpt-HomePage",
      link: "https://gptsite.netlify.app/",
      description:
        " Homepage showcasing the power of GPT-3.5 with a clean and user-friendly design.",
    },
    {
      title: "word-Counter",
      link: "https://vaibhavprojects.vercel.app/word-counter",
      description:
        "A simple yet effective word counter tool, providing quick insights into text content.",
    },
    {
      title: "Bank-HomePage-Ui",
      link: "https://bankui-clone.netlify.app",
      description:
        "A UI clone of a bank's homepage, featuring an intuitive design for seamless user navigation.",
    },
    {
      title: "Restaurent-site HomePage",
      link: "https://restaurent0site.netlify.app/",
      description:
        "Engaging homepage design for a restaurant website, combining aesthetics with functionality.",
    },
  ];

  return (
    <div className="   flex flex-col justify-center items-center gap-2 pt-16 pb-32">
      <div className="text-3xl font-bold text-primary tracking-wider py-4">
        Projects
      </div>
      <ul className="flex flex-wrap justify-center gap-3">
        {projectList.map((project: any, index: number) => (
          <Project key={index} {...project} className="w-1/4" />
        ))}
      </ul>
    </div>
  );
}

function Project({
  title,
  link,
  description,
  className,
}: {
  title: string;
  link: string;
  description: string;
  className: string;
}) {
  return (
    <Link
      href={link}
      target="_newtab"
      className={cn(
        "flex border p-4 flex-col rounded-md cursor-pointer  hover:bg-primary hover:text-primary-foreground",
        className
      )}
      style={{
        transition: "background-color 0.1s",
      }}
    >
      <p className="font-semibold text-lg">
        <span className="hover:text-custom-title-color">{title}</span>
      </p>
      <p className="tracking-wide text-sm pr-12">
        <span className="hover:text-custom-description-color ">
          {description}
        </span>
      </p>
    </Link>
  );
}
