import Image from "next/image";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import profile from "@/public/agencyProfile.png";
import { Clock, Star } from "lucide-react";
import AgencyReview from "@/components/AgencyProfile/AgencyReview";
import AgencyEscorts from "@/components/AgencyProfile/AgencyEscorts";
import AgencyContacts from "@/components/AgencyProfile/AgencyContacts";

export default function AgencyProfile() {
  const escorts = [
    {
      name: "AMANDA",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "SOPHIA",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "ISABELLA",
      age: 24,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "OLIVIA",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "EMMA",
      age: 22,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "CHARLOTTE",
      age: 27,
      image:
        "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "MIA",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
    {
      name: "AMELIA",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400",
      tag: "Porn Star",
      location: "France,Paris",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section - 50% visible */}
      <div className="relative h-[350px] md:h-[400px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1200')",
          }}
        />
        {/* Dark gradient overlay - stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900" />
      </div>

      {/* Profile Section - Overlapping hero */}
      <div className="relative -mt-32 md:-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6  ">
          {/* Profile Card */}
          <div className=" rounded-lg mb-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                <Image src={profile} alt="profile" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                  Escort Agency
                </h2>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-yellow-600" />
                    <span>Paris, France</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-600" />
                    <span>4.8 (120 reviews)</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-green-500">Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left Column - 3/4 width */}
            <div className="lg:col-span-4 space-y-5">
              {/* About Me */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg">
                <h3 className="text-xl font-semibold mb-3">About Me</h3>
                <p className="text-gray-200 leading-relaxed lg:text-md md:text-md text-sm">
                  Discover the art of true presence — confident, charming, and
                  beautifully refined. We deliver companionship that complements
                  your lifestyle and turns every encounter into a memorable
                  escape.
                </p>
              </div>

              {/* Contact Info & Location - Side by side */}
              <AgencyContacts />

              {/* Availability */}
              <div className=" border border-zinc-500 rounded-xl p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-5">
                  <span className=" text-[#d4a574]">
                    <Clock />
                  </span>
                  <span>Availability</span>
                </h3>

                <div className="divide-y divide-[#1a1a1a]">
                  {[
                    { day: "Monday", time: "06:00 AM – 01:00 AM" },
                    { day: "Tuesday", time: "06:00 AM – 01:00 AM" },
                    { day: "Wednesday", time: "06:00 AM – 01:00 AM" },
                    { day: "Thursday", time: "06:00 AM – 01:00 AM" },
                    { day: "Friday", time: "10:00 AM – 03:00 AM" },
                    { day: "Saturday", time: "10:00 AM – 03:00 AM" },
                    { day: "Sunday", time: "By Appointment" },
                  ].map(({ day, time }) => (
                    <div
                      key={day}
                      className="flex justify-between py-2 md:py-2.5 text-sm md:text-base"
                    >
                      <span className="text-gray-300">{day}</span>
                      <span
                        className={`text-sm ${
                          time === "By Appointment"
                            ? "text-[#d4a574]"
                            : "text-gray-100"
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1a1a1a] mt-4 pt-3">
                  <p className="text-[11px] md:text-xs text-[#a1a1a1]">
                    <span className="text-[#d4a574] font-medium">Note:</span>{" "}
                    Availability subject to prior bookings. Advance booking
                    recommended.
                  </p>
                </div>
              </div>

              {/* Available Escorts */}
              <div className=" border border-zinc-700 p-4 sm:p-6 rounded-xl">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                  Available Escorts
                </h3>
                <AgencyEscorts escorts={escorts} />
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg lg:p-6 p-2 border border-zinc-500">
                <AgencyReview />
              </div>
            </div>

            {/* Right Sidebar - 1/4 width */}
            <div className="space-y-6 flex flex-col lg:items-end md:items-end items-center">
              {[1, 2, 3].map((items, idx) => (
                <>
                  <div
                    className="bg-red-900/30 rounded-lg p-8 text-center border border-red-900/50 w-[80%]"
                    key={idx}
                  >
                    <div className="w-13 h-16 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded"></div>
                    </div>
                    <h3 className="text-sm font-bold">Place Your AD Here</h3>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
