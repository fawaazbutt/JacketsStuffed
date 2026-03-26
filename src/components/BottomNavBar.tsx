export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#fff4f0]/80 dark:bg-orange-950/80 backdrop-blur-xl z-50 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(75,36,9,0.06)] md:hidden">
      <a
        className="flex flex-col items-center justify-center bg-[#ffe3d4] dark:bg-orange-900/60 text-[#a13a00] dark:text-orange-100 rounded-[1.5rem] px-5 py-2 transition-all duration-300"
        href="#"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          storefront
        </span>
        <span className="font-label text-[11px] font-semibold tracking-wide mt-1">Shop</span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
        href="#"
      >
        <span className="material-symbols-outlined">auto_awesome</span>
        <span className="font-label text-[11px] font-semibold tracking-wide mt-1">New</span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
        href="#"
      >
        <span className="material-symbols-outlined">favorite</span>
        <span className="font-label text-[11px] font-semibold tracking-wide mt-1">Saved</span>
      </a>

      <a
        className="flex flex-col items-center justify-center text-[#805031] dark:text-orange-200/70 px-5 py-2 hover:opacity-80 transition-all duration-300"
        href="#"
      >
        <span className="material-symbols-outlined">person</span>
        <span className="font-label text-[11px] font-semibold tracking-wide mt-1">Profile</span>
      </a>
    </nav>
  );
}

