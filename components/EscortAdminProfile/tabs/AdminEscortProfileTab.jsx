"use client";

import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import AdminEscortPersonal from "@/components/EscortAdminProfile/tabs/AdminEscortPersonalInfo/AdminEscortPersonal";
import AdminPhotoVideoGallery from "@/components/EscortAdminProfile/tabs/AdminEscortPersonalInfo/AdminPhotoVideoGallery";
import AdminEscortAvailability from "@/components/EscortAdminProfile/tabs/AdminEscortPersonalInfo/AdminEscortAvailability";
import AdminEscortCharges from "@/components/EscortAdminProfile/tabs/AdminEscortPersonalInfo/AdminEscortCharges";

export default function AdminEscortProfileTab() {
  const [isEditingServices, setIsEditingServices] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const [formData, setFormData] = useState({
    name: "Scarlet",
    age: "28",
    gender: "Female",
    eyeColor: "Black",
    hairColor: "Black",
    height: "170cm",
    bodyType: "Curvy",
    nationality: "Cambodian",
    sexuality: "Bisexual",
    ethnicity: "Cambodian",
    publicHair: "Shaved",
    language: ["English", "German"],
    workingLocationIncall: "Private Apartment",
    workingLocationOutcall: "Hotel",
    smoking: "No",
    drinking: "No",
    tattoo: "No",
    piercings: "No",
    cupSize: "34 D",
    aboutMe:
      "Welcome to my profile! I'm Sophia, an elite companion offering the ultimate luxury experience. With a background in international relations and fluency in multiple languages, I...",
    services: ["GFE/PSE", "BDSM"],
    city: "Paris",
    country: "France",
    postalCode: "4512633",
    address: "27 Rue de Rivoli, 75004 Paris, France",
  });

  return (
    <div className="min-h-screen text-white">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center  mb-2">
          <h1 className="text-lg sm:text-[30px] font-normal">Your Profile</h1>
          <button className="bg-[#d4a574] hover:bg-[#c99961] text-black sm:px-6 py-2 px-2 rounded text-xs sm:text-sm font-medium transition">
            Save Changes
          </button>
        </div>
        <p className="text-gray-500 text-xs mb-6 md:mb-8">
          Update your personal information, rates, and location.
        </p>

        {/* Profile Completion + About Me (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Profile Completion */}
          <div className="bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-gray-900 min-h-[130px] md:h-[150px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-medium">Profile Completion</h2>
                <span className="text-[#D4A574] text-xs sm:text-sm">
                  20% Complete
                </span>
              </div>
              <p className="text-gray-500 text-xs mb-3 md:mb-4">
                Complete your profile with more information to improve your
                profile visibility.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D4A574] rounded-full transition-all duration-500"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-gray-900 min-h-[130px] md:h-[150px]">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h2 className="text-sm font-medium">About Me</h2>
              <button
                onClick={() => setIsEditingAbout(!isEditingAbout)}
                className="text-gray-500 hover:text-gray-400"
              >
                <Edit2 className="w-4 h-4 text-[#d4a574]" />
              </button>
            </div>
            {isEditingAbout ? (
              <textarea
                value={formData.aboutMe}
                onChange={(e) =>
                  setFormData({ ...formData, aboutMe: e.target.value })
                }
                rows="4"
                className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-700 resize-none"
              />
            ) : (
              <p className="text-gray-500 text-xs line-clamp-3 md:line-clamp-none">
                {formData.aboutMe}
              </p>
            )}
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-6">
          {/* Left Column - Personal Information */}
          <div className="xl:col-span-3 space-y-4 md:space-y-6">
            <AdminEscortPersonal />
            <AdminEscortCharges />
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6 xl:col-span-2">
            {/* Services Offered */}
            <div className="bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="text-sm font-medium">Services Offered</h2>
                <button
                  onClick={() => setIsEditingServices(!isEditingServices)}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <Edit2 className="w-4 h-4 text-[#d4a574]" />
                </button>
              </div>

              {isEditingServices && (
                <button className="w-full bg-black border border-[#d4a574] rounded px-4 py-2 text-sm text-gray-400 hover:border-gray-700 mb-4 flex items-center justify-center gap-2">
                  <span className="text-[#d4a574] ">
                    <Plus size={18} />
                  </span>{" "}
                  Select Services Offered
                </button>
              )}

              <div className="bg-black border border-[#d4a574] rounded p-3 md:p-4 flex gap-2 flex-wrap">
                <span className="bg-[#d4a574] text-black px-3 py-1 rounded-full text-xs">
                  GFE/PSE
                </span>
                <span className="bg-[#d4a574] text-black px-3 py-1 rounded-full text-xs">
                  BDSM
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="text-sm font-medium">Location</h2>
                <button
                  onClick={() => setIsEditingLocation(!isEditingLocation)}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <Edit2 className="w-4 h-4 text-[#d4a574]" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {/* City */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    City
                  </label>
                  {isEditingLocation ? (
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.city}
                    </div>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Country
                  </label>
                  {isEditingLocation ? (
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.country}
                    </div>
                  )}
                </div>

                {/* Postal Code */}
                <div className="sm:col-span-2">
                  <label className="text-gray-500 text-xs block mb-2">
                    Postal Code
                  </label>
                  {isEditingLocation ? (
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.postalCode}
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="text-gray-500 text-xs block mb-2">
                    Address
                  </label>
                  {isEditingLocation ? (
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400 break-words">
                      {formData.address}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#1A1A1A] rounded-lg border border-gray-900">
              <AdminEscortAvailability />
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] rounded-lg border border-gray-900 mt-4 md:mt-6">
          <AdminPhotoVideoGallery />
        </div>
      </div>
    </div>
  );
}
