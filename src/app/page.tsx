import FrontendAndBackend from "@/components/FrontendAndBackend";
import WelcomeText from "@/components/WelcomeText";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-full   flex flex-col ">
      <WelcomeText />
      <div className="text-white bg-white  h-0.5 w-full"></div>
      <FrontendAndBackend />
    </div>
  );
}
