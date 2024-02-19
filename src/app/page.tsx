import FrontendAndBackend from "@/components/FrontendAndBackend";
import WelcomeText from "@/components/WelcomeText";
import React from "react";
import ProjectList from "@/components/projects/projectList";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
      <WelcomeText />
      <FrontendAndBackend />
      <ProjectList />
    </div>
  );
}
