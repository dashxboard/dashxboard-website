"use client";

import { cn } from "@/utils/cn";
import { useDelayedReveal, animate } from "@/utils/animations";

export default function NotFound() {
  const showTitle = useDelayedReveal(100);
  const showSubtitle = useDelayedReveal(250);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <div className="space-y-4">
        <h1
          className={cn(
            "text-4xl font-bold gradient-text",
            animate(showTitle, "animate-fade-in")
          )}
        >
          404 | Page Not Found
        </h1>
        <h2
          className={cn(
            "text-base text-muted-foreground",
            animate(showSubtitle, "animate-fade-in")
          )}
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h2>
      </div>
    </div>
  );
}
