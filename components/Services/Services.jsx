"use client";
import { useState } from "react";
import { FiX, FiSearch } from "react-icons/fi";

export default function Services() {
  const allServices = [
    "Handjob",
    "Bisexual (For Couples)",
    "Group Sex (With Men)",
    "GFE (Girlfriend Experience)",
    "PSE (Pornstar Experience)",
    "BDSM",
    "Massage",
    "Anal Sex",
    "Role Play",
    "Fetish",
    "Escort for Events",
  ];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = allServices.filter((service) =>
    service.toLowerCase().includes(search.toLowerCase())
  );

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="relative">
      <label className="block text-sm text-neutral-300 mb-1">
        Services Offered
      </label>

      {/* Search Button (acts as trigger) */}
      <div className="relative mb-3">
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-between border border-[#2a2a2a] text-sm px-4 py-2 rounded-md hover:border-[#d7a36a] transition-colors w-full"
        >
          <div className="flex items-center gap-2">
            <FiSearch className="text-[#d7a36a]" />
            <span className="text-neutral-300">Select Services Offered</span>
          </div>
          <span className="text-neutral-500 text-xs">
            {selected.length > 0 && `${selected.length} selected`}
          </span>
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute z-10 mt-2 w-full bg-black border border-neutral-800 rounded-lg shadow-lg max-h-56 overflow-y-auto">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
            />

            <div className="p-2 space-y-1">
              {filtered.length > 0 ? (
                filtered.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-[#d7a36a]/10 rounded-md cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(service)}
                      onChange={() => toggleService(service)}
                      className="w-4 h-4 accent-[#d7a36a] bg-transparent border border-neutral-600 rounded"
                    />
                    {service}
                  </label>
                ))
              ) : (
                <p className="text-xs text-neutral-500 px-3 py-2">
                  No results found
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Selected Services */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 border border-neutral-700 p-3 rounded-md">
          {selected.map((service) => (
            <div
              key={service}
              className="flex items-center gap-1 bg-[#d7a36a]/20 border border-[#d7a36a]/30 text-[#d7a36a] text-xs px-3 py-1.5 rounded-full"
            >
              <span>{service}</span>
              <FiX
                className="text-[13px] cursor-pointer"
                onClick={() => toggleService(service)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
