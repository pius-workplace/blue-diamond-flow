import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_PHONE = "(817) 852-9498";
const WHATSAPP_HREF = `https://wa.me/1${WHATSAPP_PHONE.replace(/\D/g,'')}?text=Hi%20Blue%20Diamond%20Plumbing%2C%20I%20need%20help%20with...`;

const FloatingWhatsAppButton = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed bottom-6 right-6 lg:bottom-8 lg:right-12 z-50 md:flex hidden"
  >
    <Button 
      asChild 
      size="icon" 
      className="w-14 h-14 rounded-full shadow-2xl hover:shadow-green-500/25 bg-green-500 hover:bg-green-600 shadow-lg border-0"
    >
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat">
        <Phone className="h-6 w-6" />
      </a>
    </Button>
  </motion.div>
);

export default FloatingWhatsAppButton;

