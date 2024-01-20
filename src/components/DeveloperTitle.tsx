"use client";
import React, { useRef, useEffect, useState } from "react";
import anime from "animejs";

const DeveloperTitle = () => {
  const roleRef = useRef(null);
  const [role, setRole] = useState("FRONTEND");

  const nameObject = {
    firstName: "Vaibhav",
    lastName: "A",
    getIntroduction() {
      return `Const Name = ${this.firstName}, `;
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      anime({
        targets: roleRef.current,
        opacity: [1, 0],
        translateX: [0, 300], // Change translation to slide left
        easing: "easeInOutQuad",
        duration: 2500,
        complete: () => {
          setRole((prevRole) =>
            prevRole === "FRONTEND" ? "BACKEND" : "FRONTEND"
          );
          anime({
            targets: roleRef.current,
            opacity: [0, 1],
            translateX: [-300, 0], // Change translation to slide right
            easing: "easeInOutQuad",
            duration: 2500,
          });
        },
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full flex flex-col ">
      <h1 className="w-full text-4xl font-bold tracking-wider">
        {nameObject.getIntroduction()}
      </h1>
      <div className="w-full text-4xl font-bold tracking-wider">
        <span className="w-1/12">A</span>
        <span
          className=" px-3 w-4/12 text-green-200 tracking-wide inline-block"
          ref={roleRef}
        >
          {role}
        </span>
        <span className="w-3/12">Developer</span>
      </div>
    </div>
  );
};

export default DeveloperTitle;
