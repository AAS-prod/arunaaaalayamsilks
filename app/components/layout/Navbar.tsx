"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [user, setUser] = useState<any>(null);

const totalItems = useCartStore((state) => state.getTotalItems());

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 30);
};


window.addEventListener("scroll", handleScroll);

const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  setUser(user);
};

getUser();

const {
  data: { subscription },
} = supabase.auth.onAuthStateChange((_event, session) => {
  setUser(session?.user ?? null);
});

return () => {
  window.removeEventListener("scroll", handleScroll);
  subscription.unsubscribe();
};


}, []);

return (
<header
className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "top-4 w-[92%] max-w-7xl" : "top-6 w-[94%] max-w-7xl"
      }`}
>
<div
className="rounded-[28px] transition-all duration-500"
style={{
backdropFilter: "blur(180px) saturate(250%)",
WebkitBackdropFilter: "blur(180px) saturate(250%)",
background: "rgba(255,255,255,0.05)",
border: "1px solid rgba(255,255,255,0.08)",
boxShadow:
"0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
}}
> <div className="flex items-center justify-between px-8 py-4">
{/* Logo */} <Link
         href="/"
         className="flex items-center gap-4 no-underline group cursor-pointer"
       > <Image
           src="/logo.png"
           alt="Arunaa Aalayam"
           width={60}
           height={60}
           className="rounded-full"
         />


        <div>
          <h2 className="text-[#d4a24c] text-xl font-semibold">
            Arunaa Aalayam
          </h2>
          <p className="text-white/60 text-xs tracking-widest uppercase">
            Luxury Silk Sarees
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-white">
        <Link
          href="/"
          className="hover:text-[#d4a24c] transition duration-300 no-underline"
        >
          Home
        </Link>

        <Link
          href="/collections"
          className="hover:text-[#d4a24c] transition duration-300 no-underline"
        >
          Collections
        </Link>

        <Link
          href="/about"
          className="hover:text-[#d4a24c] transition duration-300 no-underline"
        >
          About
        </Link>

        <Link
          href="/reviews"
          className="hover:text-[#d4a24c] transition duration-300 no-underline"
        >
          Reviews
        </Link>

        <Link
          href="/contact"
          className="hover:text-[#d4a24c] transition duration-300 no-underline"
        >
          Contact
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link
          href="/cart"
          className="text-white/80 hover:text-[#d4a24c] p-2.5 rounded-full hover:bg-white/5 transition duration-300 flex items-center justify-center relative"
          aria-label="View Shopping Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#d4a24c] text-black text-[10px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Login / My Account */}
        {user ? (
          <Link href="/account">
            <button className="hidden md:block border border-[#d4a24c]/30 px-5 py-2.5 rounded-full text-white hover:bg-white/5 transition text-sm font-medium">
              My Account
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="hidden md:block border border-[#d4a24c]/30 px-5 py-2.5 rounded-full text-white hover:bg-white/5 transition text-sm font-medium">
              Login
            </button>
          </Link>
        )}

        {/* Shop Now */}
        <Link href="/collections">
          <button className="bg-[#d4a24c] text-black px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition duration-300 text-sm">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  </div>
</header>


);
}
