import React from 'react';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  // Static mock lookup data to populate details beautifully based on route type
  const isKanjeevaram = productId.includes('kanjeevaram');
  const isBanarasi = productId.includes('banarasi');
  
  const productDetails = {
    name: isKanjeevaram ? 'Bridal Crimson Kanjeevaram Silk' : isBanarasi ? 'Royal Zari Banarasi Silk' : 'Vintage Gold Mysore Crepe',
    category: isKanjeevaram ? 'Pure Kanjeevaram' : isBanarasi ? 'Banarasi Brocade' : 'Mysore Silk',
    price: isKanjeevaram ? '₹24,500' : isBanarasi ? '₹18,900' : '₹14,200',
    description: 'Exquisitely handwoven by master artisans, this legacy piece features real gold zari threads intertwined with grade-A mulberry silk strands. Complete with an authentic seal, heavy pallu detailing, and a matching unstitched blouse piece.',
    image: isKanjeevaram 
      ? 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'
      : isBanarasi
      ? 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop'
  };

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
      <div className="absolute top-[30%] left-[-5%] w-[40%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[35%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back Link Breadcrumb */}
        <div className="mb-10">
          <Link href="/collections" className="text-[#d4a24c] text-sm font-medium hover:underline flex items-center gap-2 tracking-wide">
            ← Back to All Collections
          </Link>
        </div>

        {/* Master Showcase Layout splitting Grid structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Image View Container */}
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden border border-[#d4a24c]/10 bg-white/[0.01] p-4 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-neutral-900 border border-white/5">
              <img 
                src={productDetails.image} 
                alt={productDetails.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Block: Pure Luxury Product Meta Specs Card */}
          <div 
            className="lg:col-span-6 rounded-[28px] p-8 md:p-10 border border-[#d4a24c]/10 bg-white/[0.01]"
            style={{
              backdropFilter: 'blur(35px)',
              WebkitBackdropFilter: 'blur(35px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
            }}
          >
            <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
              {productDetails.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mt-6 mb-3 tracking-wide">
              {productDetails.name}
            </h1>
            
            <p className="text-2xl font-bold text-[#d4a24c] mb-6">{productDetails.price}</p>
            
            <div className="w-full h-[1px] bg-white/10 my-6" />

            <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
              The Artistry & Weave
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
              {productDetails.description}
            </p>

            {/* Spec Matrix List */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-xs text-white/50 bg-black/20 p-4 rounded-xl border border-white/5">
              <div>✨ Silk Mark Certified</div>
              <div>🧵 100% Pure Zari Embroidery</div>
              <div>📦 Premium Luxury Packaging</div>
              <div>🛡️ Insured Global Shipping</div>
            </div>

            {/* Action Interactions buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#d4a24c] text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition duration-300 text-sm uppercase tracking-wider shadow-lg shadow-[#d4a24c]/10">
                Add To Cart
              </button>
              <button className="flex-1 border border-white/20 text-white font-semibold py-4 rounded-xl hover:bg-white/5 transition duration-300 text-sm uppercase tracking-wider">
                Buy Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}