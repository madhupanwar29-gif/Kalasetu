import { ArrowRight, Users } from "lucide-react";

function JoinCommunity() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">

            <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-[40px] px-8 md:px-16 py-16 text-center text-white shadow-2xl">

                <div className="w-20 h-20 mx-auto rounded-full bg-orange-500 flex items-center justify-center">

                    <Users size={40} />

                </div>

                <h2 className="mt-8 text-4xl md:text-5xl font-bold">
                    Become a Part of the Kalasetu Community
                </h2>

                <p className="mt-6 max-w-3xl mx-auto text-lg text-stone-300 leading-8">
                    Whether you're searching for trusted professionals or you're
                    a skilled expert looking to grow your business, Kalasetu is
                    here to connect opportunities with talent.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                    <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">

                        Explore Services

                        <ArrowRight size={18} />

                    </button>

                    <button className="border border-white hover:bg-white hover:text-stone-900 transition px-8 py-4 rounded-xl font-semibold">

                        Become a Professional

                    </button>

                </div>

            </div>

        </section>
    );
}

export default JoinCommunity;