"use client";
import React from "react";
import { FiFilter } from "react-icons/fi";

export default function RefineSearchSidebar() {
  return (
    <aside className="w-[260px] bg-[#0d0d0d] text-[#e4e4e4] px-5 py-6 border-r border-[#1a1a1a] font-[500] tracking-wide">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
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
          <div className="flex items-center gap-3">
            <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded w-full focus:outline-none appearance-none">
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

      <div className=" bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

      {/* Details & Media */}
      <div>
        <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
          Details & Media
        </h3>
        <p className="text-[12px] text-[#cfcfcf] mb-1">Media & Verification</p>
        <div className="space-y-1.5 text-[13px]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c99b53]" />
            Verified Details
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c99b53]" />
            Pornstar
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c99b53]" />
            With video
          </label>
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

      <div className=" bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

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

      <div className=" bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

      {/* Visual Details */}
      <div>
        <h3 className="text-sm mb-3 text-[#f2c27a] font-semibold">
          Visual Details
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded focus:outline-none appearance-none">
            <option>Hair color</option>
          </select>
          <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded focus:outline-none appearance-none">
            <option>Eye color</option>
          </select>
          <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded focus:outline-none appearance-none">
            <option>Cup size</option>
          </select>
          <select className="bg-transparent border border-[#2a2a2a] text-[13px] px-3 py-1.5 rounded focus:outline-none appearance-none">
            <option>Ethnicity</option>
          </select>
        </div>
      </div>
      <div className=" bg-[#f2c27a] border-b border-[#f2c27a] my-6"></div>

      {/* Buttons */}
      <div className="space-y-3">
        <button className="w-full border border-[#c99b53] text-[#c99b53] rounded-full py-2 text-[13px] font-medium hover:bg-[#c99b53]/10 transition">
          Clear All Filters
        </button>
        <button className="w-full bg-[#c99b53] text-black rounded-full py-2 text-[13px] font-semibold hover:bg-[#b5893e] transition">
          Search
        </button>
      </div>
    </aside>
  );
}
