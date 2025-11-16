"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function EarningsOverview() {
  const [activeTab, setActiveTab] = useState("agency");

  // Agency Earnings Data
  const agencyData = [
    { day: "Day 1", earnings: 15000 },
    { day: "Day 2", earnings: 18500 },
    { day: "Day 3", earnings: 17000 },
    { day: "Day 4", earnings: 21000 },
    { day: "Day 5", earnings: 18500 },
    { day: "Day 6", earnings: 22000 },
    { day: "Day 7", earnings: 25000 },
  ];

  // Independent Earnings Data
  const independentData = [
    { day: "Day 1", earnings: 12000 },
    { day: "Day 2", earnings: 15500 },
    { day: "Day 3", earnings: 14000 },
    { day: "Day 4", earnings: 18000 },
    { day: "Day 5", earnings: 16500 },
    { day: "Day 6", earnings: 19500 },
    { day: "Day 7", earnings: 22000 },
  ];

  const currentData = activeTab === "agency" ? agencyData : independentData;

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#2a2a2a] border border-[#D4A574] rounded-lg px-4 py-2 shadow-lg">
          <p className="text-white font-semibold text-sm">
            ${(payload[0].value / 1000).toFixed(1)}K
          </p>
          <p className="text-gray-400 text-xs">{payload[0].payload.day}</p>
        </div>
      );
    }
    return null;
  };

  // Custom Dot for breakpoints
  const CustomDot = (props) => {
    const { cx, cy, payload } = props;

    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={4}
          fill="#D4A574"
          stroke="#1a1a1a"
          strokeWidth={2}
          className="cursor-pointer"
        />
      </g>
    );
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-xl font-semibold">Earnings Overview</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("agency")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "agency"
                ? "bg-[#D4A574] text-black"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            Agency Earnings
          </button>
          <button
            onClick={() => setActiveTab("independent")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "independent"
                ? "bg-[#D4A574] text-black"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            Independent Earnings
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A574" stopOpacity={0.6} />
                <stop offset="50%" stopColor="#8B7355" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4a4034" stopOpacity={0.1} />
              </linearGradient>

              {/* Shadow effect */}
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CartesianGrid
              strokeDasharray="0"
              stroke="#2a2a2a"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}K`}
              ticks={[0, 6000, 10000, 16000, 18000, 20000, 25000]}
              domain={[0, 25000]}
              dx={-10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#D4A574",
                strokeWidth: 1,
                strokeDasharray: "5 5",
              }}
            />

            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#D4A574"
              strokeWidth={2.5}
              fill="url(#earningsGradient)"
              filter="url(#shadow)"
              dot={<CustomDot />}
              activeDot={{
                r: 6,
                fill: "#D4A574",
                stroke: "#1a1a1a",
                strokeWidth: 3,
              }}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
