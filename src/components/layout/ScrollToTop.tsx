"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { IconChevronUp } from "@tabler/icons-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full border border-border/50 bg-background/50 shadow-sm backdrop-blur-lg hover:bg-secondary/50 transition-colors"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <IconChevronUp className="h-5 w-5 text-foreground" />
        </Button>
      )}
    </>
  );
}
