"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";
import {
  FaBirthdayCake,
  FaCoins,
  FaFighterJet,
  FaFire,
  FaGem,
  FaGift,
  FaGlassMartiniAlt,
  FaHeart,
  FaKey,
} from "react-icons/fa";

export default function GiftPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const gifts = [
    { icon: <FaGlassMartiniAlt />, name: "Champagne", price: 100 },
    { icon: <FaGem />, name: "Diamond", price: 250 },
    { icon: <FaGift />, name: "Gift Box", price: 150 },
    { icon: <FaBirthdayCake />, name: "Cake", price: 80 },
    { icon: <FaHeart />, name: "Heart", price: 60 },
    { icon: <FaKey />, name: "Room Key", price: 200 },
    { icon: <FaFire />, name: "Hot", price: 120 },
    { icon: <FaFighterJet />, name: "Jet", price: 500 },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative bg-[#0a0a0a] rounded-2xl shadow-xl border border-[#d7a36a]/40 
        w-full max-w-[420px] mx-auto flex flex-col overflow-hidden max-h-[90vh]"
      >
        {/* Header */}
        <div className="relative p-3 sm:p-4 border-b border-[#d7a36a]/30 flex justify-center items-center">
          <Image
            src={logo}
            alt="Gift Logo"
            className="w-auto object-contain h-8 sm:h-10"
          />
          <button
            onClick={onClose}
            className="absolute right-3 sm:right-4 text-[#d7a36a] hover:text-[#e0b26d] transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center text-[#d7a36a] font-semibold text-base sm:text-lg py-2 sm:py-3 border-b border-[#d7a36a]/20 flex justify-between px-4 sm:px-6">
          <span>Send a Gift</span>
          <span className="text-xs sm:text-sm flex items-center gap-1 text-[#d7a36a]/80">
            <FaCoins className="text-[#d7a36a]" /> 5,200 Credits
          </span>
        </div>

        {/* Gifts Grid */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-5 hide-scrollbar">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
            {gifts.map((g, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2 sm:p-3 border border-[#d7a36a]/40 rounded-lg hover:bg-[#d7a36a]/10 cursor-pointer transition-all"
              >
                <div className="text-[#d7a36a] text-lg sm:text-xl mb-1">
                  {g.icon}
                </div>
                <p className="text-[10px] sm:text-xs text-[#d7a36a]/90 text-center">
                  {g.name}
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 flex items-center gap-1">
                  <FaCoins className="text-[#d7a36a] w-2.5 h-2.5" /> {g.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-xs sm:text-sm p-3 sm:p-4 border-t border-[#d7a36a]/30 bg-black">
          <button
            onClick={onClose}
            className="w-full bg-[#d7a36a] text-black py-2 rounded-lg font-semibold hover:bg-[#e0b26d] transition"
          >
            Send Gift
          </button>
        </div>
      </div>
    </div>
  );
}
