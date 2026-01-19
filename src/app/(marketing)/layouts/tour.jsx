"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Spline, SquareMousePointer } from "lucide-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Tour = () => {
  const steps = [
    {
      title: "Create your Workspace",
      description:
        "Set up your business space where everything lives — your brand, clients, files, and website.",
      icon: <SquareMousePointer className="size-4" />,
      bg: "bg-emerald-900",
    },
    {
      title: "Connect your Pages",
      description:
        "Build and link your business pages and content inside your workspace.",
      icon: <Spline className="size-4" />,
      bg: "bg-black",
    },
    {
      title: "Manage them with our Agent",
      description:
        "Let your Lenzro AI help you organize, track, and run your business from one dashboard.",
      icon: <Bot className="size-4" />,
      bg: "bg-sky-600",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto‑advance when progress bar finishes
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 8000); // ⏳ slower: 8s per step
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <div className="flex items-center justify-between">
      <div className="w-15  h-full"></div>

      <div className="flex flex-col  grid-cols-2  h-full w-screen">
        {/* Top Section */}
        <div className="w-full h-1/2 flex py-10 flex-col  text-center gap-4 items-center justify-center">
          <p className="gradient-text text-sm font-normal">How it works</p>
          <h1 className="text-4xl">Easy Integration</h1>
          <p>
            We empower businesses to build tools that streamline their
            operations <br /> and enable AI‑driven workflows.
          </p>
        </div>

        {/* Steps Section */}
        <Card className=" bg-transparent">
          <CardHeader>
            <h3 className="text-lg font-semibold"></h3>
          </CardHeader>

          <CardContent className="grid grid-cols-2 h-full">
            {/* Left: Step selector with loading bar */}
            <div className="grid grid-cols-1  w-full h-full">
              {steps.map((step, idx) => (
                <StepCard
                  key={idx}
                  step={step}
                  active={activeStep === idx}
                  onClick={() => setActiveStep(idx)} // 👈 clicking cancels others
                />
              ))}
            </div>

            {/* Right: Animated step content */}
            <div className="flex items-center justify-center p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-md text-center"
                >
                  <div className="text-3xl mb-4">{steps[activeStep].icon}</div>
                  <h2 className="text-xl font-bold mb-2">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-15  h-full"></div>
    </div>
  );
};

export default Tour;

/* StepCard with CanvasRevealEffect + progress bar */
const StepCard = ({ step, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const showWhite = hovered || active;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative p-10  cursor-pointer transition-all"
    >
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full z-0 pointer-events-none"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={step.bg + " pointer-events-none"}
              colors={[[125, 211, 252]]}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text always visible */}
      <div
        className={`relative z-10 flex flex-col gap-2 ${
          showWhite ? "text-white" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        <div className="flex items-center gap-2">
          {React.cloneElement(step.icon, {
            className: `${step.icon.props.className || ""} ${
              showWhite ? "text-white" : "text-gray-700 dark:text-gray-300"
            }`,
          })}
          <div className="text-md uppercase tracking-wide">{step.title}</div>
        </div>
        <p className="text-sm">{step.description}</p>
      </div>

      {/* Progress bar */}
      {active && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }} // ⏳ slower
          className="absolute bottom-0 left-0 h-[2px] bg-green-500" // thinner line
        />
      )}
    </div>
  );
};
