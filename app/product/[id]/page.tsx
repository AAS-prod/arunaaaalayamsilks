'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase'; // Make sure path matches your lib location
import { useCartStore } from '@/store/cartStore';

interface Saree {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [saree, setSaree] = useState<Saree | null>(null);
  const [loading, setLoading] = useState(true);
  
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        // Query only the single saree matching this specific ID
        const { data, error } = await supabase
          .from('sarees')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setSaree(data);
      } catch (err) {
        console.error('Error fetching product details:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#160205] flex items-center justify-center text-white/50 text-sm tracking-widest uppercase">
        Bringing Up Masterpiece Details...
      </div>
    );
  }

  if (!saree) {
    return (
      <div className="min-h-screen bg-[#160205] flex flex-col items-center justify-center text-white gap-4">
        <p className="text-white/60">Heirloom item not found.</p>
        <button onClick={() => router.push('/collections')} className="text-[#d4a24c] text-sm underline">
          Return to Collections
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#160205] pt-36 pb-24 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/collections')}
          className="text-white/60 hover:text-[#d4a24c] text-xs uppercase tracking-widest mb-12 flex items-center gap-2 transition"
        >
          ← Back to Catalog
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Product Image */}
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-950 border border-[#d4a24c]/10">
            <img src={saree.image} alt={saree.name} className="w-full h-full object-cover" />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20 self-start mb-6">
              {saree.category}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide">
              {saree.name}
            </h1>
            
            <p className="text-2xl font-bold text-[#d4a24c] mb-8">
              ₹{saree.price.toLocaleString('en-IN')}
            </p>

            <div className="w-full h-[1px] bg-[#d4a24c]/20 mb-8"></div>

            <p className="text-white/70 text-sm leading-relaxed mb-10 font-light">
              Experience sheer heritage luxury with this masterfully curated saree. Exquisitely handcrafted with royal threads, premium textile density, and timeless weaving motifs tailored for majestic occasions.
            </p>

            <button
              onClick={() => addItem({
                id: saree.id,
                name: saree.name,
                price: saree.price,
                image: saree.image,
                category: saree.category
              })}
              className="w-full md:w-auto md:px-12 bg-[#d4a24c] text-black font-semibold py-4 rounded-xl hover:bg-[#c29340] transition duration-300 text-xs uppercase tracking-widest"
            >
              Add to Selection
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}