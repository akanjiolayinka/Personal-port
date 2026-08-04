import type { Metadata } from "next";
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "OlayinkaCodes — Olayinka Akanji, AI Engineer",
  description:
    "AI systems, backend infrastructure, and things built from scratch. Portfolio of Olayinka Akanji — AI Engineer / Software Engineer.",
  metadataBase: new URL("https://olayinkacodes.dev"),
  openGraph: {
    title: "OlayinkaCodes — Olayinka Akanji, AI Engineer",
    description:
      "AI systems, backend infrastructure, and things built from scratch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${hankenGrotesk.variable}`}>
      <body className="bg-graphite text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
