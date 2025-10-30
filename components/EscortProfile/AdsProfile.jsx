"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import adBanner1 from "@/public/adult.png";
import adBanner2 from "@/public/adsBanner.jpg";
import resadBanner from "@/public/adult2.jpg";

export default function AdsProfile() {
  const [currentAd, setCurrentAd] = useState(0);
  const desktopAds = [adBanner1, adBanner2];

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % desktopAds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky lg:top-24">
      {/* Desktop Ad (visible only on lg and above) */}
      <div className="w-full rounded-lg overflow-hidden border border-zinc-800 hidden lg:block transition-all duration-500">
        <Image
          src={desktopAds[currentAd]}
          alt="Ad Banner"
          className="w-full h-auto object-contain transition-opacity duration-700 ease-in-out"
          priority
        />
      </div>

      {/* Mobile Ad (visible only below lg) */}
      <div className="w-full rounded-lg overflow-hidden border border-zinc-800 block lg:hidden">
        <Image
          src={resadBanner}
          alt="Ad Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
