"use client";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function RefineSearchSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Header */}
      <div className="lg:hidden flex justify-between items-center bg-[#0d0d0d] border-b border-[#1a1a1a] px-5 py-3">
        <div className="flex items-center gap-2">
          <FiFilter className="text-[#c99b53] text-[18px]" />
          <h2 className="text-sm font-semibold text-[#c99b53]">
            Refine Search
          </h2>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#c99b53] text-sm border border-[#2a2a2a] px-3 py-1 rounded-full"
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto 
          w-[85%] sm:w-[300px] lg:w-[260px] 
          bg-[#0d0d0d] text-[#e4e4e4] 
          px-5 py-6 border-r border-[#1a1a1a] 
          font-[500] tracking-wide 
          z-50 transform transition-transform duration-300 ease-in-out
          overflow-y-auto scrollbar-thin scrollbar-thumb-[#c99b53]/30 scrollbar-track-transparent
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile Close Header */}
        <div className="flex justify-between items-center mb-4 lg:hidden ">
          <div className="flex items-center gap-2 ">
            <FiFilter className="text-[#c99b53] text-[18px]" />
            <h2 className="text-sm font-semibold text-[#c99b53]">
              Refine Search
            </h2>
          </div>
          <IoMdClose
            className="text-[#c99b53] text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Header */}
        <div className="hidden lg:flex items-center gap-2 mb-1">
          <FiFilter className="text-[#c99b53] text-[15px]" />
          <h2 className="text-sm font-semibold text-[#c99b53]">Refine</h2>
        </div>
        <p className="text-[13px] mb-6 text-[#e9e9e9] font-medium underline decoration-[#c99b53] underline-offset-[4px]">
          Search
        </p>

        {/* Core Selection */}
        <div>
          <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
            Core Selection
          </h3>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded w-full focus:outline-none appearance-none mb-3 sm:mb-0">
                <option>Location</option>
              </select>
              <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded w-full focus:outline-none appearance-none">
                <option>Age</option>
              </select>
            </div>
            <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded w-full focus:outline-none appearance-none">
              <option>Independent/Agency</option>
            </select>
            <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded w-full focus:outline-none appearance-none">
              <option>Service information/Agency</option>
            </select>
          </div>
        </div>

        <div className="bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

        {/* Details & Media */}
        <div>
          <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
            Details & Media
          </h3>
          <p className="text-[12px] text-[#cfcfcf] mb-1">
            Media & Verification
          </p>
          <div className="space-y-1.5 text-[13px]">
            {["Verified Details", "Pornstar", "With video"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#c99b53]" />
                {item}
              </label>
            ))}
          </div>

          <p className="text-[12px] text-[#cfcfcf] mt-4 mb-1">Offering For</p>
          <div className="space-y-1.5 text-[13px]">
            {["2+", "Women", "Couples", "Men", "Trans"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#c99b53]" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

        {/* Demographics */}
        <div>
          <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
            Demographics
          </h3>
          <p className="text-[12px] text-[#cfcfcf] mb-1">Gender</p>
          <div className="grid grid-cols-2 gap-y-1.5 text-[13px] mb-3">
            {["Female", "Male", "Trans", "Couples"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#c99b53]" />
                {item}
              </label>
            ))}
          </div>

          <p className="text-[12px] text-[#cfcfcf] mb-1">Orientation</p>
          <div className="grid grid-cols-2 gap-y-1.5 text-[13px]">
            {["Heterosexual", "Bisexual", "Homosexual"].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#c99b53]" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

        {/* Visual Details */}
        <div>
          <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
            Visual Details
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Hair color", "Eye color", "Cup size", "Ethnicity"].map(
              (item) => (
                <select
                  key={item}
                  className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded focus:outline-none appearance-none"
                >
                  <option>{item}</option>
                </select>
              )
            )}
          </div>
        </div>

        <div className="bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

        {/* Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full border border-[#c99b53] text-[#c99b53] rounded-full py-2 text-[13px] font-medium hover:bg-[#c99b53]/10 transition">
            Clear All Filters
          </button>
          <button className="w-full bg-[#c99b53] text-black rounded-full py-2 text-[13px] font-semibold hover:bg-[#b5893e] transition">
            Search
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
