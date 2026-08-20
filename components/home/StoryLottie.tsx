"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

type AnimationData = Record<string, unknown>;

export function StoryLottie() {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/lotie/Tech%20support%20and%20customer%20service.json")
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
  }, []);

  if (!animationData) {
    return <div className="h-[240px] w-full sm:h-[340px]" aria-hidden="true" />;
  }

  return (
    <Lottie
      src={animationData}
      loop
      autoplay
      className="h-[240px] w-full sm:h-[340px]"
      aria-label="Technology support animation"
    />
  );
}
