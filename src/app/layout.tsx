import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "김정현 | Compressor & AI Engineering Portfolio",
  description:
    "삼성전자 DA사업부 AI Crew Leader. 26년 압축기 엔지니어링 + AI 자동화 전문가. R600a BLDC 최초 개발, 일본 Sales 360억 달성.",
  keywords: [
    "김정현",
    "포트폴리오",
    "압축기 엔지니어",
    "AI Crew",
    "삼성전자",
    "BLDC",
    "GT-Suite",
    "Compressor Engineering",
  ],
  openGraph: {
    title: "김정현 | Compressor & AI Engineering Portfolio",
    description: "삼성전자 DA사업부 AI Crew Leader. 기술 + AI 융합 전문가.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
