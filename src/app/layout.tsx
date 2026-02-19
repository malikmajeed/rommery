import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProviderWrapper } from "@/components/LanguageProviderWrapper";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import "./globals.css";

const translations = { en, de };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rommery – Smart Digital Solutions for Hotels",
  description: "Automate check-in, integrate smart locks, and manage your property with a fully connected PMS ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProviderWrapper translations={translations}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
