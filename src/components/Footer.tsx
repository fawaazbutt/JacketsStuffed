export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-[#ffe3d4] dark:bg-orange-950">
      <div className="flex flex-col items-center gap-8 py-16 px-8 text-center max-w-screen-xl mx-auto">
        <a href="/" className="block">
          <img
            src="/logo.png"
            alt="Jackets Stuffed logo"
            className="h-16 w-auto object-contain mx-auto"
          />
        </a>

        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="/privacy-policy">
            Privacy
          </a>
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="/terms">
            Terms
          </a>
          <a className="font-label text-sm text-[#805031] dark:text-orange-200/60 hover:text-[#a13a00] transition-colors" href="#">
            Contact
          </a>
        </div>

        <div className="flex gap-6 mt-4">
          <a
            href="https://facebook.com/jacketsstuffed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#805031] hover:text-primary transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4V13.5z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/jacketsstuffed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#805031] hover:text-primary transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2c2.717 0 3.056.01 4.122.058 1.066.048 1.79.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.417 1.361.465 2.427.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.066-.218 1.79-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.637.247-1.361.417-2.427.465-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.066-.048-1.79-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.637-.417-1.361-.465-2.427-.047-1.066-.058-1.405-.058-4.122s.01-3.056.058-4.122c.048-1.066.218-1.79.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.523c.637-.247 1.361-.417 2.427-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@jacketsstuffed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#805031] hover:text-primary transition-all hover:scale-110"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.735 8.735 0 01-1.89-1.33c-.01 4.14.01 8.27-.02 12.41-.02 1.58-.39 3.3-1.6 4.34-1.96 1.71-5.17 1.43-6.82-.53-1.47-1.66-1.49-4.57-.14-6.39 1.12-1.55 3.19-2.31 5.05-1.9v4.07c-.12-.03-.24-.06-.36-.08-1-.23-2.13.13-2.73.98-.67 1.05-.27 2.65.86 3.09 1.28.5 2.89-.1 3.24-1.49.12-.5.1-.99.11-1.49-.01-5.63.02-11.25-.03-16.88a7.1 7.1 0 00-1.83-4.12h-.03c-.09 0-.17-.01-.26-.01V.02zm-1.1 3.51V.03c.53 0 1.05.01 1.58.01v.4c.06 1.13.56 2.22 1.44 2.94.88.72 2.05 1.04 3.18 1.12h.74v2.58a6.39 6.39 0 01-4.72-2.38 5.48 5.48 0 01-.64-.81v8.86c.01 1.34-.33 2.77-1.37 3.65-1.57 1.35-4.22 1.13-5.54-.42-1.29-1.45-1.2-3.87.21-5.23.95-.91 2.39-1.16 3.63-.64.12.05.23.11.35.18l.01-1.34-1.87-.24c-1.66-.21-3.41.34-4.55 1.6-1.54 1.71-1.42 4.67.28 6.22 1.83 1.66 4.93 1.37 6.45-.52 1.05-1.3.93-3.1.92-4.66.01-2.92.01-5.83.01-8.75z" />
            </svg>
          </a>
        </div>

        <p className="font-label text-sm text-[#805031] dark:text-orange-200/60 mt-8">
          © 2026 Jackets Stuffed. Shop on Etsy with Intention.
        </p>
      </div>
    </footer>
  );
}

