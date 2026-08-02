import {
    BadgeCheck,
    ShieldCheck,
    Star,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: BadgeCheck,
        title: "Verified Professionals",
        description:
            "Every service provider goes through profile verification to ensure authenticity and trust.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Reliable",
        description:
            "Transparent communication, secure bookings, and a trusted platform for every customer.",
    },
    {
        icon: Star,
        title: "Quality Services",
        description:
            "Browse ratings, reviews, and portfolios before choosing the right professional.",
    },
    {
        icon: Zap,
        title: "Quick & Easy Booking",
        description:
            "Find, compare, and connect with professionals in just a few clicks.",
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-orange-50 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">

                    <span className="text-orange-500 font-semibold uppercase tracking-wider">
                        Why Choose Kalasetu
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-stone-800">
                        Built Around Trust & Simplicity
                    </h2>

                    <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                        Our platform is designed to make finding trusted
                        professionals simple, secure, and hassle-free.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">

                                    <Icon
                                        className="text-orange-500"
                                        size={30}
                                    />

                                </div>

                                <h3 className="mt-6 text-xl font-bold text-stone-800">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 text-stone-600 leading-7">

                                    {feature.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;