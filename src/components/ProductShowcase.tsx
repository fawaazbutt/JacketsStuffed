export default function ProductShowcase() {
  return (
    <section className="px-6 mb-20" id="shop">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface">Artisan Picks</h2>
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
                <h3 className="font-headline text-xl font-bold text-on-surface">Earthbound Ceramic Set</h3>
                <p className="text-on-surface-variant font-label font-bold mt-1">$124.00</p>
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
              <h4 className="font-headline font-bold text-on-surface">Celestial Gold Ring</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-on-surface-variant font-label font-bold">$45.00</span>
                <span className="material-symbols-outlined text-primary cursor-pointer">shopping_cart</span>
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
              <h4 className="font-headline font-bold text-on-surface">Sustainable Linen Midi</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-on-surface-variant font-label font-bold">$89.00</span>
                <span className="material-symbols-outlined text-primary cursor-pointer">shopping_cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

