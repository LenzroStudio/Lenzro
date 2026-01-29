"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Callout({
  children,
  type = "info",
}: {
  children: ReactNode;
  type?: "info" | "success" | "warning";
}) {
  const styles = {
    info: "border-blue-500/20 bg-blue-500/10 text-blue-200",
    success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
    warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-200",
  };

  return (
    <div
      className={cn("my-6 rounded-lg border px-4 py-3 text-sm", styles[type])}
    >
      {children}
    </div>
  );
}
