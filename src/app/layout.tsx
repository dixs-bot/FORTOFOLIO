import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../styles/animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Wright | Lead Full-Stack Engineer Portfolio",
  description: "Professional portfolio of Alexander Wright, Lead Full-Stack Engineer. Specializing in high-performance React/Next.js ecosystems, TypeScript, Tailwind CSS, FastAPI, and scalable AI system integrations.",
  keywords: ["Alexander Wright", "Full-Stack Engineer", "Software Architect", "Next.js", "React Portfolio", "TypeScript developer", "FastAPI", "Tailwind CSS v4", "Framer Motion animations"],
  authors: [{ name: "Alexander Wright" }],
  creator: "Alexander Wright",
  openGraph: {
    title: "Alexander Wright | Lead Full-Stack Engineer Portfolio",
    description: "Explore the digital products, advanced interfaces, and backend systems built by Alexander Wright.",
    url: "https://wright-dev.io",
    siteName: "Alexander Wright Portfolio",
    images: [
      {
        url: "https://wright-dev.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alexander Wright Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Wright | Lead Full-Stack Engineer Portfolio",
    description: "Explore the digital products, advanced interfaces, and backend systems built by Alexander Wright.",
    creator: "@alexander_wright",
    images: ["https://wright-dev.io/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
