function PopularServices() {

    const services = [

        {
            icon: "⚡",
            title: "Fan Installation",
            provider: "Electricians",
            price: "Starts at ₹299"
        },

        {
            icon: "🪠",
            title: "Pipe Leakage Repair",
            provider: "Plumbers",
            price: "Starts at ₹399"
        },

        {
            icon: "💄",
            title: "Bridal Makeup",
            provider: "Beauty Experts",
            price: "Starts at ₹2,499"
        },

        {
            icon: "📸",
            title: "Wedding Photography",
            provider: "Photographers",
            price: "Starts at ₹7,999"
        },

        {
            icon: "📚",
            title: "Home Tuition",
            provider: "Tutors",
            price: "Starts at ₹500/hr"
        },

        {
            icon: "🧹",
            title: "House Cleaning",
            provider: "Cleaning Services",
            price: "Starts at ₹699"
        }

    ];

    return (

        <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="text-center mb-12">

                <p className="text-orange-600 font-semibold uppercase tracking-widest">
                    Popular Services
                </p>

                <h2 className="text-4xl font-bold text-stone-800 mt-3">
                    Services People Book Most
                </h2>

                <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
                    Explore the most requested services from verified
                    professionals across India.
                </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {services.map((service, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-3xl border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden"
                    >

                        <div className="bg-orange-100 h-24 flex items-center justify-center text-5xl">

                            {service.icon}

                        </div>

                        <div className="p-6">

                            <h3 className="text-xl font-bold text-stone-800">

                                {service.title}

                            </h3>

                            <p className="mt-2 text-stone-500">

                                {service.provider}

                            </p>

                            <p className="mt-4 text-lg font-semibold text-orange-600">

                                {service.price}

                            </p>

                            <button
                                className="mt-6 w-full rounded-xl bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition"
                            >

                                Book Service

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default PopularServices;