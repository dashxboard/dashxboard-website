"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { useDelayedReveal, animate } from "@/utils/animations";
import { LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IconSparkles } from "@tabler/icons-react";

export function Hero() {
  const showBadge = useDelayedReveal(100);
  const showTitle = useDelayedReveal(250);
  const showBody = useDelayedReveal(450);

  return (
    <div className="pt-14 pb-8 text-center">
      <div className="mb-6">
        <Link href={LINKS.EDP_URL} target="_blank" rel="noopener noreferrer">
          <Badge
            variant="outline"
            className={cn(
              "cursor-pointer rounded-lg border bg-background/50 shadow-sm backdrop-blur-lg hover:bg-secondary/50 transition-colors",
              animate(showBadge, "animate-fade-in-down")
            )}
          >
            Stronghold EDP Program
            <IconSparkles />
          </Badge>
        </Link>
      </div>
      <div className="space-y-2 mb-6">
        <h1
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground",
            animate(showTitle, "animate-fade-in-up")
          )}
        >
          From <span className="gradient-text">ideas</span> to{" "}
          <span className="gradient-text">action</span>
        </h1>
      </div>
      <p
        className={cn(
          "text-muted-foreground leading-relaxed mx-auto text-base",
          animate(showBody, "animate-fade-in")
        )}
      >
        The community-driven platform that empowers the{" "}
        <Button
          asChild
          variant="link"
          className="p-0 h-auto align-baseline font-bold"
        >
          <a
            href={LINKS.STRONGHOLD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stronghold (SHx)
          </a>
        </Button>{" "}
        ecosystem.
      </p>
    </div>
  );
}
