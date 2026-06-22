'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const productId = params.id;

  const isKanjeevaram = productId.includes('kanjeevaram');
  const isBanarasi = productId.includes('banarasi');

  const productDetails = {
    id: productId,
    name: isKanjeevaram
      ? 'Bridal Crimson Kanjeevaram Silk'
      : isBanarasi
      ? 'Royal Zari Banarasi Silk'
      : 'Vintage Gold Mysore Crepe',

    category: isKanjeevaram
      ? 'Pure Kanjeevaram'
      : isBanarasi
      ? 'Banarasi Brocade'
      : 'Mysore Silk',

    price: isKanjeevaram
      ? 24500
      : isBanarasi
      ? 18900
      : 14200,

    description:
      'Exquisitely handwoven by master artisans, this legacy piece features real gold zari threads intertwined with grade-A mulberry silk strands. Complete with an authentic seal, heavy pallu detailing, and a matching unstitched blouse piece.',

    image: isKanjeevaram
      ? 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'
      : isBanarasi
      ? 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop'
  };

  const addToCart = () => {
    const existingCart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    const existingItem = existingCart.find(
      (item: any) => item.id === productDetails.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({
        ...productDetails,
        quantity
      });
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(existingCart)
    );

    router.push('/cart');
  };

  const buyNow = () => {
    addToCart();
    router.push('/checkout');
  };

  return (
    <main
      className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: '#160205',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(139,22,42,0.25) 0%, transparent 60%),
          radial-gradient(circle at 10% 20%, rgba(59,10,18,0.4) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(90,12,26,0.35) 0%, transparent 60%)
        `
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="mb-8">
          <Link
            href="/collections"
            className="text-[#d4a24c] hover:text-white transition"
          >
            ← Back to Collections
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* IMAGE */}
          <div>
            <div className="rounded-3xl overflow-hidden border border-[#d4a24c]/10">
              <img
                src={productDetails.image}
                alt={productDetails.name}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div>

            <span className="text-[#d4a24c] uppercase tracking-widest text-xs">
              {productDetails.category}
            </span>

            <h1 className="text-4xl font-serif font-bold mt-4">
              {productDetails.name}
            </h1>

            <p className="text-3xl font-bold text-[#d4a24c] mt-4">
              ₹{productDetails.price.toLocaleString('en-IN')}
            </p>

            <p className="text-white/70 leading-relaxed mt-6">
              {productDetails.description}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-white/50 text-sm mb-3">
                Quantity
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                  className="w-10 h-10 border border-white/10 rounded-xl"
                >
                  -
                </button>

                <span className="text-lg">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-10 h-10 border border-white/10 rounded-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={addToCart}
                className="flex-1 bg-[#d4a24c] text-black py-4 rounded-xl font-semibold uppercase tracking-wider"
              >
                Add To Cart
              </button>

              <button
                onClick={buyNow}
                className="flex-1 border border-white/20 py-4 rounded-xl uppercase tracking-wider"
              >
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-10 text-sm">

              <div className="border border-white/10 rounded-xl p-4">
                ✨ Silk Mark Certified
              </div>

              <div className="border border-white/10 rounded-xl p-4">
                🧵 Pure Handwoven Silk
              </div>

              <div className="border border-white/10 rounded-xl p-4">
                📦 Luxury Packaging
              </div>

              <div className="border border-white/10 rounded-xl p-4">
                🚚 Free Shipping
              </div>

            </div>

            {/* Product Details */}
            <div className="mt-12 border-t border-white/10 pt-8">

              <h2 className="text-xl font-serif mb-4">
                Product Details
              </h2>

              <ul className="space-y-3 text-white/70">
                <li>• Pure Mulberry Silk</li>
                <li>• Handwoven by master artisans</li>
                <li>• Includes matching blouse piece</li>
                <li>• Silk Mark certified</li>
                <li>• Dry clean only</li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}