"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";

import IndependentLogin from "../Tabs/IndependentLogin";
import AgencyLogin from "../Tabs/AgencyLogin";
import MemberLogin from "../Tabs/MemberLogin";
import AffiliateLogin from "../Tabs/AffiliateLogin";

import IndependentRegister from "../Register/IndependentRegister";
import AgencyRegister from "../Register/AgencyRegister";
import MemberRegister from "../Register/MemberRegister";
import AffiliateRegister from "../Register/AffiliateRegister";

export default function LoginModal({ isOpen, onClose, t }) {
  const [activeTab, setActiveTab] = useState("member");
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const tabs = [
    { id: "independent", label: t("login.independent") },
    { id: "agency", label: t("login.agency") },
    { id: "member", label: t("login.member") },
    { id: "affiliate", label: t("login.affiliate") },
  ];

  const renderForm = () => {
    if (isLogin) {
      switch (activeTab) {
        case "independent":
          return <IndependentLogin t={t} />;
        case "agency":
          return <AgencyLogin t={t} />;
        case "affiliate":
          return <AffiliateLogin t={t} />;
        default:
          return <MemberLogin t={t} />;
      }
    } else {
      switch (activeTab) {
        case "independent":
          return <IndependentRegister t={t} />;
        case "agency":
          return <AgencyRegister t={t} />;
        case "affiliate":
          return <AffiliateRegister t={t} />;
        default:
          return <MemberRegister t={t} />;
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
        <div
          className="bg-black rounded-2xl shadow-xl border border-white/10 
      w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[500px] 
      max-h-[90vh] flex flex-col overflow-hidden transition-all duration-300"
        >
          {/* Header (Fixed) */}
          <div className="relative p-4 flex-shrink-0 ">
            <div className="flex justify-center">
              <Image
                src={logo}
                alt="modalLogo"
                className=" w-auto object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff9a3c] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tabs (Fixed) */}
          <div className="px-3 flex-shrink-0 b bg-black z-10">
            <div
              className="flex justify-start items-center gap-2 sm:gap-3 p-2 sm:p-3 
          border border-[#ff9a3c]/60 rounded-full bg-black/30 backdrop-blur-sm 
          overflow-x-auto scrollbar-none whitespace-nowrap"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#ff9a3c] text-black shadow-lg shadow-[#ff9a3c]/40 scale-105"
                      : "bg-transparent text-gray-400 hover:text-white hover:bg-[#ff9a3c]/10 border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Form Section */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 hide-scrollbar">
            {renderForm()}
          </div>

          {/* Toggle login/register (Fixed bottom) */}
          <div className="text-center text-gray-400 text-xs sm:text-sm p-4 sm:pb-6 border-t border-[#ff913c] flex-shrink-0 bg-black">
            {isLogin ? (
              <>
                {t("login.noAccount")}{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#ff9a3c] hover:text-[#ffb366] transition-colors"
                >
                  {t("login.signUp")}
                </button>
              </>
            ) : (
              <>
                {t("login.haveAccount")}{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#ff9a3c] hover:text-[#ffb366] transition-colors"
                >
                  {t("login.loginButton")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
