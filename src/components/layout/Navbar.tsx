"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { useDelayedReveal, animate } from "@/utils/animations";
import { Logo } from "@/components/icons/Logo";
import { Links } from "@/components/layout/Links";

export function Navbar() {
  const isVisible = useDelayedReveal(50);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-2.5 shadow-sm backdrop-blur-lg app-container",
        animate(isVisible, "animate-navbar-slide")
      )}
    >
      <Link
        href="/"
        className="flex h-9 items-center gap-2 rounded-lg px-2 sm:px-3 text-foreground hover:bg-secondary/50 transition-colors"
      >
        <Logo
          className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
          aria-hidden="true"
        />
        <div className="flex flex-col leading-[1.1]">
          <span className="text-xs sm:text-sm font-sans font-bold">
            Dashxboard
          </span>
        </div>
      </Link>
      <div className="h-9 flex items-center">
        <Links />
      </div>
    </nav>
  );
}
