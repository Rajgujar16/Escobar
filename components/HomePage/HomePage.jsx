"use client";
import React, { useState } from "react";
import RefineSearchSidebar from "@/components/HomePage/RefineSearchSidebar";
import { useRouter } from "next/navigation";
import MediaSections from "@/components/HomePage/MediaSections";

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
    <div className="bg-black min-h-screen text-white font-inter">
      {/* Hero Section */}
      <div className="relative h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5 z-20 bg-[#8B0000] px-4 py-2 rounded">
          <div className="text-[10px] text-white/80">Escort Services In</div>
          <div className="text-base font-semibold text-white">
            Ahmedabad Escort Services
          </div>
        </div>
        <button className="absolute top-5 right-5 z-20 bg-[#D4A574] text-black px-7 py-2 rounded-full text-sm font-semibold hover:bg-[#C49564] transition">
          Book Now
        </button>
      </div>

      <MediaSections webcamShows={webcamShows} episodes={episodes} />

      {/* Main Content */}
      <div className="flex px-8 py-10 gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-[260px] flex-shrink-0">
          <RefineSearchSidebar />
        </aside>

        {/* Escort Grid */}
        <main className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Ahmedabad</h2>
            <select className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {escorts.map((escort) => (
              <div
                onClick={() => router.push("/escortProfile")}
                key={escort.id}
                className="bg-[#0a0a0a] rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition"
              >
                <div className="relative w-full h-[280px]">
                  <img
                    src={escort.image}
                    alt={escort.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="text-sm font-semibold mb-1 text-white">
                    {escort.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#D4A574]">
                    {"★".repeat(escort.rating)}
                    <span className="text-white/50">({escort.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-3 py-2 rounded text-sm hover:bg-[#1a1a1a] transition">
              ←
            </button>
            <button className="bg-[#D4A574] text-black px-4 py-2 rounded font-semibold text-sm hover:bg-[#C49564] transition">
              1
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-sm hover:bg-[#1a1a1a] transition">
              2
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-sm hover:bg-[#1a1a1a] transition">
              3
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-4 py-2 rounded text-sm hover:bg-[#1a1a1a] transition">
              4
            </button>
            <button className="bg-[#0a0a0a] text-white border border-[#2a2a2a] px-3 py-2 rounded text-sm hover:bg-[#1a1a1a] transition">
              →
            </button>
          </div>
        </main>
      </div>

      {/* Banner Section */}
      <div className="mx-8 my-10 bg-[#8B0000] px-8 py-6 rounded-lg flex justify-between items-center">
        <div>
          <div className="text-xs mb-1 text-white/80">Escort Services In</div>
          <div className="text-2xl font-semibold text-white">
            Ahmedabad Escort Services
          </div>
        </div>
        <button className="bg-[#D4A574] text-black px-10 py-3 rounded-full text-sm font-semibold hover:bg-[#C49564] transition whitespace-nowrap">
          Book Now
        </button>
      </div>
    </div>
  );
}
