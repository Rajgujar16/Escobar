import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineDollar,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";
import { Bell, SmileIcon } from "lucide-react";
import { BsFunnel } from "react-icons/bs";

export default function EscortAdminActivitylog() {
  const [activeTab, setActiveTab] = useState("All Activity");

  const tabs = [
    "All Activity",
    "Bookings",
    "Earnings",
    "Profile Updates",
    "Subscription",
    "System Alerts",
  ];

  const activities = {
    "All Activity": [
      {
        category: "Bookings",
        icon: <IoDiamond className="text-[#D4A574] " size={20} />,
        title: "Diamond Subscription Renewed",
        subtitle: "Next payment due Nov 23, 2023",
        date: "Oct 23, 2023, 09:00 AM",
      },
      {
        category: "Profile Updates",
        icon: <SmileIcon className="text-[#D4A574] " size={20} />,
        title: "Profile photo updated",
        subtitle: "Gallery_Image_05.jpg was added.",
        date: "Oct 24, 2023, 11:30 AM",
      },
      {
        category: "Earnings",
        icon: <AiOutlineDollar className="text-[#D4A574]" size={20} />,
        title: "Payment Received: $500.00",
        subtitle: "From Booking #4521",
        date: "Oct 25, 2023, 08:00 PM",
      },
      {
        category: "System Alerts",
        icon: <Bell size={20} className="text-[#D4A574] " />,
        title: "System Alert: New policy update",
        subtitle: "Please review the new terms of service.",
        date: "Oct 26, 2023, 11:40 PM",
      },
    ],
  };

  return (
    <div className="w-full text-white flex justify-center">
      <div className="w-full ">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Activity Log</h2>

          <p className="text-gray-400 text-xs sm:text-sm">
            Track all your account activities and updates here.
          </p>

          <div className="flex  justify-between items-start sm:items-center gap-3 mt-2">
            {/* Search */}
            <div className="w-full relative">
              <AiOutlineSearch className="absolute left-3 top-3 text-gray-400 text-base sm:text-lg" />
              <input
                type="text"
                placeholder="Search activities..."
                className="w-full bg-[#111] border border-[#2c2c2c] rounded-lg
                  pl-10 pr-4 py-2 text-xs sm:text-sm outline-none"
              />
            </div>

            {/* Filter */}
            <button
              className=" items-center gap-2 bg-[#111] border border-[#2c2c2c]
              px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap hidden sm:flex"
            >
              <BsFunnel /> Filter by Date{" "}
            </button>
            <button
              className="flex items-center gap-2 bg-[#111] border border-[#2c2c2c] sm:hidden
              px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap"
            >
              <BsFunnel />
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 sm:mb-12 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-[#2c2c2c] transition-all ${
                activeTab === tab
                  ? "bg-[#D4A574] text-black"
                  : "bg-[#1a1a1a] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ACTIVITY LIST */}
        <div className="flex flex-col gap-3">
          {(activities[activeTab] || []).map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#111] border border-[#2c2c2c] rounded-xl p-3 sm:p-4 flex justify-between items-start"
            >
              <div className="flex gap-3  items-start ">
                {item.icon}
                <div>
                  <p className="text-sm sm:text-md font-medium">{item.title}</p>
                  <p className="text-xs sm:text-xs text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[8px] sm:text-xs text-gray-400 whitespace-nowrap">
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 flex-wrap mt-6 sm:mt-8">
          <button className="bg-[#0a0a0a] border border-[#2a2a2a] px-2 py-1.5 rounded text-[10px] sm:text-sm">
            ←
          </button>

          <button className="bg-[#D4A574] text-black px-3 py-1.5 rounded font-semibold text-[10px] sm:text-sm">
            1
          </button>

          <button className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1.5 rounded text-[10px] sm:text-sm">
            2
          </button>

          <button className="bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-1.5 rounded text-[10px] sm:text-sm">
            3
          </button>

          <button className="bg-[#0a0a0a] border border-[#2a2a2a] px-2 py-1.5 rounded text-[10px] sm:text-sm">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
