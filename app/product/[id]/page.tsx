'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useCartStore } from '@/store/cartStore';

interface Saree {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [saree, setSaree] = useState<Saree | null>(null);
  const [loading, setLoading] = useState(true);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = params.id as string;

        if (!productId) {
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('sarees')
          .select('*')
          .eq('id', productId)
          .single();

        if (error) {
          console.error(error);
          setSaree(null);
        } else {
          setSaree(data);
        }
      } catch (err) {
        console.error(err);
        setSaree(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#160205] flex items-center justify-center text-white">
        Loading Product...
      </div>
    );
  }

  if (!saree) {
    return (
      <div className="min-h-screen bg-[#160205] flex flex-col items-center justify-center text-white gap-4">
        <p>Product not found</p>

        <button
          onClick={() => router.push('/collections')}
          className="bg-[#d4a24c] text-black px-6 py-3 rounded-xl"
        >
          Back to Collections
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#160205] text-white pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <button
          onClick={() => router.push('/collections')}
          className="mb-10 text-[#d4a24c] text-sm"
        >
          ← Back to Collections
        </button>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="rounded-2xl overflow-hidden border border-[#d4a24c]/20">
            <img
              src={saree.image}
              alt={saree.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">

            <span className="text-[#d4a24c] uppercase tracking-widest text-xs mb-4">
              {saree.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {saree.name}
            </h1>

            <p className="text-3xl text-[#d4a24c] font-bold mb-8">
              ₹{saree.price.toLocaleString('en-IN')}
            </p>

            <p className="text-white/70 mb-10 leading-relaxed">
              Experience timeless elegance with this handcrafted luxury saree,
              designed for weddings, celebrations and special occasions.
            </p>

            <button
              onClick={() =>
                addItem({
                  id: saree.id,
                  name: saree.name,
                  category: saree.category,
                  price: saree.price,
                  image: saree.image,
                })
              }
              className="bg-[#d4a24c] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}