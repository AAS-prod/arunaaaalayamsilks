"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AccountPage() {
const [user, setUser] = useState<any>(null);
const [loading, setLoading] = useState(true);

const router = useRouter();

useEffect(() => {
const getUser = async () => {
const {
data: { user },
} = await supabase.auth.getUser();


  if (!user) {
    router.push("/login");
    return;
  }

  setUser(user);
  setLoading(false);
};

getUser();


}, [router]);

const handleLogout = async () => {
await supabase.auth.signOut();
router.push("/");
router.refresh();
};

if (loading) {
return ( <main className="min-h-screen flex items-center justify-center bg-[#160205] text-white">
Loading... </main>
);
}

return (
<main
className="relative min-h-screen text-white pt-40 pb-24 px-6 md:px-12 overflow-hidden"
style={{
backgroundColor: "#160205",
backgroundImage: `           radial-gradient(circle at 50% 30%, rgba(139,22,42,0.25) 0%, transparent 60%),
          radial-gradient(circle at 10% 20%, rgba(59,10,18,0.4) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(90,12,26,0.35) 0%, transparent 60%)
        `,
}}
> <div className="absolute top-[25%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#3b0a12]/20 blur-[140px]" /> <div className="absolute bottom-[15%] right-[-10%] w-[40%] aspect-square rounded-full bg-[#6e0e1a]/15 blur-[150px]" />


  <div className="relative z-10 max-w-4xl mx-auto">
    <div
      className="rounded-[30px] p-8 md:p-10 border border-[#d4a24c]/10 bg-white/[0.02]"
      style={{
        backdropFilter: "blur(35px)",
        WebkitBackdropFilter: "blur(35px)",
      }}
    >
      <div className="text-center mb-10">
        <span className="text-[#d4a24c] text-xs font-semibold tracking-widest uppercase bg-[#d4a24c]/10 px-4 py-1.5 rounded-full border border-[#d4a24c]/20">
          My Account
        </span>

        <h1 className="text-4xl font-serif font-bold mt-5">
          Welcome Back
        </h1>

        <p className="text-white/50 mt-3">
          Manage your Arunaa Aalayam profile
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-black/20 border border-white/5 rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
            Email Address
          </p>

          <p className="text-lg text-white">
            {user?.email}
          </p>
        </div>

        <div className="bg-black/20 border border-white/5 rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
            Customer ID
          </p>

          <p className="text-sm text-white break-all">
            {user?.id}
          </p>
        </div>

        <div className="bg-black/20 border border-white/5 rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
            Account Created
          </p>

          <p className="text-white">
            {new Date(user?.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500/10 border border-red-500/20 text-red-400 py-4 rounded-xl hover:bg-red-500/20 transition font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</main>


);
}
