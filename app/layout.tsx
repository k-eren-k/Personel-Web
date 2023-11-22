import type { Metadata, Viewport } from "next"; // Import the 'Metadata' type from the "next" module.

import { Inter } from "next/font/google"; // Import the 'Inter' font from the "next/font/google" module.

import "./globals.css"; // Import global CSS styles from the "globals.css" file.

import { Providers } from "@/providers"; // Import the 'Providers' component from the "@/providers" module.

import { Analytics } from "@vercel/analytics/react"; // Import the 'Analytics' component from the "@vercel/analytics/react" module.
import { Person, WithContext } from "schema-dts";
import ScrollToTop from "./components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] }); // Initialize the 'Inter' font with the "latin" subset.

export const metadata: Metadata = {
  title: "Eren",
  description:
    "This is my personal website. Created with Next.js. I'm a Web Developer from Turkey.",
  keywords:
    "personal website, Next.js, web development, ui design, sametcc.me, sametcc, samet can cıncık, portfolio",
  applicationName: "sametcc.me",
  creator: "https://github.com/DalgaGamePlay",
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eren",
  url: "https://www.erenk.fun/",
  sameAs: [
    "https://www.linkedin.com/in/samet-can-c%C4%B1nc%C4%B1k",
    "http://instagram.com/sametc0",
    "https://github.com/sametcn99",
    "https://www.youtube.com/channel/UCgXu7EZ76uMqPW8i4ZCL72Q",
  ],
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        {/* Define the HTML document with a language attribute set to "en". */}
        <link rel="shortcut icon" href="/indir.png" />
        <meta property="og:image" content="/indir.png" />
        <meta name="twitter:card" content="/indir.png" />
        <meta property="og:title" content="erenk.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This is my personal website. Created with Next.js. I'm a Web Developer from Turkey."
        />
        <meta property="og:url" content="https://www.erenk.fun/" />
        <meta property="og:site_name" content="erenk.fun" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body className={inter.className}>
        {/* Set the body class for using the 'Inter' font. */}
        <Providers>
          {/* Wrap the main content in a 'Providers' component. */}
          <main className="flex flex-col items-center w-full min-h-screen scroll-smooth">
            {children}
            <script
              id="json-ld"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </main>
          {/* Define the main content area. */}
          <Analytics />
          {/* Include analytics tracking with the 'Analytics' component. */}
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}
