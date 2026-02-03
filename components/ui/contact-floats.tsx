"use client";

import WhatsAppFloat from "./whatsapp-float";
import CallFloat from "./call-float";

const ContactFloats = () => {
  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col gap-3 items-start">



      {/* WhatsApp Button - Top */}
      
      
      {/* Call Button - Bottom */}
      <CallFloat />

      <WhatsAppFloat />
    </div>
  );
};

export default ContactFloats;