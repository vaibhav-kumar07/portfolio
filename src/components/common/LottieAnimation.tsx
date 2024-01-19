"use client";
import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
}

export default function LottieAnimation({
  animationData,
}: LottieAnimationProps) {
  return <Lottie animationData={animationData} />;
}
