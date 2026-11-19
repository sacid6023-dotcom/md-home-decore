import FloatingSupport from "@/components/common/FloatingSupport";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MD Home Decore | Luxury Interior Design",
    template: "%s | MD Home Decore",
  },
  description:
    "MD Home Decore creates elegant, modern and timeless interior spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSupport />
      </body>
    </html>
  );
}
