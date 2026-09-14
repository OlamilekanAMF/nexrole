# NexRole — Premium Global Executive Recruitment & Career Advisory Platform

<div align="center">

![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-EA4C89?style=for-the-badge&logo=framer&logoColor=white)
![Lemon Squeezy](https://img.shields.io/badge/Lemon_Squeezy-Gateway-FFC83B?style=for-the-badge&logo=lemonsqueezy&logoColor=black)
![Resend](https://img.shields.io/badge/Resend-Email_API-000000?style=for-the-badge&logo=resend&logoColor=white)
![Static Pages](https://img.shields.io/badge/Static_Routes-23%2F23-22C55E?style=for-the-badge)

<p align="center">
  <strong>Elite global recruitment agency connecting board-level leadership, engineering, and commercial talent across 38+ countries with built-in executive CV positioning studio.</strong>
</p>

[Explore Platform](#-platform-overview) • [Architecture](#-architecture--tech-stack) • [Quickstart](#-getting-started) • [Environment Variables](#-environment-variables) • [SEO & GEO](#-seo--geo-optimization) • [Deployment](#-deployment)

</div>

---

## 🏛️ Platform Overview

**NexRole** is a production-ready, full-stack recruitment and career advisory platform built with **Next.js 14 (App Router)**. Engineered for high-net-worth professionals, senior recruiters, and hiring committees, it combines executive job mandate discovery with a high-conversion CV writing studio and automated global payment checkout.

### Core Capabilities

- **Executive Job Discovery**: Live opportunity aggregation powered by a dual-feed pipeline (Remotive API + Adzuna API + local enterprise JSON fallback).
- **Executive CV Studio**: Dedicated high-converting tier funnels for **New CV Writing ($995)**, **CV Rewrite (Sapphire $300 / Ruby $500 / Diamond $700)**, and **Cover Letter ($300)**.
- **Hosted Merchant Payments**: 100% Lemon Squeezy hosted overlay checkout integration with instant confirmation routing (`/payment` → `/payment/success`).
- **Transactional Communication**: Direct server-side contact API (`/api/contact`) powered by the **Resend API** with HTML email templates and reply-to routing.
- **Dual-Theme Engine**: Executive Light Theme by default (`#F8FAFC`, slate-900 typography, soft ambient glass) with an interactive Dark Mode toggle (`#050D1F`), local storage synchronization, and zero-flicker script execution.
- **Generative Engine Optimization (GEO) & SEO**: Complete Schema.org JSON-LD graph (`Organization`, `WebSite`, `FAQPage`, `Service`, `JobPosting`, `BreadcrumbList`) and AI crawler authorization (`GPTBot`, `ClaudeBot`, `PerplexityBot`).

---

## ⚡ Architecture & Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                       NexRole Frontend                      │
│      Next.js 14 App Router · TypeScript · Tailwind CSS      │
│          Framer Motion · Lenis Provider · Dual Theme        │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       ┌───────▼───────┐               ┌───────▼───────┐
       │   Services &  │               │   Live Jobs   │
       │    Checkout   │               │   Aggregator  │
       └───────┬───────┘               └───────┬───────┘
               │                               │
 ┌─────────────▼─────────────┐   ┌─────────────▼─────────────┐
 │ Lemon Squeezy Overlay API │   │ Adzuna API + Remotive API │
 │  Hosted Merchant Checkout │   │  + Local Resilient Cache  │
 └───────────────────────────┘   └───────────────────────────┘
               │
 ┌─────────────▼─────────────┐
 │    Resend Email Engine    │
 │   /api/contact Endpoint   │
 └───────────────────────────┘
```

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Static generation (SSG), server actions, optimized streaming, and dynamic API routing |
| **Language** | TypeScript 5 | Strict end-to-end type safety across jobs, reviews, services, and API responses |
| **Styling** | Tailwind CSS v3.4 | Class-based dark mode (`darkMode: "class"`), custom glassmorphism tokens, and responsive layouts |
| **Animation** | Framer Motion 11 | Micro-interactions, staggered hero reveals, animated metric counters, and theme toggles |
| **Smooth Scroll** | Lenis | Inertial momentum scrolling synchronized with page transitions |
| **Payment Gateway**| Lemon Squeezy | Merchant of Record (MoR) hosted overlay, automated global currency, and VAT handling |
| **Email API** | Resend SDK | Deliverability-focused transactional inquiry routing with HTML notification templates |
| **Data Feed** | Remotive + Adzuna | Multi-source remote and executive role ingestion with sub-4s network timeouts |

---

## 📂 Project Directory Structure

```bash
zealous-shannon/
├── app/
│   ├── about/                 # Executive philosophy, mission values, and sector grid
│   ├── api/
│   │   └── contact/           # Server-side Resend email dispatch route handler
│   ├── cancellation-policy/   # Legal cancellation guidelines & TOC
│   ├── contact/               # Contact page, Web3/Resend form, and FAQ accordion
│   ├── jobs/                  # Executive search directory with live search & filters
│   ├── payment/               # Lemon Squeezy 5-tier checkout selector
│   │   └── success/           # Verified payment receipt & confirmation page
│   ├── pricing-disclosure/    # Transparent fee structure comparison matrix
│   ├── privacy-policy/        # GDPR/Termly compliant privacy disclosure
│   ├── refund-policy/         # 14-day revision guarantee terms
│   ├── reviews/               # Dual marquee testimonials & video case studies
│   ├── services/              # Solutions overview bento & process walkthrough
│   │   ├── cover-letter/      # Executive Cover Letter service ($300)
│   │   ├── cv-rewrite/        # 3-tier rewrite packages (Sapphire/Ruby/Diamond)
│   │   └── new-cv/            # Flagship New CV Writing tier ($995)
│   ├── terms-of-service/      # Terms of service legal agreement
│   ├── globals.css            # Dual-theme design tokens, scrollbars, & utilities
│   ├── icon.svg               # Scalable App Router vector favicon
│   ├── layout.tsx             # Root layout with ThemeProvider, anti-flicker, & JSON-LD
│   ├── not-found.tsx          # Dual-theme 404 error page
│   ├── page.tsx               # Homepage (Hero, Ticker, Stats, Bento, CV Upsell)
│   └── sitemap.ts             # Priority-weighted XML sitemap generator
├── components/
│   ├── about/                 # AboutHero, HowItWorks, MissionValues, SectorsGrid
│   ├── home/                  # Hero, IndustryTicker, StatsBar, FeaturedJobs, CVUpsell
│   ├── jobs/                  # JobsClient (interactive stateful search & filters)
│   ├── legal/                 # LegalPageLayout with sticky TOC sidebar
│   ├── seo/                   # JsonLd structured data renderer
│   ├── services/              # ServicesBento, CVSpotlight, EmployerProcess
│   ├── AnimatedButton.tsx     # Magnetic pull, shimmer, and variant button component
│   ├── CTABanner.tsx          # High-contrast executive CTA banner
│   ├── CustomCursor.tsx       # Subtle spring-animated dot cursor
│   ├── Footer.tsx             # Executive midnight-navy footer
│   ├── JobCard.tsx            # High-contrast opportunity card with tags & badges
│   ├── LenisProvider.tsx      # Smooth momentum scroll wrapper
│   ├── Navbar.tsx             # Blur navigation header with integrated ThemeToggle
│   ├── PageTransition.tsx     # Route transition opacity wrappers
│   ├── SectionHeader.tsx      # Dual-theme section headers with pulsed badges
│   ├── StatCounter.tsx        # In-view animated numerical counters
│   ├── TestimonialCard.tsx    # Marquee review card with verified tags
│   ├── ThemeProvider.tsx      # Persistent light/dark context provider
│   └── ThemeToggle.tsx        # Rotating Sun/Moon Framer Motion toggle
├── data/
│   ├── faqs.ts                # Structured FAQ questions and answers
│   ├── jobs.json              # Curated mock fallback dataset for job radar
│   ├── reviews.json           # Candidate & employer placement testimonials
│   ├── sectors.ts             # 6 primary executive sectors & descriptors
│   ├── services.json          # Single-source-of-truth service pricing & SLAs
│   └── stats.ts               # Core placement metrics & stats
├── lib/
│   ├── api/
│   │   └── jobs.ts            # Dual API fetcher (Adzuna + Remotive) with timeout guards
│   ├── hooks/
│   │   ├── useCountUp.ts      # Eased numerical counter hook
│   │   └── useMagneticPull.ts # Interactive cursor pull calculation
│   ├── seo/
│   │   └── schema.ts          # Schema.org JSON-LD generators (Org, Service, FAQ, Jobs)
│   └── motion.ts              # Framer Motion animation variants & orchestrations
├── public/
│   ├── apple-touch-icon.png   # 180x180 iOS bookmark icon
│   ├── favicon.ico            # Multi-res (16x16, 32x32, 48x48) Windows icon
│   ├── favicon.svg            # 512x512 vector emblem
│   ├── icon-192.png           # 192x192 Android launcher icon
│   ├── icon-512.png           # 512x512 PWA splash icon
│   ├── robots.txt             # SEO & GEO search engine and AI crawler directives
│   └── site.webmanifest       # PWA manifest metadata
├── scripts/
│   └── generate-favicons.js   # Automated multi-platform icon generation script
├── .env.example               # Template environment configuration
├── package.json
├── tailwind.config.ts         # Tailwind configuration with class-based dark mode
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/nexrole.git
   cd nexrole
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the `.env.example` template into `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(See the [Environment Variables](#-environment-variables) section below for details)*.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🔐 Environment Variables

| Variable | Required | Default / Example | Purpose |
|---|:---:|---|---|
| `NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN` | Optional | `nexrole` | Lemon Squeezy merchant subdomain for checkout overlays |
| `RESEND_API_KEY` | **Required** for Contact Form | `re_xxxxxxxx_...` | API key for dispatching transactional lead emails |
| `RESEND_FROM_EMAIL` | Optional | `"NexRole <onboarding@resend.dev>"` | Verified sender address (or onboarding domain for testing) |
| `CONTACT_RECIPIENT_EMAIL` | Optional | `support@nexrole.com` | Destination inbox where contact submissions are forwarded |
| `ADZUNA_APP_ID` | Optional | `your_app_id` | Adzuna Jobs API Application ID |
| `ADZUNA_APP_KEY` | Optional | `your_app_key` | Adzuna Jobs API Access Key |

> [!NOTE]
> If `ADZUNA_APP_ID` or `ADZUNA_APP_KEY` are not set, the platform will automatically fetch live positions from the public **Remotive API** and fall back gracefully to `/data/jobs.json` with zero downtime.

---

## 💳 Payment Gateway Architecture (Lemon Squeezy)

NexRole implements Lemon Squeezy as its exclusive Merchant of Record (MoR) provider:

1. **Global Script**: Injected once inside `app/layout.tsx`:
   ```html
   <script src="https://app.lemonsqueezy.com/js/lemon.js" defer />
   ```
2. **Hosted Checkout Overlays**:
   Buttons across `/payment` and service sub-pages use the `lemonsqueezy-button` class to trigger the frictionless in-app overlay.
3. **Dynamic Initialization**:
   The client invokes `window.createLemonSqueezy()` upon component mount, ensuring event listeners bind accurately across client navigation.
4. **Receipt & Onboarding Route**:
   Upon transaction completion, customers are redirected to `/payment/success?order_number=XYZ`, displaying receipt confirmation and consulting assignment timelines.

---

## 📨 Contact Form & Resend Integration

Inquiries submitted through `/contact` pass through an internal Next.js API route:

- **Endpoint**: `POST /api/contact`
- **Controller**: `app/api/contact/route.ts`
- **Payload**:
  ```json
  {
    "fullName": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Executive CV Rewrite",
    "message": "Looking to restructure my C-level portfolio."
  }
  ```
- **Features**:
  - Validates field integrity on the server.
  - Sends a styled executive HTML card to `CONTACT_RECIPIENT_EMAIL`.
  - Sets `replyTo: email` so support teams can reply directly to the candidate from their inbox.
  - Returns JSON `{ success: true, data: { id: "..." } }`.

---

## 🔍 SEO & GEO (Generative Engine Optimization)

NexRole is architected to rank in both traditional search engines (Google, Bing) and generative AI engines (Perplexity, ChatGPT Search, Claude, Google Gemini):

### Schema.org JSON-LD Entities
- **`Organization` / `EmploymentAgency`**: Legal name, founding base (London), worldwide service area (38+ countries), and official support contact.
- **`WebSite`**: Configured with Google Sitelinks Searchbox (`/jobs?q={search_term}`).
- **`FAQPage`**: Formatted Q&A pairs from the contact page that populate Google FAQ accordions and direct AI answer citations.
- **`Service`**: Full rate card catalog for CV Writing, Rewrite, and Cover Letter services with exact pricing and turnaround times.
- **`JobPosting`**: Schema for active vacancies enabling listing on **Google for Jobs**.
- **`BreadcrumbList`**: Multi-level navigation breadcrumbs on all sub-routes.

### Generative Engine Indexing (`public/robots.txt`)
Explicit crawl permissions are established for AI models:
```txt
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

---

## 🌓 Theme Engine

- **Default Theme**: Executive Light Mode (slate-50 `#F8FAFC`, white cards, slate-900 typography, electric blue, and warm gold accents).
- **Dark Mode**: Midnight Executive Navy (`#050D1F`).
- **Interactive Switcher**: Animated Sun/Moon toggle in the desktop Navbar and mobile drawer.
- **Zero-Flicker Injection**: An inline synchronous script inside `<head>` reads `localStorage.getItem("nexrole-theme")` prior to initial paint, preventing any hydration flash.

---

## 🚢 Deployment

NexRole is optimized for **Vercel** deployment with zero manual configuration:

1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Under **Project Settings > Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_RECIPIENT_EMAIL`
   - `ADZUNA_APP_ID` (Optional)
   - `ADZUNA_APP_KEY` (Optional)
   - `NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN` (Optional)
4. Deploy. Vercel will automatically build the static pages and deploy the serverless contact route.

### Build Verification Matrix

```bash
Route (app)                              Size     First Load JS
┌ ○ /                                    12 kB           354 kB
├ ○ /_not-found                          139 B          87.6 kB
├ ○ /about                               5.31 kB         347 kB
├ ƒ /api/contact                         0 B                0 B
├ ○ /cancellation-policy                 187 B           139 kB
├ ○ /contact                             10.4 kB         146 kB
├ ○ /icon.svg                            0 B                0 B
├ ○ /jobs                                7.85 kB         143 kB
├ ○ /payment                             5.4 kB          132 kB
├ ○ /payment/success                     3.43 kB         139 kB
├ ○ /pricing-disclosure                  198 B           139 kB
├ ○ /privacy-policy                      187 B           139 kB
├ ○ /refund-policy                       187 B           139 kB
├ ○ /reviews                             5.49 kB         348 kB
├ ○ /services                            7.47 kB         148 kB
├ ○ /services/cover-letter               4.56 kB         145 kB
├ ○ /services/cv-rewrite                 4.84 kB         145 kB
├ ○ /services/new-cv                     4.9 kB          145 kB
├ ○ /sitemap.xml                         0 B                0 B
└ ○ /terms-of-service                    187 B           139 kB
+ First Load JS shared by all            87.5 kB

✓ Generating static pages (23/23)
✓ Exit code: 0 | 0 errors | 0 warnings
```

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **NexRole Global Recruitment Ltd**.
