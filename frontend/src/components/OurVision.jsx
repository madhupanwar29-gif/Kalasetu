import { Rocket, Globe, Handshake } from "lucide-react";

function OurVision() {
    return (
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center text-white">

                    <span className="uppercase tracking-widest font-semibold">
                        Our Vision
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Building India's Most Trusted Service Marketplace
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-orange-100">
                        We envision a future where every skilled professional,
                        whether from a city or a small village, has equal
                        opportunities to showcase their talent, grow their
                        business, and connect with customers through one trusted
                        digital platform.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center text-white">

                        <Rocket
                            className="mx-auto"
                            size={42}
                        />

                        <h3 className="mt-5 text-2xl font-bold">
                            Innovation
                        </h3>

                        <p className="mt-3 text-orange-100 leading-7">
                            Continuously improving the platform with modern
                            technology to simplify service discovery.
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center text-white">

                        <Handshake
                            className="mx-auto"
                            size={42}
                        />

                        <h3 className="mt-5 text-2xl font-bold">
                            Trust
                        </h3>

                        <p className="mt-3 text-orange-100 leading-7">
                            Creating long-lasting relationships between
                            customers and verified professionals.
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center text-white">

                        <Globe
                            className="mx-auto"
                            size={42}
                        />

                        <h3 className="mt-5 text-2xl font-bold">
                            Accessibility
                        </h3>

                        <p className="mt-3 text-orange-100 leading-7">
                            Making quality services available to everyone,
                            everywhere across India.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default OurVision;