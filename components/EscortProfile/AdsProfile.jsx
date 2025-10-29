"use client";
import React from "react";
import Image from "next/image";
import adBanner from "@/public/adult.jpg";
import adBanner2 from "@/public/adult2.jpg";

export default function AdsProfile() {
  return (
    <div className="sticky lg:top-24 ">
      {/* Desktop Ad (visible only on lg and above) */}
      <div className="w-full rounded-lg overflow-hidden border border-zinc-800 hidden lg:block">
        <Image
          src={adBanner}
          alt="Ad Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Mobile Ad (visible only below lg) */}
      <div className="w-full rounded-lg overflow-hidden border border-zinc-800 block lg:hidden">
        <Image
          src={adBanner2}
          alt="Ad Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
