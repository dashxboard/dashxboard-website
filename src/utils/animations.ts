"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export function useDelayedReveal(
  delayMs: number = 0,
  onVisible?: () => void
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      onVisible?.();
      return;
    }
    const id = window.setTimeout(() => {
      setIsVisible(true);
      onVisible?.();
    }, Math.max(0, delayMs));
    return () => window.clearTimeout(id);
  }, [delayMs, onVisible]);

  return isVisible;
}

export function animate(
  isVisible: boolean,
  whenVisible: string,
  hidden: string = "opacity-0"
): string {
  return cn(hidden, isVisible && whenVisible);
}

export function useStaggeredReveal(
  count: number,
  baseDelay: number,
  step: number
): boolean[] {
  const [visible, setVisible] = useState<boolean[]>(() =>
    Array.from({ length: Math.max(0, count) }, () => false)
  );

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(Array.from({ length: Math.max(0, count) }, () => true));
      return;
    }
    const timers: number[] = [];
    for (let i = 0; i < count; i++) {
      const id = window.setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, baseDelay + i * step);
      timers.push(id);
    }
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [count, baseDelay, step]);

  return visible;
}
