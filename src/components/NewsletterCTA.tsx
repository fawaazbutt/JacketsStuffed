"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState<string>("");

  const onNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    alert(`Thanks! We'll send ${email.trim()} the Maker's Edit updates.`);
    setEmail("");
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto bg-primary-container rounded-[3rem] p-10 md:p-16 text-center text-on-primary-container relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-on-primary-container/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="reveal font-headline text-3xl md:text-4xl font-bold mb-6">JacketStuffed's Weekly, in your inbox.</h2>
          <p className="reveal delay-100 text-lg opacity-90 mb-10 max-w-xl mx-auto">
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
  );
}

