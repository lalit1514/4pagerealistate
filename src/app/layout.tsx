import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luxe Properties | Premium Real Estate",
  description: "Discover luxury properties and premium real estate. Your dream home awaits with Luxe Properties - where elegance meets exceptional living.",
  keywords: "real estate, luxury properties, homes, apartments, villas, premium living",
  openGraph: {
    title: "Luxe Properties | Premium Real Estate",
    description: "Discover luxury properties and premium real estate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
