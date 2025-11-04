import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AgencyContacts() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-4 gap-2">
        {/* Contact Information */}
        <div className="backdrop-blur-sm rounded-lg lg:p-4 md:p-4 p-2  border border-zinc-500">
          <h3 className="lg:text-lg text-md font-semibold mb-4">
            Contact Information
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 flex items-center justify-center">
                <FaPhone className="text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white text-sm">+1 51814 85218</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10  flex items-center justify-center">
                <FaEnvelope className="text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <p className="text-white text-sm break-all">
                  example@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className=" backdrop-blur-sm rounded-lg g:p-4 md:p-4 p-2  border border-zinc-500">
          <h3 className="lg:text-lg text-md font-semibold mb-4">
            Location Details
          </h3>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <FaMapMarkerAlt className="text-yellow-600" />
            </div>
            <div className="text-gray-300 text-sm">
              <p>67 Boulevard Saint-Germain</p>
              <p>75005 Paris</p>
              <p>France</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
