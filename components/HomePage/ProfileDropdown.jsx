"use client";
import { useState, useEffect, useRef } from "react";
import { User, LogOut, FileText, Star, Video, Megaphone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const user = {
    name: "Eastan01",
    email: "Eastan@gmail.com",
    avatar:
      "https://img.freepik.com/premium-vector/man-profile_1083548-15963.jpg?semt=ais_hybrid&w=740&q=80",
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center border border-[#ff9a3c] bg-zinc-950 text-[#ff9a3c] p-2 rounded-full  hover:bg-[#ff9a3c]/10 transition"
      >
        <User className="h-5 w-5" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-[#0f0f0f] text-white rounded-2xl shadow-xl border border-white/10 p-4 z-50">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
            <Image
              src={user.avatar}
              alt="User Avatar"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>

          {/* Menu Options */}
          <div className=" text-sm">
            <button
              className="flex items-center gap-3 w-full hover:bg-white/5 rounded-lg px-3 py-2 transition"
              onClick={() => {
                router.push(`/userProfile`);
                setIsOpen(false);
              }}
            >
              <User className="h-4 w-4 text-[#ff9a3c]" />
              My Profile
            </button>
            <button
              className="flex items-center gap-3 w-full hover:bg-white/5 rounded-lg px-3 py-2 transition"
              onClick={() => {
                router.push(`/userProfile/posts`);
                setIsOpen(false);
              }}
            >
              <Star className="h-4 w-4 text-[#ff9a3c]" />
              Reviews
            </button>
            <button
              className="flex items-center gap-3 w-full hover:bg-white/5 rounded-lg px-3 py-2 transition"
              onClick={() => {
                router.push(`/userProfile/articles`);
                setIsOpen(false);
              }}
            >
              <Video className="h-4 w-4 text-[#ff9a3c]" />
              Videos
            </button>
            <button
              className="flex items-center gap-3 w-full hover:bg-white/5 rounded-lg px-3 py-2 transition"
              onClick={() => {
                router.push(`/userProfile/ads`);
                setIsOpen(false);
              }}
            >
              <Megaphone className="h-4 w-4 text-[#ff9a3c]" />
              Classified Ads
            </button>
          </div>

          {/* Logout */}
          <div className="border-t border-white/10 mt-4 pt-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full text-red-400 hover:bg-red-400/10 rounded-lg px-3 py-2 transition"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
