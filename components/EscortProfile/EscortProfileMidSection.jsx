"use client";
import React, { useState } from "react";
import { Star, CheckCircle, CircleCheck } from "lucide-react";
import {
  FaEye,
  FaFlag,
  FaCamera,
  FaUser,
  FaGem,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

export default function EscortProfileMidSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
  ];

  const services = [
    { id: 1, name: "Full (Premium Experience)" },
    { id: 2, name: "Travel Companion" },
    { id: 3, name: "Massage" },
    { id: 4, name: "BDSM" },
    { id: 5, name: "Striptease" },
    { id: 6, name: "Role Playing" },
    { id: 7, name: "Overnight" },
    { id: 8, name: "Couples" },
    { id: 9, name: "Video Calls" },
    { id: 10, name: "Dinner Date" },
    { id: 11, name: "Custom Requests" },
  ];

  const pricing = [
    { duration: "1 Hour", incall: "$600", outcall: "$800" },
    { duration: "2 Hours", incall: "$1,000", outcall: "$1,200" },
    { duration: "4 Hours", incall: "$1,800", outcall: "$2,000" },
    { duration: "Overnight", incall: "$3,500", outcall: "$3,800" },
  ];

  const reviews = [
    {
      name: "Michael R.",
      rating: 5,
      time: "2 months ago",
      text: "Absolutely incredible experience. Professional, elegant, and exceeded all expectations. Highly recommend!",
      verified: true,
    },
    {
      name: "James K.",
      rating: 5,
      time: "3 months ago",
      text: "A true professional. Amazing conversation and unforgettable evening.",
      verified: true,
    },
    {
      name: "David M.",
      rating: 5,
      time: "4 months ago",
      text: "Best experience I've had. Gorgeous and attentive. Will book again!",
      verified: true,
    },
  ];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full text-white">
      {/* Image Section */}
      <div className="flex flex-col lg:flex-row lg:gap-4">
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full sm:w-[400px] md:w-[450px] lg:w-[500px] mx-auto">
          <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white"
          >
            ›
          </button>

          {/* Info badges */}
          <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div className="absolute top-4 right-4 text-green-500 bg-black/70 px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <MdOutlineVerified size={14} /> Verified
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3 mt-3 lg:mt-0 overflow-x-auto lg:overflow-y-auto max-h-[500px] px-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          {images.map((thumb, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`min-w-[80px] h-24 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === idx
                  ? "border-amber-500"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={thumb} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-[#111] rounded-xl mt-6 border border-zinc-800 p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              Sophia Laurent
            </h1>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Star size={16} className="fill-amber-500 text-amber-500" /> 5.0
                (106)
              </span>
              <span className="flex items-center gap-1">
                <FaEye size={14} /> 17 views
              </span>
              <span className="flex items-center gap-1">
                <FaFlag size={14} /> English, French
              </span>
              <span className="flex items-center gap-1">
                <FaCrown size={14} className="text-amber-500" /> VIP Elite
              </span>
            </div>
          </div>

          <div className="flex gap-1 self-start sm:self-auto">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-amber-500 text-amber-500"
              />
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-[#111] rounded-xl p-5 mb-6 border border-zinc-800">
          <h2 className="text-lg font-bold mb-3">About Me</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I'm Sophia, an elite companion offering the ultimate luxury
            experience. Fluent in multiple languages and passionate about
            meaningful connections, I bring sophistication and warmth to every
            encounter.
          </p>
          <button className="text-[#d4a574] hover:text-amber-500 mt-3 flex items-center gap-1 text-sm">
            Read More →
          </button>
        </div>

        {/* Services Offered */}
        <div className="bg-[#111] rounded-xl p-5 mb-6 border border-zinc-800">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-[#d4a574] rounded-lg px-4 py-3 text-sm text-white flex items-center justify-start gap-2 hover:bg-[#1a1a1a] transition-all duration-200 min-h-[48px]"
              >
                <CircleCheck size={18} className="text-[#d4a574]" />
                <span className="whitespace-normal break-words text-[13px] leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-[#111] rounded-xl p-5 mb-6 border border-zinc-800 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Pricing & Packages</h2>
          <div className="min-w-[360px] grid grid-cols-3 text-sm sm:text-base">
            <div className="font-semibold">Time</div>
            <div className="font-semibold">Incall</div>
            <div className="font-semibold">Outcall</div>
            {pricing.map((price, idx) => (
              <React.Fragment key={idx}>
                <div className="py-3 border-t border-zinc-800">
                  {price.duration}
                </div>
                <div className="py-3 border-t border-zinc-800 text-amber-500 font-semibold">
                  {price.incall}
                </div>
                <div className="py-3 border-t border-zinc-800 text-amber-500 font-semibold">
                  {price.outcall}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-[#111] rounded-xl p-5 sm:p-6 border border-zinc-800">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Customer Reviews
              </h2>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs sm:text-sm">
                3
              </span>
            </div>
            <button className="text-amber-500 hover:text-amber-400 flex items-center gap-2 text-xs sm:text-sm">
              <FaCheckCircle size={14} /> Write a Review
            </button>
          </div>

          {/* Rating Summary */}
          <div className="grid grid-cols-3 text-center mb-8 text-xs sm:text-sm md:text-base">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">5.0</div>
              <div className="flex justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className="fill-amber-500 text-amber-500 sm:size-[16px]"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                Average Rating
              </p>
            </div>

            <div className="border-x border-zinc-800">
              <div className="text-2xl sm:text-3xl font-bold mb-1">3</div>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                Total Reviews
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">100%</div>
              <p className="text-gray-400 text-[10px] sm:text-xs">Recommend</p>
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-t border-zinc-800 pt-5 sm:pt-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm sm:text-base">
                    <FaUser />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm sm:text-base">
                            {review.name}
                          </span>
                          {review.verified && (
                            <CheckCircle size={13} className="text-green-500" />
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-400 mt-[2px]">
                          {review.time}
                        </p>
                      </div>

                      <div className="flex gap-1 mt-2 sm:mt-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            className="fill-amber-500 text-amber-500 sm:size-[14px]"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {review.text}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-3 text-[11px] sm:text-xs text-gray-500">
                      <button className="hover:text-amber-500">Helpful</button>
                      <button className="hover:text-amber-500">Report</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
