"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import * as Tabs from "@radix-ui/react-tabs";

export const dynamic = "force-dynamic";

export default function EscortAdminPanel() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "subscription", label: "Subscription" },
    { id: "alerts", label: "Alerts & Updates" },
    { id: "activity", label: "Activity Log" },
    { id: "earnings", label: "Earnings & Withdrawals" },
    { id: "studio", label: "Live Studio" },
    { id: "settings", label: "Settings & Preferences" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center pt-12">
      {/* Profile Section */}
      <div className="flex items-center justify-between w-[90%] max-w-4xl">
        <div className="flex items-center gap-5">
          <div className="relative h-28 w-28 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Scarlet, 28</h2>
              <CheckCircle2 className="text-blue-500 h-4 w-4" />
            </div>
            <a
              href="http://wildfire.com/gingerbreadperson"
              target="_blank"
              className="text-gray-400 text-sm hover:underline"
            >
              http://wildfire.com/gingerbreadperson
            </a>

            <div className="mt-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 text-sm rounded-md">
                View Profile PLUS
              </button>
            </div>
          </div>
        </div>

        <button className="border border-[#ff9a3c] hover:bg-[#ff9a3c] hover:text-black px-5 py-2 rounded-full text-sm transition">
          Logout
        </button>
      </div>

      {/* Tabs Section */}
      <div className="w-full border-t border-gray-800 mt-12">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          {/* 👇 FIXED: Tabs.List wrapper added */}
          <Tabs.List className="flex justify-center py-4 gap-8 flex-wrap text-sm">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={`transition ${
                  activeTab === tab.id
                    ? "text-[#ff9a3c]"
                    : "text-gray-400 hover:text-[#ff9a3c]"
                }`}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content
              key={tab.id}
              value={tab.id}
              className="w-[90%] max-w-4xl text-gray-300 py-6"
            >
              <p>{`This is the ${tab.label} section.`}</p>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
}
