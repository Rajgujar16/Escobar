"use client";

import { X } from "lucide-react";
import { useState } from "react";
import IndependentRegister from "../Register/IndependentRegister";

export default function CreateAgencyEscortModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] top-0 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#0b0b0b] text-white rounded-2xl border border-[#d4a574] w-[90%] sm:w-[80%] md:w-[55%] lg:w-[400px] max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4a574]/40 scrollbar-track-transparent p-5 shadow-[0_0_25px_rgba(212,165,116,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#2c2c2c] pb-3 pt-4 mb-4 sticky -top-6 left-0 right-0 bg-[#0b0b0b] rounded-t-2xl px-5">
          <h2 className="flex items-center gap-2 text-lg font-medium text-[#ffbe85]">
            Add New Escort
          </h2>
          <button
            onClick={onClose}
            className="text-[#ffbe85] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <IndependentRegister />
      </div>
    </div>
  );
}
