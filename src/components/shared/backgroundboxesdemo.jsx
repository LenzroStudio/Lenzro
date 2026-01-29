"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Bot } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden dark:bg-black flex flex-col items-center justify-center">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-background z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* text div */}
      <div className="relative z-20 rounded-xl p-8 shadow-lg flex flex-col items-center gap-2">
        {/* <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]"></div>
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
          <div className="relative z-20 flex h-full w-full items-center justify-center rounded-md bg-white dark:bg-neutral-900">
            <img
              src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Plugin%20icon%20-%202%20%281%29.png"
              className="w-fit rounded-md h-fit"
              alt=""
            />
          </div>
        </div> */}
        <h1
          className={"md:text-4xl text-xl text-center text-white relative z-20"}
        >
          Choose The Perfect Plan That Fits <br /> Your{" "}
          <AuroraText>Business Goals</AuroraText>
        </h1>
        <p className="text-center MPlusOne text-sm  text-neutral-300 relative z-20">
          Relax. Your business lives here.
        </p>
        <div className="flex items-center gap-4 mt-5">
          <Button
            className={
              "px-5 py-2 text-sm h-10 rounded-sm bg-background hover:bg-accent cursor-pointer transition-all duration-300 text-foreground border"
            }
          >
            Launch your business
          </Button>
          <Button
            className={
              "px-5 py-2 text-sm h-10 rounded-sm cursor-pointer transition-all duration-300  border"
            }
          >
            View pricing
          </Button>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <Bot className="size-5" />
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill={"#FFFFFF"}
              viewBox="0 0 24 24"
            >
              <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill={"#FFFFFF"}
              viewBox="0 0 24 24"
            >
              <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill={"#FFFFFF"}
              viewBox="0 0 24 24"
            >
              <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill={"#FFFFFF"}
              viewBox="0 0 24 24"
            >
              <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill={"#FFFFFF"}
              viewBox="0 0 24 24"
            >
              <path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
            </svg>
          </div>
          <p>
            <span className="text-gray-500 text-sm">
              Powered by our very own
            </span>
          </p>
          <p className="!mb-[1px] MPlusOne">Lenzro AI</p>
        </div>
      </div>
    </div>
  );
}
