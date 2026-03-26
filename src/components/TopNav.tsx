export default function TopNav() {
  return (
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
  );
}

