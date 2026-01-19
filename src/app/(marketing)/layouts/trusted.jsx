import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Trusted = () => {
  const solutions = [
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/4.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/7.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/1.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/2.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/8.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/5.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/10.png",
    },
    {
      icon: "https://notus-agent-marketing-template.vercel.app/logos/6.png",
    },
  ];
  return (
    <div className="h-[40vh]  flex items-center justify-between">
      <div className="w-10  h-full"></div>
      <div className="flex flex-col grid-cols-2  h-full w-screen">
        <div className="w-full h-1/3 flex items-center justify-center">
          <p className="uppercase MPlusOne gradient-text text-sm">
            Trusted by Fast Growing Startups and Businesses
          </p>
        </div>
        <div className="grid grid-cols-4">
          {solutions.map((item, idx) => {
            return (
              <AnimatePresence key={idx}>
                <motion.div
                  className={`relative h-[14vh]  gap-2 flex items-center justify-center overflow-hidden group`}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full opacity-10 z-10"
                    variants={{
                      hover: { height: "100%" },
                      initial: { height: 0 },
                    }}
                    style={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  {/* Icon content above overlay */}
                  <img
                    alt={item.name || "icon"}
                    className="relative z-20 object-contain transition-all duration-500 dark:invert dark:filter h-10 w-25 group-hover:brightness-125"
                    src={item.icon}
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
      <div className="w-10  h-full"></div>
    </div>
  );
};

export default Trusted;
