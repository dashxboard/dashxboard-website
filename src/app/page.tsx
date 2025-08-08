import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center pt-24">
      <Hero />
      <Projects />
    </div>
  );
}
