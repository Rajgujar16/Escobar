"use client";

import { BiSolidUserBadge } from "react-icons/bi";
import { Users } from "lucide-react";
import { IoDiamond } from "react-icons/io5";
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
              className="relative flex-shrink-0 min-w-[160px] h-[210px] rounded-lg overflow-hidden group border border-[#D4A574]"
            >
              <Image
                src={episode.image}
                alt={episode.name || "Diamond Escort"}
                fill
                className="object-cover group-hover:opacity-90 transition duration-300"
              />
              {/* Live Badge */}
              {/* VIP Badge */}
              <div
                className="absolute top-2 right-2 flex items-center gap-1 
  bg-gradient-to-r from-purple-700 to-indigo-600 
  dark:from-purple-500 dark:to-indigo-400 
  text-white text-[11px] font-semibold px-2.5 py-[3px] 
  rounded-md border border-white/10 shadow-sm"
              >
                VIP <IoDiamond className="text-blue-300 dark:text-yellow-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
