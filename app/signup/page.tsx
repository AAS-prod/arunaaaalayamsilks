'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    console.log('Premium Account Creation:', formData);
    // Registration logic can be integrated here later
  };

  return (
    <main 
      className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 flex items-center justify-center overflow-hidden"
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
      <div className="absolute top-[20%] right-[-15%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px] pointer-events-none" />

      {/* Glassmorphic Portal Entry Card */}
      <div 
        className="relative z-10 w-full max-w-md rounded-[28px] p-8 md:p-10 border border-[#d4a24c]/10 bg-white/[0.01]"
        style={{
          backdropFilter: 'blur(35px)',
          WebkitBackdropFilter: 'blur(35px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
        }}
      >
        {/* Header Block */}
        <div className="text-center mb-8">
          <span className="text-[#d4a24c] text-[10px] font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-3.5 py-1 rounded-full border border-[#d4a24c]/20">
            Join The Legacy
          </span>
          <h1 className="text-3xl font-serif font-bold text-white mt-4 mb-2 tracking-wide">
            Create Account
          </h1>
          <p className="text-white/40 text-xs">Establish your private luxury silk portfolio</p>
        </div>

        {/* Input Interactive Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold pl-1">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Mithun R"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold pl-1">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold pl-1">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
              required 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold pl-1">
              Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#d4a24c] transition duration-300 text-sm"
              required 
            />
          </div>

          {/* Call to Action Trigger */}
          <button 
            type="submit" 
            className="w-full mt-4 bg-[#d4a24c] text-black font-semibold py-4 rounded-xl hover:scale-[1.01] transition duration-300 text-xs uppercase tracking-widest shadow-lg shadow-[#d4a24c]/10"
          >
            Create Profile
          </button>
        </form>

        {/* Dynamic Route Footer Link */}
        <div className="mt-8 text-center text-xs text-white/40 border-t border-white/5 pt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-[#d4a24c] hover:underline font-medium">
            Sign In Here
          </Link>
        </div>

      </div>
    </main>
  );
}