"use client";
import { useState } from "react";

export default function MemberRegister({ t }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-2 space-y-5 bg-transparent"
    >
      {/* Heading */}
      <h3 className="text-white text-xl font-light text-center">
        Member Signup
      </h3>
      <p className="text-gray-400 text-center text-sm mb-4">
        Create new Member account!
      </p>

      {/* Username */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="This name will be public."
          className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password must be 8 characters"
          className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Retype Password"
          className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start space-x-2 text-sm text-gray-400">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 w-4 h-4 border border-white/20 bg-white/5 rounded text-[#ff9a3c] focus:ring-[#ff9a3c]/50 cursor-pointer"
        />
        <label>
          I agree to the{" "}
          <a href="#" className="text-[#ff9a3c] hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#ff9a3c] hover:underline">
            Privacy Policy
          </a>
          <br />
          <span className="text-xs text-gray-500">
            By continuing, you confirm that you are 18+ and agree to our
            policies.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#e4a176] hover:bg-[#ff9a3c] text-black font-medium py-3 rounded-lg transition-all shadow-lg shadow-[#ff9a3c]/30 hover:shadow-[#ff9a3c]/50 hover:scale-[1.02] active:scale-[0.98]"
      >
        Sign Up
      </button>
    </form>
  );
}
