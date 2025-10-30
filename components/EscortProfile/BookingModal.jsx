"use client";

import { X, CalendarDays, Clock } from "lucide-react";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState("Tuesday, October 28, 2025");
  const [duration, setDuration] = useState("4 Hours");
  const [time, setTime] = useState("01:00 PM");

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
        <div className="flex items-center justify-between border-b border-[#2c2c2c] pb-3 mb-4">
          <h2 className="flex items-center gap-2 text-lg font-medium text-[#ffbe85]">
            <CalendarDays size={18} /> Book a Live Session
          </h2>
          <button
            onClick={onClose}
            className="text-[#ffbe85] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Select Date */}
        <div className="mb-6">
          <p className="text-sm mb-2 text-gray-300">Select Date</p>
          <div className="bg-[#111] border border-[#2c2c2c] rounded-lg p-3 text-center">
            <p className="text-[#ffbe85] font-medium">October 2025</p>
            <div className="grid grid-cols-7 gap-2 text-xs mt-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                <div key={i} className="text-gray-500">
                  {d}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className={`py-1 rounded-md transition-all duration-200 ${
                    i + 1 === 28
                      ? "bg-[#d4a574] text-black font-semibold"
                      : "hover:bg-[#1a1a1a] text-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Select Duration */}
        <div className="mb-6">
          <p className="text-sm mb-2 text-gray-300">Select Duration</p>
          <div className="relative">
            <select className="w-full bg-[#0b0b0b] border border-[#2c2c2c] rounded-md px-3 py-2 text-sm focus:border-[#d4a574] focus:ring-0 text-gray-300 appearance-none">
              <option value="">eg: 4 hours</option>
              <option>1 Hour</option>
              <option>2 Hours</option>
              <option>4 Hours</option>
            </select>
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-6">
          <p className="text-sm mb-2 text-gray-300">Select Time</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              "01:00 AM",
              "06:00 AM",
              "08:00 AM",
              "01:00 PM",
              "04:00 PM",
              "08:00 PM",
            ].map((slot, idx) => (
              <button
                key={idx}
                className="border border-[#2c2c2c] rounded-md py-2 text-sm hover:bg-[#1a1a1a] transition-all text-gray-300"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-[#d4a574] hover:bg-[#c79456] text-black font-medium py-2 rounded-md transition-colors shadow-md">
          Confirm
        </button>

        {/* Footer Text */}
        <div className="mt-4 text-xs text-gray-400 bg-[#1a1a1a] p-3 rounded-md text-center border border-[#2c2c2c]">
          <Clock className="inline-block mr-1 text-[#d4a574]" size={12} />
          Date: {selectedDate} • Duration: {duration} • Time: {time}
        </div>
      </div>
    </div>
  );
}
