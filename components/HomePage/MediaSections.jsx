"use client";

import Image from "next/image";

export default function MediaSections({ webcamShows, episodes }) {
  return (
    <>
      {/* Live Webcam Shows */}
      <div className="w-full px-8 py-8 border-b border-[#1a1a1a]">
        <h2 className="text-lg mb-4 text-white font-medium">
          Live Webcam Shows
        </h2>
        <div
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#D4A574]/50 scrollbar-track-transparent"
          style={{ scrollBehavior: "smooth" }}
        >
          {webcamShows.map((show) => (
            <div
              key={show.id}
              className="flex-shrink-0 relative min-w-[150px] h-[200px] sm:min-w-[180px] sm:h-[230px] md:min-w-[200px] md:h-[250px]"
            >
              <Image
                src={show.image}
                alt="Webcam"
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Episodes */}
      <div className="w-full px-8 py-8 border-b border-[#1a1a1a]">
        <h2 className="text-lg mb-4 text-white font-medium">Episodes</h2>
        <div
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#D4A574]/50 scrollbar-track-transparent"
          style={{ scrollBehavior: "smooth" }}
        >
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="flex-shrink-0 relative min-w-[150px] h-[200px] sm:min-w-[180px] sm:h-[230px] md:min-w-[200px] md:h-[250px]"
            >
              <Image
                src={episode.image}
                alt="Episode"
                fill
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
