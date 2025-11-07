"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "../lib/suppressHydrationWarnings";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal/LoginModal";
import BookingModal from "@/components/EscortProfile/BookingModal";
import { ModalProvider, useModal } from "./ModalContext";
import Ads from "@/components/Ads/Ads";

import en from "@/public/locales/en/common.json";
import fr from "@/public/locales/fr/common.json";
import pt from "@/public/locales/pt/common.json";
import es from "@/public/locales/es/common.json";

const translations = { en, fr, pt, es };
const inter = Inter({ subsets: ["latin"] });

function LayoutContent({ children, currentLocale, setCurrentLocale, t }) {
  const { isLoginOpen, closeLogin, isBookingOpen, closeBooking, openLogin } =
    useModal();

  return (
    <>
      <Navbar
        onLoginClick={openLogin}
        currentLocale={currentLocale}
        onLocaleChange={setCurrentLocale}
        t={t}
      />

      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} t={t} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {children}
      <Ads />
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
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
      <body
        className={`${inter.className} min-h-screen bg-[#0e0e0e] lg:pt-24 md:pt-24 pt-20`}
      >
        <ModalProvider>
          <LayoutContent
            currentLocale={currentLocale}
            setCurrentLocale={setCurrentLocale}
            t={t}
          >
            {children}
          </LayoutContent>
        </ModalProvider>
      </body>
    </html>
  );
}
