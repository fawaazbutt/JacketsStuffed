export default function SocialProof() {
  return (
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
          Trusted by over 12,000 intentional shoppers
        </h2>
      </div>

      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 no-scrollbar">
        <div className="reveal min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
          <p className="italic text-on-surface-variant font-body mb-6">
            "Man, this spacesuit is wild. I legit didn’t expect the stitching and detailing to be this clean.
            Worth every penny."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-variant" />
            <div>
              <p className="font-label font-bold text-sm text-on-surface">Albert K.</p>
              <p className="text-xs text-on-surface-variant">Spacesuit Buyer</p>
            </div>
          </div>
        </div>

        <div className="reveal delay-100 min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
          <p className="italic text-on-surface-variant font-body mb-6">
            "The leather jacket feels premium as hell. Heavy, structured, and looks way more expensive than it is.
            Got compliments day one."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-variant" />
            <div>
              <p className="font-label font-bold text-sm text-on-surface">Umair</p>
              <p className="text-xs text-on-surface-variant">Verified Buyer</p>
            </div>
          </div>
        </div>

        <div className="reveal delay-200 min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
          <p className="italic text-on-surface-variant font-body mb-6">
            "Grabbed the Santa suit for a Christmas party and bro… the quality shocked me. Thick fabric, proper fit,
            and looked pro-level in photos."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-variant" />
            <div>
              <p className="font-label font-bold text-sm text-on-surface">Christine</p>
              <p className="text-xs text-on-surface-variant">Christmas Santa Suit Buyer</p>
            </div>
          </div>
        </div>
      </div>    </section>
  );
}

