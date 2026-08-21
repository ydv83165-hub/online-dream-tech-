"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

type AnimationData = Record<string, unknown>;

interface StoryLottieProps {
  source?: string;
  className?: string;
}

export function StoryLottie({
  source = "/lotie/web%20design%20Lottie%20animation%20(1)home%20page.json",
  className,
}: StoryLottieProps) {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);

  useEffect(() => {
    let active = true;

    fetch(source)
      .then((response) => response.json() as Promise<AnimationData>)
      .then((data) => {
        if (active) {
          setAnimationData(data);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [source]);

  if (!animationData) {
    return <div className={className ?? "h-[160px] w-full sm:h-[200px]"} aria-hidden="true" />;
  }

  return (
    <Lottie
      src={animationData}
      loop
      autoplay
      className={className ?? "h-[160px] w-full sm:h-[200px]"}
      aria-label="Technology support animation"
    />
  );
}
