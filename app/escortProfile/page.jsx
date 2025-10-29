"use client";
import React, { useState } from "react";
import {
  Star,
  MapPin,
  Phone,
  Calendar,
  Clock,
  Users,
  Globe,
  DollarSign,
  CheckCircle,
  Shield,
  CreditCard,
} from "lucide-react";
import {
  FaEye,
  FaFlag,
  FaCamera,
  FaUser,
  FaPlane,
  FaHands,
  FaLock,
  FaTheaterMasks,
  FaMoon,
  FaUsers,
  FaVideo,
  FaUtensils,
  FaStar,
  FaGem,
  FaCrown,
  FaMedal,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdMassage,
  MdNightlight,
  MdOutlineEmojiPeople,
  MdOutlineVerified,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";

export default function EscortProfilePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState("");

  const images = [
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
    { id: 2, name: "Travel Companion", icon: <FaPlane className="text-2xl" /> },
    { id: 3, name: "Massage", icon: <FiMessageCircle className="text-2xl" /> },
    { id: 4, name: "BDSM", icon: <FaLock className="text-2xl" /> },
    {
      id: 5,
      name: "Striptease",
      icon: <MdOutlineEmojiPeople className="text-2xl" />,
    },
    {
      id: 6,
      name: "Role Playing",
      icon: <FaTheaterMasks className="text-2xl" />,
    },
    { id: 7, name: "Overnight", icon: <FaMoon className="text-2xl" /> },
    { id: 8, name: "Couples", icon: <FaUsers className="text-2xl" /> },
    { id: 9, name: "Video Calls", icon: <FaVideo className="text-2xl" /> },
    { id: 10, name: "Dinner Date", icon: <FaUtensils className="text-2xl" /> },
    { id: 11, name: "Custom Requests", icon: <FaStar className="text-2xl" /> },
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

  const availability = [
    { day: "Monday", time: "08:00 AM - 01:00 AM" },
    { day: "Tuesday", time: "08:00 AM - 01:00 AM" },
    { day: "Wednesday", time: "08:00 AM - 01:00 AM" },
    { day: "Thursday", time: "08:00 AM - 01:00 AM" },
    { day: "Friday", time: "10:00 AM - 03:00 AM" },
    { day: "Saturday", time: "10:00 AM - 03:00 AM" },
    { day: "Sunday", time: "By Appointment" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={images[currentImageIndex]}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                ›
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <MdOutlineVerified size={14} /> Verified
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
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

            {/* Profile Info */}
            <div className="mt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Sophia Laurent</h1>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-amber-500 text-amber-500"
                      />{" "}
                      5.0 (106 reviews)
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
              <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-3">About Me</h2>
                <p className="text-gray-400 leading-relaxed">
                  Welcome to my profile! I'm Sophia, an elite companion offering
                  the ultimate luxury experience. With a background in
                  international relations and fluency in multiple languages, I
                  bring sophistication and elegance to every encounter. Whether
                  it's a romantic dinner date, a business event, or an intimate
                  rendezvous, I ensure an unforgettable experience tailored to
                  your desires.
                </p>
                <button className="text-amber-500 hover:text-amber-400 mt-2 flex items-center gap-1">
                  Read More <span>→</span>
                </button>
              </div>

              {/* Services Offered */}
              <div className="bg-zinc-900 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Services Offered</h2>
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      className="bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 text-left transition-all border border-transparent hover:border-amber-500 flex flex-col items-center text-center"
                    >
                      <div className="text-amber-500 mb-2">{service.icon}</div>
                      <div className="text-sm">{service.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing & Packages */}
              <div className="bg-zinc-900 rounded-xl p-6 mb-6">
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
              <div className="bg-zinc-900 rounded-xl p-6">
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
                                <span className="font-semibold">
                                  {review.name}
                                </span>
                                {review.verified && (
                                  <CheckCircle
                                    size={16}
                                    className="text-green-500"
                                  />
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
                            <button className="hover:text-amber-500">
                              Helpful
                            </button>
                            <button className="hover:text-amber-500">
                              Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Profile Card */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Sophia Laurent</h3>
                    <div className="flex items-center gap-1 text-green-500 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Available Now
                    </div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <MapPin size={12} /> Manhattan, NY
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} className="text-amber-500" />
                    <span className="text-gray-300">Availability:</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Available for bookings today and this week. Advance bookings
                    preferred.
                  </div>
                </div>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Select Service Type
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Choose Service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Book Now Button */}
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 rounded-lg transition-all transform hover:scale-105">
                  Book Now
                </button>

                {/* Trust Badges */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <CheckCircle size={14} /> Identity Verified
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Shield size={14} /> Background Checked
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <CreditCard size={14} /> 100% Secure Booking
                  </div>
                </div>

                <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <div className="text-xs text-amber-500 flex items-start gap-2">
                    <FaMedal size={14} className="flex-shrink-0 mt-0.5" />
                    <span>Premium Member - Book with confidence</span>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h3 className="font-bold text-lg mb-4">Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Users size={16} /> Age
                    </span>
                    <span className="font-semibold">25 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <HiUsers size={16} /> Height
                    </span>
                    <span className="font-semibold">5'7" (170cm)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <FaUser size={16} /> Bust/Size
                    </span>
                    <span className="font-semibold">Brunette</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <FaEye size={16} /> Eyes
                    </span>
                    <span className="font-semibold">Hazel</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Globe size={16} /> Languages
                    </span>
                    <span className="font-semibold">French</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <FaFlag size={16} /> Nationality
                    </span>
                    <span className="font-semibold">
                      English, French, Spanish
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Globe size={16} /> Ethnicity
                    </span>
                    <span className="font-semibold">Heterosexual</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <DollarSign size={16} /> Price Range
                    </span>
                    <span className="font-semibold text-amber-500">
                      $ (EU 36)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 flex items-center gap-2">
                      <FaUser size={16} /> Shoe Size
                    </span>
                    <span className="font-semibold">7 (EU 38)</span>
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar size={20} /> Availability
                </h3>
                <div className="space-y-2 text-sm">
                  {availability.map((day, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-gray-400">{day.day}</span>
                      <span className="font-semibold text-xs">{day.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-xs text-blue-400">
                    Note: Availability subject to prior bookings. Advance
                    booking recommended.
                  </div>
                </div>
              </div>

              {/* Travel Locations */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h3 className="font-bold text-lg mb-4">Travel Locations</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
                    <MapPin size={12} /> London
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
                    <MapPin size={12} /> Paris
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800 rounded-full text-xs flex items-center gap-1">
                    <MapPin size={12} /> Dubai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
