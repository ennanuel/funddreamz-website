import type { Metadata } from "next";
import { Inter, DM_Sans, Montserrat } from "next/font/google";

import "./globals.css";
import LayoutWrapper from "./_components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FundDreamz",
  description: "#1 Crowd-funding platform in Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${montserrat.variable} antialiased font-montserrat`}
      > 
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
