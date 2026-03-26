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
          Trusted by over 10,000 intentional shoppers
        </h2>
      </div>

      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 no-scrollbar">
        <div className="min-w-[300px] bg-surface-container-lowest p-8 rounded-lg">
          <p className="italic text-on-surface-variant font-body mb-6">
            &quot;I saw this maker on my Reels and had to have it. The quality is even better than the photos.
            My favorite Etsy find ever!&quot;
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
            &quot;Finally a bridge that makes it easy to find high-end crafts. This curation is spot on with my
            aesthetic.&quot;
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
            &quot;Shopping small has never been this seamless. Love the direct links to the Etsy shop owners!&quot;
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

      <div className="mt-16 pt-12 border-t border-outline-variant/10 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
        <span className="font-headline font-black text-xl">VOGUE</span>
        <span className="font-headline font-black text-xl">Architectural Digest</span>
        <span className="font-headline font-black text-xl">Harpers Bazaar</span>
        <span className="font-headline font-black text-xl">Etsy Finds</span>
      </div>
    </section>
  );
}

