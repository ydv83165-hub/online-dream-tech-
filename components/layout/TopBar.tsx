export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 bg-[#021635] text-white safe-top">
      <div className="mx-auto flex h-[42px] w-[calc(100%-32px)] max-w-[1360px] items-center justify-between gap-3">
        <div className="flex min-w-0 flex-row items-center gap-3 text-[11px] leading-none sm:gap-6 sm:text-xs">
          <a
            href="tel:9936860125"
            className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-white/95 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneIcon />
            <span>9936860125</span>
          </a>
          <a
            href="mailto:helloankit125@gmail.com"
            className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-white/95 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <EmailIcon />
            <span>helloankit125@gmail.com</span>
          </a>
        </div>

        <nav aria-label="Social media" className="hidden shrink-0 items-center gap-2 lg:flex">
          <SocialIconLink href="https://www.facebook.com/" label="Facebook">
            <FacebookIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com/" label="Instagram">
            <InstagramIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/" label="LinkedIn">
            <LinkedInIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.youtube.com/" label="YouTube">
            <YouTubeIcon />
          </SocialIconLink>
        </nav>
      </div>
    </div>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-white/90 transition-colors hover:border-white hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2A1.5 1.5 0 0 1 9 4.2l.7 3a1.5 1.5 0 0 1-.7 1.7l-1.4.9a14 14 0 0 0 5.6 5.6l.9-1.4a1.5 1.5 0 0 1 1.7-.7l3 .7a1.5 1.5 0 0 1 1.2 1.5v2A2.5 2.5 0 0 1 17.5 20 14.5 14.5 0 0 1 3 5.5Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.2 8.4a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM3.6 10h3.2v10H3.6V10Zm5.2 0h3v1.4h.1a3.3 3.3 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.8V20h-3.2v-4.9c0-1.2 0-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V20H8.8V10Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}
