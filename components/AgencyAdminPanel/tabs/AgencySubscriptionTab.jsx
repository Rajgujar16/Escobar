"use client";
import { CircleCheck } from "lucide-react";

export default function AgencySubscriptionTab() {
  const plans = [
    {
      name: "Basic",
      price: "$49 /month",
      features: ["View Basic Profiles", "5 Daily Plus Ups", "Email Support"],
      button: null,
      highlight: false,
    },
    {
      name: "Standard",
      price: "$99 /month",
      features: [
        "View Basic Profiles",
        "Unlimited Plus Ups",
        "30 Days Locked",
        "Priority Support",
      ],
      button: "Manage Plan",
      highlight: true,
      tag: "Current Plan",
    },
    {
      name: "Premium",
      price: "$169 /month",
      features: [
        "View Basic Profiles",
        "Unlimited Plus Ups",
        "30 Days/Locked Support",
        "VIP Mobile Features",
      ],
      button: null,
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-1">Subscription</h2>
        <p className="text-gray-400 text-sm mb-4">
          Manage your access to get the most out of our platform.
        </p>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md text-sm transition">
          Upgrade Now
        </button>
      </div>

      {/* Premium Tier */}
      <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-5 sm:p-6 mb-10 max-w-md">
        <h3 className="text-base font-medium mb-1">Premium Tier</h3>
        <p className="text-gray-400 text-sm mb-4">
          Get advanced features with $50+ monthly subscriptions
        </p>
        <button className="w-full bg-[#D4A574] hover:bg-[#c28b59] text-black font-medium py-2 rounded-md transition">
          Unlock at $50/mo+
        </button>
      </div>

      {/* Subscription Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-[#111111] rounded-lg p-6 flex flex-col justify-between border transition ${
              plan.highlight
                ? "border-[#D4A574]"
                : "border-[#1e1e1e] hover:border-[#D4A574]/40"
            }`}
          >
            {/* Tag for current plan */}
            {plan.tag && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A574] text-black text-xs font-semibold px-3 py-0.5 rounded-full">
                {plan.tag}
              </div>
            )}

            {/* Plan Info */}
            <div>
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.price}</p>

              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <CircleCheck className="w-4 h-4 text-[#D4A574]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button if available */}
            {plan.button && (
              <button className="mt-5 w-full bg-[#D4A574] hover:bg-[#c28b59] text-black font-medium py-2 rounded-md transition">
                {plan.button}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
