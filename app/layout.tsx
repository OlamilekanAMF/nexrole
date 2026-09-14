import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexrole.com"),
  title: {
    default: "NexRole — Premium Global Recruitment & Executive CV Agency",
    template: "%s | NexRole Global Recruitment",
  },
  description:
    "NexRole connects world-class talent with leading organisations worldwide — faster, smarter, and with genuine executive CV positioning built in.",
  keywords: [
    "executive recruitment",
    "global hiring agency",
    "executive CV rewrite",
    "executive search firm",
    "job placement",
    "leadership talent",
    "board level advisory",
    "executive career consulting",
  ],
  authors: [{ name: "NexRole Global", url: "https://nexrole.com" }],
  creator: "NexRole",
  publisher: "NexRole Global Recruitment Ltd",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NexRole — Premium Global Recruitment & Executive CV Agency",
    description:
      "Connecting the right people with the right roles worldwide. Placements across Legal, Finance, Tech, HR, Ops, and Marketing.",
    url: "https://nexrole.com",
    siteName: "NexRole",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "NexRole Global Recruitment Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexRole — Premium Global Recruitment",
    description: "Connecting the right people with the right roles worldwide.",
    images: ["/icon-512.png"],
    creator: "@nexrole",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('nexrole-theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-[#050D1F] text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ThemeProvider>
          <LenisProvider>
            <CustomCursor />
            <Navbar />
            <main className="flex-grow pt-[74px] flex flex-col w-full overflow-x-hidden">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
