"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, X, MessageCircle } from "lucide-react";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="support-widget">
      {isOpen && (
        <section className="support-popup">
          <div className="support-header">
            <div className="support-avatar">MD</div>

            <div className="support-heading">
              <strong>MD Home Decore</strong>
              <span>Customer Support</span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close support"
            >
              <X size={20} />
            </button>
          </div>

          <div className="support-body">
            <p className="support-message">
              Hi there! How can we help you design your dream space?
            </p>

            <a
              href="tel:+918191949147"
              className="support-call"
            >
              <Phone size={18} /> Call Support
            </a>

            <a
              href="https://wa.me/918191949147"
              target="_blank"
              rel="noopener noreferrer"
              className="support-whatsapp"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        className="floating-support-gif"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close support" : "Open support"}
        aria-expanded={isOpen}
      >
        <Image
          src="/gifs/call-center.gif"
          alt="Customer Support"
          width={90}
          height={90}
          unoptimized
        />
      </button>
    </div>
  );
}