import { X, Plus } from "lucide-react";
import React, { useState } from "react";

export default function AdminEscortCharges() {
  const [tourInput, setTourInput] = useState("");
  const [locations, setLocations] = useState(["London"]);

  const addLocation = () => {
    if (tourInput.trim() === "") return;
    setLocations([...locations, tourInput]);
    setTourInput("");
  };

  const removeLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Charges Card */}
      <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-4 md:p-6">
        {/* Header */}
        <div className="flex justify-between items-center gap-3 mb-4 md:mb-5">
          <h3 className="text-sm font-medium">Charges</h3>

          <button className="flex items-center gap-1 text-[#d4a574] text-sm font-medium self-start sm:self-auto">
            <Plus size={16} />
            Add Rate
          </button>
        </div>

        {/* Responsive Layout - Stack on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-4">
          {/* INCALL */}
          <div className="flex-1">
            <h4 className="text-[13px] mb-3 font-medium">Incall</h4>

            {[
              { label: "1hr", price: "$400" },
              { label: "2hr", price: "$700" },
              { label: "3hr", price: "$950" },
              { label: "Overnight", price: "$2000" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between md:gap-4 mb-3"
              >
                <span className="w-16 sm:w-20 text-[13px] text-gray-400">
                  {item.label}
                </span>

                <input
                  value={item.price}
                  readOnly
                  className="bg-[#0A0A0A] border border-[#333] rounded-lg text-[13px] px-3 py-2 w-24 sm:w-28 text-white"
                />
              </div>
            ))}
          </div>

          {/* OUTCALL */}
          <div className="flex-1">
            <h4 className="text-[13px] mb-3 font-medium">Outcall</h4>

            {[
              { label: "1hr", price: "$400" },
              { label: "2hr", price: "$700" },
              { label: "3hr", price: "$950" },
              { label: "Overnight", price: "$2000" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between md:gap-4 mb-3"
              >
                <span className="w-16 sm:w-20 text-[13px] text-gray-400">
                  {item.label}
                </span>

                <input
                  value={item.price}
                  readOnly
                  className="bg-[#0A0A0A] border border-[#333] rounded-lg text-[13px] px-3 py-2 w-24 sm:w-28 text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Location Card */}
      <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-4 md:p-5">
        <h3 className="text-[13px] font-medium mb-3 md:mb-4">Tour Location</h3>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 md:mb-4">
          <input
            className="flex-1 bg-[#0A0A0A] border border-[#333] rounded-lg px-3 py-2 text-[12px] text-white placeholder:text-gray-500"
            placeholder="Enter location..."
            value={tourInput}
            onChange={(e) => setTourInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addLocation()}
          />

          <button
            onClick={addLocation}
            className="bg-[#d4a574] text-black px-4 py-2 rounded-md text-[12px] font-medium hover:bg-[#c99961] transition-colors w-full sm:w-auto"
          >
            Add
          </button>
        </div>

        {/* Tags */}
        <div className="border border-[#2A2A2A] rounded-xl p-3 md:py-6 flex flex-wrap gap-2 bg-[#0A0A0A] min-h-[60px] md:min-h-[80px]">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => removeLocation(index)}
              className="bg-[#d4a574] text-[#000] px-2 py-1 flex rounded-full items-center gap-1 text-xs hover:bg-[#c99961] transition-colors"
            >
              {loc}
              <X size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
