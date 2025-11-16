"use client";
import React, { useState } from "react";
import {
  Star,
  CheckCircle,
  CircleCheck,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  FaEye,
  FaFlag,
  FaCamera,
  FaUser,
  FaGem,
  FaCrown,
  FaCheckCircle,
  FaTelegram,
  FaWhatsapp,
  FaHeart,
  FaVideo,
} from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { BsChatText, BsTelephoneOutboundFill } from "react-icons/bs";
import { useModal } from "@/app/ModalContext";
import { IoClose } from "react-icons/io5";
import CustomeReview from "@/components/EscortProfile/CustomeReview";

export default function EscortProfileMidSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const { openBooking } = useModal();

  const [showContactOptions, setShowContactOptions] = useState(false);

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "text-green-500",
      bgColor: "hover:bg-green-500/10",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      color: "text-blue-400",
      bgColor: "hover:bg-blue-400/10",
    },
    {
      name: "SMS",
      icon: BsChatText,
      color: "text-gray-400",
      bgColor: "hover:bg-gray-400/10",
    },
    {
      name: "Call",
      icon: BsTelephoneOutboundFill,
      color: "text-[#D8AB85]",
      bgColor: "hover:bg-[#D8AB85]/10",
    },
  ];

  const handleContactOptionClick = (option) => {
    console.log(`Selected contact option: ${option}`);
    setShowContactOptions(false);
  };

  const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
  ];

  const services = [
    { id: 1, name: "Normal Sex" },
    { id: 2, name: "69 Position" },
    { id: 3, name: "Anal Sex" },
    { id: 4, name: "Cum in Mouth" },
    { id: 5, name: "Cum on Face" },
    { id: 6, name: "Cum On Body" },
    { id: 7, name: "French Kissing" },
    { id: 8, name: "Girlfriend Experience" },
    { id: 9, name: "Blowjob with Condom" },
    { id: 10, name: "Blowjob without Condom" },
    { id: 11, name: "Sex in Different Positions" },
    { id: 12, name: "Intimate Massage" },
    { id: 13, name: "Deepthroat" },
    { id: 14, name: "Sex Between Breasts" },
    { id: 15, name: "Handjob" },
    { id: 16, name: "Bisexual (For Couples)" },
    { id: 17, name: "Group Sex (With Men)" },
    { id: 18, name: "Striptease" },
  ];

  const pricing = [
    { duration: "1 Hour", incall: "$600", outcall: "$800" },
    { duration: "2 Hours", incall: "$1,000", outcall: "$1,200" },
    { duration: "4 Hours", incall: "$1,800", outcall: "$2,000" },
    { duration: "Overnight", incall: "$3,500", outcall: "$3,800" },
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
                  ? "border-[#D8AB85]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={thumb} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-[#111] rounded-xl mt-6 md:border lg:border border-zinc-800 p-2 md:p:5 lg:p-5">
        {/* Header */}
        <div className="sm:flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 hidden">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              Sophia Laurent
            </h1>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Star size={16} className="fill-[#D8AB85] text-[#D8AB85]" /> 5.0
                (106)
              </span>
              <span className="flex items-center gap-1">
                <FaEye size={14} /> 17 views
              </span>
              <span className="flex items-center gap-1">
                <FaFlag size={14} /> English, French
              </span>
              <span className="flex items-center gap-1">
                <FaCrown size={14} className="text-[#D8AB85]" /> VIP Elite
              </span>
            </div>
          </div>

          <div className="flex gap-1 self-start sm:self-auto">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-[#D8AB85] text-[#D8AB85]"
              />
            ))}
          </div>
        </div>

        {/* Mobile responsive */}

        <div className="  w-full relative sm:hidden block mb-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">
                Sophia Laurent
              </h3>
              <p className="text-green-500 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                Available Now
              </p>
            </div>
            <button className="text-gray-400 hover:text-white bg-zinc-600 p-2 rounded-full">
              <FaHeart />
            </button>
          </div>

          <div className="flex gap-1 justify-end mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="fill-[#D8AB85] text-[#D8AB85]"
              />
            ))}
          </div>

          {/* Buttons */}
          <button
            className="w-full bg-gradient-to-r from-[#d4a574] to-[#e3b67a] text-black font-semibold py-3 rounded-lg mb-3 text-sm hover:from-[#e3b67a] hover:to-[#d4a574] transition-all flex items-center justify-center gap-2"
            onClick={openBooking}
          >
            <FaVideo /> Book a Live Session
          </button>

          <div className="relative">
            <button
              className="w-full border border-[#d4a574]/50 text-white py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all"
              onClick={() => setShowContactOptions(!showContactOptions)}
            >
              <BsTelephoneOutboundFill /> Contact
            </button>

            {/* Floating Contact Options */}
            {showContactOptions && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-3 shadow-2xl z-10 animate-in fade-in slide-in-from-bottom-2 duration-200">
                {/* Close Button */}
                <button
                  onClick={() => setShowContactOptions(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                >
                  <IoClose size={18} />
                </button>

                <h4 className="text-white font-medium text-sm mb-3 text-center">
                  Choose Contact Method
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  {contactOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleContactOptionClick(option.name)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border border-[#2a2a2a] ${option.bgColor} transition-all duration-200 group`}
                      >
                        <IconComponent
                          size={20}
                          className={`${option.color} mb-1 group-hover:scale-110 transition-transform`}
                        />
                        <span className="text-xs text-gray-300 group-hover:text-white">
                          {option.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About */}
        <div className="bg-[#000000] rounded-xl p-5 mb-6 border border-zinc-800">
          <h2 className="text-lg font-bold mb-3">About Me</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I'm Sophia, an elite companion offering the ultimate luxury
            experience. Fluent in multiple languages and passionate about
            meaningful connections, I bring sophistication and warmth to every
            encounter.
          </p>
          <button className="text-[#d4a574] hover:text-[#D8AB85] mt-3 flex items-center gap-1 text-sm">
            Read More →
          </button>
        </div>

        {/* Services Offered */}
        <div className="bg-[#000000] rounded-xl p-5 mb-6 border border-zinc-800">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Services Offered
          </h2>

          <div
            className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-full" : "max-h-[180px]"
            }`}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group border border-[#d4a574] rounded-lg sm:px-4 px-2 sm:h-[48px] h-[40px]
             text-sm text-white flex items-center justify-start gap-2
             hover:bg-[#1a1a1a] transition-all duration-200"
              >
                <CircleCheck
                  size={14}
                  className="text-[#d4a574] flex-shrink-0 sm:size-[16px]"
                />

                <span className="text-[11px] sm:text-[13px] leading-tight line-clamp-2">
                  {service.name}
                </span>

                {/* Tooltip (Hover par dikhna / hover hatne par hat jaana) */}
                <div
                  className="absolute left-0 right-0 -bottom-[42px] bg-[#1a1a1a] text-white
               text-[11px] sm:text-[12px] p-2 rounded-lg border border-[#d4a574]
               opacity-0 scale-95 invisible group-hover:opacity-100 
               group-hover:visible group-hover:scale-100
               transition-all duration-200 shadow-lg z-20"
                >
                  {service.name}
                </div>
              </div>
            ))}
          </div>

          {services.length > 6 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-[#d4a574] flex items-center gap-1 text-sm font-medium hover:opacity-80 transition"
            >
              {expanded ? (
                <>
                  View Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View More <ChevronDown size={18} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Pricing */}
        <div className="bg-[#000000] rounded-xl p-5 mb-6 border border-zinc-800 overflow-x-auto">
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
                <div className="py-3 border-t border-zinc-800 text-[#D8AB85] font-semibold">
                  {price.incall}
                </div>
                <div className="py-3 border-t border-zinc-800 text-[#D8AB85] font-semibold">
                  {price.outcall}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="sm:block hidden">
          <CustomeReview />
        </div>
      </div>
    </div>
  );
}
