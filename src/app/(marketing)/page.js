"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Hero from "./layouts/hero";
import Trusted from "./layouts/trusted";
import DashDemo from "./layouts/dashdemo";
import Tour from "./layouts/tour";
import Features from "./layouts/features";




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
    <div className="pt-10">
        <Hero/>
        {/* <DashDemo/>
        <Tour/>
        <Features/>
        <Trusted/> */}
    </div>
  );
}
