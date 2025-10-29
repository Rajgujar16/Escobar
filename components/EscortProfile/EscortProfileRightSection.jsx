"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Globe,
  DollarSign,
  CheckCircle,
  CheckCircle2Icon,
  Sparkle,
} from "lucide-react";
import { FaEye, FaFlag, FaUser, FaVideo, FaHeart } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import BookingModal from "@/components/EscortProfile/BookingModal";

import { HiUsers } from "react-icons/hi";
export default function EscortProfileRightSection() {
  const [bookModal, setBookModal] = useState(false);
  const availability = [
    { day: "Monday", time: "08:00 AM - 01:00 AM" },
    { day: "Tuesday", time: "08:00 AM - 01:00 AM" },
    { day: "Wednesday", time: "08:00 AM - 01:00 AM" },
    { day: "Thursday", time: "08:00 AM - 01:00 AM" },
    { day: "Friday", time: "10:00 AM - 03:00 AM" },
    { day: "Saturday", time: "10:00 AM - 03:00 AM" },
    { day: "Sunday", time: "By Appointment" },
  ];
  return (
    <>
      <div className="sticky top-24  space-y-6">
        {/* Profile Card */}
        <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#1f1f1f] w-full">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">
                Sophia Laurent
              </h3>
              <p className="text-green-500 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                Available Now
              </p>
            </div>
            <button className="text-gray-400 hover:text-white bg-zinc-600 p-2 rounded-full">
              <FaHeart />
            </button>
          </div>

          {/* Verified */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
            <CheckCircle size={16} /> Verified & Trusted
          </div>

          <hr className="border-[#1f1f1f] mb-4" />

          {/* Availability */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} />
              <span className="font-medium text-white text-sm">
                Availability
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Available for bookings today and this week. Advance bookings
              preferred.
            </p>
          </div>

          {/* Buttons */}
          <button
            className="w-full bg-gradient-to-r from-[#d4a574] to-[#e3b67a] text-black font-semibold py-3 rounded-lg mb-3 text-sm hover:from-[#e3b67a] hover:to-[#d4a574] transition-all flex items-center justify-center gap-2"
            onClick={() => setBookModal(true)}
          >
            <FaVideo /> Book a Live Session
          </button>

          <button className="w-full border border-[#d4a574]/50 text-white py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all">
            <BsTelephoneOutboundFill /> Contact
          </button>

          <hr className="border-[#1f1f1f] my-4" />

          {/* Trust Badges */}
          <ul className="space-y-2 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <CheckCircle2Icon size={18} />
              </span>{" "}
              Identity Verified
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <CheckCircle2Icon size={18} />
              </span>{" "}
              Background Checked
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <CheckCircle2Icon size={18} />
              </span>{" "}
              100% Secure Booking
            </li>
          </ul>
        </div>

        <div className="bg-[#D8AB851A] rounded-xl p-6 border border-zinc-800 flex items-center justify-center gap-2">
          <Sparkle size={16} className="text-amber-500" />{" "}
          <span className="text-amber-500 text-sm">
            Premium Member - Book with confidence
          </span>
        </div>

        {/* Details Card */}
        <div className="bg-[#111] rounded-xl p-6 border border-zinc-800">
          <h3 className="font-bold text-lg mb-4">Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <Users size={16} /> Age
              </span>
              <span className="font-semibold">25 years</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <HiUsers size={16} /> Height
              </span>
              <span className="font-semibold">5'7" (170cm)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <FaUser size={16} /> Bust/Size
              </span>
              <span className="font-semibold">Brunette</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <FaEye size={16} /> Eyes
              </span>
              <span className="font-semibold">Hazel</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <Globe size={16} /> Languages
              </span>
              <span className="font-semibold">French</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <FaFlag size={16} /> Nationality
              </span>
              <span className="font-semibold">English, French, Spanish</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <Globe size={16} /> Ethnicity
              </span>
              <span className="font-semibold">Heterosexual</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <DollarSign size={16} /> Price Range
              </span>
              <span className="font-semibold text-amber-500">$ (EU 36)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-2">
                <FaUser size={16} /> Shoe Size
              </span>
              <span className="font-semibold">7 (EU 38)</span>
            </div>
          </div>
        </div>

        {/* Availability Card */}
        <div className="bg-[#111] rounded-xl p-6 border border-zinc-800">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Calendar size={20} /> Availability
          </h3>
          <div className="space-y-2 text-sm">
            {availability.map((day, idx) => (
              <div key={idx} className="flex items-center justify-between py-2">
                <span className="text-gray-400">{day.day}</span>
                <span className="font-semibold text-xs">{day.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="text-xs text-blue-400">
              Note: Availability subject to prior bookings. Advance booking
              recommended.
            </div>
          </div>
        </div>

        {/* Travel Locations */}
        <div className="bg-[#111] rounded-xl p-6 border border-zinc-800">
          <h3 className="font-bold text-lg mb-4">Travel Locations</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
              <MapPin size={12} /> London
            </span>
            <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
              <MapPin size={12} /> Paris
            </span>
            <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
              <MapPin size={12} /> Dubai
            </span>
          </div>
        </div>
        <BookingModal isOpen={bookModal} onClose={() => setBookModal(false)} />
      </div>
    </>
  );
}
