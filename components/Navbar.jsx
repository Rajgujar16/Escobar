"use client";

import { Search, User, ChevronDown, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileDropdown from "@/components/HomePage/ProfileDropdown";

export default function Navbar({
  onLoginClick,
  currentLocale,
  onLocaleChange,
  t,
}) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "pt", name: "Portuguese" },
    { code: "es", name: "Spanish" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === currentLocale)?.name || "English";

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="logo" className="h-10 lg:h-auto w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href={"/"}
            className="text-[#ff9a3c] hover:text-[#ff9a3c] text-sm transition"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/agencies"
            className="text-gray-300 hover:text-[#ff9a3c] text-sm transition"
          >
            {t("nav.agencies")}
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-[#ff9a3c] text-sm transition"
          >
            {t("nav.cityTours")}
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-[#ff9a3c] text-sm transition"
          >
            {t("nav.map")}
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 text-gray-300 hover:text-white text-sm px-3 py-1.5 rounded-md hover:bg-white/5"
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

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 pl-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff9a3c]/50 focus:ring-1 focus:ring-[#ff9a3c]/50 w-48 transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>

          {/* Login Button */}
          {isLoggedIn ? (
            // <button
            //   onClick={() => router.push("/profile")}
            //   className="flex items-center gap-2 border border-[#ff9a3c] bg-zinc-950 text-[#ff9a3c] justify-center py-2 rounded-full px-4 hover:bg-[#ff9a3c]/10 transition"
            // >
            //   <User className="h-5 w-5" />
            // </button>

            <ProfileDropdown />
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 border border-[#ff9a3c] bg-zinc-950 text-white/70 justify-center py-2 rounded-full px-4 hover:bg-[#ff9a3c]/10 transition"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Login / Signup</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/*  Mobile Sidebar / Off-Canvas Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 h-[100vh] bg-[#0b0b0b] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 border-r border-white/10`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0b0b0b]">
          <Image
            src={logo}
            alt="logo"
            className="h-9 w-auto cursor-pointer"
            onClick={() => {
              router.push("/");
              setIsMenuOpen(false);
            }}
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col p-5 space-y-5 bg-black">
          {/* Links */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#ff9a3c] text-sm"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 text-sm"
          >
            {t("nav.agencies")}
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 text-sm"
          >
            {t("nav.cityTours")}
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 text-sm"
          >
            {t("nav.map")}
          </Link>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-1.5 pl-10 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center justify-between w-full text-gray-300 text-sm bg-white/5 px-3 py-2 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {currentLang}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isLangOpen && (
              <div className="mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLocaleChange(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${
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

          {/* Login Button */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                router.push("/userProfile"), setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-[#ff9a3c] bg-zinc-950 text-[#ff9a3c] justify-center py-2 rounded-full px-4 hover:bg-[#ff9a3c]/10 transition"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onLoginClick(), setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-[#ff9a3c] bg-zinc-950 text-white/70 justify-center py-2 rounded-full px-4 hover:bg-[#ff9a3c]/10 transition"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Login / Signup</span>
            </button>
          )}
        </div>
      </div>

      {/* Overlay (when menu is open) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}
    </nav>
  );
}
