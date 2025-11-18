"use client";

import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import AgencyAvailability from "@/components/AgencyAdminPanel/tabs/AgencyAdminProfileCom/AgencyAvailability";
import AgencyProfileFormSection from "@/components/AgencyAdminPanel/tabs/AgencyAdminProfileCom/AgencyProfileFormSection";

export default function AgencyAdminProfile() {
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

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-6">
          {/* Left Column - Personal Information */}
          <div className="xl:col-span-3 space-y-4 md:space-y-6">
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
            <AgencyProfileFormSection />
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6 xl:col-span-2">
            {/* Availability */}
            <div className="bg-[#1A1A1A] rounded-lg border border-gray-900">
              <AgencyAvailability />
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
          </div>
        </div>
      </div>
    </div>
  );
}
