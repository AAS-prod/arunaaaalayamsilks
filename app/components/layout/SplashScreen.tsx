"use client";

import { useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);

  const enterSite = () => {
    setHidden(true);
  };

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#160205] flex flex-col items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b0a10] via-[#160205] to-black" />

        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#d4a24c]/10 rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Logo Section */}
      <div className="relative z-10 flex flex-col items-center">

        <div className="relative w-[85vw] max-w-[1000px] h-[60vh]">
          
          <Image
            src="/logo.png"
            alt="Arunaa Aalayam"
            fill
            priority
            className="object-contain"
          />

          {/* Shimmer */}
          <div
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute top-0 left-[-200%] w-[50%] h-full rotate-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(212,162,76,0.45), transparent)",
                animation: "shimmer 3s linear infinite",
              }}
            />
          </div>
        </div>

        <h1 className="mt-6 text-[#d4a24c] text-3xl md:text-5xl font-serif tracking-[8px] text-center">
          ARUNAA AALAYAM
        </h1>

        <p className="mt-3 text-white/60 text-xs md:text-sm uppercase tracking-[6px]">
          Luxury Silk Sarees
        </p>

        <button
          onClick={enterSite}
          className="mt-12 px-10 py-4 bg-[#d4a24c] text-black rounded-full font-semibold uppercase tracking-[3px] hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(212,162,76,0.5)]"
        >
          Enter Boutique
        </button>
      </div>

      <div className="absolute bottom-8 text-white/30 text-xs uppercase tracking-[5px]">
        Grace In Every Fold
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-250%) rotate(12deg);
          }
          100% {
            transform: translateX(450%) rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
}