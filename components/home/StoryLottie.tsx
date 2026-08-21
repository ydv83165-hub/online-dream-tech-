"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

type AnimationData = Record<string, unknown>;

interface StoryLottieProps {
  source?: string;
}

export function StoryLottie({ source = "/lotie/web%20design%20Lottie%20animation%20(1)home%20page.json" }: StoryLottieProps) {
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
    return <div className="h-[210px] w-full sm:h-[300px]" aria-hidden="true" />;
  }

  return (
    <Lottie
      src={animationData}
      loop
      autoplay
      className="h-[210px] w-full sm:h-[300px]"
      aria-label="Technology support animation"
    />
  );
}
