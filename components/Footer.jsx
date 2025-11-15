"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#ff9a3c]/40 text-gray-300 text-sm font-light">
      {/* Main Footer Content */}
      <div className="container mx-auto sm:px-6 px-4 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-12">
        {/* Logo and Description */}
        <div className="sm:space-y-4">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Image
              src={logo}
              alt="EscoraClub Logo"
              className="w-32 h-auto object-contain"
            />
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xs hidden sm:block">
            Welcome to EscoraClub, your gateway to exclusive international
            escorts and luxury experiences — discover, filter, and book
            top-rated professionals with ease and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sm:space-y-4 space-y-2 items-center sm:items-start flex flex-col">
          <h3 className="text-white font-medium">Quick Links</h3>
          <ul className="sm:space-y-2 flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 text-gray-400 text-xs sm:text-sm">
            <li>
              <a href="#" className="hover:text-[#ff9a3c] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9a3c] transition-colors">
                Agencies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9a3c] transition-colors">
                City Tours
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9a3c] transition-colors">
                Map
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-6 justify-between sm:gap-48 sm:mt-0 mt-4">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Contact Information</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="text-[#ff9a3c] h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  123 Main Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>

              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="text-[#ff9a3c] h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
              </li>

              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="text-[#ff9a3c] h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">info@escoraclub.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Follow Us</h3>
            <p className="text-gray-400 hidden sm:block">
              Stay connected on social media
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 border border-[#ff9a3c]/60 rounded-full text-[#ff9a3c] hover:bg-[#ff9a3c] hover:text-black transition-colors"
              >
                <FaTelegramPlane className="sm:h-4 sm:w-4 w-3 h-3" />
              </a>
              <a
                href="#"
                className="p-2 border border-[#ff9a3c]/60 rounded-full text-[#ff9a3c] hover:bg-[#ff9a3c] hover:text-black transition-colors"
              >
                <FaTwitter className="sm:h-4 sm:w-4 w-3 h-3" />
              </a>
              <a
                href="#"
                className="p-2 border border-[#ff9a3c]/60 rounded-full text-[#ff9a3c] hover:bg-[#ff9a3c] hover:text-black transition-colors"
              >
                <FaInstagram className="sm:h-4 sm:w-4 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1c1c1c] text-center text-gray-500 py-4 text-xs">
        © 2025 EscoraClub. All rights reserved.
      </div>
    </footer>
  );
}
