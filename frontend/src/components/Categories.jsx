function Categories() {
    const categories = [
        { icon: "🎨", name: "Artisans", color: "bg-orange-100 border-orange-200 group-hover:bg-orange-200", accent: "group-hover:border-orange-400" },
        { icon: "🧵", name: "Tailoring", color: "bg-violet-100 border-violet-200 group-hover:bg-violet-200", accent: "group-hover:border-violet-400" },
        { icon: "💄", name: "Beauty", color: "bg-rose-100 border-rose-200 group-hover:bg-rose-200", accent: "group-hover:border-rose-400" },
        { icon: "📸", name: "Photography", color: "bg-sky-100 border-sky-200 group-hover:bg-sky-200", accent: "group-hover:border-sky-400" },
        { icon: "🏠", name: "Home Services", color: "bg-amber-100 border-amber-200 group-hover:bg-amber-200", accent: "group-hover:border-amber-400" },
        { icon: "🎉", name: "Events", color: "bg-yellow-100 border-yellow-200 group-hover:bg-yellow-200", accent: "group-hover:border-yellow-400" },
        { icon: "📚", name: "Tutors", color: "bg-red-100 border-red-200 group-hover:bg-red-200", accent: "group-hover:border-red-400" },
        { icon: "💻", name: "Freelancers", color: "bg-cyan-100 border-cyan-200 group-hover:bg-cyan-200", accent: "group-hover:border-cyan-400" }
    ];

    return (
        <section className="relative overflow-hidden bg-[#fff3e5] py-20 sm:py-24" id="categories">
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.24),transparent_70%)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
                    <span className="font-bold uppercase tracking-[0.18em] text-orange-700">Categories</span>
                    <h2 className="mt-3 text-4xl font-black tracking-tight text-[#3f2136] md:text-5xl">Explore Popular Categories</h2>
                    <p className="mt-5 text-lg leading-8 text-stone-700">Discover trusted professionals across a wide range of services tailored to your everyday needs.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            className={`group min-h-48 rounded-2xl border-2 border-[#713b62]/20 bg-white/75 p-5 text-center shadow-[0_8px_18px_rgba(101,56,80,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_30px_rgba(101,56,80,0.15)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 ${category.accent}`}
                        >
                            <span className={`mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border-2 text-3xl shadow-sm transition duration-300 group-hover:scale-110 ${category.color}`} role="img" aria-label={category.name}>
                                {category.icon}
                            </span>
                            <span className="block text-lg font-extrabold text-[#3f2136]">{category.name}</span>
                            <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-stone-500 transition group-hover:text-orange-700">Explore →</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
