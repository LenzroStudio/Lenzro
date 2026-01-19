import React, { useState, useRef } from "react";
import Sidebar from "./screens/sidebar";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DashDemo = () => {
  const [pillTop, setPillTop] = useState(40); // initial top position
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startY = e.clientY;
    const startTop = pillTop;

    const handleMouseMove = (moveEvent) => {
      if (!containerRef.current) return;
      const containerHeight = containerRef.current.offsetHeight;
      const pillHeight = 48; // h-12 = 48px

      const deltaY = moveEvent.clientY - startY;
      let newTop = startTop + deltaY;

      // clamp within container bounds
      newTop = Math.max(0, Math.min(containerHeight - pillHeight, newTop));

      setPillTop(newTop);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="h-[100vh] mt-25 flex items-center justify-between">
      {/* Left spacer */}
      <div className="w-15 h-full"></div>

      {/* Main content */}
      <div className="h-full relative rounded-xl border flex items-center w-full">
        {/* Sidebar */}
        <div className="w-70 bg-accent dark:bg-zinc-900 h-full rounded-l-xl border-r">
          <Sidebar />
        </div>

        {/* Right content */}
        <div
          ref={containerRef}
          className="relative flex flex-col h-full w-full bg-white rounded-r-xl border-r dark:bg-black"
        >
          {/* Dot grid background */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
          />
          {/* Radial mask overlay */}
          <div className="pointer-events-none absolute  inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

          {/* Edge panel pill */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onMouseDown={handleMouseDown}
                style={{ top: pillTop }}
                className="absolute right-0 w-2 h-12 rounded-full bg-accent-foreground backdrop-blur-3xl"
              />
            </TooltipTrigger>
            <TooltipContent side="left" className="text-sm">
              <p>Edge panel</p>
            </TooltipContent>
          </Tooltip>

          {/* edge panel content */}
          <div className="w-10 rounded-md bg-accent border h-[90%] absolute right-5 top-5"></div>
        </div>
      </div>

      {/* Right spacer */}
      <div className="w-15 h-full"></div>
    </div>
  );
};

export default DashDemo;
