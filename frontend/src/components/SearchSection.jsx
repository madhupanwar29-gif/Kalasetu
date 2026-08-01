import { Search, MapPin, LocateFixed } from "lucide-react";

function SearchSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">

            <div className="rounded-3xl bg-white shadow-2xl border border-orange-100 p-8">

                {/* Heading */}
                <div className="text-center mb-8">

                    <h2 className="text-3xl font-bold text-stone-800">
                        Find Skilled Professionals Near You
                    </h2>

                    <p className="mt-3 text-stone-600">
                        Search verified artisans, freelancers and service providers
                        in your city.
                    </p>

                </div>

                {/* Search Form */}

                <div className="grid gap-5 lg:grid-cols-4">

                    {/* Service */}

                    <div>

                        <label className="block text-sm font-semibold text-stone-700 mb-2">
                            Service
                        </label>

                        <div className="relative">

                            <Search
                                className="absolute left-4 top-3.5 text-stone-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Electrician, Tailor..."
                                className="w-full rounded-xl border border-stone-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                            />

                        </div>

                    </div>

                    {/* Category */}

                    <div>

                        <label className="block text-sm font-semibold text-stone-700 mb-2">
                            Category
                        </label>

                        <select
                            className="w-full rounded-xl border border-stone-300 py-3 px-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                        >

                            <option>Select Category</option>
                            <option>Electrician</option>
                            <option>Plumber</option>
                            <option>Carpenter</option>
                            <option>Tailor</option>
                            <option>Photographer</option>
                            <option>Mehendi Artist</option>
                            <option>Painter</option>

                        </select>

                    </div>

                    {/* Location */}

                    <div>

                        <label className="block text-sm font-semibold text-stone-700 mb-2">
                            Location
                        </label>

                        <div className="relative">

                            <MapPin
                                className="absolute left-4 top-3.5 text-stone-400"
                                size={20}
                            />

                            <input
                                type="text"
                                placeholder="Enter your city"
                                className="w-full rounded-xl border border-stone-300 py-3 pl-11 pr-12 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                            />

                            <button
                                type="button"
                                className="absolute right-3 top-3 text-orange-500 hover:text-orange-700"
                                title="Use Current Location"
                            >
                                <LocateFixed size={18} />
                            </button>

                        </div>

                    </div>

                    {/* Search Button */}

                    <div className="flex items-end">

                        <button
                            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 font-semibold text-white transition hover:from-orange-600 hover:to-red-600 hover:shadow-lg"
                        >
                            Find Professionals
                        </button>

                    </div>

                </div>

                {/* Popular Searches */}

                <div className="mt-8">

                    <p className="text-sm font-semibold text-stone-700 mb-3">
                        Popular Searches
                    </p>

                    <div className="flex flex-wrap gap-3">

                        {[
                            "Electrician",
                            "Tailor",
                            "Photographer",
                            "Painter",
                            "Carpenter",
                            "Plumber",
                            "Mehendi Artist",
                            "Beautician",
                        ].map((item) => (

                            <button
                                key={item}
                                className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-500 hover:text-white"
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