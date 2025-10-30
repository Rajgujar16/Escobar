"use client";
import React, { useState } from "react";

import AdsProfile from "@/components/EscortProfile/AdsProfile";
import EscortProfileMidSection from "@/components/EscortProfile/EscortProfileMidSection";
import EscortProfileRightSection from "@/components/EscortProfile/EscortProfileRightSection";

export default function EscortProfilePage() {
  return (
    <div className="min-h-screen text-white">
      <div className=" mx-auto px-8 pb-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Left Column - Booking Card */}
          <div className="lg:col-span-1 ">
            <AdsProfile />
          </div>

          {/* Mid Column - Image Gallery */}
          <div className="lg:col-span-3 bg-[#111] rounded-xl lg:p-6 md:p-6 p-2 border border-zinc-800">
            <EscortProfileMidSection />
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-2">
            <EscortProfileRightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
