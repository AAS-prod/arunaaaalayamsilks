export default function hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Silk Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5a000d]/20 via-[#4a000d]/50 to-[#2b0008]" />

      <div className="relative max-w-7xl mx-auto px-8 pt-40">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[8px] text-[#d4a24c] text-sm mb-8">
              Luxury Handloom Collection
            </p>

            <h1 className="text-white leading-none font-light">
              <span className="block text-7xl lg:text-8xl">
                Timeless
              </span>

              <span
                className="block text-[#f3e4cf] italic mt-4"
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "6rem",
                }}
              >
                Elegance
              </span>
            </h1>

            <p
              className="mt-6 text-[#d4a24c] italic text-2xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Grace In Every Fold
            </p>

            <p className="mt-8 max-w-xl text-white/75 leading-9 text-lg">
              Discover handcrafted sarees that celebrate
              tradition, premium pure silk craftsmanship,
              and timeless elegance. Every intricate weave
              tells a story of heritage.
            </p>

            <div className="flex gap-6 mt-12">

              <button className="bg-[#d4a24c] text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition">
                Shop Collection →
              </button>

              <button className="glass text-white px-8 py-4 rounded-full">
                Explore History
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            <div className="glass p-5 rounded-[40px]">

              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
                alt="Saree Model"
                className="w-full max-w-[600px] rounded-[30px]"
              />

            </div>

          </div>

        </div>

      </div>

      {/* LOTUS DECORATION */}
      <div className="absolute bottom-0 left-0 opacity-20 text-[#d4a24c]">

        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M150 220C150 120 80 80 40 40C60 120 100 180 150 220Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M150 220C150 120 220 80 260 40C240 120 200 180 150 220Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M150 220C150 100 150 60 150 20"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

      </div>

    </section>
  );
}