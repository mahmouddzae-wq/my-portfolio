import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mahmoud | Computer Science Portfolio",
  description: "A premium, futuristic personal portfolio built with Next.js, Tailwind, and Framer Motion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-[#050816] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

