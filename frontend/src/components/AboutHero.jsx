import { ArrowRight } from "lucide-react";

function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* Left Content */}

                <div>

                    <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full">
                        About Kalasetu
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-stone-800 leading-tight">
                        Connecting
                        <span className="text-orange-500"> Skilled Professionals </span>
                        with People Who Need Them.
                    </h1>

                    <p className="mt-6 text-lg text-stone-600 leading-8">
                        Kalasetu is a trusted service marketplace that helps
                        customers discover verified professionals across
                        multiple service categories while empowering local
                        talent to grow their business.
                    </p>

                    <div className="mt-10 flex gap-4">

                        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-xl transition">

                            Explore Services

                            <ArrowRight size={18} />

                        </button>

                        <button className="border border-stone-300 hover:border-orange-500 hover:text-orange-500 font-semibold px-7 py-3 rounded-xl transition">

                            Learn More

                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div>

                    <div className="rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 h-[450px] flex items-center justify-center shadow-2xl">

                        <div className="text-center text-white px-10">

                            <h2 className="text-4xl font-bold">
                                Kalasetu
                            </h2>

                            <p className="mt-4 text-lg opacity-90">
                                Empowering Local Talent
                                <br />
                                Building Trusted Connections
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutHero;