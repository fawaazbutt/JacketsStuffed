"use client";

export default function CategorySection() {
    const categories = [
        {
            name: "Jackets",
            href: "https://www.etsy.com/shop/JacketsStuffed?section_id=57069209",
            image: "/categories/jackets.jpg",
        },
        {
            name: "Costumes",
            href: "https://www.etsy.com/shop/JacketsStuffed?section_id=57054839",
            image: "/categories/costumes.jpg",
        },
        {
            name: "Sleeveless",
            href: "https://www.etsy.com/shop/JacketsStuffed?section_id=57054712",
            image: "/categories/sleeveless.jpg",
        },
        {
            name: "Pants",
            href: "https://www.etsy.com/shop/JacketsStuffed?section_id=57069241",
            image: "/categories/pants.jpg",
        },
    ];

    return (
        <section className="px-6 mb-20">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="reveal font-headline text-xl font-bold text-on-surface text-center mb-10 opacity-80 uppercase tracking-widest">
                    Shop by Category
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <a
                            key={category.name}
                            href={category.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`reveal group flex flex-col items-center transition-all duration-500 delay-${(index + 1) * 100}`}
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface-container-highest group-hover:border-primary/20 group-hover:scale-105 transition-all duration-500 shadow-sm group-hover:shadow-xl shadow-primary/5 mb-4">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://ui-avatars.com/api/?name=${category.name}&background=random&color=fff&size=200`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <span className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors text-center">
                                {category.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
