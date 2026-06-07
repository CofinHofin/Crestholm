import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRESTHOLM | Unique Minds. Creative Sound.",
  description: "Independent record label focused on alternative artist development, gothic atmosphere, and unique artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-[#0A0A0A] text-[#F5F5F5] selection:bg-white/30 selection:text-white min-h-full flex flex-col">{children}</body>
    </html>
  );
}
