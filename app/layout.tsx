import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/motion/page-transition";
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
    default: "Egoric Agency | Strategic Seeding Studio",
    template: "%s | Egoric Agency"
  },
  description:
    "Egoric Agency thiết kế strategic seeding campaign, DODS model, community seeding, social proof và conversation layer có kiểm soát cho launch, campaign và market perception.",
  keywords: [
    "agency seeding chiến lược",
    "dịch vụ seeding",
    "chiến dịch seeding",
    "seeding cộng đồng",
    "seeding ra mắt sản phẩm",
    "seeding social proof",
    "conversation seeding",
    "DODS seeding",
    "digital influence agency Vietnam",
    "market perception support",
    "seeding campaign",
    "agency seeding Việt Nam",
    "marketing seeding service"
  ],
  openGraph: {
    title: "Egoric Agency | Strategic Seeding Studio",
    description:
      "Tạo conversation momentum có kiểm soát bằng strategic seeding, DODS model và market signal planning.",
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
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
