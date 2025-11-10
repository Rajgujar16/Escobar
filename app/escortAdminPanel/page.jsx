"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import AdminEscortProfileTab from "@/components/EscortAdminProfile/tabs/AdminEscortProfileTab";

// import SubscriptionTab from "./Tabs/SubscriptionTab";
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
      // case "Subscription":
      //   return <SubscriptionTab />;
      // case "Alerts & Updates":
      //   return <AlertsTab />;
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
    <div className="min-h-screen text-white px-28">
      {/* Profile Section */}
      <div className="flex items-start justify-between pt-6 pb-8">
        <div className="flex items-start gap-5">
          <div className="relative h-36 w-36 rounded-full overflow-hidden border-[3px] border-cyan-400 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="pt-3">
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-base font-normal">Scarlett, 28</h2>
              <CheckCircle2 className="text-blue-500 h-4 w-4" />
            </div>

            <a
              href="http://wildfire.com/gingerbreadperson"
              className="text-gray-500 text-xs hover:underline block mb-5"
            >
              http://wildfire.com/gingerbreadperson
            </a>

            <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-5 py-2 text-xs rounded transition">
              View Profile PLUS
            </button>
          </div>
        </div>

        <button className="border border-gray-700 hover:border-gray-600 text-white px-7 py-2 rounded-full text-xs transition">
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-800">
        <div className="flex justify-start gap-10 pt-4 text-sm relative">
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
        <div className="px-12 py-12">{renderTabContent()}</div>
      </div>
    </div>
  );
}
