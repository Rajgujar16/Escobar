"use client";
import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Star, Loader2 } from "lucide-react";
import Image from "next/image";
import agencyProfile from "@/public/agencyProfile.png";
import { useRouter } from "next/navigation";

export default function Agency() {
  const [agencies, setAgencies] = useState([]);
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const dummy = Array(100)
      .fill(0)
      .map((_, i) => ({
        id: i + 1,
        name: "Escort agencies",
        location: "London, UK",
        description: "Premium experiences tailored to your desires.",
        rating: "5.0",
        reviews: 120,
      }));
    setAgencies(dummy);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.scrollHeight &&
        !loading
      ) {
        loadMore();
      }
    };

    const loadMore = () => {
      if (visible >= agencies.length) return;
      setLoading(true);
      setTimeout(() => {
        setVisible((prev) => prev + 8);
        setLoading(false);
      }, 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, loading, agencies.length]);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-6 md:px-10 py-8 space-y-6">
      {/* Count */}
      <div className="flex justify-center sm:justify-start">
        <span className="bg-[#d4a67463] px-4 py-2 text-sm sm:text-base rounded-full">
          20 agencies found
        </span>
      </div>

      {/*  Search Bar Section */}
      <div className="border border-[#2b2b2b] rounded-lg p-4 flex flex-col sm:flex-wrap sm:flex-row gap-3 items-stretch sm:items-center bg-[#0e0e0e]/60 backdrop-blur-sm">
        {/* Input Field */}
        <div className="flex items-center flex-auto bg-[#1a1a1a] px-4 py-2 rounded-md border border-transparent focus-within:border-[#d4a574]/60 transition">
          <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search agencies, locations, or specialties ..."
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 text-gray-300"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          {/* Country */}
          <div className="relative w-full sm:w-36">
            <select className="appearance-none bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#d4a574]/50 focus:border-[#d4a574] transition text-sm px-4 py-2 rounded-md text-gray-300 w-full cursor-pointer">
              <option>Country</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* City */}
          <div className="relative w-full sm:w-32">
            <select className="appearance-none bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#d4a574]/50 focus:border-[#d4a574] transition text-sm px-4 py-2 rounded-md text-gray-300 w-full cursor-pointer">
              <option>City</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Category */}
          <div className="relative w-full sm:w-36">
            <select className="appearance-none bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#d4a574]/50 focus:border-[#d4a574] transition text-sm px-4 py-2 rounded-md text-gray-300 w-full cursor-pointer">
              <option>Category</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Sort Button */}
          <button className="bg-gradient-to-r from-[#d4a574]/80 to-[#c29060]/80 hover:from-[#d4a574] hover:to-[#c29060] text-black font-medium text-sm px-5 py-2 rounded-md transition w-full sm:w-auto flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(212,165,116,0.3)]">
            <ChevronDown size={14} /> Sort
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-7">
        {agencies.slice(0, visible).map((agency) => (
          <div
            key={agency.id}
            className="bg-black border border-[#2b2b2b] rounded-lg overflow-hidden hover:border-[#d4a574]/60 transition"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden bg-[#222] flex-shrink-0">
                <Image
                  src={agencyProfile}
                  alt="agencyProfile"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="truncate">
                <h3 className="font-medium text-white text-sm sm:text-base truncate">
                  {agency.name}
                </h3>
                <p className="text-xs text-gray-400 truncate">
                  {agency.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="px-4 pb-4">
              <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed line-clamp-2">
                {agency.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3 text-[#d4a574]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#d4a574" stroke="#d4a574" />
                ))}
                <span className="text-gray-400 text-xs ml-1">
                  {agency.rating} ({agency.reviews})
                </span>
              </div>

              {/* Button */}
              <button
                className="mt-4 w-full bg-[#d4a574]/80 hover:bg-[#d4a574] text-black font-medium text-xs sm:text-sm py-2 rounded-md transition"
                onClick={() => router.push("/agencies/agencyProfile")}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center mt-8">
          <Loader2 className="animate-spin text-[#d4a574]" size={28} />
        </div>
      )}
    </div>
  );
}
