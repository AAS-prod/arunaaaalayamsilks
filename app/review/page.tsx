'use client';

import React from 'react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  sareePurchased: string;
  reviewText: string;
}

const clientReviews: Review[] = [
  {
    id: 'rev-01',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: 'May 2026',
    sareePurchased: 'Bridal Crimson Kanjeevaram Silk',
    reviewText: 'The craftsmanship is absolutely breathtaking. The gold zari work has a weight and sheen that mass-produced sarees can never replicate. The luxury packaging kept the weave flawless upon arrival.'
  },
  {
    id: 'rev-02',
    name: 'Anjali Hegde',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    date: 'June 2026',
    sareePurchased: 'Vintage Gold Mysore Crepe',
    reviewText: 'Extremely lightweight yet feels profoundly premium. The drape is exceptionally elegant, and the direct-from-loom authenticity is clear from the first touch. Truly a certified masterpiece.'
  },
  {
    id: 'rev-03',
    name: 'Meenakshi Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    date: 'April 2026',
    sareePurchased: 'Royal Zari Banarasi Silk',
    reviewText: 'Stunning artistic precision. I was skeptical about buying high-end silk online without a physical storefront, but the certified seal and impeccable client support won me over. Magnificent experience.'
  }
];

export default function ReviewsPage() {
  return (
    <main 
      className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden flex flex-col items-center"
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
      <div className="absolute top-[25%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
            Client Diaries
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-3 tracking-wide">
            Words of Appreciation
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed font-light">
            Read real feedback from global patrons who appreciate the timeless heritage of authenticated, handwoven purity.
          </p>
          <div className="w-12 h-[1px] bg-[#d4a24c]/40 mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-[24px] p-6 md:p-8 border border-[#d4a24c]/10 bg-white/[0.01] transition-all duration-500 hover:bg-white/[0.02] hover:border-[#d4a24c]/20 flex flex-col justify-between min-h-[320px]"
              style={{
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.02)',
              }}
            >
              {/* Star Rating & Verified Purchase Flag */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-4 h-4 text-[#d4a24c]" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-md bg-[#d4a24c]/10 text-[#d4a24c] border border-[#d4a24c]/20">
                    Verified Purchase
                  </span>
                </div>

                {/* Saree Association Badge */}
                <div className="text-[11px] font-medium text-white/40 mb-4 tracking-wide border-b border-white/5 pb-2">
                  Weave: <span className="text-white/70 italic">{review.sareePurchased}</span>
                </div>

                {/* Review Text Body */}
                <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              {/* Author Attribution Meta block */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <div>
                  <h3 className="font-serif font-medium text-white/90 text-sm">
                    {review.name}
                  </h3>
                  <p className="text-[11px] text-white/40 mt-0.5">
                    {review.location}
                  </p>
                </div>
                <span className="text-[10px] text-white/30 uppercase font-medium">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}