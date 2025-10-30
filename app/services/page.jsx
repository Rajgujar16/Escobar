import React from "react";
import { Users, Shield, Globe, Video, Gem, CheckCircle } from "lucide-react";

export default function OurService() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-[#d4a574]" />,
      title: "Premium Escort",
      description:
        "Experience the finest companionship tailored to your comfort and lifestyle. Every encounter is designed with elegance, discretion, and luxury in mind.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#d4a574]" />,
      title: "Trusted Connections",
      description:
        "Our verified and professional escorts ensure safety, trust and confidentiality in every meeting. Quality and discretion you can rely on.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#d4a574]" />,
      title: "Multi-City Agency Access",
      description:
        "Connect with top-rated agencies and escorts across multiple cities. Enjoy the same premium service wherever you go.",
    },
    {
      icon: <Video className="w-8 h-8 text-[#d4a574]" />,
      title: "Personal Live Session",
      description:
        "Book live interactive sessions for a real-time, personalized connection — perfect for private conversations, introductions, or online experiences.",
    },
    {
      icon: <Gem className="w-8 h-8 text-[#d4a574]" />,
      title: "VIP Experiences",
      description:
        "Indulge in exclusive VIP packages crafted for clients who desire the highest level of privacy, attention, and unforgettable moments.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#d4a574]" />,
      title: "Verified Profiles",
      description:
        "Every escort and agency is thoroughly verified to ensure authenticity, professionalism, and a trusted, premium experience for our clients.",
    },
  ];

  return (
    <div className="  text-white sm:py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6">
            Our Service
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            At EscortClub, every service is designed to deliver luxury, trust,
            and authenticity. From verified profiles to live sessions and VIP
            experiences, we bring you the most refined companionship, tailored
            just for you.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 hover:border-[#d4a574] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a2a2a] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#d4a574]/10 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
