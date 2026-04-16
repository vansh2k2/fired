"use client";

import { motion } from "framer-motion";

interface MarqueeStripProps {
  text?: string;
  className?: string;
}

export default function MarqueeStrip({ 
  text = "we don't charge any amount for the sample order part whatsoever",
  className = ""
}: MarqueeStripProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-[#4a2c1d] py-3 border-none shadow-sm ${className}`}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
        className="inline-block"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white mx-4 leading-none">
          {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
        </span>
      </motion.div>
    </div>
  );
}
