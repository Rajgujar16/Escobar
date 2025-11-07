"use client";
import React from "react";
import { FaUpload } from "react-icons/fa";

const pricingData = [
  { type: "Square Card Ad", duration: "7 Days", rate: "$50" },
  { type: "Square Card Ad", duration: "14 Days", rate: "$90" },
  { type: "Square Card Ad", duration: "21 Days", rate: "$120" },
  { type: "Horizontal Banner Ad", duration: "7 Days", rate: "$70" },
  { type: "Horizontal Banner Ad", duration: "14 Days", rate: "$130" },
  { type: "Horizontal Banner Ad", duration: "21 Days", rate: "$170" },
];

export default function AdvertisePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12 text-white bg-[#0d0d0d]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Advertise With Us
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Boost your visibility and reach a senior audience. Choose from our
          premium advertising options to showcase your profile on EscortaClub.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
        {/* Promote Your Profile Card */}
        <div className="bg-[#000000] border border-gray-700 rounded-xl p-5 sm:p-6 flex-1 max-w-md mx-auto w-full shadow-md">
          <h2 className="text-lg sm:text-xl font-medium mb-4">
            Promote Your Profile
          </h2>

          <div className="w-full h-36 sm:h-40 border border-dashed border-gray-600 bg-[#111111] rounded-md mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image Preview</span>
          </div>

          {/* Ad Title */}
          <label className="block text-sm mb-1 text-gray-300">Ad Title</label>
          <input
            type="text"
            placeholder="Enter Ad Title"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-2 text-sm mb-4 focus:outline-none focus:border-gray-500"
          />

          {/* Upload Image */}
          <label className="block text-sm mb-1 text-gray-300">
            Upload Image
          </label>
          <div className="flex items-center gap-2 mb-4">
            <button className="flex items-center justify-center w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 text-sm text-gray-400 hover:bg-[#222222] transition">
              <FaUpload className="mr-2 text-gray-400" />
              Upload Image
            </button>
          </div>

          {/* Duration */}
          <label className="block text-sm mb-1 text-gray-300">Duration</label>
          <input
            type="text"
            placeholder="Enter Duration"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-2 text-sm mb-5 focus:outline-none focus:border-gray-500"
          />

          <button className="w-full bg-[#D8AB85] text-black font-medium py-2 rounded-md hover:bg-[#f2a46e] transition">
            Buy Ad Now!
          </button>
        </div>

        {/* Horizontal Banner Ad Card */}
        <div className="bg-[#000000] border border-gray-700 rounded-xl p-5 sm:p-6 flex-1 max-w-md mx-auto w-full shadow-md">
          <h2 className="text-lg sm:text-xl font-medium mb-4">
            Horizontal Banner Ad
          </h2>

          <div className="w-full h-28 sm:h-36 border border-dashed border-gray-600 bg-[#111111] rounded-md mb-4 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Banner Preview</span>
          </div>

          {/* Link */}
          <label className="block text-sm mb-1 text-gray-300">Link</label>
          <input
            type="text"
            placeholder="https://yourwebsite.com"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-2 text-sm mb-4 focus:outline-none focus:border-gray-500"
          />

          {/* Upload Banner */}
          <label className="block text-sm mb-1 text-gray-300">
            Upload Banner
          </label>
          <div className="flex items-center gap-2 mb-4">
            <button className="flex items-center justify-center w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 text-sm text-gray-400 hover:bg-[#222222] transition">
              <FaUpload className="mr-2 text-gray-400" />
              Upload Banner
            </button>
          </div>

          {/* Duration */}
          <label className="block text-sm mb-1 text-gray-300">Duration</label>
          <input
            type="text"
            placeholder="Enter Duration"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-2 text-sm mb-5 focus:outline-none focus:border-gray-500"
          />

          <button className="w-full bg-[#D8AB85] text-black font-medium py-2 rounded-md hover:bg-[#f2a46e] transition">
            Buy Ad Now!
          </button>
        </div>
      </div>

      {/* Pricing Details */}
      <div className="w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-12 text-white mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Pricing Details
        </h2>

        <div className="w-full max-w-4xl border border-zinc-600 rounded-md overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-gray-300 text-sm md:text-base">
            <thead className="bg-[#0e0e0e] text-[#f3b28c] uppercase text-xs md:text-sm tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Ad Type
                </th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Duration
                </th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {pricingData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-800 text-sm bg-[#141414] hover:bg-[#181818] transition"
                >
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4 text-zinc-400">{item.duration}</td>
                  <td className="px-6 py-4 text-zinc-400">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
