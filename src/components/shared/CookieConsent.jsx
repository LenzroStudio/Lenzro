"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cookieConsent";
const COOKIE_NAME = "cookieConsent";
const PREFERENCES_KEY = "userPreferences";
const PREFERENCES_COOKIE = "userPreferences";

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

function setPreferences(preferences) {
  const prefString = JSON.stringify(preferences);
  localStorage.setItem(PREFERENCES_KEY, prefString);
  setCookie(PREFERENCES_COOKIE, prefString);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem(COOKIE_KEY);
    const cookie = getCookie(COOKIE_NAME);
    if (!local && !cookie) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem(COOKIE_KEY, value);
    setCookie(COOKIE_NAME, value);
    if (value === "accepted") {
      // Example: store theme and other preferences
      const theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setPreferences({ theme });
    }
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
            fixed bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0
            z-[9999] dark:border rounded-xl shadow-lg px-6 py-5 flex flex-col gap-4
            md:min-w-[320px] md:max-w-[95vw] w-[97%] md:w-[35%]
            dark:bg-white dark:text-black
            bg-zinc-950 text-white
          "
        >
          <span className="flex-1 text-xs">
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and deliver personalized content.
          </span>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              className="
                border rounded-full px-4 py-1 text-xs transition
                dark:border-black dark:text-black hover:bg-black hover:text-white
                border-white text-white dark:hover:bg-white dark:hover:text-black
              "
              onClick={() => handleConsent("denied")}
            >
              Deny
            </button>
            <button
              className="
                border rounded-full px-4 py-1 text-xs transition
                dark:border-black dark:text-black hover:bg-black hover:text-white
                border-white text-white dark:hover:bg-white dark:hover:text-black
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
