'use client';

import React from 'react';
import Link from 'next/link';

interface SareeProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

const sareeCollections: SareeProduct[] = [
  {
    id: 'kanjeevaram-pure-01',
    name: 'Bridal Crimson Kanjeevaram Silk',
    category: 'Pure Kanjeevaram',
    price: '₹24,500',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'banarasi-brocade-02',
    name: 'Royal Zari Banarasi Silk',
    category: 'Banarasi Brocade',
    price: '₹18,900',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mysore-crepe-03',
    name: 'Vintage Gold Mysore Crepe',
    category: 'Mysore Silk',
    price: '₹14,200',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop'
  }
];

export default function CollectionsPage() {
  return (
    <main 
      className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        // Deep velvet base color
        backgroundColor: '#160205',
        // Layer 1: High-end ambient lighting glows from the corners and center
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(139, 22, 42, 0.25) 0%, transparent 60%),
          radial-gradient(circle at 10% 20%, rgba(59, 10, 18, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(90, 12, 26, 0.35) 0%, transparent 60%)
        `
      }}
    >
      {/* Texture Layer: Creates a fine, premium fabric/grain feel across the dark lighting */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Traditional Blur Blobs to add physical depth */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/20 blur-[160px] pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Title Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/5 px-4 py-1.5 rounded-full border border-[#d4a24c]/10">
            Heritage Looms
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a24c] tracking-wide mt-3 mb-3">
            Curated Masterpieces
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Handwoven heritage direct from traditional artisans. Immerse yourself in the timeless elegance of pure gold zari work.
          </p>
        </div>

        {/* Luxury Product Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sareeCollections.map((saree) => (
            <div
              key={saree.id}
              className="group rounded-[24px] p-4 transition-all duration-500 border border-[#d4a24c]/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#d4a24c]/30"
              style={{
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              {/* Aspect Ratio Image Wrapper */}
              <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160205] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Product Meta Details */}
              <div className="pt-5 px-2 pb-2">
                <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">
                  {saree.category}
                </span>
                <h3 className="text-lg font-medium text-white/90 mt-1 mb-3 group-hover:text-[#d4a24c] transition-colors duration-300">
                  {saree.name}
                </h3>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-semibold text-[#d4a24c]">{saree.price}</span>
                  
                  <Link 
                    href={`/product/${saree.id}`}
                    className="border border-[#d4a24c]/30 text-white/90 bg-[#160205]/40 group-hover:bg-[#d4a24c] group-hover:text-black font-semibold px-4 py-2 rounded-full transition-all duration-300 text-xs uppercase tracking-wider"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}