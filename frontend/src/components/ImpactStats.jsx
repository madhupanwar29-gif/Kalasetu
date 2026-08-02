import { Users, Briefcase, MapPinned, Award } from "lucide-react";

const stats = [
    {
        icon: Users,
        number: "500+",
        title: "Verified Professionals",
    },
    {
        icon: Briefcase,
        number: "2,000+",
        title: "Services Completed",
    },
    {
        icon: Award,
        number: "50+",
        title: "Service Categories",
    },
    {
        icon: MapPinned,
        number: "20+",
        title: "Cities Covered",
    },
];

function ImpactStats() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="text-center mb-14">

                <span className="text-orange-500 font-semibold uppercase tracking-wider">
                    Our Impact
                </span>

                <h2 className="mt-4 text-4xl font-bold text-stone-800">
                    Growing Every Day
                </h2>

                <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                    Every connection we create helps skilled professionals grow
                    while making quality services more accessible to customers.
                </p>

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >

                            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center">

                                <Icon
                                    className="text-orange-500"
                                    size={30}
                                />

                            </div>

                            <h3 className="mt-6 text-5xl font-extrabold text-orange-500">

                                {item.number}

                            </h3>

                            <p className="mt-3 text-stone-600 font-medium">

                                {item.title}

                            </p>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}

export default ImpactStats;