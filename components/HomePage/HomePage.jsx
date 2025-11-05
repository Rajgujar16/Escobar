"use client";
import React, { useState } from "react";
import RefineSearchSidebar from "@/components/HomePage/RefineSearchSidebar";
import { useRouter } from "next/navigation";
import MediaSections from "@/components/HomePage/MediaSections";
import { FaChevronDown } from "react-icons/fa";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export default function EscortWebsite() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const router = useRouter();

  const escorts = Array(16)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: "Karishma",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
      rating: 5,
      reviews: 12,
      tag: "Pornstar",
      location: "France, Paris",
    }));

  const webcamShows = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=300&fit=crop",
    }));

  const episodes = Array(9)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop",
    }));

  return (
    <div className=" min-h-screen text-white font-inter">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-[#8B0000] px-3 sm:px-4 py-2 rounded">
          <div className="text-[10px] text-white/80">Escort Services In</div>
          <div className="text-sm sm:text-base font-semibold text-white">
            Ahmedabad Escort Services
          </div>
        </div>
        <button className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#D4A574] text-black px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#C49564] transition">
          Book Now
        </button>
      </div>

      <MediaSections webcamShows={webcamShows} episodes={episodes} />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8  gap-6 lg:gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[260px] flex-shrink-0">
          <RefineSearchSidebar />
        </aside>

        {/* Escort Grid */}
        <main className="flex-1 w-full">
          <div className="relative w-full sm:w-auto flex justify-end mb-6">
            <select
              className="appearance-none  bg-gradient-to-r from-[#141414] to-[#1a1a1a] 
        text-white border border-[#2a2a2a]/70 rounded-lg px-4 py-2.5 pr-8 
        text-xs sm:text-sm font-medium 
        focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]/40
        transition duration-200 hover:border-[#D4A574]/60 "
            >
              <option className="text-zinc-900">Most Popular</option>
              <option className="text-zinc-900">Newest</option>
              <option className="text-zinc-900">Rating</option>
            </select>

            {/* React Icon as dropdown arrow */}
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4A574] pointer-events-none text-xs sm:text-sm" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {escorts.map((escort) => (
              <div
                onClick={() => router.push("/escortProfile")}
                key={escort.id}
                className="group bg-[#0a0a0a] rounded-lg overflow-hidden cursor-pointer border border-[#D4A574] 
                 transition-all duration-500 hover:shadow-[0_0_12px_rgba(212,165,116,0.3)]"
              >
                {/* Image Section */}
                <div className="relative w-full h-[150px] sm:h-[160px] md:h-[170px] overflow-hidden">
                  <Image
                    src={escort?.image}
                    alt={escort?.name || "Escort"}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  {/* Optional dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>

                {/* Info Section */}
                <div className="p-2 sm:p-3 border-t border-[#2a2a2a]">
                  <div className="flex items-center gap-1">
                    <h3 className="text-white font-semibold text-xs sm:text-sm truncate">
                      {escort?.name}
                    </h3>
                    <CheckCircle
                      size={12}
                      className="text-green-500 flex-shrink-0 sm:w-[14px] sm:h-[14px]"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-1 flex-col sm:flex-row gap-1">
                    <p className="text-gray-400 text-[10px] sm:text-xs truncate">
                      {escort?.location}
                    </p>

                    <div className="inline-flex items-center gap-1 border border-[#d4a574] text-[#d4a574] text-[10px] sm:text-xs px-1.5 py-[1px] rounded-md">
                      <Star size={10} className="fill-[#d4a574]" />
                      <span className="truncate">{escort?.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-3 py-2 rounded text-xs sm:text-sm hover:bg-[#1a1a1a] transition">
              ←
            </button>
            <button className="bg-[#D4A574] text-black px-4 py-2 rounded font-semibold text-xs sm:text-sm hover:bg-[#C49564] transition">
              1
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-xs sm:text-sm hover:bg-[#1a1a1a] transition">
              2
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-xs sm:text-sm hover:bg-[#1a1a1a] transition">
              3
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-xs sm:text-sm hover:bg-[#1a1a1a] transition">
              4
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-3 py-2 rounded text-xs sm:text-sm hover:bg-[#1a1a1a] transition">
              →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
