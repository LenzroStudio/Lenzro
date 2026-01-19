import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function DottedGlowBackgroundDemo() {
  return (
    <div className="relative flex size-20 items-end justify-end overflow-hidden rounded-md rounded-tl-3xl rounded-br-3xl rounded-bl-3xl border border-transparent px-4 shadow ring-1 shadow-black/10 ring-black/5 md:size-60 dark:shadow-white/10 dark:ring-white/5">
      <img
        src="https://1j8rp7fkdq62hja2.public.blob.vercel-storage.com/Plugin%20icon%20-%202%20%281%29.png"
        className="absolute inset-0 z-50 m-auto size-10 md:size-20 rounded-xl"
      />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
}
