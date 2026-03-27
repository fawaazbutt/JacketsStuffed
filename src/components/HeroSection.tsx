export default function HeroSection() {
  return (
    <section className="px-6 mb-16">
      <div className="relative overflow-hidden rounded-lg bg-surface-container-low min-h-[500px] flex flex-col justify-end p-8">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Lifestyle"
            className="w-full h-full object-cover"
            data-alt="Elegant interior scene with handmade ceramic vases and woven textiles, bathed in soft morning sunlight through a window"
            src="/hero-img.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4b2409]/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="inline-block bg-primary-container/90 text-on-primary-container px-3 py-1 rounded-md font-label text-xs font-bold mb-4 uppercase tracking-widest">
            Featured Collection
          </span>
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Shop the best of Etsy, as seen on Instagram.
          </h1>
          <p className="text-white/90 text-lg mb-8 font-body max-w-md">
            Curated handmade treasures from the world&apos;s most talented independent makers, delivered to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary hover:bg-primary-dim text-white px-8 py-4 rounded-xl font-label font-bold transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
              href="#shop"
            >
              Explore the Collection
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

