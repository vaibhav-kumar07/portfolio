import LottieAnimation from "@/components/common/LottieAnimation";
import codingBoy from "../../public/codingBoy.json";
import DeveloperTitle from "./DeveloperTitle";
export default function WelcomeText() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-1/2 h-full p-8 bg-primary m-6 text-primary-foreground rounded">
        <DeveloperTitle />
        <p className="w-4/5 text-green-100">
          Web enthusiast, problem solver, and creator. Blending frontend finesse
          with backend brilliance to bring ideas to life.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <LottieAnimation animationData={codingBoy} />
      </div>
    </div>
  );
}
