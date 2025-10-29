"use client";
import LoginModal from "../components/LoginModal/LoginModal";

import "../lib/suppressHydrationWarnings";
import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import en from "@/public/locales/en/common.json";
import fr from "@/public/locales/fr/common.json";
import pt from "@/public/locales/pt/common.json";
import es from "@/public/locales/es/common.json";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { ModalProvider } from "./ModalContext";
const translations = { en, fr, pt, es };

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Escortsinub - Premium Services",
//   description: "Discover exclusive experiences and premium services",
// };

export default function RootLayout({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en");

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLocale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0e0e0e] pt-24`}>
        <ModalProvider>
          <Navbar
            onLoginClick={() => setIsLoginOpen(true)}
            currentLocale={currentLocale}
            onLocaleChange={setCurrentLocale}
            t={t}
          />
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            t={t}
          />
          {children}
        </ModalProvider>

        <Footer />
      </body>
    </html>
  );
}
