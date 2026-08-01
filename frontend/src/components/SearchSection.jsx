import { Search, MapPin } from "lucide-react";

function SearchSection() {
    return (
        <section className="bg-white py-14 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-stone-800">
                        Find the Right Professional
                    </h2>

                    <p className="mt-3 text-stone-500">
                        Search from thousands of verified service providers across India.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-violet-50 rounded-3xl p-8 shadow-lg">

                    <div className="grid md:grid-cols-3 gap-5">

                        <div className="relative">

                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Search services..."
                                className="w-full rounded-xl border border-stone-300 bg-white py-4 pl-12 pr-4 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none"
                            />

                        </div>

                        <div className="relative">

                            <MapPin
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Enter location"
                                className="w-full rounded-xl border border-stone-300 bg-white py-4 pl-12 pr-4 focus:border-violet-400 focus:ring-4 focus:ring-violet-100 outline-none"
                            />

                        </div>

                        <button
                            className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:scale-105 duration-300"
                        >
                            Search
                        </button>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">

                        {[
                            "Tailor",
                            "Photographer",
                            "Tutor",
                            "Electrician",
                            "Mehendi Artist",
                            "Home Cleaning"
                        ].map((item) => (

                            <button
                                key={item}
                                className="rounded-full bg-white px-5 py-2 border hover:bg-orange-500 hover:text-white duration-300"
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default SearchSection;