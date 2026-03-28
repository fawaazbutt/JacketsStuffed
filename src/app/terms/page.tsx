import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

export default function TermsAndConditions() {
    return (
        <>
            <TopNav />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl font-bold text-on-surface mb-8">Terms & Conditions</h1>

                <div className="prose prose-orange max-w-none">
                    <section className="mb-12 p-8 bg-surface-container rounded-2xl">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">1. Shipping Policy</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-4">
                            We aim to get your premium jackets to you as quickly and safely as possible.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                            <li><strong>Processing Time:</strong> All orders are processed within 3–5 business days. Custom or specialty items (like cosplay jackets) may take longer.</li>
                            <li><strong>Shipping Rates:</strong> $50 for International Shipping, $100 for Express Shipping.</li>
                            <li><strong>Tracking:</strong> Once your order is shipped, you will receive an email with a tracking number.</li>
                            <li><strong>International Shipping:</strong> Etsy handles International Shipping and Custom fees.</li>
                        </ul>
                    </section>

                    <section className="mb-12 p-8 bg-surface-container rounded-2xl border border-primary/10">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">2. Return & Refund Policy</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-4">
                            We want you to love your purchase. If the fit isn't right, here is how we handle it:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                            <li><strong>Return Window:</strong> Items can be returned within 14 days of delivery.</li>
                            <li><strong>Condition:</strong> Jackets must be unworn, unwashed, and in their original packaging with tags attached.</li>
                            <li><strong>Non-Returnable Items:</strong> Custom-made jackets or items bought during a "Final Sale" are not eligible for return unless they arrive damaged.</li>
                            <li><strong>Refunds:</strong> Once we receive and inspect the item, your refund will be processed to your original payment method within 7–10 business days.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">3. Terms & Conditions of Use</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-on-surface mb-2">Product Accuracy</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    We strive to display the colors and textures of our leather and suede jackets as accurately as possible. However, slight variations may occur due to screen settings or the natural characteristics of the materials.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface mb-2">Pricing</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    All prices are subject to change without notice. We reserve the right to cancel orders if a product is listed at an incorrect price.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface mb-2">Intellectual Property</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    All content on this site, including product descriptions and photography, belongs to JacketsStuffed and may not be used without permission.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-on-surface mb-2">User Conduct</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    Customers agree not to use the site for any unlawful purpose or to harass our staff.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
