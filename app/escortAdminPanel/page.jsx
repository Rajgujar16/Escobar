"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AdminEscortProfileTab from "@/components/EscortAdminProfile/tabs/AdminEscortProfileTab";
import EscortSubscriptionTab from "@/components/EscortAdminProfile/tabs/EscortSubscriptionTab";
import EscortAlertsAndUpdatesTab from "@/components/EscortAdminProfile/tabs/EscortAlertsAndUpdatesTab";
// import AlertsTab from "./Tabs/AlertsTab";
// import ActivityTab from "./Tabs/ActivityTab";
// import EarningsTab from "./Tabs/EarningsTab";
// import LiveStudioTab from "./Tabs/LiveStudioTab";
// import SettingsTab from "./Tabs/SettingsTab";

export default function EscortAdminPanel() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    "Subscription",
    "Profile",
    "Alerts & Updates",
    "Activity Log",
    "Earnings & Withdrawals",
    "Live Studio",
    "Settings & Preferences",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <AdminEscortProfileTab />;
      case "Subscription":
        return <EscortSubscriptionTab />;
      case "Alerts & Updates":
        return <EscortAlertsAndUpdatesTab />;
      // case "Activity Log":
      //   return <ActivityTab />;
      // case "Earnings & Withdrawals":
      //   return <EarningsTab />;
      // case "Live Studio":
      //   return <LiveStudioTab />;
      // case "Settings & Preferences":
      //   return <SettingsTab />;
      default:
        return <p className="text-gray-400">Select a tab.</p>;
    }
  };

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pt-6 pb-8 gap-6">
        {/* Left: Profile Info */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-5 w-full sm:w-auto">
          {/* Profile Image */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden border-[3px] border-cyan-400 shadow-xl mx-auto sm:mx-0">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Buttons */}
          <div className="pt-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h2 className="text-base sm:text-lg font-normal">Scarlett, 28</h2>
              <CheckCircle2 className="text-blue-500 h-4 w-4" />
            </div>

            <a
              href="http://wildfire.com/gingerbreadperson"
              className="text-gray-500 text-xs hover:underline block mb-4"
            >
              http://wildfire.com/gingerbreadperson
            </a>

            <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-5 py-2 text-xs rounded transition w-full sm:w-auto">
              View Profile PLUS
            </button>
          </div>
        </div>

        {/* Right: Logout */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <button className="border border-gray-700 hover:border-gray-600 text-white px-6 py-2 rounded-full text-xs transition">
            Logout
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-800">
        {/* Tabs (scrollable on mobile) */}
        <div className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto no-scrollbar pt-4 text-sm relative pb-2">
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
        <div className="px-2 sm:px-4 py-10">{renderTabContent()}</div>
      </div>
    </div>
  );
}
