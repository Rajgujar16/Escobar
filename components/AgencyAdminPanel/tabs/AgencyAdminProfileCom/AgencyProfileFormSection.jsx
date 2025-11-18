"use client";

import { useState } from "react";
import { Edit2 } from "lucide-react";
import { RiUpload2Fill } from "react-icons/ri";

export default function AgencyProfileFormSection() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Stargaze Models",
    email: "contact@stargaze-light.com",
    phone: "+1 (555) 123-4567",
    address: "123 Luxury Ave, Beverly Hills, CA 90210",
  });

  return (
    <div className="w-full text-white space-y-6 min-h-screen">
      {/* Agency Profile */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Agency Profile</h2>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
          >
            <Edit2 className="w-4 h-4 text-[#d4a574]" />
          </button>
        </div>

        {/* Profile Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agency Name */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400">Agency Name</label>

            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-200 focus:border-[#d4a574] outline-none"
              />
            ) : (
              <div className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-400">
                {formData.name}
              </div>
            )}
          </div>

          {/* Contact Email */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400">Contact Email</label>

            {isEditing ? (
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-200 focus:border-[#d4a574] outline-none"
              />
            ) : (
              <div className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-400 break-words">
                {formData.email}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400">Phone Number</label>

            {isEditing ? (
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-200 focus:border-[#d4a574] outline-none"
              />
            ) : (
              <div className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-400">
                {formData.phone}
              </div>
            )}
          </div>

          {/* Full Address */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400">Full Address</label>

            {isEditing ? (
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-200 focus:border-[#d4a574] outline-none"
              />
            ) : (
              <div className="w-full bg-black border border-[#2A2A2A] rounded-lg px-4 py-2 text-sm text-gray-400 break-words">
                {formData.address}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 space-y-6">
        <h3 className="text-lg font-medium">Branding</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Agency Logo */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Agency Logo</label>

            <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-16 h-16 bg-[#2EB7B0] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                LOGO
              </div>

              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                <RiUpload2Fill /> Click to upload agency logo
              </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Banner Image</label>

            <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer">
              <div className="w-20 h-12 bg-[#D9A573] rounded-md" />

              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                <RiUpload2Fill /> Click to upload banner image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
