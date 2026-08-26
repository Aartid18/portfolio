import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const headingFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarti Dinkar | Full Stack Developer & AI/ML Specialist",
  description: "Developer portfolio of Aarti Dinkar. BE in Information Technology & Honours in Data Science. Showcasing Full Stack Web Applications, AI/ML models, and live Vercel deployments.",
  keywords: ["Aarti Dinkar", "Full Stack Developer", "AI Engineer", "Machine Learning", "React Developer", "Next.js", "Python", "Data Science"],
  authors: [{ name: "Aarti Dinkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${headingFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#0b0f19] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}

