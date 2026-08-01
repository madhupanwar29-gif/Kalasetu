import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-[#fff8ed] pt-28 sm:pt-32">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.30),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(244,114,182,0.22),transparent_26%),radial-gradient(circle_at_57%_95%,rgba(167,139,250,0.2),transparent_31%)]" />
            <div className="absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
            <div className="absolute -right-24 top-16 -z-10 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl" />

            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 pb-16 lg:flex-row lg:gap-16 lg:px-8 lg:pb-24">
                <div className="flex-1">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-100/80 px-4 py-2 text-sm font-bold text-orange-800 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden="true" />
                        Empowering Skills Across India
                    </span>

                    <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-[#3f2136] sm:text-6xl lg:text-7xl">
                        Every Skill
                        <span className="block text-orange-600">Deserves Recognition.</span>
                        <span className="block text-violet-800">Every Dream</span>
                        Deserves a Chance.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-8 text-stone-700 sm:text-lg">
                        Kalasetu connects skilled professionals with people looking for trusted services. From artisans to photographers, electricians to beauticians, every talent deserves the opportunity to grow.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link
                            to="/signup"
                            className="rounded-lg border-2 border-orange-600 bg-orange-600 px-7 py-3.5 font-bold text-white shadow-[4px_4px_0_#713b62] transition hover:-translate-y-1 hover:bg-rose-600 hover:shadow-[6px_7px_0_#713b62] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
                        >
                            Explore Services
                        </Link>
                        <button className="rounded-lg border-2 border-violet-700 bg-white/70 px-7 py-3.5 font-bold text-violet-800 transition hover:bg-violet-700 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="relative flex flex-1 justify-center lg:justify-end">
                    <div className="absolute -right-2 top-8 h-20 w-20 rotate-12 rounded-2xl border-2 border-rose-200 bg-rose-100/80" aria-hidden="true" />
                    <div className="relative w-full max-w-[520px] overflow-hidden rounded-[2rem] border-2 border-white/90 bg-gradient-to-br from-orange-300 via-amber-100 to-violet-300 p-3 shadow-[12px_14px_0_rgba(88,40,75,0.17)]">
                        <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[1.5rem] border-2 border-[#4f2944]/15 bg-[#fff8ed]/90 p-7 sm:min-h-[470px] sm:p-10">
                            <div className="absolute -right-16 -top-14 h-52 w-52 rounded-full bg-orange-300/70 blur-2xl" />
                            <div className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-violet-300/60 blur-2xl" />
                            <div className="relative flex items-center justify-between">
                                <span className="rounded-full border border-orange-300 bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Made locally</span>
                                <span className="text-3xl" role="img" aria-label="palette">🎨</span>
                            </div>
                            <div className="relative rounded-2xl border-2 border-dashed border-[#713b62]/35 bg-white/55 p-7 text-center backdrop-blur-sm">
                                <div className="mx-auto grid h-24 w-24 place-items-center rounded-2xl border-2 border-amber-200 bg-amber-100 text-5xl shadow-[5px_5px_0_rgba(249,115,22,0.25)]" role="img" aria-label="artisan tools">🧶</div>
                                <h2 className="mt-6 text-2xl font-black text-[#3f2136] sm:text-3xl">A marketplace made for makers.</h2>
                                <p className="mt-3 leading-7 text-stone-700">Share your craft, find trusted help, and let every local skill shine.</p>
                            </div>
                            <div className="relative flex items-center justify-between border-t border-[#713b62]/15 pt-5 text-sm font-bold text-[#713b62]">
                                <span>Crafted with trust</span><span className="text-orange-600">01 — 04</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
