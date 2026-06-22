import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#110103] border-t border-[#d4a24c]/10 pt-16 pb-8 px-6 md:px-12 z-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4a24c]/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#d4a24c]/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-3 mb-6 no-underline group cursor-pointer">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4a24c]/20">
              <Image src="/logo.png" alt="Arunaa Aalayam" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-[#d4a24c] text-xl font-serif font-semibold">Arunaa Aalayam</h2>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Curators of pure heritage handloom silks. Bypassing middlemen to bring genuine, Silk Mark certified masterpieces directly from the looms to your doorstep.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 md:col-start-6 text-center md:text-left">
          <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-6">Explore</h3>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link href="/collections" className="hover:text-[#d4a24c] transition-colors">All Collections</Link></li>
            <li><Link href="/about" className="hover:text-[#d4a24c] transition-colors">Our Heritage</Link></li>
            <li><Link href="/reviews" className="hover:text-[#d4a24c] transition-colors">Client Diaries</Link></li>
            <li><Link href="/contact" className="hover:text-[#d4a24c] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support & Legal Column */}
        <div className="md:col-span-2 text-center md:text-left">
          <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-6">Assistance</h3>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link href="/login" className="hover:text-[#d4a24c] transition-colors">Client Login</Link></li>
            <li><a href="#" className="hover:text-[#d4a24c] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-[#d4a24c] transition-colors">Care Instructions</a></li>
            <li><a href="#" className="hover:text-[#d4a24c] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact/Address Column */}
        <div className="md:col-span-3 text-center md:text-left">
          <h3 className="text-white font-semibold tracking-widest text-xs uppercase mb-6">Headquarters</h3>
          <address className="not-italic text-sm text-white/60 leading-relaxed flex flex-col gap-3">
            <p>Bengaluru, Karnataka<br />India</p>
            <p className="text-[#d4a24c]">support@arunaaaalayam.com</p>
          </address>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium tracking-wide">
        <p>&copy; 2026 Arunaa Aalayam Silks. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#d4a24c] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#d4a24c] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[#d4a24c] transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}