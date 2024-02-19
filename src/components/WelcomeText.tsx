import LottieAnimation from "@/components/common/LottieAnimation";
import codingBoy from "../../public/codingBoy.json";
import DeveloperTitle from "./DeveloperTitle";
export default function WelcomeText() {
  return (
    <div className="flex justify-center items-center gap-2 bg">
      <div className="w-1/3  h-full p-8 bg-primary mx-7 text-primary-foreground rounded">
        <DeveloperTitle />
        <p className="w-4/6 text-white text-sm tracking-wider pt-2">
          Enthusiastic problem solver, merging frontend finesse with backend
          expertise to turn ideas into reality.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <LottieAnimation animationData={codingBoy} />
      </div>
    </div>
  );
}
