interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  hindi?: string;
  hindiClassName?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  subtitleClassName,
  hindi,
  hindiClassName,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClass}`}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-gold-light tracking-wide leading-tight">
        {title}
      </h2>
      {hindi && (
        <p className={`font-hindi text-sm mt-1.5 ${hindiClassName ?? "text-white/90"}`}>
          {hindi}
        </p>
      )}
      <div
        className={`gold-line w-20 sm:w-24 mt-3 sm:mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm max-w-2xl leading-relaxed px-1 ${
            subtitleClassName ?? "text-white/90"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
