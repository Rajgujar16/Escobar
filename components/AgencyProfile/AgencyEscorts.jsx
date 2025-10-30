import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AgencyEscorts({ escorts }) {
  return (
    <>
      {" "}
      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {escorts.map((escort, index) => (
          <div
            key={index}
            className="bg-[#0c0c0c] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#d4a574] transition-colors duration-300"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src={escort.image}
                alt={escort.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="p-2 sm:p-3 border-t border-[#2a2a2a]">
              <div className="flex items-center gap-1">
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base truncate">
                  {escort.name}
                </h3>
                <CheckCircle
                  size={12}
                  className="text-green-500 flex-shrink-0 sm:w-[14px] sm:h-[14px]"
                />
              </div>

              <div className="flex justify-between lg:items-center mt-1 flex-col lg:flex-row md:flex-row ">
                <p className="text-gray-400 text-[10px] sm:text-xs truncate">
                  {escort.location}
                </p>

                <div className="inline-flex items-center gap-1 border border-[#d4a574] text-[#d4a574] text-[10px] sm:text-xs px-1.5 py-[1px] sm:px-2 sm:py-0.5 rounded-md">
                  <Star size={10} className="fill-[#d4a574]" />
                  <span className="truncate">{escort.tag}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
