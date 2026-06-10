import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malu Investment CC — Moving Okahandja Forward",
  description:
    "Professional taxi and transport services in Okahandja, Namibia. Registered CC (CC/2017/00248). Trusted. Local. Reliable.",
  keywords: [
    "Malu Investment",
    "Okahandja",
    "taxi",
    "transport",
    "Namibia",
    "close corporation",
  ],
  authors: [{ name: "Malu Investment CC" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Malu Investment CC — Moving Okahandja Forward",
    description:
      "Professional taxi and transport services in Okahandja, Namibia. Registered. Trusted. Local.",
    type: "website",
    locale: "en_NA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
