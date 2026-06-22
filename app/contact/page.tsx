'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Premium Contact Request:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
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

      {/* Decorative Ambient Depth Blobs */}
      <div className="absolute top-[25%] right-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* TRUST SECTION */}
        <section className="mb-12">
          <div 
            className="max-w-5xl mx-auto rounded-3xl border border-[#d4af37]/10 p-8 text-center bg-white/[0.01]"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <h3 className="text-xl font-semibold text-[#d4af37] tracking-wide">
              Premium Online Silk Store
            </h3>
            <p className="mt-3 text-[#e7d9c7]/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              No physical store – only curated luxury silk sarees delivered securely to your doorstep with premium packaging.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-[#b9a89a]">
              <span>🚚 Fast Delivery</span>
              <span className="text-white/20">•</span>
              <span>🔒 Secure Payments</span>
              <span className="text-white/20">•</span>
              <span>📜 Authentic Silk Guaranteed</span>
            </div>
          </div>
        </section>

        {/* Contact Form Container */}
        <div 
          className="rounded-[28px] p-8 md:p-12 border border-[#d4a24c]/10 bg-white/[0.01]"
          style={{
            backdropFilter: 'blur(35px)',
            WebkitBackdropFilter: 'blur(35px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
          }}
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#d4a24c] tracking-wide mb-3">
              Get In Touch
            </h1>
            <p className="text-white/60 text-xs md:text-sm tracking-wider uppercase">
              Have questions regarding our weaves or custom orders?
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 border border-green-500/20 bg-green-500/5 rounded-2xl p-6">
              <span className="text-3xl">✨</span>
              <h3 className="text-xl font-medium text-green-400 mt-4 mb-2">Message Sent Successfully!</h3>
              <p className="text-white/60 text-sm">Thank you for contacting Arunaa Aalayam. Our concierge team will reach out shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs uppercase tracking-widest text-[#d4a24c] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold pl-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Mithun R" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
                    required 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold pl-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="mithun@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
                    required 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-semibold pl-1">Message</label>
                <textarea 
                  placeholder="Tell us about the piece or collection you are inquiring about..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 h-36 resize-none text-sm leading-relaxed"
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 bg-[#d4a24c] text-black font-semibold py-4 rounded-xl hover:scale-[1.01] transition duration-300 text-sm uppercase tracking-wider shadow-lg shadow-[#d4a24c]/10"
              >
                Send Message
              </button>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}