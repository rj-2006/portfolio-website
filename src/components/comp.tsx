import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#18181b]">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.25} // Increased opacity
        duration={3}
        repeatDelay={1}
        color="#ffffff" // Use a light color if supported
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-10%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}