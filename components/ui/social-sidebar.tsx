"use client";

import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialSidebar = () => {
  const socialLinks = {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    linkedin: "https://linkedin.com/company/yourcompany",
    youtube: "https://youtube.com/@yourchannel",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const socialData = [
    { icon: FaFacebookF,  url: socialLinks.facebook,  label: "Facebook"  },
    { icon: FaInstagram,  url: socialLinks.instagram, label: "Instagram" },
    { icon: FaTwitter,    url: socialLinks.twitter,   label: "Twitter"   },
    { icon: FaYoutube,    url: socialLinks.youtube,   label: "YouTube"   },
    { icon: FaLinkedinIn, url: socialLinks.linkedin,  label: "LinkedIn"  },
  ];

  return (
    <>
      <div className="social-sidebar hidden lg:flex flex-col items-center gap-0 fixed right-0 top-1/2 -translate-y-1/2 z-50">

        {/* Top amber line */}
        <div
          className="w-px bg-amber-500 mb-4 transition-all duration-700"
          style={{ height: isVisible ? '40px' : '0px' }}
        />

        {/* Icons */}
        <div className="flex flex-col gap-2">
          {socialData.map((social, index) => (
            <div
              key={index}
              className="social-item relative group"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon size={13} />
              </a>

              {/* Tooltip */}
              <div className="social-tooltip">
                <div className="tooltip-inner">{social.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line + label */}
        <div
          className="w-px bg-zinc-200 mt-4 mb-3 transition-all duration-700"
          style={{ height: isVisible ? '36px' : '0px', transitionDelay: '0.6s' }}
        />

        <span
          className="vertical-label transition-all duration-500"
          style={{ opacity: isVisible ? 1 : 0, transitionDelay: '0.8s' }}
        >
          Follow Us
        </span>
      </div>
    </>
  );
};

export default SocialSidebar;