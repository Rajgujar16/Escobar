"use client";

import { useState } from "react";
import { Edit2 } from "lucide-react";

export default function AdminEscortProfileTab() {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingServices, setIsEditingServices] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);

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
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-normal">Your Profile</h1>
          <button className="bg-[#d4a574] hover:bg-[#c99961] text-black px-6 py-2 rounded text-sm font-medium transition">
            Save Changes
          </button>
        </div>
        <p className="text-gray-500 text-xs mb-8">
          Update your personal information, rates, and location.
        </p>

        {/* Profile Completion + About Me (Horizontal) */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Profile Completion */}
          <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900 h-[180px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-medium">Profile Completion</h2>
                <span className="text-[#D4A574] text-sm">20% Complete</span>
              </div>
              <p className="text-gray-500 text-xs mb-4">
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
          <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900 h-[180px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium">About Me</h2>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-xs">✏️ 586</span>
              </div>
            </div>
            <textarea
              value={formData.aboutMe}
              onChange={(e) =>
                setFormData({ ...formData, aboutMe: e.target.value })
              }
              rows="4"
              className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-700 resize-none"
            />
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Personal Information */}
          <div>
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-medium">Personal Information</h2>
                <button
                  onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {/* Name */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Name
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.name}
                    </div>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Age
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.age}
                    </div>
                  )}
                </div>

                {/* Gender - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Gender
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.gender}
                    </div>
                  )}
                </div>

                {/* Eye Color */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Eye Color
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.eyeColor}
                      onChange={(e) =>
                        setFormData({ ...formData, eyeColor: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.eyeColor}
                    </div>
                  )}
                </div>

                {/* Hair Color */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Hair Color
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.hairColor}
                      onChange={(e) =>
                        setFormData({ ...formData, hairColor: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.hairColor}
                    </div>
                  )}
                </div>

                {/* Height */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Height
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.height}
                      onChange={(e) =>
                        setFormData({ ...formData, height: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.height}
                    </div>
                  )}
                </div>

                {/* Body Type - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Body Type
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.bodyType}
                      onChange={(e) =>
                        setFormData({ ...formData, bodyType: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Curvy</option>
                      <option>Slim</option>
                      <option>Athletic</option>
                      <option>Average</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.bodyType}
                    </div>
                  )}
                </div>

                {/* Nationality - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Nationality
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.nationality}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nationality: e.target.value,
                        })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Cambodian</option>
                      <option>American</option>
                      <option>British</option>
                      <option>French</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.nationality}
                    </div>
                  )}
                </div>

                {/* Sexuality - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Sexuality
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.sexuality}
                      onChange={(e) =>
                        setFormData({ ...formData, sexuality: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Bisexual</option>
                      <option>Straight</option>
                      <option>Gay</option>
                      <option>Lesbian</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.sexuality}
                    </div>
                  )}
                </div>

                {/* Ethnicity - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Ethnicity
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.ethnicity}
                      onChange={(e) =>
                        setFormData({ ...formData, ethnicity: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Cambodian</option>
                      <option>Asian</option>
                      <option>Caucasian</option>
                      <option>African</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.ethnicity}
                    </div>
                  )}
                </div>

                {/* Public Hair - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Pubic Hair
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.publicHair}
                      onChange={(e) =>
                        setFormData({ ...formData, publicHair: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Shaved</option>
                      <option>Trimmed</option>
                      <option>Natural</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.publicHair}
                    </div>
                  )}
                </div>

                {/* Language - Dropdown with tags */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Language
                  </label>
                  {isEditingPersonal ? (
                    <select className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700">
                      <option>English</option>
                      <option>German</option>
                      <option>French</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 flex gap-2">
                      <span className="bg-[#d4a574] text-black px-2 py-0.5 rounded text-xs">
                        English
                      </span>
                      <span className="bg-[#d4a574] text-black px-2 py-0.5 rounded text-xs">
                        German
                      </span>
                    </div>
                  )}
                </div>

                {/* Working Location Incall - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Working Location Incall
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.workingLocationIncall}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workingLocationIncall: e.target.value,
                        })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Private Apartment</option>
                      <option>Studio</option>
                      <option>Hotel</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.workingLocationIncall}
                    </div>
                  )}
                </div>

                {/* Working Location Outcall - Dropdown */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Working Location Outcall
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.workingLocationOutcall}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workingLocationOutcall: e.target.value,
                        })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>Hotel</option>
                      <option>Client's Place</option>
                      <option>Restaurant</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.workingLocationOutcall}
                    </div>
                  )}
                </div>

                {/* Smoking */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Smoking
                  </label>
                  {isEditingPersonal ? (
                    <select
                      value={formData.smoking}
                      onChange={(e) =>
                        setFormData({ ...formData, smoking: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.smoking}
                    </div>
                  )}
                </div>

                {/* Drinking */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Drinking
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.drinking}
                      onChange={(e) =>
                        setFormData({ ...formData, drinking: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.drinking}
                    </div>
                  )}
                </div>

                {/* Tattoo */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Tattoo
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.tattoo}
                      onChange={(e) =>
                        setFormData({ ...formData, tattoo: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.tattoo}
                    </div>
                  )}
                </div>

                {/* Piercings */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Piercings
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.piercings}
                      onChange={(e) =>
                        setFormData({ ...formData, piercings: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.piercings}
                    </div>
                  )}
                </div>

                {/* Cup Size */}
                <div>
                  <label className="text-gray-500 text-xs block mb-2">
                    Cup Size
                  </label>
                  {isEditingPersonal ? (
                    <input
                      type="text"
                      value={formData.cupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, cupSize: e.target.value })
                      }
                      className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700"
                    />
                  ) : (
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.cupSize}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Services Offered */}
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-medium">Services Offered</h2>
                <button
                  onClick={() => setIsEditingServices(!isEditingServices)}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {isEditingServices && (
                <button className="w-full bg-black border border-gray-800 rounded px-4 py-2 text-sm text-gray-400 hover:border-gray-700 mb-4 flex items-center justify-center gap-2">
                  <span className="text-lg">+</span> Select Services Offered
                </button>
              )}

              <div className="bg-black border border-gray-800 rounded p-4 flex gap-2 flex-wrap">
                <span className="bg-[#d4a574] text-black px-3 py-1 rounded-full text-xs">
                  GFE/PSE
                </span>
                <span className="bg-[#d4a574] text-black px-3 py-1 rounded-full text-xs">
                  BDSM
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-sm font-medium">Location</h2>
                <button
                  onClick={() => setIsEditingLocation(!isEditingLocation)}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                <div className="col-span-2">
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
                <div className="col-span-2">
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
                    <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-gray-400">
                      {formData.address}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#0f0f0f] rounded-lg p-6 border border-gray-900">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium">Availability</h2>
                <button className="text-gray-500 hover:text-gray-400">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                Set your availability schedule here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
