"use client";
import { FaCoins } from "react-icons/fa";

export default function BuyCredits() {
  const creditPackages = [
    { id: 1, credits: 500, price: "$50.00", popular: false },
    { id: 2, credits: 1200, price: "$100.00", popular: true },
    { id: 3, credits: 2500, price: "$200.00", popular: false },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center px-4 py-10">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">Buy Credits</h1>
      <p className="text-gray-400 text-sm mb-8 text-center max-w-md">
        Use credits to book live sessions instantly with your favorite agencies.
      </p>

      {/* Balance Card */}
      <div className="flex items-center gap-3 border border-[#1f1f1f] bg-black/40 px-5 py-3 rounded-lg mb-10">
        <div className="bg-[#d7a36a] text-black p-2 rounded-md">
          <FaCoins className="text-lg" />
        </div>
        <div>
          <p className="text-gray-400 text-xs">Your Balance</p>
          <p className="font-medium text-white">1200 Credits</p>
        </div>
      </div>

      {/* Credit Packages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        {creditPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative border border-[#1f1f1f] bg-black/40 rounded-xl p-6 flex flex-col items-center text-center ${
              pkg.popular ? "border-[#d7a36a]" : ""
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 bg-[#d7a36a] text-black text-xs font-semibold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{pkg.credits}</h2>
            <p className="text-gray-400 text-sm mb-6">Credits</p>
            <p className="text-[#d7a36a] font-medium text-lg mb-6">
              {pkg.price}
            </p>
            <button className="bg-[#d7a36a] text-black font-medium text-sm px-6 py-2 rounded-md hover:bg-[#e0b26d] transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="w-full max-w-3xl border border-[#1f1f1f] bg-black/40 rounded-xl p-6 text-center mb-10">
        <p className="text-gray-400 text-sm mb-6">Or Enter a Custom Amount</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center border border-[#2a2a2a] bg-black rounded-md px-3 py-2 w-full sm:w-1/2">
            <input
              type="number"
              placeholder="Enter Credits"
              className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-500"
            />
            <span className="text-gray-500 text-sm ml-2">$0.00</span>
          </div>
        </div>
      </div>

      {/* Secure Payment */}
      <div className="w-full max-w-3xl text-center">
        <h3 className="text-white font-medium mb-6">Secure Payment Methods</h3>
        <button className="bg-[#d7a36a] text-black text-sm font-medium px-8 py-2.5 rounded-md hover:bg-[#e0b26d] transition-all">
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
