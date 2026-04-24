import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CategoriesShowcase from './components/CategoriesShowcase';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const Page = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeaturedProducts />
            <CategoriesShowcase />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Page;