"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Keeps the cinematic intro on screen for 2.2 seconds before starting fade
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    // Completely removes it from the DOM when transition ends
    const removeTimeout = setTimeout(() => {
      setShouldRender(false);
    }, 2700);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-50 flex items-center justify-center bg-[#1f0006] transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background radial luxury glow to add cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3f000d]/30 to-transparent pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-[#d4a24c] opacity-[0.08] blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Full-Screen Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 text-center select-none animate-fade-in">
        
        {/* Your Authentic Brand Text & Identity Layout */}
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
          
          <div className="tracking-[12px] uppercase text-[#d4a24c]/40 text-xs sm:text-sm mb-2 font-medium">
            Welcome To The House Of
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-[8px] uppercase transition-all duration-700">
            Arunaa
            <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#f0d8a8] via-[#d4a24c] to-[#f0d8a8]">
              Aalayam
            </span>
          </h1>

          <div className="w-32 h-[1px] bg-[#d4a24c]/30 my-4" />

          <p className="text-lg sm:text-2xl lg:text-3xl font-serif italic text-white/70 tracking-wide">
            "Grace In Every Fold"
          </p>
          
        </div>

        {/* Bottom subtle luxury indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 tracking-[4px] text-xs uppercase text-white/30 font-light">
          Handloom Heritage
        </div>

      </div>
    </div>
  );
}