import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    // Front-end only (no backend in this template)
    if (!email.trim()) return;
    alert(`Thanks! We'll send ${email.trim()} the Maker's Edit updates.`);
    setEmail("");
  };

  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fff4f0]/80 dark:bg-orange-950/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(75,36,9,0.04)]">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden ring-2 ring-primary/20">
              <img
                alt="Maker Profile Avatar"
                className="w-full h-full object-cover"
                data-alt="Close-up portrait of a smiling female artisan in a sunlit craft studio with soft natural lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEpTiyKTKCEnNIRbaCjpDtPe9bCGBHMsiRlSl7c0CJ2OKmg6AAr1CFVY_yZaTiKu41l6tfrSXEBb11Eoe3-tQiJpjQw2r78YPz2Hc7QTBVjxY8FEiJ5rRPRJc_ORTxZdaY_XqTbjmq2TZejw_scHqQShbWLKklEvduVncpS56goCmfl1QYZsWnJA_1Qtu6X_lpiYujI-JVO8MO2CFYgOSUJZK6U1lcc_ubg_YjF8uMWK-snZXRB6yezQmThRWHehQpYnWLI_n8arZv"
              />
            </div>
            <span className="font-headline font-black text-[#4b2409] dark:text-[#ffe3d4] text-lg tracking-tight">
              The Digital Atelier
            </span>
          </div>
          <button
            type="button"
            className="bg-primary text-on-primary px-5 py-2 rounded-xl font-label font-bold text-sm transition-transform scale-95 active:scale-90 hover:bg-primary-dim shadow-lg shadow-primary/10"
          >
            Follow on Etsy
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="relative overflow-hidden rounded-lg bg-surface-container-low min-h-[500px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 z-0">
              <img
                alt="Hero Lifestyle"
                className="w-full h-full object-cover"
                data-alt="Elegant interior scene with handmade ceramic vases and woven textiles, bathed in soft morning sunlight through a window"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWIlKnhDtePwMzqHe6l9aXe2Ucrfg-hBXOVh2BZv-MezlkBdFmSfXO_ka54H4pXXV31uYNsoaOTvpwQ4EXdjaDrnOdsOzXi3unCa6BTEcEpHNcPrPGg8OhpCOwzFvk3zJt82Go1lIKKFuisUq4Zt0cUcDwFpdNWtstf9ZGqzOsebKWrgChOpYuEElgFuNEFKq3ZRKBJArC-naZN3uameEq3lP9gm43bKESZp3S3REQNIMoWc1mS0hHw4jI5AEJKkIoJpJNmL-9l8x"
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
                Curated handmade treasures from the world's most talented independent makers, delivered to your doorstep.
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

        {/* Product Showcase (Asymmetric Bento Grid) */}
        <section className="px-6 mb-20" id="shop">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-headline text-3xl font-bold text-on-surface">
                Artisan Picks
              </h2>
              <p className="text-on-surface-variant mt-2 font-body">
                Hand-selected pieces that trended on your feed this week.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface font-label text-sm font-semibold">
                Home Decor
              </span>
              <span className="px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant font-label text-sm font-semibold">
                Jewelry
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-8 group">
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-[400px]">
                  <img
                    alt="Ceramic Set"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Handcrafted minimalist ceramic tea set with speckled glaze on a rustic wooden table, organic textures"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLb9W0qkR5dcPWI-qev_X26k_gKvak771IM1Sj21PBFefCNO_PAkYTQ4iHLrz6yH37Aq18Vb8gN9x7cUOv3AAJchSxQIRG_Z7cD2ApazJtSmiPPA3gMHmRz_5d0zxsYR62_xnrFQOF9217YyvDOj4r9B5I8UcnDbDIEKjxdc5SvQ7JA0G6WfIdAvZEqyc698k9qZZdmp4DrrKIfhNUzK4Xs0NkmbXreQlZHziRdeUVd3h_fiaGJbALYiNeLFbWLZG9PS-Wm2OGZeyP"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-primary"
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      Earthbound Ceramic Set
                    </h3>
                    <p className="text-on-surface-variant font-label font-bold mt-1">
                      $124.00
                    </p>
                  </div>
                  <button
                    type="button"
                    className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold transition-colors hover:bg-primary-dim"
                  >
                    Shop on Etsy
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Cards Stack */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm group">
                <div className="relative h-[180px]">
                  <img
                    alt="Gold Ring"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Macro shot of delicate gold layered rings with small ethical diamonds on a velvet background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9zrYszHokbOWZM4cs8JYFJMosGxgVLkZ9xJ1-ZGri-4dt7dQov1OZDtaZaxER_ZUjm4NiE2M1NJkn8dJHeMZzuHtfaG-OWq9iwjhqNKGm6_S1a0ewcX0jW-q4f4SZN0QXx7DIQ14mcXJ9h93LoXjqQPF3hMZwIsem2WMe5IENyuMpBTloqiyDjbhyd6EoVIAkdJa20S8GkreJ1SYpwEmDiylJqCKGq4DNaUKKxQrzu9oNLPMalks_P0RDZK7mU1vmuis32zsyHC8N"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-headline font-bold text-on-surface">
                    Celestial Gold Ring
                  </h4>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-on-surface-variant font-label font-bold">
                      $45.00
                    </span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">
                      shopping_cart
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm group">
                <div className="relative h-[180px]">
                  <img
                    alt="Linen Dress"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Soft beige sustainable linen dress hanging on a wooden hanger against a white textured wall"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8onvEoWf7LoEPvc8RlZ8bLqn-5QpbwS-bQ3SKBO7kiLXSmRbfeGS7w3a3Mce7FXYe9cQBXL49dtG_WuyoRlEoI5Jz5Jzu0omDTuoATZqjJOSGZGKrvehmEeHQ6G7FF-D_naBT6UMUFBOhU8Ude-Dq_j8VGSaETdILtBojqVPMQC--uKD-aJqfEk0pQ62M4UJp4mNC1geFtK23rGmVVY6amp6cwaVADRVROoOKGR2pa69lk_MLJEOOf-ye14TwreIbW-rnRmtLjcw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-headline font-bold text-on-surface">
                    Sustainable Linen Midi
                  </h4>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-on-surface-variant font-label font-bold">
                      $89.00
                    </span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">
                      shopping_cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Reviews */}
        <section className="bg-surface-container py-20 px-6 overflow-hidden">
          <div className="max-w-screen-xl mx-auto text-center mb-12">
            <div className="flex justify-center gap-1 text-primary mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Trusted by over 10,000 intentional shoppers
            </h2>
          </div>

          <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 no-scrollbar">
            <div className="min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
              <p className="italic text-on-surface-variant font-body mb-6">
                "I saw this maker on my Reels and had to have it. The quality is even better than the photos. My favorite Etsy find ever!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant" />
                <div>
                  <p className="font-label font-bold text-sm text-on-surface">Sarah Jenkins</p>
                  <p className="text-xs text-on-surface-variant">Verified Buyer</p>
                </div>
              </div>
            </div>

            <div className="min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
              <p className="italic text-on-surface-variant font-body mb-6">
                "Finally a bridge that makes it easy to find high-end crafts. This curation is spot on with my aesthetic."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant" />
                <div>
                  <p className="font-label font-bold text-sm text-on-surface">Marcus Thorne</p>
                  <p className="text-xs text-on-surface-variant">Influencer</p>
                </div>
              </div>
            </div>

            <div className="min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
              <p className="italic text-on-surface-variant font-body mb-6">
                "Shopping small has never been this seamless. Love the direct links to the Etsy shop owners!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant" />
                <div>
                  <p className="font-label font-bold text-sm text-on-surface">Elena Rossi</p>
                  <p className="text-xs text-on-surface-variant">Gift Curator</p>
                </div>
              </div>
            </div>
          </div>

          {/* "As Seen In" Logos */}
          <div className="mt-16 pt-12 border-t border-outline-variant/10 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <span className="font-headline font-black text-xl">VOGUE</span>
            <span className="font-headline font-black text-xl">Architectural Digest</span>
            <span className="font-headline font-black text-xl">Harpers Bazaar</span>
            <span className="font-headline font-black text-xl">Etsy Finds</span>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto bg-primary-container rounded-[3rem] p-10 md:p-16 text-center text-on-primary-container relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-on-primary-container/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                The Maker's Edit, in your inbox.
              </h2>
              <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
                Get early access to exclusive Etsy launches and seasonal collections from our top-rated makers.
              </p>
              <form
                className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
                onSubmit={onNewsletterSubmit}
              >
                <input
                  className="flex-grow rounded-xl bg-surface-container-lowest border-none px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label font-bold hover:bg-primary-dim transition-colors"
                >
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-[#ffe3d4] dark:bg-orange-950">
        <div className="flex flex-col items-center gap-8 py-16 px-8 text-center max-w-screen-xl mx-auto">
          <span className="font-headline text-[#4b2409] font-bold text-2xl">
            The Digital Atelier
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors"
              href="#"
            >
              Privacy
            </a>
            <a
              className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors"
              href="#"
            >
              Terms
            </a>
            <a
              className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors"
              href="#"
            >
              Shipping
            </a>
            <a
              className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors"
              href="#"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-6 mt-4">
            <span className="material-symbols-outlined text-[#805031] cursor-pointer hover:text-primary transition-colors">
              brand_awareness
            </span>
            <span className="material-symbols-outlined text-[#805031] cursor-pointer hover:text-primary transition-colors">
              podcasts
            </span>
            <span className="material-symbols-outlined text-[#805031] cursor-pointer hover:text-primary transition-colors">
              palette
            </span>
          </div>

          <p className="font-label text-sm text-[#805031] dark:text-orange-200/60 mt-8">
            © 2024 The Digital Atelier. Shop with Intention.
          </p>
        </div>
      </footer>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#fff4f0]/80 dark:bg-orange-950/80 backdrop-blur-xl z-50 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(75,36,9,0.06)] md:hidden">
        <a
          className="flex flex-col items-center justify-center bg-[#ffe3d4] dark:bg-orange-900/60 text-[#a13a00] dark:text-orange-100 rounded-[1.5rem] px-5 py-2 transition-all duration-300"
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            storefront
          </span>
          <span className="font-label text-[11px] font-semibold tracking-wide mt-1">
            Shop
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
          href="#"
        >
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-label text-[11px] font-semibold tracking-wide mt-1">
            New
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
          href="#"
        >
          <span className="material-symbols-outlined">favorite</span>
          <span className="font-label text-[11px] font-semibold tracking-wide mt-1">
            Saved
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label text-[11px] font-semibold tracking-wide mt-1">
            Profile
          </span>
        </a>
      </nav>
    </>
  );
}

