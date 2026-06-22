'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useCartStore } from '@/store/cartStore';

export const dynamic = 'force-dynamic';

interface Saree {
  id: any; // changed to any to handle both numbers and strings safely
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function CollectionsPage() {
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [loading, setLoading] = useState(true);
  const [debugError, setDebugError] = useState<string | null>(null);
  
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchInventory() {
      try {
        setLoading(true);
        setDebugError(null);
        
        // Fetch out of Supabase
        const { data, error } = await supabase
          .from('sarees')
          .select('*');

        if (error) {
          setDebugError(`Supabase Error: ${error.message} (Code: ${error.code})`);
          throw error;
        }
        
        if (data) {
          setSarees(data);
          if (data.length === 0) {
            setDebugError("Connected to Supabase successfully, but the 'sarees' table returned 0 rows. Check if your rows are saved under the public schema.");
          }
        }
      } catch (err: any) {
        console.error('Error loading inventory:', err);
        if (!debugError) setDebugError(`System Error: ${err.message || err}`);
      } finally {
        setLoading(false);
      }
    }

    fetchInventory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#160205] flex items-center justify-center text-white/50 text-sm tracking-widest uppercase">
        Unveiling Heritage Masterpieces...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#160205] pt-36 pb-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* DEBUG ERROR BANNER */}
        {debugError && (
          <div className="mb-8 p-4 bg-red-900/40 border border-red-500 text-red-200 rounded-xl text-xs font-mono max-w-2xl mx-auto text-center whitespace-pre-wrap">
            ⚠️ Diagnostic Panel:<br/>{debugError}
          </div>
        )}

        <div className="text-center mb-16">
          <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
            Exclusive Catalogue
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-3 tracking-wide">
            Our Masterpiece Collections
          </h1>
          <div className="w-16 h-[1px] bg-[#d4a24c]/40 mx-auto"></div>
        </div>

        {sarees.length === 0 ? (
          <p className="text-center text-white/40">No items visible in the catalogue frame.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sarees.map((saree) => (
              <div 
                key={saree.id.toString()}
                className="group rounded-2xl overflow-hidden border border-[#d4a24c]/10 bg-white/[0.01] transition duration-500 hover:border-[#d4a24c]/30 flex flex-col"
              >
                <Link href={`/product/${saree.id}`} className="cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-900 relative">
                    <img 
                      src={saree.image} 
                      alt={saree.name} 
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#d4a24c] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-white/5">
                      {saree.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <Link href={`/product/${saree.id}`} className="cursor-pointer">
                      <h3 className="text-lg font-serif font-medium text-white mb-2 group-hover:text-[#d4a24c] transition duration-300">
                        {saree.name}
                      </h3>
                    </Link>
                    <p className="text-[#d4a24c] font-bold text-base mb-6">
                      ₹{saree.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    onClick={() => addItem({
                      id: saree.id.toString(),
                      name: saree.name,
                      price: saree.price,
                      image: saree.image,
                      category: saree.category
                    })}
                    className="w-full bg-[#d4a24c] text-black font-semibold py-3 rounded-xl hover:bg-[#c29340] transition duration-300 text-xs uppercase tracking-widest"
                  >
                    Add to Selection
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}