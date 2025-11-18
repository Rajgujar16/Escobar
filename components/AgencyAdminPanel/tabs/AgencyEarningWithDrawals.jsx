import Image from "next/image";
import React from "react";
import agencyImage from "@/public/agencyProfile.png";

export default function AgencyEarningWithDrawals() {
  return (
    <div className="w-full  text-white  min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">
            Earnings & Withdrawals
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Track your credits, earnings and withdraw from here.
          </p>
        </div>

        <button className="bg-[#d4a574] text-black font-medium px-4 py-2 rounded-md text-xs sm:text-sm hover:opacity-90 transition-all">
          Withdraw Now
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Total Credits Earned", value: "15,250", sub: "credits" },
          { title: "Available Earnings", value: "8,600", sub: "credits" },
          { title: "Total Earning Amount", value: "₹85,000" },
          {
            title: "Available Balance",
            value: "23,850",
            sub: "credits",
            highlight: true,
            usd: "$1800",
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border border-[#1f1f1f] flex flex-col justify-between
        min-h-[120px] sm:min-h-[130px]  
        ${card.highlight ? "bg-[#d4a574] text-black" : "bg-[#111]"}
      `}
          >
            {/* Top Content */}
            <div>
              <p
                className={`text-xs sm:text-sm ${
                  card.highlight ? "text-black/80" : "text-gray-400"
                }`}
              >
                {card.title}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                {card.value}
              </h3>

              {card.sub && (
                <span
                  className={`text-xs sm:text-sm ${
                    card.highlight ? "text-black/70" : "text-gray-400"
                  }`}
                >
                  {card.sub}
                </span>
              )}
            </div>

            {/* Bottom Content (USD only) */}
            {card.usd && (
              <p className="text-xs font-medium text-black/70">{card.usd}</p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div className="border border-zinc-600 rounded-xl p-4">
          {/* Table Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-sm sm:text-base font-medium">
              Detailed Earnings
            </h3>

            <div className="flex gap-3 mt-3 sm:mt-0">
              <button className="bg-[#111] border border-[#2c2c2c] px-3 py-1.5 rounded-md text-xs sm:text-sm">
                Source Type ▾
              </button>
              <button className="bg-[#111] border border-[#2c2c2c] px-3 py-1.5 rounded-md text-xs sm:text-sm">
                Date Range ▾
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="w-full overflow-x-auto rounded-xl bg-[#111] border border-[#1f1f1f]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1f1f1f] text-gray-400 text-xs">
                  <th className="p-3">Escort Name</th>
                  <th className="p-3">Total Live Credits</th>
                  <th className="p-3">Amount Earned</th>
                  <th className="p-3">Total Sessions</th>
                  <th className="p-3">Last Live Date</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#1a1a1a] hover:bg-[#161616] transition-all"
                  >
                    <td className="p-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Image
                          src={agencyImage}
                          alt="Escort"
                          width={28}
                          height={28}
                          className="rounded-full object-cover"
                        />
                        <span>Scarlett Rose</span>
                      </div>
                    </td>

                    <td className="p-3 whitespace-nowrap">3,450 credits</td>
                    <td className="p-3 text-[#d4a574]">₹15,200 / $182</td>
                    <td className="p-3">12 sessions</td>
                    <td className="p-3 text-[#888888]">Nov 10, 2025</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-zinc-600 rounded-xl p-4">
          {/* Table Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-sm sm:text-base font-medium">
              WithDrawal History
            </h3>

            <div className="flex gap-3 mt-3 sm:mt-0">
              <button className="bg-[#111] border border-[#2c2c2c] px-3 py-1.5 rounded-md text-xs sm:text-sm">
                Source Type ▾
              </button>
              <button className="bg-[#111] border border-[#2c2c2c] px-3 py-1.5 rounded-md text-xs sm:text-sm">
                Date Range ▾
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="w-full overflow-x-auto rounded-xl bg-[#111] border border-[#1f1f1f]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1f1f1f] text-gray-400 text-xs">
                  <th className="p-3">Transaction Id</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#1a1a1a] hover:bg-[#161616] transition-all"
                  >
                    <td className="p-3 whitespace-nowrap">TXN149201</td>
                    <td className="p-3 whitespace-nowrap">Oct 20, 2025</td>
                    <td className="p-3">$1,500</td>
                    <td className="p-3">Bank Transfer</td>
                    <td className="p-3">
                      <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                        Approved
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
