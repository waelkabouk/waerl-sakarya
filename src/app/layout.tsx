import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geSSTwo = localFont({
  src: [
    {
      path: "./fonts/ArbFONTS-GE-SS-Two-Light_28.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ArbFONTS-GE_SS_TWO_MEDIUM_5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ArbFONTS-GE_SS_Two_Bold_4.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ge-ss",
  display: "swap",
});

export const metadata: Metadata = {
  title: "وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ",
  description:
    "معتكف سكاريا الخامس — العشر الأواخر من رمضان. برنامج روحاني متكامل يضم عبادة، دروس، ومسابقات قرآنية.",
  keywords: ["معتكف", "سكاريا", "رمضان", "اعتكاف", "العشر الأواخر"],
  appleWebApp: {
    title: "WAERL",
  },
  openGraph: {
    title: "معتكف سكاريا الخامس",
    description: "وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${geSSTwo.variable} ${geSSTwo.className}`}>
        {children}
      </body>
    </html>
  );
}
