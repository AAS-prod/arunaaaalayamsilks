'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const categories = [
    {
      title: 'Kanjeevaram Silks',
      desc: 'Heavy zari bridal masterpieces.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Banarasi Brocade',
      desc: 'Royal weaves from the Ghats.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Mysore Crepe',
      desc: 'Vintage gold & lightweight drape.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <main 
      className="relative min-h-screen text-white pt-40 pb-24 px-4 md:px-12 overflow-hidden flex flex-col items-center"
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
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Ambient Depth Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/30 blur-[140px] pointer-events-none fixed" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/20 blur-[150px] pointer-events-none fixed" />
      {/* ================= LUXURY LOGO OPENING SECTION ================= */}

<section className="relative min-h-screen flex flex-col items-center justify-center text-center w-full">

  <div className="absolute w-[900px] h-[900px] bg-[#d4a24c]/10 blur-[200px] rounded-full" />

  <div className="relative z-10">

    <div className="relative w-[90vw] max-w-[800px] h-[35vh] md:h-[55vh] mx-auto">
      <Image
        src="/logo.png"
        alt="Arunaa Aalayam"
        fill
        priority
        className="object-contain"
      />
    </div>

    <h1 className="mt-6 text-2xl md:text-6xl font-serif text-[#d4a24c] tracking-[4px] md:tracking-[10px]">
      ARUNAA AALAYAM
    </h1>

    <p className="mt-4 text-white/60 uppercase tracking-[6px] text-sm md:text-base">
      Luxury Silk Sarees
    </p>

    <div className="mt-12 flex flex-col items-center">
      <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4a24c]/60 to-transparent"></div>

      <p className="mt-4 text-white/40 text-xs tracking-[4px] uppercase animate-bounce">
        Scroll To Explore
      </p>
    </div>

  </div>

</section>


      {/* ================= HERO SECTION ================= */}
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-32">

  {/* Left Side: Typography & Call to Actions */}
  <div className="flex-1 text-center lg:text-left">
    <span className="inline-block text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20 mb-6 shadow-lg shadow-[#d4a24c]/5">
      Welcome to Arunaa Aalayam
    </span>

    <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-2xl">
      Pure Luxury,
      <br />
      <span className="text-[#d4a24c] italic pr-2">
        Woven in Silk.
      </span>
    </h1>

    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-light">
      Discover authentic handloom Kanjeevaram and Banarasi masterpieces.
      Directly sourced from traditional artisans, delivered with grace in every fold.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
      <Link
        href="/collections"
        className="w-full sm:w-auto bg-[#d4a24c] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(212,162,76,0.3)]"
      >
        Explore Collections
      </Link>

      <Link
        href="/about"
        className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300 text-sm uppercase tracking-widest backdrop-blur-md"
      >
        Our Heritage
      </Link>
    </div>

    <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 text-xs text-white/50 uppercase tracking-widest font-semibold">
      <div className="flex items-center gap-2">
        <span className="text-[#d4a24c] text-base">✦</span>
        Silk Mark Certified
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#d4a24c] text-base">✦</span>
        Premium Packaging
      </div>
    </div>
  </div>

        {/* Right Side: Showcase Glassmorphic Image Card */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative group">
          <div 
            className="rounded-[32px] p-4 border border-[#d4a24c]/10 bg-white/[0.01] relative z-10 transition-transform duration-700 hover:-translate-y-2"
            style={{ backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
          >
            <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop" 
                alt="Bridal Crimson Kanjeevaram" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160205] via-transparent to-transparent opacity-50" />
              
              <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/40 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <h3 className="text-white font-serif font-medium text-lg">Crimson Kanjeevaram</h3>
                  <span className="text-[#d4a24c] text-xs font-semibold tracking-wider uppercase block mt-1">Bridal Edition</span>
                </div>
                <Link href="/collections" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a24c] hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#d4a24c]/10 blur-[100px] rounded-full -z-10 transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
</div>

</div>

{/* ================= SCROLL DIVIDER ================= */}
      <div className="relative z-10 w-full flex justify-center mb-32">
        <div className="h-32 w-[1px] bg-gradient-to-b from-[#d4a24c]/0 via-[#d4a24c]/40 to-[#d4a24c]/0"></div>
      </div>

      {/* ================= SHOP BY CATEGORY ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase block mb-3">
            Curated Origins
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
            Explore the Looms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link href="/collections" key={idx} className="group block">
              <div 
                className="rounded-[24px] p-3 border border-white/5 bg-white/[0.01] transition-all duration-500 hover:bg-white/[0.03] hover:border-[#d4a24c]/30"
                style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
              >
                <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden bg-neutral-900 border border-white/5 mb-4">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160205]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Category Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-serif font-semibold text-white mb-1 group-hover:text-[#d4a24c] transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-white/60 text-xs font-medium tracking-wide">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= THE ARUNAA PROMISE BANNER ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div 
          className="rounded-[32px] p-10 md:p-16 border border-[#d4a24c]/10 bg-gradient-to-br from-white/[0.02] to-transparent text-center"
          style={{ backdropFilter: 'blur(35px)', WebkitBackdropFilter: 'blur(35px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
        >
          <span className="text-[#d4a24c] text-3xl mb-4 block">✧</span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4 tracking-wide">
            The Arunaa Promise
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            We bypass the middlemen to bring you direct access to weaver clusters across India. Every saree arrives in rigid, custom-engineered luxury packaging ensuring your heritage piece is preserved for generations.
          </p>
          <Link 
            href="/about" 
            className="inline-block text-[#d4a24c] text-xs font-semibold uppercase tracking-widest hover:text-white transition duration-300 border-b border-[#d4a24c]/30 hover:border-white pb-1"
          >
            Read Our Full Story
          </Link>
        </div>
      </div>

    </main>
  );
}