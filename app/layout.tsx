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
    default: "Bridgenine — On-prem software for Indonesian businesses",
    template: "%s · Bridgenine",
  },
  description:
    "Bridgenine builds on-premises software that runs on the client server. Project Alpha is the current product.",
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
        alt: "Bridgenine — on-prem software for Indonesian businesses",
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
    "Bridgenine builds on-premises software for Indonesian businesses. Project Alpha is the current product.",
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
