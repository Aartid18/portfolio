import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarti Dinkar | Full Stack Engineer & Applied AI",
  description: "Production Engineering & Applied AI Portfolio of Aarti Dinkar. BE IT (8.4 CGPA) & Data Science Specialization.",
  keywords: ["Aarti Dinkar", "Full Stack Engineer", "Applied AI", "Machine Learning", "React", "Next.js", "Python", "Data Science"],
  authors: [{ name: "Aarti Dinkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#050505] text-[#e8e8e3] selection:bg-[#39ff88] selection:text-[#050505] font-sans">
        {children}
      </body>
    </html>
  );
}
