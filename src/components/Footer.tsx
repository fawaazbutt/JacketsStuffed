export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-[#ffe3d4] dark:bg-orange-950">
      <div className="flex flex-col items-center gap-8 py-16 px-8 text-center max-w-screen-xl mx-auto">
        <span className="font-headline text-[#4b2409] font-bold text-2xl">Jackets Stuffed</span>

        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="#">
            Privacy
          </a>
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="#">
            Terms
          </a>
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="#">
            Shipping
          </a>
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="#">
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
          © 2024 Jackets Stuffed. Shop with Intention.
        </p>
      </div>
    </footer>
  );
}

