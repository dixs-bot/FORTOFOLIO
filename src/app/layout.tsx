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
  title: "Diki Wahyudin | Front-End Developer Portfolio",
  description: "Portfolio pribadi Diki Wahyudin, seorang Front-End Developer otodidak yang berfokus pada pengembangan website modern, dashboard ERP, dan integrasi database menggunakan React, Next.js, TypeScript, Tailwind CSS, dan Supabase.",
  keywords: ["Diki Wahyudin", "Front-End Developer", "Self-Taught Programmer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "ERP Dashboard", "LUMORA"],
  authors: [{ name: "Diki Wahyudin" }],
  creator: "Diki Wahyudin",
  openGraph: {
    title: "Diki Wahyudin | Front-End Developer Portfolio",
    description: "Portfolio pribadi Diki Wahyudin, seorang Front-End Developer otodidak yang berfokus pada pengembangan website modern, dashboard ERP, dan integrasi database.",
    url: "https://diki-dev.id",
    siteName: "Portfolio Diki Wahyudin",
    images: [
      {
        url: "https://diki-dev.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diki Wahyudin Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diki Wahyudin | Front-End Developer",
    description: "Building modern web applications with JavaScript, React, Next.js, and Supabase.",
    creator: "@diki_wahyudin",
    images: ["https://diki-dev.id/og-image.jpg"],
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
