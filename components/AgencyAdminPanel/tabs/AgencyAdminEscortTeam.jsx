import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar, FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useModal } from "../../../app/ModalContext";

export default function AgencyAdminEscortTeam() {
  const { openCreateEscort } = useModal();
  const escorts = Array(8).fill({
    name: "Sofia Laurent",
    rating: 4.8,
    reviews: 127,
    status: "Active",
    age: 24,
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  });

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[22px] sm:text-[28px] font-normal">
          Team & Escorts
        </h1>

        <button
          className="bg-[#d4a574] hover:bg-[#c99961] text-black sm:px-5 py-2 px-2 rounded text-xs sm:text-sm font-medium transition flex items-center gap-1"
          onClick={openCreateEscort}
        >
          <Plus size={15} /> Add New Escort
        </button>
      </div>

      <p className="text-gray-500 text-[11px] sm:text-xs mb-5 sm:mb-7">
        Manage profiles, view statistics, and add new members to your team.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-3">
        {escorts.map((escort, index) => (
          <div
            key={index}
            className="group bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer border border-[#D4A574] transition-all duration-500 hover:shadow-[0_0_12px_rgba(212,165,116,0.3)]"
          >
            {/* IMAGE PART */}
            <div className="relative w-full h-[180px] sm:h-[250px] lg:h-[300px] overflow-hidden">
              <Image
                src={escort.image}
                alt={escort.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="100%"
                priority
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>

            {/* CONTENT PART */}
            <div className="p-4">
              {/* NAME + LOCATION */}
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-[13px] sm:text-[14px] font-medium">
                  {escort.name}
                </h3>

                <span className="text-gray-400 text-[10px] sm:text-[11px] flex items-center gap-1">
                  <IoLocationSharp size={12} />
                  {escort.location}
                </span>
              </div>

              {/* RATING + STATUS */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <FaStar className="text-yellow-500 text-xs" />
                  <span className="text-[12px] font-medium">
                    {escort.rating}
                  </span>
                  <span className="text-gray-500 text-[10px]">
                    ({escort.reviews})
                  </span>
                </div>

                <span className="flex items-center gap-1.5 text-green-500 text-[11px]">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {escort.status}
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center gap-2 mt-2">
                <button className="flex-1 bg-[#2C2C2E] hover:bg-[#333] text-white py-1.5 rounded-lg text-[11px] font-medium transition flex items-center justify-center gap-1.5">
                  <FaEye className="text-[11px]" />
                  View
                </button>

                <button className="flex-1 bg-[#2C2C2E] hover:bg-[#333] text-white py-1.5 rounded-lg text-[11px] font-medium transition flex items-center justify-center gap-1.5">
                  <FaPencilAlt className="text-[11px]" />
                  Edit
                </button>

                <button className="bg-[#0A0A0A] hover:bg-[#333] text-white py-1.5 px-3 rounded-sm transition flex items-center justify-center">
                  <FaTrash className="text-[11px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
