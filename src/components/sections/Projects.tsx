"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { useStaggeredReveal, animate } from "@/utils/animations";
import { projects } from "@/lib/projects";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  const visibleCards = useStaggeredReveal(projects.length, 600, 140);

  return (
    <section className="w-full mt-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={project.url}
            target={project.isExternal ? "_blank" : undefined}
            rel={project.isExternal ? "noopener noreferrer" : undefined}
          >
            <Card
              className={cn(
                "min-h-[140px] md:min-h-[160px] lg:min-h-[180px] rounded-lg border bg-background/50 shadow-sm backdrop-blur-lg hover:bg-secondary/50 hover:shadow-sm hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden group",
                animate(visibleCards[index], "animate-fade-in-scale")
              )}
            >
              {project.icon && (
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ease-out">
                  <project.icon className="w-32 h-32 md:w-36 md:h-36" />
                </div>
              )}
              <CardHeader className="relative z-10 p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg font-semibold text-left">
                    {project.title}
                  </CardTitle>
                  {project.isNew && (
                    <Badge className="text-xs px-1.5 py-0.5 h-5 shrink-0">
                      NEW
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground text-sm text-left">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
