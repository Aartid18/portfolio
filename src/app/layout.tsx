import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarti Dinkar | Full Stack Engineer & Applied AI",
  description: "Portfolio of Aarti Dinkar. BE in Information Technology & Honours in Data Science. Full Stack Applications, REST APIs, and Machine Learning Systems.",
  keywords: ["Aarti Dinkar", "Full Stack Engineer", "Applied AI", "Machine Learning", "React Developer", "Next.js", "Python", "Data Science"],
  authors: [{ name: "Aarti Dinkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${displayFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-[#f5f3ee] selection:bg-[#e0653a] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
