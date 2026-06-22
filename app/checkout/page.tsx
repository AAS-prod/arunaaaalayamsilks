'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mocking the total from our cart earlier
  const cartSubtotal = 43400; 
  const shipping = 0;
  const orderTotal = cartSubtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen text-white pt-40 pb-24 px-6 md:px-12 flex items-center justify-center bg-[#160205] bg-[radial-gradient(circle_at_center,rgba(139,22,42,0.25)_0%,transparent_70%)] relative overflow-hidden">
        <div className="relative z-10 max-w-lg w-full text-center rounded-[28px] p-10 border border-[#d4a24c]/20 bg-white/[0.02]" style={{ backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)' }}>
          <div className="w-20 h-20 mx-auto bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#d4a24c] mb-3">Order Confirmed</h1>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Thank you for choosing Arunaa Aalayam. Your luxury silk masterpieces are being carefully packed. Your order confirmation and tracking details have been sent to your email.
          </p>
          <Link href="/collections" className="inline-block bg-[#d4a24c] text-black font-semibold px-8 py-3.5 rounded-xl uppercase text-xs tracking-wider hover:scale-105 transition duration-300">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main 
      className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: '#160205',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(139, 22, 42, 0.25) 0%, transparent 60%),
          radial-gradient(circle at 10% 20%, rgba(59, 10, 18, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(90, 12, 26, 0.35) 0%, transparent 60%)
        `
      }}
    >
      {/* Texture Layer */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Ambient Depth Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide mb-2">Secure Checkout</h1>
          <p className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase">Encrypted & Certified</p>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Shipping & Payment Info */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Shipping Card */}
            <div 
              className="rounded-[28px] p-6 md:p-8 border border-[#d4a24c]/10 bg-white/[0.01]"
              style={{ backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)' }}
            >
              <h2 className="text-xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#d4a24c]/20 text-[#d4a24c] flex items-center justify-center text-xs">1</span>
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="text" placeholder="Last Name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="email" placeholder="Email Address" required className="w-full sm:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="text" placeholder="Street Address" required className="w-full sm:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="text" placeholder="City" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="text" placeholder="Postal / Zip Code" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
              </div>
            </div>

            {/* Payment Card */}
            <div 
              className="rounded-[28px] p-6 md:p-8 border border-[#d4a24c]/10 bg-white/[0.01]"
              style={{ backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)' }}
            >
              <h2 className="text-xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#d4a24c]/20 text-[#d4a24c] flex items-center justify-center text-xs">2</span>
                Payment Method
              </h2>
              <div className="flex flex-col gap-5">
                <input type="text" placeholder="Cardholder Name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                <input type="text" placeholder="Card Number (0000 0000 0000 0000)" required maxLength={19} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition font-mono" />
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="MM/YY" required maxLength={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                  <input type="password" placeholder="CVC" required maxLength={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] text-sm transition" />
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Order Summary */}
          <div 
            className="lg:col-span-5 rounded-[28px] p-6 md:p-8 border border-[#d4a24c]/10 bg-white/[0.01] sticky top-32"
            style={{
              backdropFilter: 'blur(35px)',
              WebkitBackdropFilter: 'blur(35px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
            }}
          >
            <h3 className="text-lg font-serif font-semibold text-white mb-6 tracking-wide">
              Final Summary
            </h3>

            {/* Mock Items list briefly mapped */}
            <div className="flex flex-col gap-4 mb-6 border-b border-white/10 pb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Bridal Kanjeevaram (x1)</span>
                <span className="text-white">₹24,500</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Royal Banarasi Silk (x1)</span>
                <span className="text-white">₹18,900</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/70 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-medium">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Insured Global Shipping</span>
                <span className="text-green-400 text-[10px] font-semibold tracking-wider uppercase bg-green-500/10 px-2 py-0.5 rounded-md border border-green-500/20">Complimentary</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-6 mb-8">
              <span className="text-base font-medium text-white/90">Total to Pay</span>
              <span className="text-2xl font-bold text-[#d4a24c]">₹{orderTotal.toLocaleString('en-IN')}</span>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className={`w-full text-center bg-[#d4a24c] text-black font-semibold py-4 rounded-xl transition duration-300 text-xs uppercase tracking-widest shadow-lg shadow-[#d4a24c]/10 flex justify-center items-center h-14 ${isProcessing ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02]'}`}
            >
              {isProcessing ? (
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Place Order Securely'
              )}
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-white/30 text-[10px] uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              256-Bit SSL Encryption
            </div>
          </div>

        </form>
      </div>
    </main>
  );
}