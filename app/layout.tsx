import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingGhostLayer } from "@/components/FloatingGhostLayer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0e18",
};

export const metadata: Metadata = {
  title: "おばけの夢占い🔮",
  description: "夢の中で出てきたキーとなるモチーフを元にあなたの夢と状態を占います。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <FloatingGhostLayer />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
