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
  title: "Diki Wahyudin | Front-End Developer",
  description:
    "Portfolio pribadi Diki Wahyudin, Front-End Developer yang berfokus pada pengembangan website modern menggunakan Next.js, React, TypeScript, Tailwind CSS, dan Supabase.",

  keywords: [
    "Diki Wahyudin",
    "Front-End Developer",
    "Web Developer Indonesia",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "JavaScript",
    "Portfolio",
  ],

  authors: [
    {
      name: "Diki Wahyudin",
    },
  ],

  creator: "Diki Wahyudin",

  openGraph: {
    title: "Diki Wahyudin | Front-End Developer",
    description:
      "Selamat datang di portfolio pribadi Diki Wahyudin. Menampilkan project dan kemampuan dalam membangun aplikasi web modern.",

    url: "https://fortofolio-cyan.vercel.app",

    siteName: "Portfolio Diki Wahyudin",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Diki Wahyudin",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diki Wahyudin | Front-End Developer",
    description:
      "Portfolio modern yang dibangun menggunakan Next.js dan Tailwind CSS.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
