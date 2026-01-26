"use client";

import { BackgroundBoxesDemo } from "@/components/shared/backgroundboxesdemo";
import { BentoDemo } from "@/components/shared/bentodemo";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Bot, Brain, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="relative z-20 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col gap-4 w-full items-center text-center lg:items-start lg:text-left">
          <div className="z-10">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center gap-2 px-4 py-1 whitespace-nowrap text-xs MPlusOne hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <Brain className="size-4 text-green-500" />
                The operating system for modern businesses & startups
              </AnimatedShinyText>
            </div>
          </div>

          <h1 className="text-4xl mt-4 font-semibold tracking-tight relative z-20">
            Everything you need to{" "}
            <AnimatedGradientText
              speed={2}
              colorFrom="#4ade80"
              colorTo="#06b6d4"
              className="text-4xl font-semibold tracking-tight"
            >
              build, run
            </AnimatedGradientText>
            <br />
            and grow your business — in one place.
          </h1>

          <p className="MPlusOne text-sm text-muted-foreground relative z-20 max-w-md">
            Relax. Your business lives here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full">
            <Link href={"/auth"}>
              <Button className="w-full sm:w-auto px-5 py-2 text-sm h-10 rounded-sm  cursor-pointer transition-all duration-300 border">
                Launch your business
              </Button>
            </Link>
            <Link href={'/pricing'}>
              <Button className="w-full sm:w-auto px-5 py-2 text-sm h-10 rounded-sm cursor-pointer transition-all duration-300 border">
                View pricing
              </Button>
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-sm">
            <Bot className="size-5" />
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 text-yellow-500" />
              ))}
            </div>
            <span>Powered by our very own</span>
            <span className="!mb-[1px] MPlusOne font-medium">Lenzro AI</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full mt-6 lg:mt-0">
          <BentoDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
