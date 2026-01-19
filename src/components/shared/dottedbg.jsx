import { cn } from "@/lib/utils";
import { Bot, CoinsIcon,  HandCoinsIcon,  TableOfContents, Users2 } from "lucide-react";
import { Badge } from "../ui/badge";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex flex-col h-full w-full bg-white dark:bg-black">
      {/* Dot grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Top-left content */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-md flex items-center justify-center p-2 border border-gray-500">
              <Bot className="size-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              AI that manages your workflow
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
            An AI that manages your pages, dashboard, gives you analytics,
            <br />
            helps you run your business while you're away, and helps you spot
            issues before they grow.
          </p>
        </div>
      </div>

      {/* Bottom section fills remaining space */}
      <div className="relative z-10 flex-1 px-20 py-6">
        {/* connecting lines */}
        <div>
          {/* left */}
          <div className="absolute w-[30vw] h-[1px] bg-gray-800 top-32 left-56"></div>
          <div className="absolute w-[28.5vw] h-[1px] bg-gray-800 top-47 left-60"></div>
          <div className="absolute w-[28.5vw] h-[1px] bg-gray-800 top-62 left-61"></div>
          <div className="absolute w-[1px] h-[25px] bg-gray-800 top-32 left-[50.2%]"></div>
          <div className="absolute w-[1px] h-[27px] bg-gray-800 top-55.5 left-[50.15%]"></div>
        </div>
        <div className="grid grid-cols-3 items-center h-full gap-8">
          {/* Left: Task Modules */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 text-sm">
              <TableOfContents className="size-4" />
              <span>Pages and content</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users2 className="size-4" />
              <span>Clients and messages</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <HandCoinsIcon className="size-4" />
              <span>Orders and payments</span>
            </div>
          </div>

          {/* Center: Integration Hub */}
          <div className="flex items-center justify-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
              <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
              <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
              <div className="relative z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-neutral-900">
                <img
                  src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Plugin%20icon%20-%202%20%281%29.png"
                  className="w-fit rounded-md h-fit"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Right: Connected Apps */}
          <div className="relative flex items-center h-full justify-between">
            {/* first */}
            <div className="flex flex-col justify-between h-full items-center">
              <div className="relative overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
                <div className="relative text-xs z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-background !p-3">
                  Updates pages automatically
                </div>
              </div>
              <Badge
                className={
                  "rounded-sm bg-blue-500 text-white border-2 border-blue-300"
                }
              >
                Connected
              </Badge>
              <div className="relative overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
                <div className="relative text-xs z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-background !p-3">
                  Tracks orders and revenue
                </div>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col justify-between h-full items-center">
              <div className="relative overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
                <div className="relative text-xs z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-background !p-3">
                  Replies to clients
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
                <div className="relative text-xs z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-background !p-3">
                  Keeps dashboards <br /> up to date
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
                <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
                <div className="relative text-xs z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-background !p-3">
                  Organizes files & data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
