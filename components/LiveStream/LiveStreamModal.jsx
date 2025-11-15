"use client";
import { useState } from "react";
import { FaEye, FaHeart, FaGift, FaUser } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import { useModal } from "@/app/ModalContext";

export default function LiveStreamModal({ isOpen, onClose }) {
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const { openGift } = useModal();

  const [messages, setMessages] = useState([
    { id: 1, user: "User123", text: "This is amazing!", color: "#FF6B9D" },
    {
      id: 2,
      user: "Fan_Ac",
      text: "You look stunning tonight.",
      color: "#4ECDC4",
    },
    {
      id: 3,
      user: "Fan_Account",
      text: "Love this content!",
      color: "#FFE66D",
    },
    { id: 4, user: "Viewer_99", text: "Keep it up! 🔥", color: "#95E1D3" },
    { id: 5, user: "CoolUser", text: "Amazing stream!", color: "#F38181" },
    { id: 6, user: "LiveFan", text: "Best live ever!", color: "#AA96DA" },
    {
      id: 7,
      user: "StreamLover",
      text: "Can't stop watching! 💯",
      color: "#FCBAD3",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: "You",
        text: message,
        color: "#FF6B9D",
      };
      setMessages([...messages, newMsg]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="h-[100vh] w-screen flex flex-col relative overflow-hidden sm:p-2 p-1">
        <div className="flex-1 flex flex-col relative overflow-hidden rounded-lg border border-zinc-500 shadow-xl bg-black">
          {/* Video Section */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              LIVE
            </div>
            <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full shadow-lg">
              <FaEye className="w-3.5 h-3.5" />
              <span className="font-semibold">12.5k</span>
            </div>
          </div>

          {/* Top Right Close */}
          <button
            className="absolute top-4 right-4 text-white bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition z-10 shadow-lg"
            onClick={onClose}
          >
            <IoClose className="sm:w-6 sm:h-6 w-3 h-3" />
          </button>

          {/* Floating Chat Messages (same for all screen sizes) */}
          <div className="absolute bottom-16 left-0 right-0 px-3 pointer-events-none sm:px-14 ">
            <div className="max-h-[130px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent pointer-events-auto">
              <div className="space-y-2">
                {messages.slice(-6).map((msg) => (
                  <div key={msg.id} className="  rounded-lg  animate-slideIn">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-semibold text-xs"
                          style={{ color: msg.color }}
                        >
                          {msg.user}
                        </span>
                        <p className="text-white text-sm break-words">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 sm:px-14">
            <div className="flex items-end justify-between gap-3">
              {/* Input Field with Avatar */}
              <div className="flex items-center gap-3 flex-1">
                {/* Avatar */}
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#d4a574]/40"
                />

                {/* Message Input */}
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Send Message"
                  className="w-full bg-transparent border border-[#d4a574]/40 rounded-md px-4 py-2 text-sm text-[#d4a574] placeholder-[#d4a574]/60 outline-none focus:border-[#d4a574] transition"
                />
              </div>

              {/* Vertical Icons (Right side) */}
              <div className="flex flex-col items-center gap-3">
                {/* Heart */}
                <button className="text-[#d4a574] hover:scale-110 transition">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Gift */}
                <button
                  className="text-[#d4a574] hover:scale-110 transition"
                  onClick={openGift}
                >
                  <FaGift className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Send */}
                <button
                  onClick={handleSendMessage}
                  className="bg-[#d4a574] text-black p-2 sm:p-2.5 rounded-full hover:scale-110 transition shadow-md"
                >
                  <IoSend className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
