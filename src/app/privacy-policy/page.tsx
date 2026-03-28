import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <TopNav />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl font-bold text-on-surface mb-8">Privacy Policy</h1>

                <div className="prose prose-orange max-w-none">
                    <p className="text-lg text-on-surface-variant mb-12">
                        Your data is safe with us. JacketsStuffed is committed to ensuring that your privacy is protected.
                    </p>

                    <section className="mb-12">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Information Collection</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            We only collect the information necessary to process your order. This includes your Name, Shipping Address, Billing Address, and Email Address. This information is used solely for fulfilling your purchase and providing order updates.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Third Parties</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            We do not sell your data. We only share it with essential partners required to fulfill your order, such as shipping carriers (e.g., USPS, UPS, FedEx) and secure payment processors (e.g., PayPal, Stripe). These partners are only permitted to use your information for the specific purpose of assisting with your transaction.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Data Security</h2>
                        <p className="text-on-surface-variant leading-relaxed">
                            We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
