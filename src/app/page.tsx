import BottomNavBar from "../components/BottomNavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NewsletterCTA from "../components/NewsletterCTA";
import ProductShowcase from "../components/ProductShowcase";
import SocialProof from "../components/SocialProof";
import TopNav from "../components/TopNav";

export default function Page() {
  return (
    <>
      <TopNav />

      <main className="pt-24 pb-32">
        <HeroSection />
        <ProductShowcase />
        <SocialProof />
        <NewsletterCTA />
      </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}

