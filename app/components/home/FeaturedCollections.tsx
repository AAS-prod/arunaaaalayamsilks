"use client";

const collections = [
  {
    title: "Bridal Collection",
    tagline: "Regal weaves for your special day",
    image: "https://images.unsplash.com/photo-1583391733981-8498f89f0f0b",
    link: "#bridal"
  },
  {
    title: "Kanchipuram Silk",
    tagline: "Pure zari, timeless heritage",
    image: "https://images.unsplash.com/photo-1594736797933-d0f06ba2fe65",
    link: "#kanchipuram"
  },
  {
    title: "Festive Wear",
    tagline: "Celebrate in vibrant elegance",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    link: "#festive"
  },
];

export default function FeaturedCollections() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 relative z-10">
      
      <div className="text-center mb-20">
        <p className="uppercase tracking-[4px] text-[#d4a24c] text-sm mb-3">Curated Masterpieces</p>
        <h2 className="text-4xl md:text-6xl font-light text-white tracking-wide">
          Featured Collections
        </h2>
        <div className="w-24 h-[1px] bg-[#d4a24c]/40 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {collections.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="glass group block rounded-[24px] overflow-hidden relative border border-white/10 hover:border-[#d4a24c]/40 transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image Container with Zoom effect */}
            <div className="h-[500px] w-full overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f0006] via-transparent to-transparent opacity-80" />
            </div>

            {/* Premium Content Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.tagline}
              </p>
              <span className="text-[#d4a24c] text-xs uppercase tracking-[3px] flex items-center gap-2 font-medium">
                Discover More 
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}