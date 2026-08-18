import type { Metadata } from "next";
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { contact } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const TITLE = "Olayinka Akanji — Software Engineer (Backend & Systems)";
const DESCRIPTION =
  "Backend engineer building scalable APIs and systems in Go and Python — FastAPI on the API side, Go when it matters to know exactly what's happening under the hood. AI engineering (RAG pipelines, agentic systems) as a secondary specialty.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://olayinkacodes.dev"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://olayinkacodes.dev",
    siteName: "OlayinkaCodes",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Olayinka Akanji",
  jobTitle: "Software Engineer",
  url: "https://olayinkacodes.dev",
  email: `mailto:${contact.email}`,
  sameAs: [contact.github, contact.linkedin, contact.leetcode, contact.hackerrank],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${hankenGrotesk.variable}`}>
      <body className="bg-graphite text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
