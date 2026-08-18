interface PremiumSectionHeadingProps {
  eyebrow: string;
  title: string;
  hindi?: string;
  tagline?: string;
}

export function PremiumSectionHeading({
  eyebrow,
  title,
  hindi,
  tagline,
}: PremiumSectionHeadingProps) {
  return (
    <div className="text-center mb-10 sm:mb-12 lg:mb-14">
      <p className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/80 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gold tracking-wide leading-tight uppercase">
        {title}
      </h2>
      {hindi && (
        <p className="font-hindi text-white text-base sm:text-lg mt-2">{hindi}</p>
      )}
      <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
        <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-gold text-[10px] leading-none">◆</span>
        <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      {tagline && (
        <p className="mt-5 font-display italic text-black text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>
      )}
    </div>
  );
}
