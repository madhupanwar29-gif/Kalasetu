function FeaturedProfessionals() {
    const professionals = [
        {
            id: 1,
            name: "Rahul Sharma",
            profession: "Electrician",
            city: "Pune",
            rating: 4.9,
            reviews: 128,
            price: "₹500 / Visit",
            badge: "Verified",
            available: true,
            image: "https://i.pravatar.cc/300?img=11"
        },
        {
            id: 2,
            name: "Priya Patil",
            profession: "Beautician",
            city: "Mumbai",
            rating: 4.8,
            reviews: 97,
            price: "₹700 / Session",
            badge: "Top Rated",
            available: true,
            image: "https://i.pravatar.cc/300?img=32"
        },
        {
            id: 3,
            name: "Amit Joshi",
            profession: "Photographer",
            city: "Pune",
            rating: 5.0,
            reviews: 186,
            price: "₹1500 / Event",
            badge: "Verified",
            available: false,
            image: "https://i.pravatar.cc/300?img=15"
        },
        {
            id: 4,
            name: "Sneha Kulkarni",
            profession: "Home Tutor",
            city: "Nashik",
            rating: 4.7,
            reviews: 82,
            price: "₹400 / Hour",
            badge: "Certified",
            available: true,
            image: "https://i.pravatar.cc/300?img=48"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="text-center mb-12">

                <p className="text-orange-600 font-semibold uppercase tracking-widest">
                    Featured Professionals
                </p>

                <h2 className="text-4xl font-bold text-stone-800 mt-3">
                    Meet Our Top Rated Experts
                </h2>

                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
                    Connect with trusted professionals who are highly rated by
                    customers and ready to deliver quality services.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {professionals.map((professional) => (

                    <div
                        key={professional.id}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden border border-stone-100"
                    >

                        <div className="relative">

                            <img
                                src={professional.image}
                                alt={professional.name}
                                className="w-full h-60 object-cover"
                            />

                            <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {professional.badge}
                            </span>

                            <span
                                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                                    professional.available
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                }`}
                            >
                                {professional.available
                                    ? "Available"
                                    : "Busy"}
                            </span>

                        </div>

                        <div className="p-6">

                            <h3 className="text-xl font-bold text-stone-800">
                                {professional.name}
                            </h3>

                            <p className="text-orange-600 font-medium mt-1">
                                {professional.profession}
                            </p>

                            <div className="flex items-center justify-between mt-4 text-sm text-stone-600">

                                <span>⭐ {professional.rating}</span>

                                <span>
                                    {professional.reviews} Reviews
                                </span>

                            </div>

                            <div className="flex items-center justify-between mt-3">

                                <span className="text-stone-500">
                                    📍 {professional.city}
                                </span>

                                <span className="font-bold text-violet-700">
                                    {professional.price}
                                </span>

                            </div>

                            <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition">
                                Book Now
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FeaturedProfessionals;