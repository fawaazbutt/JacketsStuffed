export default function ProductShowcase() {
  return (
    <section className="px-6 mb-20" id="products">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="reveal">
          <h2 className="font-headline text-3xl font-bold text-on-surface">Top Picks</h2>
          <p className="text-on-surface-variant mt-2 font-body">
            Hand-selected pieces that trended on your feed this week.
          </p>
        </div>
        <a
          href="https://www.etsy.com/shop/JacketsStuffed"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal delay-100 flex items-center gap-2 text-primary font-label font-bold hover:gap-3 transition-all"
        >
          View all on Etsy
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Large Feature Card */}
        <div className="reveal md:col-span-4 group h-full">
          <a
            href="https://www.etsy.com/fi-en/listing/4412981082/mens-oversized-black-leather-bomber"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col block"
          >
            <div className="relative flex-1 min-h-[400px]">
              <img
                alt="Black Bomber Jacket"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://i.etsystatic.com/62758182/r/il/b34c90/7445897494/il_794xN.7445897494_gxo2.jpg"
              />
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Black Bomber Jacket</h3>
                <p className="text-on-surface-variant font-label font-bold mt-1">$199.00</p>
              </div>
              <div className="w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold transition-colors hover:bg-primary-dim whitespace-nowrap text-center">
                Shop on Etsy
              </div>
            </div>
          </a>
        </div>

        {/* Center Secondary Cards Stack */}
        <div className="md:col-span-4 flex flex-col gap-6 h-full">
          <a
            href="https://www.etsy.com/listing/4394140971/space-flight-suit-astronaut-costume-blue?ref=shop_home_feat_2&pro=1&logging_key=c8ddde43df03aeec8fdeffd9312b047e1c28fab8%3A4394140971"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal delay-100 bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm group flex-1 flex flex-col block"
          >
            <div className="relative flex-1 min-h-[160px]">
              <img
                alt="Space Flight Suit"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/space-suit.jpeg"
              />
            </div>
            <div className="p-4">
              <h4 className="font-headline font-bold text-on-surface">Space Flight Suit</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-on-surface-variant font-label font-bold">$299.00</span>
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
              </div>
            </div>
          </a>

          <a
            href="https://www.etsy.com/listing/4405293465/mens-black-leather-catsuit-muscle-fit?ls=r&ref=items-pagination-3&pro=1&content_source=096f2f6582365cbc99fdc47a0ba0efb1%253ALT647bcf8c3373592957aad6c6ddf67bd1d0d26179&logging_key=096f2f6582365cbc99fdc47a0ba0efb1%3ALT647bcf8c3373592957aad6c6ddf67bd1d0d26179"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal delay-200 bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm group flex-1 flex flex-col block"
          >
            <div className="relative flex-1 min-h-[160px]">
              <img
                alt="Black Cat Suit"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/black-cat-suit.jpeg"
              />
            </div>
            <div className="p-4">
              <h4 className="font-headline font-bold text-on-surface">Black Cat Suit</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-on-surface-variant font-label font-bold">$299.00</span>
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
              </div>
            </div>
          </a>
        </div>

        {/* Right Large Feature Card */}
        <div className="reveal delay-300 md:col-span-4 group h-full">
          <a
            href="https://www.etsy.com/listing/4472207140/mens-black-leather-safari-military-field?ref=shop_home_active_2&pro=1&logging_key=6b0c51153d9bfbca55e1616c2145463eff0c6caa%3A4472207140"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col block"
          >
            <div className="relative flex-1 min-h-[400px]">
              <img
                alt="Black Military Field Jacket"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://i.etsystatic.com/62758182/r/il/5cb41b/7806852556/il_794xN.7806852556_oqml.jpg"
              />
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Black Military Field Jacket</h3>
                <p className="text-on-surface-variant font-label font-bold mt-1">$249.00</p>
              </div>
              <div className="w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold transition-colors hover:bg-primary-dim whitespace-nowrap text-center">
                Shop on Etsy
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

