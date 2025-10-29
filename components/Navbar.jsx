"use client";

import { Search, User, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { useModal } from "../app/ModalContext";
import { useRouter } from "next/navigation";

export default function Navbar({
  onLoginClick,
  currentLocale,
  onLocaleChange,
  t,
}) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const router = useRouter();
  const token = true;

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "pt", name: "Portuguese" },
    { code: "es", name: "Spanish" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === currentLocale)?.name || "English";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto ">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-light text-sm tracking-wider cursor-pointer">
            <Image src={logo} alt="logo" onClick={() => router.push("/")} />
          </div>

          {/* Center Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <Link
              href={"/"}
              className="text-[#ff9a3c] hover:text-[#ff9a3c] transition-colors text-sm"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#ff9a3c] transition-colors text-sm"
            >
              {t("nav.agencies")}
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#ff9a3c] transition-colors text-sm"
            >
              {t("nav.cityTours")}
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#ff9a3c] transition-colors text-sm"
            >
              {t("nav.map")}
            </Link>
          </div>

          {/* Right side: translate + search + user */}
          <div className="flex items-center space-x-4">
            {/* Translate Button */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-md hover:bg-white/5"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLocaleChange(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLocale === lang.code
                          ? "bg-[#ff9a3c]/20 text-[#ff9a3c]"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 pl-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9a3c]/50 focus:ring-1 focus:ring-[#ff9a3c]/50 w-48 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            {/* User Icon */}
            <button
              onClick={onLoginClick}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-2 transition-all hover:border-[#ff9a3c]/50"
            >
              <User className="h-5 w-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      {/* Login trigger
      <button
        onClick={() => useModal().openLogin && useModal().openLogin()}
        style={{ marginLeft: 10 }}
      >
        Login
      </button> */}
    </nav>
  );
}
