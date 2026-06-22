import React from 'react';

export default function AboutPage() {
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
      <div className="absolute top-[30%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header Title Section */}
        <div className="text-center mb-16">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
            Our Legacy & Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-4 tracking-wide">
            Grace in Every Fold
          </h1>
          <div className="w-16 h-[1px] bg-[#d4a24c]/40 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-10">
          
          {/* PLACE 1: ABOUT THE BRAND */}
          <div 
            className="rounded-[28px] p-8 md:p-12 border border-[#d4a24c]/10 bg-white/[0.01]"
            style={{
              backdropFilter: 'blur(35px)',
              WebkitBackdropFilter: 'blur(35px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-12">
                <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase block mb-2">The Heritage</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
                  The Journey of Arunaa Aalayam
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                  Arunaa Aalayam Silks was built on a deep reverence for the exquisite heritage of Indian handloom weaving. We specialize exclusively in bringing authenticated, luxury silk sarees straight from traditional looms directly to your doorstep. By eliminating the overhead of physical storefronts, we pour every ounce of dedication into curating unmatched textile mastery.
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Every saree in our collection is a testament to months of precision labor by master artisans, weaving together genuine gold zari details, premium Mulberry threads, and ancestral geometric patterns that preserve our shared cultural timeline.
                </p>
              </div>
            </div>
          </div>

          {/* PLACE 2: ABOUT THE FOUNDER / CEO */}
          <div 
            className="rounded-[28px] p-8 md:p-12 border border-[#d4a24c]/10 bg-white/[0.01]"
            style={{
              backdropFilter: 'blur(35px)',
              WebkitBackdropFilter: 'blur(35px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Optional Placeholder for Founder's Image */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-48 h-48 md:w-full md:aspect-square rounded-2xl bg-black/40 border border-[#d4a24c]/20 flex items-center justify-center text-white/20 overflow-hidden relative group">
                  {/* You can swap this out for an actual image tag like <img src="/founder.jpg" /> later */}
                  <span className="text-xs uppercase tracking-widest font-serif text-[#d4a24c]/60">Founder Portrait</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160205] via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Founder Text Context */}
              <div className="md:col-span-8">
                <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase block mb-2">The Leadership</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
                  Message from the Founder
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 italic font-serif">
                  &ldquo;True luxury lies not in mass production, but in the patience of a handwoven craft. Arunaa Aalayam was envisioned to honor the legacy of weavers while ensuring our patrons receive unparalleled, pristine quality without compromise.&rdquo;
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Driven by a singular mission to connect global connoisseurs with pure silk masterpieces, our founder focuses explicitly on bridging authentic handloom artistry with premium custom packaging and seamless delivery safety standards worldwide.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}