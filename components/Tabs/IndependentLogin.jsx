"use client";

import { useState } from "react";

export default function IndependentLogin({ t }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-sm mx-auto space-y-4 sm:space-y-5 p-4 sm:p-6 bg-transparent"
    >
      <h3 className="text-white text-lg sm:text-xl font-light text-center mb-1 sm:mb-2">
        {t("login.independentLogin")}
      </h3>

      {/* Email */}
      <div>
        <label className="block text-gray-300 text-sm mb-1 sm:mb-2">
          {t("login.emailAddress")}
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-md sm:rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#ff9a3c]/50 focus:ring-2 focus:ring-[#ff9a3c]/20 transition-all"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-300 text-sm mb-1 sm:mb-2">
          {t("login.password")}
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full bg-white/5 border border-white/10 rounded-md sm:rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#ff9a3c]/50 focus:ring-2 focus:ring-[#ff9a3c]/20 transition-all"
        />
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 bg-white/5 border border-white/20 rounded text-[#ff9a3c] focus:ring-[#ff9a3c]/50 focus:ring-offset-0 cursor-pointer"
          />
          <span className="ml-2 text-gray-400 text-xs sm:text-sm">
            {t("login.rememberMe")}
          </span>
        </label>

        <a
          href="#"
          className="text-[#ff9a3c] hover:text-[#ffb366] text-xs sm:text-sm transition-colors"
        >
          {t("login.forgotPassword")}
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#ff9a3c] to-[#ffb366] hover:from-[#ffb366] hover:to-[#ff9a3c] text-black font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all shadow-lg shadow-[#ff9a3c]/30 hover:shadow-[#ff9a3c]/50 hover:scale-[1.02] active:scale-[0.98]"
      >
        {t("login.loginButton")}
      </button>
    </form>
  );
}
