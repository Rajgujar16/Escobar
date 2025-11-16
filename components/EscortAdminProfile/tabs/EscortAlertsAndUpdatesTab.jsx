"use client";

import { useState } from "react";
import { Search, CircleCheck, Clock, AlertTriangle } from "lucide-react";

export default function EscortAlertsAndUpdatesTab() {
  const [activeFilter, setActiveFilter] = useState("All");

  const systemNotifications = [
    {
      id: 1,
      title: "New Profile Features Available",
      desc: "We’ve added new fields to your profile to help you stand out. Update now to enhance your visibility.",
      tag: "New Feature",
      time: "2h ago",
    },
    {
      id: 2,
      title: "Platform Maintenance Scheduled",
      desc: "Scheduled maintenance on Dec 25th, 2AM–4AM EST. The platform may be temporarily unavailable.",
      tag: "Maintenance",
      time: "1 day ago",
    },
  ];

  const activityAlerts = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      title: "New Booking Request",
      desc: "You have received a new booking request from ClientX for tomorrow at 8 PM.",
      time: "15m ago",
      icon: <CircleCheck className="text-[#D4A574] h-4 w-4" />,
    },
    {
      id: 2,
      avatar: "",
      title: "Profile Verification Pending",
      desc: "Your identity verification documents are under review. We will notify you once it’s complete.",
      time: "6h ago",
      icon: <Clock className="text-[#D4A574] h-4 w-4" />,
    },
    {
      id: 3,
      avatar: "",
      title: "You Received a New Client Review",
      desc: "A client has left a 5-star review on your profile. Great work!",
      time: "3 days ago",
      icon: <CircleCheck className="text-[#D4A574] h-4 w-4" />,
    },
  ];

  return (
    <div className="text-white space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-base sm:text-lg font-medium mb-4">
          Alerts & Updates
        </h2>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-3 top-2.5 text-gray-500 h-4 w-4" />
            <input
              type="text"
              placeholder="Search alerts..."
              className="w-full bg-[#0e0e0e] border border-gray-800 rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2  sm:justify-end">
            {["All", "System", "Personal"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs rounded-md transition ${
                  activeFilter === filter
                    ? "bg-[#D4A574] text-black"
                    : "bg-[#1a1a1a] text-gray-400 hover:text-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* System Notifications */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-gray-200 ">System Notifications</h3>
          <button className="text-xs text-[#D4A574] hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="space-y-3">
          {systemNotifications.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] rounded-lg border border-gray-900 p-4 sm:p-5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 mb-2">{item.desc}</p>
                  <span className="inline-block bg-[#2a2a2a] text-[#D4A574] text-[10px] px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 whitespace-nowrap ml-3">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Alerts */}
      <div className="space-y-4">
        <h3 className="text-sm text-gray-200 ">Activity Alerts</h3>

        <div className="space-y-3">
          {activityAlerts.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] rounded-lg border border-gray-900 p-4 sm:p-5 flex items-start gap-3"
            >
              {/* Avatar */}
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt="User"
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 flex items-center justify-center bg-[#1a1a1a] rounded-full">
                  <AlertTriangle className="text-[#D4A574] h-4 w-4" />
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[11px] text-gray-500">
                      {item.time}
                    </span>
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
