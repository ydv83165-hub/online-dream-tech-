"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";

export function ProjectGallery({
  title,
  images,
}: {
  title: string;
  images: ProjectImage[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + images.length) % images.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [activeIndex, images.length]);

  const activeImage =
    activeIndex === null ? undefined : images[activeIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`Enlarge image ${index + 1}: ${image.alt}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#021635]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-4 pb-4 pt-10 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {image.alt}
            </span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative w-full max-w-6xl">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-white">
                {activeImage.alt} · {(activeIndex ?? 0) + 1} / {images.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close enlarged image"
              >
                ×
              </button>
            </div>
            <div className="relative aspect-[16/10] max-h-[78vh] overflow-hidden rounded-2xl bg-slate-900">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 flex justify-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((index) =>
                    index === null ? null : (index - 1 + images.length) % images.length,
                  )
                }
                className="min-h-10 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Previous screenshot"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((index) =>
                    index === null ? null : (index + 1) % images.length,
                  )
                }
                className="min-h-10 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Next screenshot"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
