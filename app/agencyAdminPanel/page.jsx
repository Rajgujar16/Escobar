"use client";
import { useState } from "react";

import AgencySubscriptionTab from "@/components/AgencyAdminPanel/tabs/AgencySubscriptionTab";
import AgencyAdminProfile from "@/components/AgencyAdminPanel/tabs/AgencyAdminProfile";
import AgencyAdminEscortTeam from "@/components/AgencyAdminPanel/tabs/AgencyAdminEscortTeam";
import AgencyAlertUpdate from "@/components/AgencyAdminPanel/tabs/AgencyAlertUpdate";
import AgencyEarningWithDrawals from "@/components/AgencyAdminPanel/tabs/AgencyEarningWithDrawals";
import AgencyLiveStudioUi from "@/components/AgencyAdminPanel/tabs/AgencyLiveStudioUi";

import { FaCheckCircle } from "react-icons/fa";
import agencyProfile from "@/public/agencyProfile.png";
import Image from "next/image";

// import SettingsTab from "./Tabs/SettingsTab";

export default function AgencyAdminPanel() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    "Subscription",
    "Profile",
    "Create & Manage Escorts",
    "Alerts & Updates",
    "Earnings & Withdrawals",
    "Live Studio",
    "Settings & Preferences",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <AgencyAdminProfile />;
      case "Subscription":
        return <AgencySubscriptionTab />;
      case "Create & Manage Escorts":
        return <AgencyAdminEscortTeam />;
      case "Alerts & Updates":
        return <AgencyAlertUpdate />;
      case "Earnings & Withdrawals":
        return <AgencyEarningWithDrawals />;
      case "Live Studio":
        return <AgencyLiveStudioUi />;
      // case "Settings & Preferences":
      //   return <SettingsTab />;
      default:
        return <p className="text-gray-400">Select a tab.</p>;
    }
  };

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28">
      {/* Profile Section */}
      <div className="flex  items-start justify-between pt-6 sm:pb-8 pb-4 gap-6">
        {/* Left: Profile Info */}
        <div className="flex sm:items-center  justify-start sm:flex-row flex-col gap-4 sm:gap-5 ">
          {/* Profile Image */}
          <div className="relative h-20 w-20 xs:h-24 xs:w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden border-[2px] border-zinc-600 shadow-xl  sm:mx-0 shrink-0">
            <Image
              src={agencyProfile}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name + Buttons */}
          <div className="pt-1 text-left w-full">
            {/* Name */}
            <div className="flex sm:justify-start gap-1 sm:gap-2 mb-1">
              <h2 className="text-sm xs:text-base sm:text-lg font-normal">
                Scarlett, 28
              </h2>
              <FaCheckCircle className="text-blue-500 h-3 w-3 xs:h-4 xs:w-4" />
            </div>
            <div className="text-secondary cursor-pointer mb-2 text-xs">
              http://wildfire.com/gingerbreadperson
            </div>
          </div>
        </div>

        {/* Right: Logout */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <button className="border border-gray-700 hover:border-gray-600 text-white px-5 py-2 sm:text-sm text-xs rounded-full transition">
            Logout
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-800 ">
        {/* Tabs (scrollable on mobile) */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto no-scrollbar pt-4 text-sm bg-[#0E0E0E] pb-2 sticky sm:top-20 top-16 z-50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 relative transition whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#D4A574]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4A574]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-0 sm:px-4 py-10 ">{renderTabContent()}</div>
      </div>
    </div>
  );
}
