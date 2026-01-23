"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "./layouts/hero";
import Trusted from "./layouts/trusted";
import Tour from "./layouts/tour";
import Solutions from "./layouts/solutions";
import BlackBoard from "./layouts/blackboard";
import Community from "./layouts/community";
import FAQ from "./layouts/faq";
import LenzroDemo from "./layouts/lenzrodemo";




const REQUIRED_KEYS = ["token", "user"];

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const hasAll = REQUIRED_KEYS.every((k) => localStorage.getItem(k));
    if (hasAll) {
      const storedUser = localStorage.getItem("user");
      let username = null;
      try {
        username = JSON.parse(storedUser)?.username;
      } catch {}
      Promise.resolve().then(() => setIsRedirecting(true));
      const timeout = setTimeout(() => {
        username ? router.replace("/client") : router.replace("/");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [router]);

  if (isRedirecting) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <div className="loader"></div>
          <span className="text-muted-foreground !mt-20 text-sm">
            Redirecting to your dashboard...
          </span>
        </div>
      </div>
    );
  }

  // Public landing page content here
  return (
    <div className="pt-10 flex flex-col gap-10 md:gap-14">
        <Hero/>
        <Trusted/>
        <Tour/>
        <Solutions/>
        <BlackBoard/>
        <Community/>
        <FAQ/>
        <LenzroDemo/>
    </div>
  );
}
