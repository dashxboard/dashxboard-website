"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { animate, useDelayedReveal } from "@/utils/animations";
import { LINKS } from "@/lib/constants";
import { projects } from "@/lib/projects";

export function Footer() {
  const pathname = usePathname();
  const delay =
    pathname && pathname !== "/" ? 600 : 600 + projects.length * 140 + 180;
  const isVisible = useDelayedReveal(delay);

  return (
    <footer
      className={cn(
        "w-full py-6 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground border-t border-border/50 bg-background/80",
        animate(isVisible, "animate-fade-in")
      )}
    >
      <span className="opacity-70">
        © {new Date().getFullYear()}{" "}
        <Link
          href={LINKS.DASHXBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Dashxboard homepage"
          className="underline hover:text-foreground/80 transition-colors"
        >
          Dashxboard
        </Link>
      </span>
    </footer>
  );
}
