import Link from "next/link";
import React from "react";
import { FaAd, FaArrowRight } from "react-icons/fa";

export default function AdvertiseBanner() {
  return (
    <div className="bg-[#2B0B0B] w-full flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 sm:px-14 py-4 sm:py-6 mt-4 sm:mt-6 rounded-lg gap-4 sm:gap-0">
      {/* Left Section */}
      <div className="flex items-start sm:items-center gap-3">
        <div className="bg-[#3b1a1a] text-[#d4a574] p-2 rounded-md flex items-center justify-center shrink-0">
          <FaAd className="text-sm sm:text-base" />
        </div>
        <div>
          <h3 className="text-white text-sm sm:text-base font-medium leading-tight">
            Advertise Your Business
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-snug">
            Reach thousands of potential customers with premium ad placement
          </p>
        </div>
      </div>

      {/* Right Section */}
      <button className="bg-[#D4A574] hover:bg-[#c4945f] text-black text-xs sm:text-sm font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full  transition sm:self-end  whitespace-nowrap">
        <Link href="/advertisement" className="flex items-center gap-2">
          Place your Ad <FaArrowRight className="text-xs" />
        </Link>
      </button>
    </div>
  );
}
