"use client";
import { Star, CheckCircle } from "lucide-react";
import { FaUser, FaCheckCircle } from "react-icons/fa";

export default function CustomeReview() {
  const reviews = [
    {
      name: "Michael R.",
      rating: 5,
      time: "2 months ago",
      text: "Absolutely incredible experience. Professional, elegant, and exceeded all expectations. Highly recommend!",
      verified: true,
    },
    {
      name: "James K.",
      rating: 5,
      time: "3 months ago",
      text: "A true professional. Amazing conversation and unforgettable evening.",
      verified: true,
    },
    {
      name: "David M.",
      rating: 5,
      time: "4 months ago",
      text: "Best experience I've had. Gorgeous and attentive. Will book again!",
      verified: true,
    },
  ];
  return (
    <>
      {/* Reviews Section */}
      <div className="bg-[#000000] rounded-xl p-4 sm:p-6 border border-zinc-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-md sm:text-xl font-bold text-white">
              Customer Reviews
            </h2>
            <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs sm:text-sm">
              3
            </span>
          </div>
          <button className="text-[#D8AB85] hover:text-amber-400 flex items-center gap-2 text-xs sm:text-sm">
            <FaCheckCircle size={14} /> Write a Review
          </button>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-3 text-center mb-8 text-xs sm:text-sm md:text-base">
          <div>
            <div className="text-2xl sm:text-3xl font-bold mb-1 flex items-center justify-center gap-1">
              {" "}
              <Star
                size={12}
                className="fill-[#D8AB85] text-[#D8AB85] sm:size-[16px]"
              />
              5.0
            </div>

            <p className="text-gray-400 text-[10px] sm:text-xs">
              Average Rating
            </p>
          </div>

          <div className="border-x border-zinc-800">
            <div className="text-2xl sm:text-3xl font-bold mb-1">3</div>
            <p className="text-gray-400 text-[10px] sm:text-xs">
              Total Reviews
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold mb-1">100%</div>
            <p className="text-gray-400 text-[10px] sm:text-xs">Recommend</p>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="border-t border-zinc-800 pt-5 sm:pt-6">
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Avatar */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm sm:text-base">
                  <FaUser />
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex flex-row items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm sm:text-base">
                          {review.name}
                        </span>
                        {review.verified && (
                          <CheckCircle size={13} className="text-green-500" />
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-[2px]">
                        {review.time}
                      </p>
                    </div>

                    <div className="flex gap-1 mt-2 sm:mt-0">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className="fill-[#D8AB85] text-[#D8AB85] sm:size-[14px]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {review.text}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3 text-[11px] sm:text-xs text-gray-500">
                    <button className="hover:text-[#D8AB85]">Helpful</button>
                    <button className="hover:text-[#D8AB85]">Report</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
