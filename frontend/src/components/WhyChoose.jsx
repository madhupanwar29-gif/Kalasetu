function WhyChoose() {
    const features = [
        { icon: "✓", title: "Verified Professionals", description: "Every service provider is carefully verified to ensure trust, authenticity, and peace of mind." },
        { icon: "★", title: "Quality Services", description: "Connect with skilled professionals dedicated to delivering exceptional quality and craftsmanship." },
        { icon: "♥", title: "Trusted Community", description: "A growing community where customers and professionals build long-term relationships." },
        { icon: "⌂", title: "Secure & Reliable", description: "Safe bookings, secure information, and a reliable platform you can always trust." }
    ];

    return (
        <section className="relative overflow-hidden bg-[#f1eafa] py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_65%,rgba(251,146,60,0.22),transparent_23%),radial-gradient(circle_at_91%_25%,rgba(244,114,182,0.2),transparent_26%)]" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                    <span className="font-bold uppercase tracking-[0.18em] text-violet-800">Why Kalasetu</span>
                    <h2 className="mt-3 text-4xl font-black tracking-tight text-[#3f2136] md:text-5xl">Why Choose Kalasetu?</h2>
                    <p className="mt-5 text-lg leading-8 text-stone-700">We connect talented professionals with customers through trust, quality, and transparency.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <article key={feature.title} className="group relative overflow-hidden rounded-2xl border-2 border-white/80 bg-white/75 p-7 shadow-[0_10px_24px_rgba(75,42,94,0.11)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_18px_36px_rgba(75,42,94,0.17)]">
                            <span className="absolute right-4 top-3 text-6xl font-black text-violet-100" aria-hidden="true">0{index + 1}</span>
                            <div className="relative grid h-14 w-14 place-items-center rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-100 to-rose-100 text-2xl font-black text-[#713b62] shadow-sm transition group-hover:rotate-6" aria-hidden="true">{feature.icon}</div>
                            <h3 className="relative mt-6 text-xl font-black text-[#3f2136]">{feature.title}</h3>
                            <p className="relative mt-3 leading-7 text-stone-700">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
