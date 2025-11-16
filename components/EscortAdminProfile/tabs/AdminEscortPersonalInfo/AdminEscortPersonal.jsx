"use client";
import { Edit2 } from "lucide-react";
import React, { useState } from "react";

export default function AdminEscortPersonal() {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);

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
    <>
      <div className="bg-[#1A1A1A] rounded-lg p-4 md:p-6 border border-gray-900">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-sm font-medium">Personal Information</h2>
          <button
            onClick={() => setIsEditingPersonal(!isEditingPersonal)}
            className="text-gray-500 hover:text-gray-400"
          >
            <Edit2 className="w-4 h-4 text-[#d4a574]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-3 md:gap-y-4">
          {/* Name */}
          <div>
            <label className="text-gray-500 text-xs block mb-2">Name</label>
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
            <label className="text-gray-500 text-xs block mb-2">Age</label>
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
            <label className="text-gray-500 text-xs block mb-2">Gender</label>
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
            <label className="text-gray-500 text-xs block mb-2">Height</label>
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
            <label className="text-gray-500 text-xs block mb-2">Language</label>
            {isEditingPersonal ? (
              <select className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-700">
                <option>English</option>
                <option>German</option>
                <option>French</option>
              </select>
            ) : (
              <div className="w-full bg-black border border-gray-800 rounded px-3 py-2 flex gap-2 flex-wrap">
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
            <label className="text-gray-500 text-xs block mb-2">Smoking</label>
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
            <label className="text-gray-500 text-xs block mb-2">Drinking</label>
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
            <label className="text-gray-500 text-xs block mb-2">Tattoo</label>
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
            <label className="text-gray-500 text-xs block mb-2">Cup Size</label>
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
    </>
  );
}
