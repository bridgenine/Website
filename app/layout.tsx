import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { HtmlLang } from "@/components/html-lang";
import { site } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bridgenine — Consulting and workflow automation",
    template: "%s · Bridgenine",
  },
  description:
    "Bridgenine is a consulting firm for business and process work, workflow automation, AI-assisted automation, and implementation. Project Alpha is one solution.",
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
        alt: "Bridgenine — consulting and workflow automation",
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
    "Bridgenine is a consulting firm that also does workflow automation, including AI-assisted automation, and implementation. Project Alpha is one solution.",
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
      className={`${inter.variable} h-full antialiased`}
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
