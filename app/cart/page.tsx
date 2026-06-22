'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  // Mocking items already in the shopping cart using dynamic React state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'kanjeevaram-pure-01',
      name: 'Bridal Crimson Kanjeevaram Silk',
      category: 'Pure Kanjeevaram',
      price: 24500,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=300&auto=format&fit=crop',
      quantity: 1
    },
    {
      id: 'banarasi-brocade-02',
      name: 'Royal Zari Banarasi Silk',
      category: 'Banarasi Brocade',
      price: 18900,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=300&auto=format&fit=crop',
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Live total summary calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free luxury insured shipping configured
  const total = subtotal + shipping;

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

      {/* Decorative Blur Ambient Depth Blobs */}
      <div className="absolute top-[25%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
            Your Selection
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4 mb-2 tracking-wide">
            Shopping Cart
          </h1>
          <div className="w-12 h-[1px] bg-[#d4a24c]/40 mx-auto"></div>
        </div>

        {cartItems.length === 0 ? (
          <div 
            className="rounded-[28px] p-12 text-center border border-[#d4a24c]/10 bg-white/[0.01]"
            style={{ backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)' }}
          >
            <p className="text-white/40 text-lg mb-6">Your shopping cart is currently empty.</p>
            <Link href="/collections" className="inline-block bg-[#d4a24c] text-black font-semibold px-8 py-3.5 rounded-xl uppercase text-xs tracking-wider hover:scale-105 transition duration-300 shadow-lg shadow-[#d4a24c]/10">
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="rounded-2xl p-4 md:p-6 border border-[#d4a24c]/10 bg-white/[0.01] flex items-center gap-6"
                  style={{ backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)' }}
                >
                  <div className="w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-base md:text-lg font-medium text-white truncate pr-4">
                      {item.name}
                    </h3>
                    <p className="text-[#d4a24c] font-semibold text-sm mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>

                    {/* Mobile Quantity Control (Visible on small screens) */}
                    <div className="flex items-center gap-3 mt-3 sm:hidden">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-95 text-xs">-</button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-95 text-xs">+</button>
                    </div>
                  </div>

                  {/* Desktop Quantity Controls & Delete Box */}
                  <div className="hidden sm:flex items-center gap-4 shrink-0">
                    <div className="flex items-center border border-white/10 rounded-xl bg-black/20 p-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 active:scale-95 font-medium">-</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 active:scale-95 font-medium">+</button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-3 rounded-xl border border-red-500/10 text-red-400 hover:bg-red-500/10 active:scale-95 transition text-xs font-semibold uppercase tracking-wider"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Simple close button for mobile view layout */}
                  <button onClick={() => removeItem(item.id)} className="sm:hidden text-white/30 hover:text-red-400 p-2 text-lg self-start">×</button>
                </div>
              ))}
            </div>

            {/* Right Column: Order Pricing Summary Balance */}
            <div 
              className="lg:col-span-4 rounded-[24px] p-6 md:p-8 border border-[#d4a24c]/10 bg-white/[0.01]"
              style={{
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
              }}
            >
              <h3 className="text-lg font-serif font-semibold text-white mb-6 tracking-wide">
                Order Summary
              </h3>

              <div className="flex flex-col gap-4 text-sm text-white/70 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Insured Courier Delivery</span>
                  <span className="text-green-400 text-xs font-semibold tracking-wider uppercase bg-green-500/10 px-2.5 py-1 rounded-md border border-green-500/20">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-6 mb-8">
                <span className="text-base font-medium text-white/90">Total Balance</span>
                <span className="text-2xl font-bold text-[#d4a24c]">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <Link 
                href="/checkout" 
                className="w-full block text-center bg-[#d4a24c] text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition duration-300 text-xs uppercase tracking-widest shadow-lg shadow-[#d4a24c]/10"
              >
                Proceed to Checkout
              </Link>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}