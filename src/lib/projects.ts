import type * as React from "react";
import { PG } from "@/components/icons/PG";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  isExternal?: boolean;
  isNew?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const projects: Project[] = [
  {
    id: "playground",
    title: "The Playground",
    description:
      "Explore governance through Soroban smart contracts and participate in community activities.",
    url: "https://playground.dashxboard.com",
    isExternal: true,
    isNew: true,
    icon: PG,
  },
];
