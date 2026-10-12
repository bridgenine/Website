import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { HtmlLang } from "@/components/html-lang";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bridgenine — On-prem AI compliance for Indonesia",
    template: "%s · Bridgenine",
  },
  description:
    "Bridgenine builds Project Alpha, a self-hosted offline system that reviews Indonesian invoices against tax rules and KBLI codes. Data stays on your server.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bridgenine — on-prem AI compliance for Indonesian businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  description:
    "Bridgenine builds Project Alpha, a self-hosted, fully offline AI compliance review system for Indonesian businesses.",
  knowsLanguage: ["en", "id"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname==="/id"||location.pathname.startsWith("/id/")?"id":"en";`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-white text-navy">
        <HtmlLang />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {children}
      </body>
    </html>
  );
}
