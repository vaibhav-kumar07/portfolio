"use client";
// LottieAnimation.tsx
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // Play or control your Lottie animation here if needed
    }
  }, []);

  if (typeof window === "undefined") {
    // Return null or a placeholder if running on the server side
    return null;
  }

  return (
    <Lottie className="z-10" animationData={animationData} ref={lottieRef} />
  );
};

export default LottieAnimation;
