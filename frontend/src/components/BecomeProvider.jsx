import { Link } from "react-router-dom";

function BecomeProvider() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 shadow-2xl">

                <div className="grid items-center gap-10 px-10 py-14 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
                            Join Kalasetu
                        </p>

                        <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white">
                            Turn Your Skills
                            <br />
                            Into Opportunities
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-orange-100">
                            Showcase your talent, connect with customers,
                            receive verified bookings, build your reputation,
                            and grow your business with Kalasetu.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link to="/signup">

                                <button className="rounded-xl bg-white px-7 py-3 font-bold text-orange-600 transition hover:scale-105 hover:bg-orange-50">
                                    Register as Provider
                                </button>

                            </Link>

                            <button className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-600">
                                Learn More
                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="grid grid-cols-2 gap-5">

                        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

                            <div className="text-4xl">🛡️</div>

                            <h3 className="mt-4 text-xl font-bold text-white">
                                Verified Profile
                            </h3>

                            <p className="mt-2 text-sm text-orange-100">
                                Build trust with verified badges and certifications.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

                            <div className="text-4xl">📈</div>

                            <h3 className="mt-4 text-xl font-bold text-white">
                                More Customers
                            </h3>

                            <p className="mt-2 text-sm text-orange-100">
                                Reach thousands of people looking for your skills.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

                            <div className="text-4xl">⭐</div>

                            <h3 className="mt-4 text-xl font-bold text-white">
                                Earn Reviews
                            </h3>

                            <p className="mt-2 text-sm text-orange-100">
                                Collect ratings that increase your credibility.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

                            <div className="text-4xl">💼</div>

                            <h3 className="mt-4 text-xl font-bold text-white">
                                Grow Business
                            </h3>

                            <p className="mt-2 text-sm text-orange-100">
                                Receive bookings and expand your professional network.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default BecomeProvider;