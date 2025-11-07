"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AgencyRegister() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-black text-white flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-black rounded-xl">
        {/* Header */}
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-1">
          Escort Agency Signup
        </h2>
        <p className="text-center text-sm text-neutral-400 mb-8">
          Create your Agency Profile to promote your escorts and services
        </p>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium text-base sm:text-lg">
                Account Info
              </h3>
              <p className="text-sm text-neutral-400">Step 1 of 5</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "Agency Name",
                  type: "text",
                  placeholder: "This name will be public.",
                },
                {
                  label: "Email Address",
                  type: "email",
                  placeholder: "example@email.com",
                },
                {
                  label: "Password",
                  type: "password",
                  placeholder: "Password must be 8 characters",
                },
                {
                  label: "Confirm Password",
                  type: "password",
                  placeholder: "Retype Password",
                },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-1 text-sm">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02] transition-transform"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium text-base sm:text-lg">
                Agency Details
              </h3>
              <p className="text-sm text-neutral-400">Step 2 of 5</p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Agency Title"
                className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
              />
              <input
                type="text"
                placeholder="www.example.com"
                className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a] transition-all"
              />
              <div className="flex gap-2">
                <select className="bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex-1 bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Detailed information of your agency."
                className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a]"
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

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Location</h3>
              <p className="text-sm text-neutral-400">Step 3 of 5</p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <select className="w-full sm:w-1/2 bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]">
                  <option>Select Country</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full sm:w-1/2 bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                />
              </div>
              {[
                "e.g : 21B Baker Street",
                "e.g : 10001",
                "e.g : Paris, Dubai, Barcelona",
              ].map((ph, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={ph}
                  className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm focus:border-[#d7a36a] focus:ring-1 focus:ring-[#d7a36a]"
                />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a]"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02]"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Media Uploads</h3>
              <p className="text-sm text-neutral-400">Step 4 of 5</p>
            </div>

            <div className="space-y-5">
              {["Business Logo", "Business Header Image"].map((label) => (
                <div key={label}>
                  <p className="text-sm mb-2">{label}</p>
                  <div className="border-2 border-dashed border-[#d7a36a] rounded-lg flex items-center justify-center h-28 text-sm text-neutral-400 hover:bg-[#d7a36a]/5 transition-all">
                    Drop your images
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a]"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:scale-[1.02]"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <>
            <div className="text-center mb-6">
              <h3 className="text-[#d7a36a] font-medium">Review & Submit</h3>
              <p className="text-sm text-neutral-400">Step 5 of 5</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-lg mb-2 font-medium">
                Final Review & Submission
              </p>
              <p className="text-sm text-neutral-400 mb-4">
                You are ready to submit your profile for review.
              </p>

              <div className="border border-[#d7a36a] rounded-md p-3 text-sm">
                <p className="text-[#d7a36a] font-medium mb-1">
                  Admin Approval Required
                </p>
                <p className="text-neutral-400">
                  Your profile will be carefully reviewed before going live on
                  the platform. This process usually takes 24–48 hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 text-sm">
              <input
                type="checkbox"
                className="accent-[#d7a36a] w-4 h-4 cursor-pointer"
              />
              <label>
                I agree to the{" "}
                <span className="text-[#d7a36a] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#d7a36a] cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="border border-neutral-700 px-6 py-2 rounded-md flex items-center gap-1 text-xs hover:border-[#d7a36a]"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button className="bg-[#d7a36a] text-black font-medium px-6 py-2 rounded-md flex items-center gap-2 text-xs hover:scale-[1.02] transition-transform">
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
