import LottieAnimation from "@/components/common/LottieAnimation";
import codingBoy from "../../public/codingBoy.json";
import FrontendAndBackend from "@/components/FrontendAndBackend";

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
          <LottieAnimation animationData={codingBoy} />
        </div>
      </div> */}
    </div>
  );
}
