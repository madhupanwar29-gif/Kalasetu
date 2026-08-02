import { Users, BriefcaseBusiness } from "lucide-react";

function OurMission() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div>

                    <span className="text-orange-500 font-semibold uppercase tracking-wider">
                        Our Mission
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-stone-800">
                        Bridging the Gap Between Talent and Opportunity
                    </h2>

                    <p className="mt-6 text-lg text-stone-600 leading-8">
                        Thousands of skilled professionals struggle to reach
                        potential customers, while many people find it difficult
                        to discover trusted service providers nearby.
                    </p>

                    <p className="mt-5 text-lg text-stone-600 leading-8">
                        Kalasetu was built to solve this problem by creating a
                        secure, transparent, and easy-to-use platform where
                        customers can connect with verified professionals across
                        multiple service categories.
                    </p>

                </div>

                {/* Right Side */}

                <div className="grid gap-6">

                    <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

                        <Users
                            className="text-orange-500"
                            size={42}
                        />

                        <h3 className="mt-5 text-2xl font-bold text-stone-800">
                            For Customers
                        </h3>

                        <p className="mt-3 text-stone-600 leading-7">
                            Easily discover verified professionals, compare
                            profiles, and book trusted services with confidence.
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">

                        <BriefcaseBusiness
                            className="text-orange-500"
                            size={42}
                        />

                        <h3 className="mt-5 text-2xl font-bold text-stone-800">
                            For Professionals
                        </h3>

                        <p className="mt-3 text-stone-600 leading-7">
                            Showcase your skills, reach more customers, build
                            credibility, and grow your business through one
                            trusted platform.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default OurMission;