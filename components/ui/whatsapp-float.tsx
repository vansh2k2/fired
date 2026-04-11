"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "917989923932";
  const message = "Hello! I would like to know more about your interior design services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <div className={`whatsapp-float-container ${isVisible ? "visible" : ""}`}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-[#25D366] shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Ring Effects */}
          <div className="whatsapp-ring"></div>
          <div className="whatsapp-ring" style={{ animationDelay: "0.5s" }}></div>
          <div className="whatsapp-ring" style={{ animationDelay: "1s" }}></div>

          {/* WhatsApp Icon */}
          <FaWhatsapp className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />

          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-[10px] font-bold">1</span>
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping"></div>
          </div>

          {/* Hover Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
              WhatsApp Chat
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

export default WhatsAppFloat;