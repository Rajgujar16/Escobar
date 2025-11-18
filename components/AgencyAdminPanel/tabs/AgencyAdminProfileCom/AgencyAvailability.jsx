import { Edit2 } from "lucide-react";
import React, { useState } from "react";

export default function AgencyAvailability() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [availability, setAvailability] = useState({
    Monday: {
      enabled: true,
      from: "10:00 AM",
      to: "11:00 PM",
      from24: "10:00",
      to24: "23:00",
    },
    Tuesday: {
      enabled: true,
      from: "10:00 AM",
      to: "11:00 PM",
      from24: "10:00",
      to24: "23:00",
    },
    Wednesday: {
      enabled: true,
      from: "10:00 AM",
      to: "11:00 PM",
      from24: "10:00",
      to24: "23:00",
    },
    Thursday: {
      enabled: true,
      from: "10:00 AM",
      to: "11:00 PM",
      from24: "10:00",
      to24: "23:00",
    },
    Friday: {
      enabled: true,
      from: "10:00 AM",
      to: "11:00 PM",
      from24: "10:00",
      to24: "23:00",
    },
    Saturday: { enabled: false },
    Sunday: { enabled: false },
  });

  // Convert 24h format into AM/PM
  function convertToAMPM(time24) {
    let [h, m] = time24.split(":");
    h = Number(h);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m} ${ampm}`;
  }

  return (
    <div className="w-full p-4 md:p-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-sm font-medium">Availability</h2>

        <button
          className="text-gray-500 hover:text-gray-300 transition-colors"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit2 className="w-4 h-4 text-[#d4a574]" />
        </button>
      </div>

      {/* Days List */}
      <div className="space-y-2 md:space-y-3">
        {days.map((day) => (
          <div
            key={day}
            className="w-full bg-[#2C2C2E] rounded-xl px-3 md:px-4 py-3 md:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 border border-[#2a2a2a]"
          >
            <span className="font-medium text-sm min-w-[80px]">{day}</span>

            {availability[day].enabled ? (
              <div className="flex items-center gap-2 justify-between sm:justify-start">
                {/* FROM TIME */}
                <div className="relative flex items-center">
                  <input
                    type="time"
                    disabled={!isEditing}
                    value={availability[day].from24}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        [day]: {
                          ...availability[day],
                          from24: e.target.value,
                          from: convertToAMPM(e.target.value),
                        },
                      })
                    }
                    style={{
                      colorScheme: "dark",
                    }}
                    className={`bg-[#1C1C1E] border border-[#333] rounded-lg py-1.5 md:py-1 px-2 text-xs md:text-sm text-white focus:outline-none focus:border-[#d4a574] transition-colors w-[100px] sm:w-auto
                     ${!isEditing && "opacity-60 cursor-not-allowed"}`}
                  />
                </div>

                <span className="text-gray-400 text-xs md:text-sm">-</span>

                {/* TO TIME */}
                <div className="relative flex items-center">
                  <input
                    type="time"
                    disabled={!isEditing}
                    value={availability[day].to24}
                    onChange={(e) =>
                      setAvailability({
                        ...availability,
                        [day]: {
                          ...availability[day],
                          to24: e.target.value,
                          to: convertToAMPM(e.target.value),
                        },
                      })
                    }
                    style={{
                      colorScheme: "dark",
                    }}
                    className={`bg-[#1C1C1E] border border-[#333] rounded-lg py-1.5 md:py-1 px-2 text-xs md:text-sm text-white focus:outline-none focus:border-[#d4a574] transition-colors w-[100px] sm:w-auto
                     ${!isEditing && "opacity-60 cursor-not-allowed"}`}
                  />
                </div>
              </div>
            ) : (
              <span className="text-red-400 text-xs md:text-sm h-[28px] md:h-[32px] flex items-center">
                Not Available
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Available 24/7 Toggle */}
      <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-[#333] mt-3 md:mt-4">
        <span className="text-xs md:text-sm">Available 24/7</span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            disabled={!isEditing}
            className="sr-only peer"
          />

          {/* Track */}
          <div
            className={`w-10 h-5 md:w-11 md:h-6 bg-[#3a3a3a] rounded-full peer-checked:bg-green-500 transition-colors duration-300
            ${!isEditing && "opacity-50 cursor-not-allowed"}`}
          ></div>

          {/* Thumb */}
          <span
            className={`absolute left-0.5 top-0.5 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full
            transition-all duration-300 peer-checked:translate-x-5`}
          ></span>
        </label>
      </div>
    </div>
  );
}
