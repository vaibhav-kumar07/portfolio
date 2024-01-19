import codingBoy from "../../public/codingBoy.json";
import FrontendAndBackend from "@/components/FrontendAndBackend";
import React from "react";
const LazyLottieAnimation = React.lazy(
  () => import("@/components/common/LottieAnimation")
);

export default function Home() {
  return (
    <div className="w-full h-full bg-primary text-primary-foreground  flex flex-col ">
      <FrontendAndBackend />
      {/* <div className="flex justify-center items-center gap-2">
        <div className="w-1/2 h-full p-8">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm Vaibhav - A Symphony of Code and Creativity
          </h1>
          <p className="text-lg">
            Web virtuoso, problem solver, and passionate creator. I orchestrate
            digital experiences with a harmonious blend of frontend elegance and
            backend ingenuity, turning ideas into captivating realities.
          </p>
        </div>
        <div className="w-1/2 ">
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyLottieAnimation animationData={codingBoy} />
          </React.Suspense>
        </div>
      </div> */}
    </div>
  );
}
