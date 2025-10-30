import React from "react";
import { FaStar } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { FiEdit3, FiMessageCircle } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";

export default function AgencyReview() {
  const reviews = [
    {
      id: 1,
      name: "Michael P.",
      verified: true,
      timeAgo: "3 weeks ago",
      rating: 5,
      comment:
        "Absolutely incredible experience. Professional, elegant, and exceeded all expectations. Highly recommend!",
    },
    {
      id: 2,
      name: "Sarah K.",
      verified: true,
      timeAgo: "1 month ago",
      rating: 5,
      comment:
        "Outstanding service from start to finish. Very professional team and exceptional quality.",
    },
    {
      id: 3,
      name: "David M.",
      verified: true,
      timeAgo: "2 months ago",
      rating: 5,
      comment:
        "Excellent experience! Everything was perfect and exceeded my expectations. Will definitely return.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-300 text-sm sm:text-base font-normal">
            Customer Reviews
          </h2>
          <span className="bg-[#d4a67488] text-gray-300 text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
        <button className="flex items-center gap-2 text-[#d4a574] text-xs sm:text-sm hover:text-white transition-colors w-fit">
          <FiEdit3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Stats Card */}
      <div className="bg-black border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="grid grid-cols-3 divide-x divide-gray-800">
          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center px-2 sm:px-4">
            <div className="flex items-center gap-1 mb-1">
              <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-[#d4a574]" />
              <span className="text-lg sm:text-2xl font-semibold text-white">
                5.0
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 text-center">
              Average Rating
            </span>
          </div>

          {/* Total Reviews */}
          <div className="flex flex-col items-center justify-center px-2 sm:px-4">
            <div className="flex items-center gap-1 mb-1">
              <FiMessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#d4a574]" />
              <span className="text-lg sm:text-2xl font-semibold text-white">
                3
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 text-center">
              Total Reviews
            </span>
          </div>

          {/* Recommend */}
          <div className="flex flex-col items-center justify-center px-2 sm:px-4">
            <div className="flex items-center gap-1 mb-1">
              <MdCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#d4a574]" />
              <span className="text-lg sm:text-2xl font-semibold text-white">
                100%
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 text-center">
              Recommend
            </span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-3 sm:space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-black border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Avatar */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex-shrink-0"></div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      {review.name}
                    </span>
                    {review.verified && (
                      <CiCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4a574] flex-shrink-0" />
                    )}
                  </div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                          i < review.rating ? "text-[#d4a574]" : "text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Time */}
                <p className="text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-3">
                  {review.timeAgo}
                </p>

                {/* Comment */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
