"use client";

import { BiSolidUserBadge } from "react-icons/bi";
import { Users } from "lucide-react";
import { IoCall, IoDiamond, IoHeart } from "react-icons/io5";
import Image from "next/image";

export default function MediaSections({ webcamShows, episodes }) {
  return (
    <>
      {/* Live Webcam Shows */}
      <div className="w-full px-8 pt-7 border-b border-[#1a1a1a]">
        <h2 className="text-lg mb-4 text-white font-medium flex items-center gap-1">
          <BiSolidUserBadge className="text-red-600" /> Live Webcam Shows
        </h2>

        <div
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#D4A574]/50 scrollbar-track-transparent"
          style={{ scrollBehavior: "smooth" }}
        >
          {webcamShows.map((show) => (
            <div
              key={show.id}
              className="relative flex-shrink-0 min-w-[110px] h-[120px] rounded-lg overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={show.image}
                alt={show.name || "Webcam Show"}
                fill
                className="object-cover group-hover:opacity-90 transition duration-300 border-2 border-red-600 rounded-lg"
              />

              {/* Live Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-[2px] rounded-md">
                Live
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-1 left-1 right-0 bg-black/70 text-white text-xs flex items-center justify-between px-2 py-1 w-[95%] rounded-lg">
                <span className="font-medium">Lara</span>
                <span className="flex items-center gap-1">
                  <Users size={12} /> 400
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diamond Escorts */}
      <div className="w-full px-8 py-7 border-b border-[#1a1a1a]">
        <h2 className="text-lg mb-4 text-white font-medium flex items-center gap-1">
          <IoDiamond className="text-[#D4A574]" />
          <span>
            <span className="text-[#D4A574]">Diamond</span> Escorts
          </span>
        </h2>

        <div
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#D4A574]/50 scrollbar-track-transparent"
          style={{ scrollBehavior: "smooth" }}
        >
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="relative flex-shrink-0 min-w-[245px] h-[300px] rounded-lg overflow-hidden group border border-[#D4A574] cursor-pointer"
            >
              {/* Profile Image */}
              <Image
                src={episode.image}
                alt={episode.name || "Diamond Escort"}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover Content */}
              <div className="absolute bottom-0 w-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold text-sm truncate">
                    {episode.name || "Amili22"}
                  </h3>
                  <button className="text-white/90 hover:text-red-600 transition-colors">
                    <IoHeart className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-300 mb-2">
                  {episode.location || "France, Paris"}
                </p>
              </div>

              {/* Smaller, Purple VIP Badge */}
              <div
                className="absolute top-1 -left-8 flex items-center justify-center gap-1
bg-[#682977] rotate-[-35deg] w-24
text-white text-[9px] font-semibold px-1.5 py-[2px]
rounded-sm border border-white/10 shadow-md"
              >
                <IoDiamond className="w-3 h-3 text-pink-200" />
                VIP
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
