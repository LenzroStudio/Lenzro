"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }} // start below
          animate={{ y: 0, opacity: 1 }} // rise into view
          exit={{ y: 100, opacity: 0 }} // slide back down
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="
            fixed bottom-6 md:left-60 -translate-x-1/2 z-[9999]
            border rounded-xl shadow-lg px-6 py-5 flex flex-col gap-4
            min-w-[320px] max-w-[95vw]
            bg-white text-black
            dark:bg-zinc-950 dark:text-white
          "
        >
          <span className="flex-1 text-sm">
            This site uses tracking technologies. You may opt in or opt out of
            the <br />
            use of these technologies.
          </span>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              className="
                border rounded-full px-4 py-1 text-xs transition
                border-black text-black hover:bg-black hover:text-white
                dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
              "
              onClick={() => handleConsent("denied")}
            >
              Deny
            </button>
            <button
              className="
                border rounded-full px-4 py-1 text-xs transition
                border-black text-black hover:bg-black hover:text-white
                dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
              "
              onClick={() => handleConsent("accepted")}
            >
              Accept all
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
