"use client";

import { useState, useEffect } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn 
} from "react-icons/fa";

const SocialSidebar = () => {
  // Your social media links
  const socialLinks = {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage", 
    twitter: "https://twitter.com/yourpage",
    linkedin: "https://linkedin.com/company/yourcompany",
    youtube: "https://youtube.com/@yourchannel",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const socialData = [
    {
      icon: FaFacebookF,
      url: socialLinks.facebook,
      color: "#1877F2",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      url: socialLinks.instagram,
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      url: socialLinks.twitter,
      color: "#000000",
      label: "Twitter",
    },
    {
      icon: FaYoutube,
      url: socialLinks.youtube,
      color: "#FF0000",
      label: "YouTube",
    },
    {
      icon: FaLinkedinIn,
      url: socialLinks.linkedin,
      color: "#0A66C2",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-50">
      {socialData.map((social, index) => (
        <div
          key={index}
          className="relative group"
          style={{
            animation: `fallIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
            animationDelay: `${index * 0.12 + 0.2}s`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Main Button */}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border-2 transition-all duration-300 hover:scale-110 group-hover:animate-[shake_0.5s_ease-in-out]"
            style={{ borderColor: social.color }}
          >
            <div className="transition-all duration-200 group-hover:animate-[spin_0.6s_ease-in-out]">
              <social.icon size={16} style={{ color: social.color }} />
            </div>
            
            {/* Shine Effect */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.6s_ease-in-out_infinite_0.5s]" />
          </a>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 translate-x-2.5 scale-90 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:animate-[bounce_0.8s_ease-in-out_infinite]">
            <div
              className="px-4 py-2 rounded-lg text-white text-sm font-bold shadow-xl relative"
              style={{ backgroundColor: social.color }}
            >
              {social.label}
              <div
                className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px]"
                style={{ borderLeftColor: social.color }}
              />
            </div>
          </div>

          {/* Glow Effect */}
          <div
            className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-60 group-hover:animate-pulse -z-10"
            style={{ backgroundColor: social.color }}
          />
        </div>
      ))}
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fallIn {
          from {
            transform: translateY(-100px) rotate(-180deg) scale(0.3);
            opacity: 0;
          }
          to {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg) scale(1.1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default SocialSidebar;