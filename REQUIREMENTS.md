# online dream tech — Frontend Website Requirements

**Version:** 1.0  
**Date:** July 8, 2026  
**Status:** Draft — pending stakeholder answers  
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

---

## 1. Executive Summary

online dream tech is a health-food brand offering premium dry-fruit blends, seeds, and balanced nutrition products for Indian families. This phase delivers a **frontend-only** marketing and product-catalog website — no payment gateway, no backend, no user accounts.

Customers browse products, build a cart or enquiry, and complete orders via **WhatsApp** with a pre-filled message.

| In scope (Phase 1) | Out of scope (Phase 1) |
|---|---|
| 6 static/marketing pages | Payment gateway (Razorpay, etc.) |
| 5 product listings + detail views | User login / accounts |
| Cart / enquiry flow → WhatsApp | Admin panel / CMS |
| Mobile-first responsive UI | Inventory / order management |
| SEO basics (metadata, OG tags) | Backend API or database |

---

## 2. Brand Identity & Messaging

### 2.1 Brand Name
**online dream tech** — evokes *Ojas* (vitality/energy in Ayurveda) and *Nath* (lord/protector). Positioning: trustworthy daily nutrition for Indian households.

### 2.2 Core Mission (हमारा संकल्प)

> प्रकृति के श्रेष्ठ ड्राई फ्रूट्स, पौष्टिक बीजों और संतुलित पोषण से तैयार यह विशेष मिश्रण आपके दैनिक जीवन में ऊर्जा, स्वास्थ्य और संतुलन का विश्वसनीय साथी है।
>
> online dream tech का संकल्प है कि हर भारतीय परिवार तक शुद्ध, पौष्टिक और गुणवत्तापूर्ण आहार पहुँचे, क्योंकि स्वस्थ परिवारों से ही एक सशक्त और समृद्ध राष्ट्र का निर्माण होता है।

**English essence:**
- Product promise: A special blend of nature's finest dry fruits, nutritious seeds, and balanced nutrition — a reliable companion for energy, health, and balance in daily life.
- Brand mission: Deliver pure, nutritious, quality food to every Indian family. Healthy families build a strong, prosperous nation.

### 2.3 Tone & Visual Direction (proposed)
| Attribute | Direction |
|---|---|
| Tone | Warm, trustworthy, rooted in Indian wellness tradition |
| Language | **Bilingual** — Hindi for emotional/mission copy; English for navigation, product specs, legal pages (or fully bilingual — see §10) |
| Color palette | Earth tones — warm amber/gold (dry fruits), forest green (nature/purity), cream/off-white backgrounds |
| Imagery | High-quality product photography, natural ingredients, family wellness |
| Typography | Clean sans-serif for UI; optional Devanagari-friendly font for Hindi headings |

---

## 3. Site Map & Pages

```
/                     → Home
/about                → About Us
/why-online dream tech         → Why online dream tech
/products             → Our Products (listing)
/products/[slug]      → Product detail (×5)
/privacy-policy       → Privacy Policy
/terms-and-conditions → Terms & Conditions
```

### 3.1 Home (`/`)
**Purpose:** First impression — brand story, hero, featured products, CTA to order.

| Section | Content |
|---|---|
| Hero | Tagline, mission snippet (Hindi), primary CTA → Products or WhatsApp |
| Featured Products | 3–5 product cards (image, name, price, "View" / "Order") |
| Why Choose Us | 3–4 benefit icons (pure ingredients, no preservatives, family health, Made in India) |
| Our Sankalp | Full Hindi mission block with English subtitle |
| Testimonials | Optional placeholder section (can ship empty or with 2–3 quotes later) |
| CTA Banner | "Order on WhatsApp" button |
| Footer | Links to all pages, contact, social (if any) |

### 3.2 About (`/about`)
**Purpose:** Brand story, founder/team narrative, values.

| Section | Content |
|---|---|
| Our Story | Origin of online dream tech, why dry fruits & seeds |
| Vision & Mission | Expanded version of संकल्प |
| Values | Purity, Quality, Family Health, Sustainability (proposed) |
| Quality Promise | Sourcing, hygiene, packaging standards |

### 3.3 Why online dream tech (`/why-online dream tech`)
**Purpose:** Differentiation — why buy from us vs. generic brands.

| Section | Content |
|---|---|
| Pure & Natural | No artificial additives, premium sourcing |
| Balanced Nutrition | Science of the blend — protein, fiber, healthy fats |
| For Every Family | Kids, adults, elderly — daily energy |
| Trust & Transparency | Ingredients list, FSSAI (if applicable), packaging info |
| Comparison / Benefits grid | Visual cards vs. plain trail mix / sugary snacks |

### 3.4 Our Products (`/products`)
**Purpose:** Catalog of all 5 products.

| Element | Behavior |
|---|---|
| Product grid | Card: image, name, short description, weight/variant, MRP, "View Details" |
| Filter/sort | Optional Phase 1 — can be skipped with only 5 items |
| Product detail (`/products/[slug]`) | Full description, ingredients, nutritional highlights, quantity selector, "Add to Cart" / "Order on WhatsApp" |

**Product data model (static JSON/TS):**
```ts
interface Product {
  id: string;
  slug: string;           // url-friendly, e.g. "ojas-blend-250g"
  name: string;
  nameHindi?: string;
  description: string;
  shortDescription: string;
  price: number;          // INR
  weight: string;         // e.g. "250g", "500g"
  images: string[];       // paths under /public/products/
  ingredients: string[];
  benefits: string[];
  inStock: boolean;       // for display only in Phase 1
}
```

### 3.5 Privacy Policy (`/privacy-policy`)
**Purpose:** Legal compliance for a consumer-facing Indian e-commerce-style site.

Standard sections: data collection (minimal — no accounts), cookies, WhatsApp redirect (third-party), contact for grievances, last updated date.

### 3.6 Terms & Conditions (`/terms-and-conditions`)
**Purpose:** Purchase/enquiry terms for WhatsApp orders.

Standard sections: product descriptions, pricing (MRP inclusive/exclusive of taxes), order process via WhatsApp, delivery expectations, returns/refunds policy, limitation of liability, governing law (India).

---

## 4. Core User Flows

### 4.1 Browse → Product Detail → WhatsApp Order (primary)

```
User lands on Home
  → Clicks product / navigates to /products
  → Opens /products/[slug]
  → Selects quantity
  → Clicks "Order on WhatsApp"
  → WhatsApp opens with pre-filled message:
      "Hi, I'd like to order:
       • online dream tech [Product Name] × [Qty] — ₹[Line Total]
       Name: [optional field]
       Address: [optional field]
       Please confirm availability and delivery."
```

**WhatsApp deep link format:**
```
https://wa.me/[PHONE]?text=[URL_ENCODED_MESSAGE]
```

### 4.2 Cart-based flow (recommended for multi-product orders)

```
User adds multiple products to cart (client-side state — localStorage)
  → Opens cart drawer / /cart page
  → Reviews items, updates quantities
  → Clicks "Send Order on WhatsApp"
  → Single WhatsApp message with full order summary
```

**Recommendation:** Implement a lightweight **client-side cart** (React context + `localStorage` persistence). No server session needed.

### 4.3 Enquiry flow (no purchase intent)

```
"Have a question?" → WhatsApp with generic message:
"Hi, I have an enquiry about online dream tech products."
```

---

## 5. Global UI Components

| Component | Description |
|---|---|
| **Header** | Logo, nav links (Home, About, Why online dream tech, Products), cart icon with badge, mobile hamburger |
| **Footer** | Quick links, contact (phone, email, WhatsApp), social icons, copyright, legal links |
| **WhatsApp FAB** | Floating action button on all pages (mobile) |
| **ProductCard** | Reusable card for grids |
| **Button variants** | Primary (amber/gold), secondary (outline), WhatsApp (green) |
| **Breadcrumbs** | Product detail pages |
| **SEO metadata** | Per-page `title`, `description`, Open Graph image |

---

## 6. Technical Architecture

### 6.1 Folder structure (proposed)
```
app/
  layout.tsx              # Root layout — fonts, Header, Footer
  page.tsx                # Home
  about/page.tsx
  why-online dream tech/page.tsx
  products/
    page.tsx              # Listing
    [slug]/page.tsx       # Detail (generateStaticParams for 5 products)
  privacy-policy/page.tsx
  terms-and-conditions/page.tsx
  globals.css

components/
  layout/                 # Header, Footer, MobileNav
  ui/                     # Button, Card, Badge
  product/                # ProductCard, ProductGrid, QuantitySelector
  cart/                   # CartProvider, CartDrawer, CartButton

lib/
  products.ts             # Static product data + helpers
  whatsapp.ts             # Message builder + wa.me URL generator
  constants.ts            # Phone number, brand strings

public/
  images/                 # Logo, hero, OG image
  products/               # Product photos
```

### 6.2 Data strategy (Phase 1)
- **Static product data** in `lib/products.ts` — no CMS, no API.
- Product images in `public/products/`.
- Legal page content as MDX or inline TSX (easy to update later).

### 6.3 State management
- **Cart:** React Context + `localStorage` sync.
- No global state library needed for Phase 1.

### 6.4 Performance & SEO
- Static generation (`generateStaticParams`) for product pages.
- `next/image` for all images.
- Semantic HTML, proper heading hierarchy.
- `metadata` export per route.
- `sitemap.xml` and `robots.txt` (optional Phase 1).

### 6.5 Accessibility
- Keyboard-navigable menu and cart.
- Alt text on all images.
- Sufficient color contrast (WCAG AA).
- Hindi text with `lang="hi"` where appropriate.

### 6.6 Responsive breakpoints
- Mobile-first (320px+).
- Tablet (768px+).
- Desktop (1024px+).

---

## 7. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Lighthouse Performance | ≥ 90 (mobile) |
| First Contentful Paint | < 2s on 4G |
| Browser support | Last 2 versions Chrome, Safari, Firefox, Edge |
| Deployment | Vercel (recommended for Next.js) |
| Domain | TBD — `online dream tech.com` or similar |

---

## 8. Content Checklist (needed from stakeholder)

- [ ] **5 product details** — name, description, price, weight, ingredients, benefits, photos
- [ ] **WhatsApp business number** (with country code, e.g. `91XXXXXXXXXX`)
- [ ] **Logo** (SVG/PNG) and brand colors (hex codes if defined)
- [ ] **Hero image** / lifestyle photography
- [ ] **FSSAI license number** (if applicable — for trust badge)
- [ ] **Company legal name** and registered address (for Terms & Privacy)
- [ ] **Contact email** and optional social media links
- [ ] **Delivery geography** — pan-India? specific cities?
- [ ] **Return/refund policy** specifics
- [ ] **About page** — founder story, year established
- [ ] **Testimonials** (optional for launch)

---

## 9. Phase 2 Backlog (future, not in scope)

- CMS (Sanity, Contentful) for product management
- Payment gateway integration
- Order tracking
- Hindi/English language toggle (i18n)
- Blog / recipes section
- Newsletter signup
- Google Analytics / Meta Pixel
- Product reviews

---

## 10. Open Questions for Stakeholder

Please confirm or provide the following before development begins:

1. **WhatsApp number** — What is the business WhatsApp number for orders?
2. **Product list** — Names, prices, weights, and descriptions of all 5 products?
3. **Product images** — Do you have photos ready, or should we use placeholders initially?
4. **Language preference** — Fully bilingual (Hindi + English on every page), or Hindi for brand copy only and English for UI/legal?
5. **Cart vs. direct order** — Single-product WhatsApp order only, or full cart for multiple products?
6. **Pricing** — MRP inclusive of GST? Any discounts or offers to show?
7. **Delivery** — Serviceable areas and typical delivery timeline to mention on site?
8. **Legal entity** — Registered company name, address, GSTIN for footer and legal pages?
9. **FSSAI** — License number to display as a trust badge?
10. **Logo & brand colors** — Existing brand kit, or should we propose a palette from the earth-tone direction above?
11. **Domain** — Is a domain already purchased? What is the production URL?
12. **Social media** — Instagram, Facebook, YouTube links for footer?

---

## 11. Acceptance Criteria (Phase 1 Done)

- [ ] All 6 page routes render correctly on mobile and desktop
- [ ] 5 products listed with working detail pages
- [ ] WhatsApp order button generates correct pre-filled message with product, qty, and price
- [ ] Cart persists across page refreshes (if cart flow is in scope)
- [ ] Header navigation and footer links work on all pages
- [ ] Privacy Policy and Terms pages contain placeholder/legal content structure
- [ ] Site builds without errors (`npm run build`)
- [ ] Basic SEO metadata on every page
- [ ] Brand mission (संकल्प) prominently featured on Home and About

---

*This document is the single source of truth for Phase 1. Updates require stakeholder sign-off.*
