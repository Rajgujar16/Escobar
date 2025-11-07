import Image from "next/image";

export default function UserDashboard() {
  return (
    <div className="min-h-screen  text-white px-4 md:px-10 py-10 flex flex-col items-center">
      {/* Profile Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image
            src="https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg"
            alt="User"
            width={64}
            height={64}
            className="object-cover"
          />

          <h2 className="text-lg font-medium">Alexbroski720</h2>
        </div>

        <button className="mt-4 md:mt-0 border border-[#d7a36a]/50 text-[#d7a36a] text-sm px-6 py-1.5 rounded-full hover:bg-[#d7a36a] hover:text-black transition-all">
          Logout
        </button>
      </div>

      {/* Current Credit */}
      <div className="w-full max-w-4xl border border-[#1f1f1f] rounded-lg p-4 flex flex-col md:flex-row items-center justify-between mb-10 bg-black/30">
        <div>
          <p className="text-sm text-neutral-400 mb-1">
            Current Credit: <span>2000</span>
          </p>
          <p className="text-xs text-neutral-500">
            Use credits to book live sessions instantly.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-[#d7a36a] text-black text-xs sm:text-sm  px-6 py-2 rounded-md hover:bg-[#e0b26d] transition-all">
          Buy Credit
        </button>
      </div>

      {/* My Booking */}
      <div className="w-full max-w-4xl mb-10">
        <h3 className="text-[#d7a36a] font-medium mb-4">My Booking</h3>

        <div className="space-y-3">
          {/* Booking Card */}
          <div className="flex items-center justify-between border border-neutral-800 rounded-lg overflow-hidden bg-black/40 p-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden">
                <Image
                  src="/escort1.jpg"
                  alt="Isabella"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Session with Isabella R.
                </p>
                <p className="text-xs text-gray-400">
                  Status: <span className="text-[#d7a36a]">Upcoming</span>
                </p>
                <p className="text-xs text-gray-500">
                  24th October, 2024 - 8:00 PM
                </p>
              </div>
            </div>
            <button className="bg-[#d7a36a] text-black text-xs font-medium px-5 py-2 rounded-md hover:bg-[#e0b26d] transition-all">
              Join
            </button>
          </div>

          <div className="flex items-center justify-between border border-neutral-800 rounded-lg overflow-hidden bg-black/40 p-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden">
                <Image
                  src="/escort1.jpg"
                  alt="Isabella"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Session with Isabella R.
                </p>
                <p className="text-xs text-gray-400">
                  Status: <span className="text-gray-400">Completed</span>
                </p>
                <p className="text-xs text-gray-500">
                  24th October, 2024 - 8:00 PM
                </p>
              </div>
            </div>
            <button className="bg-neutral-800 text-gray-400 text-xs font-medium px-5 py-2 rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="w-full max-w-4xl">
        <h3 className="text-[#d7a36a] font-medium mb-4">Transaction History</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-800 rounded-lg overflow-hidden">
            <thead className="bg-black/40 text-gray-300">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">
                  Credits Used
                </th>
                <th className="text-left py-3 px-4 font-medium">Session</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-800">
                <td className="py-3 px-4 text-gray-400">Oct 24, 2024</td>
                <td className="py-3 px-4 text-red-400">-200</td>
                <td className="py-3 px-4 text-gray-300">
                  Booking: Isabella R.
                </td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="py-3 px-4 text-gray-400">Oct 24, 2024</td>
                <td className="py-3 px-4 text-green-400">+1000</td>
                <td className="py-3 px-4 text-gray-300">Credit Purchase</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="py-3 px-4 text-gray-400">Oct 24, 2024</td>
                <td className="py-3 px-4 text-red-400">-200</td>
                <td className="py-3 px-4 text-gray-300">Booking: Sofia L.</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="py-3 px-4 text-gray-400">Oct 24, 2024</td>
                <td className="py-3 px-4 text-red-400">-200</td>
                <td className="py-3 px-4 text-gray-300">Booking: Sofia L.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
