export const PROJECT_CATEGORIES = [
  "Website",
  "Software",
  "App",
  "E-Commerce",
  "News Portal",
  "Marketing",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  client?: string;
  year: number;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  coverImage: ProjectImage;
  images: ProjectImage[];
  liveUrl: string;
  results?: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

// SAMPLE DATA: replace these entries with approved project details before publishing.
export const PROJECTS: Project[] = [
  {
    slug: "northstar-brand-website",
    title: "Northstar Brand Website",
    category: "Website",
    industry: "Professional Services",
    client: "Northstar Studio (sample client)",
    year: 2025,
    duration: "6 weeks",
    summary:
      "A brand-led website concept that makes a professional services business easier to understand and contact.",
    challenge:
      "The sample business had a dated web presence, unclear service messaging, and no obvious path for prospective clients to make an enquiry.",
    solution:
      "We shaped a clear page hierarchy, paired concise service explanations with confident visual direction, and made enquiry actions easy to find across screen sizes.",
    features: [
      "Responsive page layouts",
      "Service-led content structure",
      "Accessible navigation and calls to action",
      "Search-friendly page foundations",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    coverImage: {
      src: "/projects/website-cover.svg",
      alt: "Sample website project cover showing a responsive agency homepage",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample website homepage layout preview",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample website service page layout preview",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample website mobile layout preview",
      },
    ],
    liveUrl: "",
    results: [
      "A single, consistent story across core pages",
      "Clearer service discovery and enquiry paths",
      "Responsive layouts for mobile and desktop",
    ],
    testimonial: {
      quote:
        "The new direction gives our services the clarity and confidence they were missing.",
      name: "Aarav Mehta",
      role: "Founder, sample client",
    },
  },
  {
    slug: "orbit-workflow-suite",
    title: "Orbit Workflow Suite",
    category: "Software",
    industry: "Business Operations",
    year: 2025,
    duration: "10 weeks",
    summary:
      "A sample operations dashboard concept that brings recurring tasks, approvals, and team progress into one workspace.",
    challenge:
      "Teams were tracking work across disconnected tools, making it difficult to spot blockers or understand which approvals needed attention.",
    solution:
      "We designed a role-aware workspace with a prioritized overview, clear task ownership, and streamlined review states for everyday workflows.",
    features: [
      "At-a-glance team dashboard",
      "Task assignment and status tracking",
      "Approval queue with clear states",
      "Responsive data tables and summaries",
    ],
    techStack: ["React", "Node.js", "PostgreSQL"],
    coverImage: {
      src: "/projects/software-cover.svg",
      alt: "Sample software project cover showing a workflow dashboard",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample workflow dashboard preview",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample task tracking interface preview",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample approvals interface on a mobile screen",
      },
    ],
    liveUrl: "",
    results: [
      "One shared view of task ownership and progress",
      "A simpler path for reviewing pending approvals",
      "A consistent experience across screen sizes",
    ],
  },
  {
    slug: "waypoint-companion-app",
    title: "Waypoint Companion App",
    category: "App",
    industry: "Travel & Experiences",
    year: 2024,
    duration: "8 weeks",
    summary:
      "A sample mobile companion concept that helps travellers plan an itinerary and keep essential trip details close at hand.",
    challenge:
      "Trip information was scattered across messages, booking emails, and saved links, making plans hard to follow while on the move.",
    solution:
      "We organized itinerary steps, saved places, and key travel notes into a simple mobile-first flow with clear actions at each stage.",
    features: [
      "Day-by-day itinerary overview",
      "Saved places and trip notes",
      "Quick access to essential details",
      "Mobile-first interaction patterns",
    ],
    techStack: ["React Native", "TypeScript", "Figma"],
    coverImage: {
      src: "/projects/app-cover.svg",
      alt: "Sample mobile app project cover showing a travel planning interface",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample travel app itinerary overview",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample saved places screen concept",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample mobile trip details screen concept",
      },
    ],
    liveUrl: "",
    testimonial: {
      quote:
        "The itinerary feels simple to follow, even when plans change during the day.",
      name: "Mira Shah",
      role: "Product lead, sample client",
    },
  },
  {
    slug: "wildgrain-online-store",
    title: "Wildgrain Online Store",
    category: "E-Commerce",
    industry: "Food & Retail",
    client: "Wildgrain Market (sample client)",
    year: 2025,
    duration: "7 weeks",
    summary:
      "A sample storefront concept focused on product discovery, ingredient details, and a straightforward mobile shopping journey.",
    challenge:
      "Shoppers needed more context to compare products, while the original store experience made categories and product details difficult to navigate.",
    solution:
      "We introduced clearer category entry points, scannable product information, and a streamlined path from product discovery to checkout.",
    features: [
      "Product and category browsing",
      "Readable product detail pages",
      "Responsive cart and checkout patterns",
      "Ingredient and product information hierarchy",
    ],
    techStack: ["Shopify", "Liquid", "JavaScript"],
    coverImage: {
      src: "/projects/ecommerce-cover.svg",
      alt: "Sample e-commerce project cover showing an online product store",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample e-commerce collection page preview",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample product detail page preview",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample mobile shopping screen preview",
      },
    ],
    liveUrl: "",
    results: [
      "More visible product information",
      "Simpler category navigation",
      "Shopping flows designed for mobile screens",
    ],
  },
  {
    slug: "dailyline-newsroom",
    title: "Dailyline Newsroom",
    category: "News Portal",
    industry: "Media & Publishing",
    year: 2024,
    duration: "9 weeks",
    summary:
      "A sample editorial portal concept built around readable stories, topic discovery, and a flexible publishing structure.",
    challenge:
      "Readers had difficulty finding timely coverage and related stories across a growing mix of categories and article formats.",
    solution:
      "We established a flexible editorial system with clear story hierarchy, category navigation, and related-content placements.",
    features: [
      "Editorial homepage and category pages",
      "Article reading layout",
      "Related story recommendations",
      "Responsive content modules",
    ],
    techStack: ["Next.js", "Headless CMS", "TypeScript"],
    coverImage: {
      src: "/projects/news-cover.svg",
      alt: "Sample news portal project cover showing an editorial homepage",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample news homepage editorial layout",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample news article reading page",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample mobile news category page",
      },
    ],
    liveUrl: "",
    results: [
      "Clearer editorial hierarchy",
      "Improved discovery between related stories",
      "Reusable layouts for multiple content categories",
    ],
  },
  {
    slug: "brightpath-growth-campaign",
    title: "Brightpath Growth Campaign",
    category: "Marketing",
    industry: "Education",
    year: 2025,
    duration: "5 weeks",
    summary:
      "A sample digital campaign concept that connects a focused landing page with clear messaging and measurable enquiry actions.",
    challenge:
      "Campaign traffic arrived from several channels, but the message and next step were not consistent from ad to landing page.",
    solution:
      "We aligned campaign messaging with a focused landing experience, clear proof points, and trackable conversion actions.",
    features: [
      "Campaign landing page structure",
      "Audience-led message hierarchy",
      "Conversion-focused enquiry actions",
      "Analytics-ready interaction points",
    ],
    techStack: ["Google Ads", "GA4", "Landing Page Design"],
    coverImage: {
      src: "/projects/marketing-cover.svg",
      alt: "Sample marketing project cover showing a campaign performance overview",
    },
    images: [
      {
        src: "/projects/sample-gallery-01.svg",
        alt: "Sample marketing campaign dashboard preview",
      },
      {
        src: "/projects/sample-gallery-02.svg",
        alt: "Sample campaign landing page content preview",
      },
      {
        src: "/projects/sample-gallery-03.svg",
        alt: "Sample campaign landing page on a mobile screen",
      },
    ],
    liveUrl: "",
    testimonial: {
      quote:
        "The campaign now tells one clear story and gives visitors a direct next step.",
      name: "Kabir Rao",
      role: "Marketing lead, sample client",
    },
  },
];
