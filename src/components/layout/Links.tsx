import Link from "next/link";
import { LINKS } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";

export function Links() {
  return (
    <div className="flex justify-center items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={LINKS.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dashxboard on GitHub"
          >
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer hover:bg-secondary/50 transition-colors"
            >
              <IconBrandGithub className="h-4 w-4 text-foreground" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={3}
          className="rounded-lg border border-border/50 bg-popover/50 text-popover-foreground backdrop-blur-lg"
        >
          <p>GitHub</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={LINKS.DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Stronghold Discord"
          >
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer hover:bg-secondary/50 transition-colors"
            >
              <IconBrandDiscord className="h-4 w-4 text-foreground" />
              <span className="sr-only">Discord</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={3}
          className="rounded-lg border border-border/50 bg-popover/50 text-popover-foreground backdrop-blur-lg"
        >
          <p>Discord</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={LINKS.X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dashxboard on X"
          >
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer hover:bg-secondary/50 transition-colors"
            >
              <IconBrandX className="h-4 w-4 text-foreground" />
              <span className="sr-only">X</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={3}
          className="rounded-lg border border-border/50 bg-popover/50 text-popover-foreground backdrop-blur-lg"
        >
          <p>X</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
