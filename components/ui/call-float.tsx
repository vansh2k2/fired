"use client";

import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const CallFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "917989923932"; // Your phone number here

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <>
      <div className={`call-float-container ${isVisible ? "visible" : ""}`}>
        <a
          href={`tel:${phoneNumber}`}
          className="call-button relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
          aria-label="Call us"
        >
          {/* Ring Waves */}
          <div className="ring-wave"></div>
          <div className="ring-wave" style={{ animationDelay: "0.5s" }}></div>
          <div className="ring-wave" style={{ animationDelay: "1s" }}></div>

          {/* Icon */}
          <Phone className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform" />

          {/* Hover Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
              Call Now
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-zinc-900"></div>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>
    </>
  );
};

export default CallFloat;