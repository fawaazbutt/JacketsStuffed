export default function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fff4f0]/80 dark:bg-orange-950/80 backdrop-blur-xl shadow-[0_40px_60px_-15px_rgba(75,36,9,0.04)]">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3">
          <a href="/" className="block">
            <img
              alt="Jackets Stuffed logo"
              className="h-12 w-auto object-contain"
              src="/logo.png"
            />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.etsy.com/shop/JacketsStuffed"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all scale-95 active:scale-90 shadow-sm"
            title="View Catalog"
          >
            <span className="material-symbols-outlined text-xl">grid_view</span>
          </a>
          <a
            href="https://www.etsy.com/fi-en/signin?workflow=ZmF2b3JpdGVfdXNlcl9pZDoxMTUxMTg0MTQzOjE3NzQ3MDQ0NDk6NjZlNmFkMDRjNGIwNGU0MWUzYmY4NmQ4MzU3M2E0ZmU%3D&use_follow_text=1&from_page=https%3A%2F%2Fwww.etsy.com%2Fshop%2FJacketsStuffed"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-5 py-2 rounded-xl font-label font-bold text-sm transition-transform scale-95 active:scale-90 hover:bg-primary-dim shadow-lg shadow-primary/10 flex items-center justify-center whitespace-nowrap"
          >
            Follow on Etsy
          </a>
        </div>
      </div>
    </nav>
  );
}

