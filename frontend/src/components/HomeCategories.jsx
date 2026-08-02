function HomeCategories() {
    const categories = [
        {
            icon: "⚡",
            name: "Electrician",
            professionals: "120+ Professionals"
        },
        {
            icon: "🪠",
            name: "Plumbing",
            professionals: "85+ Professionals"
        },
        {
            icon: "🎨",
            name: "Painting",
            professionals: "65+ Professionals"
        },
        {
            icon: "💄",
            name: "Beauty",
            professionals: "140+ Professionals"
        },
        {
            icon: "📸",
            name: "Photography",
            professionals: "95+ Professionals"
        },
        {
            icon: "📚",
            name: "Tutors",
            professionals: "160+ Professionals"
        },
        {
            icon: "🧹",
            name: "Cleaning",
            professionals: "70+ Professionals"
        },
        {
            icon: "💻",
            name: "Freelancers",
            professionals: "210+ Professionals"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="text-center mb-12">

                <p className="text-orange-600 font-semibold uppercase tracking-widest">
                    Browse Categories
                </p>

                <h2 className="text-4xl font-bold text-stone-800 mt-3">
                    Find Services By Category
                </h2>

                <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
                    Explore skilled professionals across a wide range of
                    trusted service categories.
                </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {categories.map((category, index) => (

                    <div
                        key={index}
                        className="group bg-white rounded-3xl border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer"
                    >

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-3xl group-hover:bg-orange-500 group-hover:text-white transition">

                            {category.icon}

                        </div>

                        <h3 className="mt-5 text-xl font-bold text-center text-stone-800">

                            {category.name}

                        </h3>

                        <p className="mt-2 text-center text-sm text-stone-500">

                            {category.professionals}

                        </p>

                        <button className="mt-6 w-full rounded-xl border border-orange-500 py-2 text-orange-600 font-semibold transition hover:bg-orange-500 hover:text-white">

                            Explore

                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default HomeCategories;