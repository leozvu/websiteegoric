import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

const editorial = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-editorial"
});

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: "Egoric Agency | Seeding Chiến Lược & Kích Hoạt Thảo Luận",
    template: "%s | Egoric Agency"
  },
  description:
    "Egoric Agency thiết kế chiến dịch seeding chiến lược, seeding cộng đồng, social proof và lớp thảo luận có kiểm soát cho ra mắt sản phẩm, campaign và nhận thức thương hiệu.",
  keywords: [
    "agency seeding chiến lược",
    "dịch vụ seeding",
    "chiến dịch seeding",
    "seeding cộng đồng",
    "seeding ra mắt sản phẩm",
    "seeding social proof",
    "kích hoạt thảo luận",
    "hỗ trợ nhận thức thương hiệu",
    "seeding campaign",
    "agency seeding Việt Nam",
    "marketing seeding service"
  ],
  openGraph: {
    title: "Egoric Agency | Seeding Chiến Lược & Kích Hoạt Thảo Luận",
    description:
      "Tạo momentum thảo luận có kiểm soát cho launch, cộng đồng và nhận thức thị trường.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${editorial.variable} ${sans.variable} font-sans antialiased`}>
        <SmoothScroll />
        <div className="noise" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
