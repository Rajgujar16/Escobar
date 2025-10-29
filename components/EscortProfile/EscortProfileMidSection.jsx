"use client";
import React, { useState } from "react";
import { Star, CheckCircle, CircleCheck } from "lucide-react";
import {
  FaEye,
  FaFlag,
  FaCamera,
  FaUser,
  FaPlane,
  FaLock,
  FaTheaterMasks,
  FaMoon,
  FaUsers,
  FaVideo,
  FaUtensils,
  FaStar,
  FaGem,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";

import { MdOutlineEmojiPeople, MdOutlineVerified } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";
export default function EscortProfileMidSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
  ];

  const thumbnails = images;

  const services = [
    {
      id: 1,
      name: "Full (Premium Experience)",
      icon: <FaGem className="text-2xl" />,
    },
    { id: 2, name: "Travel Companion" },
    { id: 3, name: "Massage" },
    { id: 4, name: "BDSM" },
    {
      id: 5,
      name: "Striptease",
    },
    {
      id: 6,
      name: "Role Playing",
    },
    { id: 7, name: "Overnight" },
    { id: 8, name: "Couples" },
    { id: 9, name: "Video Calls" },
    { id: 10, name: "Dinner Date" },
    { id: 11, name: "Custom Requests" },
  ];

  const pricing = [
    { duration: "1 Hour", incall: "$600", outcall: "$800" },
    { duration: "2 Hours", incall: "$1,000", outcall: "$600" },
    { duration: "4 Hours", incall: "$1,800", outcall: "$600" },
    { duration: "Overnight", incall: "$3,500", outcall: "$600" },
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
      text: "A true professional. The photos don't do her justice. Amazing conversation and unforgettable evening.",
      verified: true,
    },
    {
      name: "David M.",
      rating: 5,
      time: "4 months ago",
      text: "Best experience I've had on this platform. Punctual, gorgeous, and incredibly attentive. Will definitely book again.",
      verified: true,
    },
  ];
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="lg:col-span-2 flex justify-center">
        <div className="flex gap-3">
          {/* Main Image Section */}
          <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl overflow-hidden aspect-[4/5] w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px]">
            <img
              src={images[currentImageIndex]}
              alt="Profile"
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all text-white text-lg"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all text-white text-lg"
            >
              ›
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs text-white">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Verified Badge */}
            <div className="absolute top-4 right-4 text-green-500 bg-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <MdOutlineVerified size={14} /> Verified
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-col gap-3  overflow-y-auto max-h-[500px] ">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === idx
                    ? "border-amber-500"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-[#111] rounded-xl mt-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sophia Laurent</h1>
            <div className="flex gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Star size={16} className="fill-amber-500 text-amber-500" /> 5.0
                (106 reviews)
              </span>
              <span className="flex items-center gap-1">
                <FaEye size={14} /> 17 (10min)
              </span>
              <span className="flex items-center gap-1">
                <FaFlag size={14} /> English, French, Spanish
              </span>
              <span className="flex items-center gap-1">
                <FaCrown size={14} className="text-amber-500" /> VIP Elite
              </span>
              <span className="flex items-center gap-1">
                <FaCamera size={14} /> Independent
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-amber-500 text-amber-500"
              />
            ))}
          </div>
        </div>

        {/* About Me */}
        <div className="bg-[#111] rounded-xl p-6 mb-6 border border-zinc-800">
          <h2 className="text-xl font-bold mb-3">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to my profile! I'm Sophia, an elite companion offering the
            ultimate luxury experience. With a background in international
            relations and fluency in multiple languages, I bring sophistication
            and elegance to every encounter. Whether it's a romantic dinner
            date, a business event, or an intimate rendezvous, I ensure an
            unforgettable experience tailored to your desires.
          </p>
          <button className="text-[#d4a574] hover:text-amber-500 mt-2 flex items-center gap-1">
            Read More <span>→</span>
          </button>
        </div>

        {/* Services Offered */}
        <div className="bg-[#111] rounded-xl p-6 mb-6 border border-zinc-800">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Services Offered
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-[#d4a574] rounded-lg px-4 py-3 text-sm text-white flex items-center  gap-2 hover:bg-[#1a1a1a] transition-all duration-200 h-[48px]"
              >
                <span className="text-[#d4a574] text-sm">
                  <CircleCheck size={18} />
                </span>
                <span className="truncate">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Packages */}
        <div className="bg-[#111] rounded-xl p-6 mb-6 border border-zinc-800">
          <h2 className="text-xl font-bold mb-4">Pricing & Packages</h2>
          <div className="grid grid-cols-3 gap-4">
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

        {/* Customer Reviews */}
        <div className="bg-[#111] rounded-xl p-6 border border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                3
              </span>
            </div>
            <button className="text-amber-500 hover:text-amber-400 flex items-center gap-2">
              <FaCheckCircle size={14} /> Write a Review
            </button>
          </div>

          {/* Rating Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">5.0</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center border-x border-zinc-800">
              <div className="text-4xl font-bold mb-1">3</div>
              <div className="text-sm text-gray-400">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm text-gray-400">Recommend</div>
            </div>
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-t border-zinc-800 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl">
                    <FaUser />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{review.name}</span>
                          {review.verified && (
                            <CheckCircle size={16} className="text-green-500" />
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          {review.time}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            className="fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {review.text}
                    </p>
                    <div className="flex gap-4 mt-3 text-xs text-gray-500">
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
    </>
  );
}
