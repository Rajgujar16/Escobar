import React from "react";
import { Image, Video } from "lucide-react";

export default function PhotoVideoGallery() {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      {/* Header */}
      <h2 className="text-white text-sm font-medium mb-4">
        Photos & Video Gallery
      </h2>

      {/* Upload Boxes */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Add Image */}
        <div className="border-2 border-dashed border-gray-700 rounded-lg h-40 flex flex-col items-center justify-center bg-[#0f0f0f] cursor-pointer hover:border-gray-600 transition-colors">
          <Image className="w-8 h-8 text-gray-600 mb-2" />
          <span className="text-gray-600 text-xs">Add Image</span>
        </div>

        {/* Add Video */}
        <div className="border-2 border-dashed border-gray-700 rounded-lg h-40 flex flex-col items-center justify-center bg-[#0f0f0f] cursor-pointer hover:border-gray-600 transition-colors">
          <Video className="w-8 h-8 text-gray-600 mb-2" />
          <span className="text-gray-600 text-xs">Add Video</span>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Image 1 */}
        <div className="rounded-lg overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
            alt="Gallery 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop"
            alt="Gallery 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-lg overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop"
            alt="Gallery 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="rounded-lg overflow-hidden aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop"
            alt="Gallery 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
