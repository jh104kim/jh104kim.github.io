import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { STATIC_EXIT_KEY } from "@/lib/static-hobby-exit";
import { Providers } from "@/components/ui/Providers";

const SITE_URL = "https://jh104kim.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "김정현 — Compressor Engineering + AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김정현 | Compressor & AI Engineering Portfolio",
    description: "압축기 도메인 × AI 자동화로 실무 성과를 만드는 포트폴리오",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "김정현",
  alternateName: "Junghyun Kim",
  jobTitle: "AI Crew Leader",
  worksFor: {
    "@type": "Organization",
    name: "Samsung Electronics DA Division",
  },
  url: SITE_URL,
  email: "mailto:jh104.kim@gmail.com",
  sameAs: [
    "https://github.com/jh104kim",
    "https://www.notion.so/vita-0bc7ea7f5c5a83c882838195c39d45fd",
  ],
  knowsAbout: [
    "Compressor Engineering",
    "GT-Suite Simulation",
    "Fluid-Structure Interaction",
    "AI Automation",
  ],
};

const bfcacheReloadSnippet = `
(function(){
  var k=${JSON.stringify(STATIC_EXIT_KEY)};
  window.addEventListener("pageshow",function(e){
    var fromStatic=false;
    try{
      fromStatic=sessionStorage.getItem(k)==="1";
      if(fromStatic)sessionStorage.removeItem(k);
    }catch(x){}
    if(e.persisted||fromStatic)window.location.reload();
  });
})();
`.trim();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="antialiased" suppressHydrationWarning>
      <body className="min-h-screen">
        <script
          dangerouslySetInnerHTML={{ __html: bfcacheReloadSnippet }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
