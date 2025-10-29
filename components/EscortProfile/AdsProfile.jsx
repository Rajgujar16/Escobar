"use client";
import React from "react";
import Image from "next/image";
import adBanner from "@/public/adult.jpg";

export default function AdsProfile() {
  return (
    <div className="sticky top-24 flex flex-col items-center space-y-6">
      <div className="w-full rounded-lg overflow-hidden border border-zinc-800">
        <Image
          src={adBanner}
          alt="Ad Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
