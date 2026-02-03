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
      <style>{`
        @keyframes whatsappPulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }

        @keyframes whatsappRing {
          0% { 
            transform: scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1.5); 
            opacity: 0; 
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes notificationPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .whatsapp-float-container {
          animation: slideInRight 0.5s ease-out forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }

        .whatsapp-float-container.visible {
          opacity: 1;
        }

        .whatsapp-button {
          animation: whatsappPulse 3s ease-in-out infinite;
        }

        .whatsapp-button:hover {
          animation: whatsappPulse 1s ease-in-out infinite;
          background: linear-gradient(135deg, #128C7E 0%, #25D366 100%) !important;
        }

        .whatsapp-ring {
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: whatsappRing 2s linear infinite;
        }
      `}</style>

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