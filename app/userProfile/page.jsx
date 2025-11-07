"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const router = useRouter();
  const bookings = [
    {
      id: 1,
      name: "Session with Isabella R.",
      status: "Upcoming",
      date: "24th October, 2024 - 8:00 PM",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
      completed: false,
    },
    {
      id: 2,
      name: "Session with Isabella R.",
      status: "Completed",
      date: "24th October, 2024 - 8:00 PM",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
      completed: true,
    },
  ];

  const transactions = [
    {
      id: 1,
      date: "Oct 24, 2024",
      credits: -200,
      session: "Booking: Isabella R.",
    },
    {
      id: 2,
      date: "Oct 24, 2024",
      credits: +1000,
      session: "Credit Purchase",
    },
    {
      id: 3,
      date: "Oct 24, 2024",
      credits: -200,
      session: "Booking: Sofia L.",
    },
    {
      id: 4,
      date: "Oct 24, 2024",
      credits: -200,
      session: "Booking: Sofia L.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 md:px-10 py-10 flex flex-col items-center">
      {/* Profile Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop"
              alt="User"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
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
            Current Credit: <span className="text-white">2000</span>
          </p>
          <p className="text-xs text-neutral-500">
            Use credits to book live sessions instantly.
          </p>
        </div>
        <button
          className="mt-4 md:mt-0 bg-[#d7a36a] text-black text-xs sm:text-sm px-6 py-2 rounded-md hover:bg-[#e0b26d] transition-all"
          onClick={() => router.push("/userProfile/buyCredits")}
        >
          Buy Credit
        </button>
      </div>

      {/* My Booking */}
      <div className="w-full max-w-4xl mb-10">
        <h3 className="text-[#d7a36a] font-medium mb-4">My Booking</h3>

        <div className="space-y-3">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-between border border-neutral-800 rounded-lg overflow-hidden bg-black/40 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md overflow-hidden">
                  <Image
                    src={b.img}
                    alt={b.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{b.name}</p>
                  <p className="text-xs text-gray-400">
                    Status:{" "}
                    <span
                      className={
                        b.completed ? "text-gray-400" : "text-[#d7a36a]"
                      }
                    >
                      {b.status}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">{b.date}</p>
                </div>
              </div>

              <button
                className={`text-xs font-medium px-5 py-2 rounded-md transition-all ${
                  b.completed
                    ? "bg-neutral-800 text-gray-400"
                    : "bg-[#d7a36a] text-black hover:bg-[#e0b26d]"
                }`}
                onClick={() => router.push("/liveStreaming")}
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-12 text-white mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Transaction History
        </h2>

        <div className="w-full max-w-4xl border border-zinc-600 rounded-md overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-gray-300 text-sm md:text-base">
            <thead className="bg-[#0e0e0e] text-[#f3b28c] uppercase text-xs md:text-sm tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Date
                </th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Credits Used
                </th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">
                  Session
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t border-neutral-800 text-sm">
                  <td className="py-3 px-4 text-gray-400">{t.date}</td>
                  <td
                    className={`py-3 px-4 ${
                      t.credits > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {t.credits > 0 ? `+${t.credits}` : t.credits}
                  </td>
                  <td className="py-3 px-4 text-gray-300">{t.session}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
