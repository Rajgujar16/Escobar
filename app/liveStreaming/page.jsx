"use client";
import { useState } from "react";
import { FaEye, FaHeart, FaGift, FaUser } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import { useModal } from "@/app/ModalContext";

export default function LiveStreamScreen() {
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

  return (
    <div className="sm:h-screen h-[80vh] w-screen flex flex-col relative overflow-hidden p-4">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden rounded-lg border border-zinc-500 shadow-xl">
        {/* Video Section */}
        <div className="flex-1 relative bg-black">
          {/* Video Player */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none lg:hidden"></div>

          {/* Top Left Overlay */}
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

          {/* Top Right Close Button */}
          <button className="absolute top-4 right-4 text-white bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition z-10 shadow-lg">
            <IoClose className="w-6 h-6" />
          </button>

          {/* Desktop Chat Overlay (Right Side) */}
          <div className="hidden lg:flex absolute top-0 right-0 h-full w-[380px] flex-col pointer-events-none">
            {/* Messages Display Area - Desktop */}
            <div className="flex-1 overflow-hidden p-4 pb-0">
              <div className="h-full overflow-y-auto pointer-events-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent pr-2">
                <div className="space-y-2">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-black/40 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg animate-slideIn"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <FaUser className="w-3 h-3 text-white" />
                        </div>
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
          </div>

          {/* Mobile Messages - Bottom Overlay */}
          <div className="lg:hidden absolute bottom-12 left-0 right-0 px-3 pointer-events-none">
            <div className="max-h-[110px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent pointer-events-auto">
              <div className="space-y-1.5">
                {messages.slice(-4).map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-black/70 backdrop-blur-md rounded-lg px-2.5 py-1.5 shadow-lg animate-slideIn"
                  >
                    <div className="flex items-start gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <FaUser className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-semibold text-[10px]"
                          style={{ color: msg.color }}
                        >
                          {msg.user}
                        </span>
                        <p className="text-white text-xs break-words leading-tight">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Input Section - Bottom */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-2 ">
            <div className="flex items-center gap-1.5">
              {/* Input Field */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Send message..."
                  className="w-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full px-3 py-2 text-xs text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Action Icons */}
              <button className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-2 rounded-full hover:scale-110 transition shadow-lg">
                <FaHeart className="w-3.5 h-3.5" />
              </button>

              <button
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-full hover:scale-110 transition shadow-lg"
                onClick={openGift}
              >
                <FaGift className="w-3.5 h-3.5" />
              </button>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-2 rounded-full hover:scale-110 transition shadow-lg"
              >
                <IoSend className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Desktop Input Section - Bottom Right */}
          <div className="hidden lg:flex absolute bottom-0 right-0 w-[380px] bg-gradient-to-t from-black via-black/95 to-transparent p-4 pt-8">
            <div className="w-full flex items-center gap-2">
              {/* Input Field */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Send message..."
                  className="w-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-full px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Action Icons */}
              <button className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-3 rounded-full hover:scale-110 transition shadow-lg">
                <FaHeart className="w-5 h-5" />
              </button>

              <button
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition shadow-lg"
                onClick={openGift}
              >
                <FaGift className="w-5 h-5" />
              </button>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-3 rounded-full hover:scale-110 transition shadow-lg"
              >
                <IoSend className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #52525b;
          border-radius: 2px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #71717a;
        }
      `}</style>
    </div>
  );
}
