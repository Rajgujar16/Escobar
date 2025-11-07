"use client";
import { ChevronLeft, ChevronRight, Search, Upload } from "lucide-react";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { IoDocument } from "react-icons/io5";
import Services from "@/components/Services/Services";

export default function IndependentRegister() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className=" bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-2 bg-black rounded-xl">
        {/* Header */}
        <h2 className="text-center text-lg font-semibold mb-1">
          Independent Escort Signup
        </h2>
        <p className="text-center text-sm text-neutral-400 border-b border-zinc-800 pb-4 mb-2">
          Create your Personal Profile to promote your service
        </p>

        {/* Step Content */}
        {step === 1 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Account Info</h3>
              <p className="text-sm text-neutral-400">Step 1 of 7</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Username</label>
                <input
                  type="text"
                  placeholder="This name will be public."
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="Password must be 8 characters"
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Retype Password"
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Personal Details</h3>
              <p className="text-sm text-neutral-400">Step 2 of 7</p>
            </div>

            <div className="space-y-4">
              {/* Name + Age */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Real name"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Age (18+)</label>
                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              </div>

              {/* Nationality + Gender */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Nationality</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                  >
                    <option>Select Nationality</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Gender</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                  >
                    <option>Select Gender</option>
                  </select>
                </div>
              </div>

              {/* Sexuality + Ethnicity */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Sexuality</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                  >
                    <option>Select Sexuality</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Ethnicity</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                  >
                    <option>Select Ethnicity</option>
                  </select>
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="block mb-1 text-sm">Languages</label>
                <input
                  type="text"
                  placeholder="e.g : English, Spanish"
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 text-sm">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    className="w-24 bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02] transition-transform"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Appearance</h3>
              <p className="text-sm text-neutral-400">Step 3 of 7</p>
            </div>

            <div className="space-y-4">
              {/* Eye Color + Hair Color */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Eye Color</label>
                  <input
                    type="text"
                    placeholder="e.g : Black"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Hair Color</label>
                  <input
                    type="text"
                    placeholder="e.g : Black"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              </div>

              {/* Height + Body Type */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Height</label>
                  <input
                    type="text"
                    placeholder="e.g : 168cm"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Body Type</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm 
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  >
                    <option>Curvy</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02] transition-transform"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Services & About</h3>
              <p className="text-sm text-neutral-400">Step 4 of 7</p>
            </div>

            <div className="space-y-4">
              {/* About Me */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1">
                  About Me
                </label>
                <textarea
                  placeholder="About me / profile Introduction (Min 50 words)"
                  className="w-full bg-transparent border border-neutral-700 rounded-md p-3 text-sm placeholder-neutral-500 focus:border-[#d7a36a] outline-none resize-none h-24"
                ></textarea>
              </div>

              {/* Services Offered */}
              <Services />

              {/* Rates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">
                    Rates
                  </label>
                  <input
                    type="text"
                    placeholder="Incall (e.g., $300/hr)"
                    className="w-full bg-transparent border border-neutral-700 rounded-md p-3 text-sm placeholder-neutral-500 focus:border-[#d7a36a] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-1 invisible">
                    Rates
                  </label>
                  <input
                    type="text"
                    placeholder="Outcall (e.g., $300/hr)"
                    className="w-full bg-transparent border border-neutral-700 rounded-md p-3 text-sm placeholder-neutral-500 focus:border-[#d7a36a] outline-none"
                  />
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1">
                  Availability
                </label>
                <input
                  type="text"
                  placeholder="e.g : Mon-Fri 10am–10pm"
                  className="w-full bg-transparent border border-neutral-700 rounded-md p-3 text-sm placeholder-neutral-500 focus:border-[#d7a36a] outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02] transition-transform"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Location</h3>
              <p className="text-sm text-neutral-400">Step 5 of 7</p>
            </div>

            <div className="space-y-4">
              {/* Country + City */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Country</label>
                  <select
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  >
                    <option>Select Country</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">City</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              </div>

              {/* Address + Postal Code */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="e.g : 21B Baker Street"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Postal Code</label>
                  <input
                    type="text"
                    placeholder="e.g : 10001"
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              </div>

              {/* Tour Locations */}
              <div>
                <label className="block mb-1 text-sm">Tour Locations</label>
                <input
                  type="text"
                  placeholder="e.g : Paris, Dubai, Barcelona"
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm
          focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs
        hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black text-xs font-medium px-6 py-2 rounded-md flex items-center gap-1
        hover:scale-[1.02] transition-transform"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Media Uploads</h3>
              <p className="text-sm text-neutral-400">Step 6 of 7</p>
            </div>

            <div className="space-y-5">
              {/* Photos Upload */}
              <div>
                <p className="text-sm mb-2">Photos Upload</p>
                <div className="border-2 border-dashed border-[#d7a36a]/70 rounded-lg flex flex-col items-center justify-center h-28 text-sm text-neutral-400 cursor-pointer hover:border-[#d7a36a] transition-all">
                  <span className="text-[#d7a36a] text-lg mb-1">
                    <Upload />
                  </span>
                  Drop your images
                </div>
              </div>

              {/* Videos Upload */}
              <div>
                <p className="text-sm mb-2">Videos Upload</p>
                <div className="border-2 border-dashed border-[#d7a36a]/70 rounded-lg flex flex-col items-center justify-center h-28 text-sm text-neutral-400 cursor-pointer hover:border-[#d7a36a] transition-all">
                  <span className="text-[#d7a36a] text-lg mb-1">
                    <Upload />
                  </span>
                  Drop your Videos
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs
        hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs
        hover:scale-[1.02] transition-transform"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Review & Submit</h3>
              <p className="text-sm text-neutral-400">Step 7 of 7</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-[#d7a36a] text-3xl mb-3 flex items-center justify-center">
                <IoDocument />
              </div>
              <p className="text-lg font-medium mb-1">
                Final Review & Submission
              </p>
              <p className="text-sm text-neutral-400 mb-4">
                You are ready to submit your profile for review.
              </p>

              <div className="border border-[#d7a36a] rounded-md p-3 text-sm bg-black/20">
                <p className="text-[#d7a36a] font-medium mb-1">
                  Admin Approval Required
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Your profile will be carefully reviewed before going live on
                  the platform. This process usually takes 24–48 hours.
                </p>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2 mb-6 text-sm leading-snug">
              <input
                type="checkbox"
                className="accent-[#d7a36a] mt-[2px] cursor-pointer"
              />
              <label className="text-neutral-300">
                I agree to the{" "}
                <span className="text-[#d7a36a] cursor-pointer hover:underline">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#d7a36a] cursor-pointer hover:underline">
                  Privacy Policy
                </span>
                .<br />
                <span className="text-neutral-500">
                  By continuing, you confirm that you are 18+ and agree to our
                  policies.
                </span>
              </label>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a] transition-all"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-2 text-xs hover:scale-[1.02] transition-transform">
                <span>Submit</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
