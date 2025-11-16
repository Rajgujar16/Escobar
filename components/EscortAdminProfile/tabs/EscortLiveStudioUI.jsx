"use client";
import React, { useState } from "react";
import {
  FiVideo,
  FiUsers,
  FiClock,
  FiUser,
  FiChevronDown,
  FiStar,
} from "react-icons/fi";
import { Shield } from "lucide-react";
import { BsFunnel } from "react-icons/bs";

export default function EscortLiveStudioUI() {
  const [activeTab, setActiveTab] = useState("Private Chat History");

  const rows = [
    {
      date: "Oct 25, 2023",
      client: "AlexJayXxo",
      duration: "45 min",
      credits: "1,850",
      rating: 5,
    },
    {
      date: "Oct 25, 2023",
      client: "AlexJayXxo",
      duration: "45 min",
      credits: "1,850",
      rating: 5,
    },
    {
      date: "Oct 25, 2023",
      client: "AlexJayXxo",
      duration: "45 min",
      credits: "1,850",
      rating: 5,
    },
    {
      date: "Oct 25, 2023",
      client: "AlexJayXxo",
      duration: "45 min",
      credits: "1,850",
      rating: 5,
    },
    {
      date: "Oct 25, 2023",
      client: "AlexJayXxo",
      duration: "45 min",
      credits: "1,850",
      rating: 5,
    },
  ];

  return (
    <div className="text-[#FFFFFF] w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Live Studio</h2>
          <p className="text-[#888888] text-xs sm:text-sm mt-1">
            Start your live session, manage schedules, and view history
          </p>
        </div>
      </div>

      {/* Live Session Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Private Session */}
        <div className="bg-[#2A2A2A] rounded-lg overflow-hidden flex flex-col">
          <div className="bg-[#333333] flex items-center justify-center p-6 sm:py-8">
            <div className="bg-[#3A3A3A] p-4 rounded-lg">
              <FiVideo size={28} className="text-[#666666]" />
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-white font-medium text-md sm:text-lg">
              Private Session
            </h3>
            <span className="text-[#888888] text-xs sm:text-sm">
              One-on-one exclusive live event
            </span>
            <button
              className="w-full bg-[#D4A574] hover:bg-[#c49563] text-black 
              font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-md"
            >
              <FiVideo className="w-5 h-5" />
              Go Live
            </button>
          </div>
        </div>

        {/* Group Session */}
        <div className="bg-[#2A2A2A] rounded-lg overflow-hidden flex flex-col">
          <div className="bg-[#333333] flex items-center justify-center p-6 sm:py-8">
            <div className="bg-[#3A3A3A] p-4 rounded-lg">
              <FiUsers size={28} className="text-[#666666]" />
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-white font-medium text-md sm:text-lg">
              Group Session
            </h3>
            <span className="text-[#888888] text-xs sm:text-sm">
              Multi-user live session
            </span>
            <button
              className="w-full bg-[#D4A574] hover:bg-[#c49563] text-black
              font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-md"
            >
              <FiUsers className="w-5 h-5" />
              Go Live
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="text-center mb-8">
        <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-2">
          <span className="text-[#D4A574]">
            <Shield size={16} />
          </span>
          Verified User with Diamond Subscription goes live.
        </p>
      </div>

      {/* Live Overview */}
      <div className="mb-8 bg-[#1A1A1A] p-4 sm:p-8 rounded-lg">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#10B981] h-2 w-2 rounded-full"></span>
            <h2 className="text-lg">Live Session Overview</h2>
          </div>

          <span className="text-[#10B981] text-xs sm:text-sm text-right">
            Currently Live in Group Chat - "Saturday Night Special"
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Viewers */}
          <div className="bg-[#0F0F1A] p-4 sm:p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FiUser className="text-[#A855F7] w-5 h-5" />
              <span className="text-[#999999] text-xs sm:text-sm">VIEWERS</span>
            </div>
            <p className="text-xl sm:text-2xl font-[400]">1,204</p>
          </div>

          {/* Live Time */}
          <div className="bg-[#0F0F1A] p-4 sm:p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="text-[#EC4899] w-5 h-5" />
              <span className="text-[#999999] text-xs sm:text-sm">
                LIVE TIME
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-[400]">01:28:45</p>
          </div>

          {/* Credits */}
          <div className="bg-[#0F0F1A] p-4 sm:p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#D4A574] rounded-full"></span>
              <span className="text-[#D4A574] text-sm">Credits Earned</span>
            </div>
            <p className="text-xl sm:text-2xl font-[400]">45,800</p>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-[#1A1A1A] p-4 sm:p-8 rounded-lg mb-8">
        <h2 className="text-lg mb-4">Upcoming & Scheduled Sessions</h2>

        <div className="space-y-3">
          {[
            { user: "GentlemanX", date: "Today, 25.11.44 4:41 PM (IST)" },
            { user: "HijabiMas22", date: "Today, 25.11.44 4:41 PM (IST)" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#0F0F0F] p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-xs sm:text-sm font-medium">
                  Private Session with{" "}
                  <span className="text-[#D4A574]">{s.user}</span>
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">{s.date}</p>
              </div>

              <button className="text-gray-400 bg-zinc-800 px-3 py-1 rounded-full text-xs sm:text-sm hover:text-white">
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0E0E0E] p-4 sm:p-6 rounded-xl border border-[#1f1f1f]">
        {/* Tabs */}
        <div className="flex justify-between items-center border-b border-[#1f1f1f] pb-3">
          {/* Two Tabs */}
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm">
            {["Private Chat History", "Group Chat History"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 relative ${
                  activeTab === tab ? "text-white" : "text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[1px] bg-white"></span>
                )}
              </button>
            ))}
          </div>

          {/* Filter */}
          <button
            className=" items-center gap-2 bg-[#111] border border-[#2c2c2c]
                        px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap hidden sm:flex"
          >
            <BsFunnel /> Filter by date range{" "}
          </button>
          <button
            className="flex items-center gap-2 bg-[#111] border border-[#2c2c2c] sm:hidden
                        px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap"
          >
            <BsFunnel />
          </button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-xl bg-[#111] border border-[#1f1f1f] mt-4">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#1f1f1f] text-gray-400 text-xs">
                <th className="p-3 whitespace-nowrap">Date</th>
                <th className="p-3 whitespace-nowrap">Client Name</th>
                <th className="p-3 whitespace-nowrap">Duration</th>
                <th className="p-3 whitespace-nowrap">Credits Earned</th>
                <th className="p-3 whitespace-nowrap">Rating</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#1a1a1a] hover:bg-[#161616] transition-all"
                >
                  <td className="p-3 whitespace-nowrap">{row.date}</td>
                  <td className="p-3 whitespace-nowrap">{row.client}</td>
                  <td className="p-3 whitespace-nowrap">{row.duration}</td>
                  <td className="p-3 whitespace-nowrap">{row.credits}</td>

                  <td className="p-3 whitespace-nowrap flex gap-1">
                    {Array.from({ length: row.rating }).map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-[#D4A574] fill-[#D4A574]"
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-[#111] border border-[#1f1f1f] rounded-xl p-5 sm:p-6 text-white mt-6">
        {/* Title */}
        <h3 className="text-sm text-gray-300 mb-4">Live Stats Summary</h3>

        <div className="space-y-4 text-sm sm:text-base">
          {/* Row 1 */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Total Private Sessions</span>
            <span className="text-white font-medium">128</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Total Group Sessions</span>
            <span className="text-white font-medium">32</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Average Session Duration</span>
            <span className="text-white font-medium">78 min</span>
          </div>

          {/* Divider */}
          <div className="border-b border-[#1f1f1f] my-2"></div>

          {/* Row 4 */}
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Total Live Earnings</span>
            <span className="text-[#D4A574] font-semibold">1,250,300</span>
          </div>
        </div>
      </div>
    </div>
  );
}
