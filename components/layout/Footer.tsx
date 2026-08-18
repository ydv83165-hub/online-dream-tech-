import Link from "next/link";
import { BRAND, CURRENT_YEAR, DELIVERY, NAV_LINKS, SOCIAL } from "@/lib/constants";
import { buildEnquiryMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl(buildEnquiryMessage());

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col items-start gap-3">
                <img 
                  src="/Footer%20onlinedreamtech.png" 
                  alt="OnlineDreamTech Logo" 
                  className="h-12 w-auto" 
                />
                <div className="leading-none">
                  <div className="text-lg font-semibold text-white">{BRAND.name}</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {BRAND.tagline}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-display text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <SocialLink href={SOCIAL.instagram} label="Instagram"><InstagramIcon /></SocialLink>
                <SocialLink href={SOCIAL.facebook} label="Facebook"><FacebookIcon /></SocialLink>
                <SocialLink href={SOCIAL.youtube} label="YouTube"><YouTubeIcon /></SocialLink>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#website-development" className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#software-development" className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#e-commerce" className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm transition-colors inline-block py-1">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© {CURRENT_YEAR} {BRAND.legalName}. All rights reserved.</p>
          <p className="text-slate-500 text-xs">{BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      className="inline-flex items-center justify-center text-white hover:text-white transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="35%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <path
        d="M16 0H8C3.582 0 0 3.582 0 8v8c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8Zm4 16c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8Z"
        fill="url(#instagramGradient)"
      />
      <path
        d="M12 6.6a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Zm0 8.9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm4.9-9.95a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
        fill="#fff"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.315h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0Z"
        fill="#1877F2"
      />
      <path
        d="M16.671 24v-9.294h3.12l.467-3.696h-3.587V8.695c0-1.049.292-1.765 1.797-1.765h1.918V3.69c-.332-.044-1.469-.143-2.794-.143-2.765 0-4.659 1.688-4.659 4.788v2.675H9.692v3.696h3.128V24h3.851Z"
        fill="#fff"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.498 6.186a3.018 3.018 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814Z"
        fill="#FF0000"
      />
      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568Z" fill="#fff" />
    </svg>
  );
}
