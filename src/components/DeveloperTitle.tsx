"use client";
import React, { useEffect, useState } from "react";
import TypeIt from "typeit";

const DeveloperTitle: React.FC = () => {
  const [developerType, setDeveloperType] = useState<string>("");

  useEffect(() => {
    const typeInstance = new TypeIt("#name", {
      speed: 300,
      breakLines: false,
    });

    typeInstance
      .type(developerType)
      .pause(1500)
      .delete(developerType.length)
      .exec((instance) => {
        const newType = developerType === "Frontend" ? "Backend" : "Frontend";
        setDeveloperType(newType);
        instance.type(newType).go();
      })
      .go();
  }, [developerType]);

  return (
    <div className="w-full text-3xl flex flex-col">
      <h1 className="w-full  font-bold tracking-wider">
        {`const name = "Vaibhav Kumar"; `}
      </h1>
      <div className="w-full  font-bold tracking-wider">
        <span className="w-1/12">A</span>
        <span
          className="px-3 w-4/12 text-green-200 tracking-wide transition duration-300 ease-in-out hover:bg-green-200 hover:text-primary"
          id="name"
        ></span>
        <span className="w-3/12">Developer</span>
      </div>
    </div>
  );
};

export default DeveloperTitle;
