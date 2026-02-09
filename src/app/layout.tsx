import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shinwonfi.com'),
  title: {
    default: "(주)신원에프아이 - 건강하고 정직한 식품의 기준",
    template: "신원에프아이 - %s"
  },
  description: "신원에프아이는 식육추출가공품, 복합조미식품, HMR 등 고객의 니즈에 맞춘 최상의 제품을 연구하고 생산합니다.",
  keywords: ["신원에프아이", "식육추출가공품", "복합조미식품", "HMR", "식품제조", "OEM", "ODM"],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.shinwonfi.com',
    siteName: '신원에프아이',
    title: "(주)신원에프아이 - 건강하고 정직한 식품의 기준",
    description: "신원에프아이는 식육추출가공품, 복합조미식품, HMR 등 고객의 니즈에 맞춘 최상의 제품을 연구하고 생산합니다.",
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: '신원에프아이',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "(주)신원에프아이 - 건강하고 정직한 식품의 기준",
    description: "신원에프아이는 식육추출가공품, 복합조미식품, HMR 등 고객의 니즈에 맞춘 최상의 제품을 연구하고 생산합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${nanumGothic.variable} antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
