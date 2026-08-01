function Testimonials() {

    const testimonials = [

        {
            name: "Priya Patil",
            city: "Pune",
            review: "Booking an electrician through Kalasetu was incredibly simple. The professional arrived on time and completed the work perfectly.",
            rating: "★★★★★"
        },

        {
            name: "Amit Kulkarni",
            city: "Mumbai",
            review: "I found an amazing wedding photographer within minutes. The entire booking experience was smooth and trustworthy.",
            rating: "★★★★★"
        },

        {
            name: "Sneha Joshi",
            city: "Nashik",
            review: "As a tutor, Kalasetu helped me reach more students. I started getting regular bookings within a few weeks.",
            rating: "★★★★★"
        }

    ];

    return (

        <section className="max-w-7xl mx-auto px-6 py-20">

            <div className="text-center mb-14">

                <p className="text-orange-600 font-semibold uppercase tracking-[0.25em]">
                    Testimonials
                </p>

                <h2 className="mt-3 text-4xl font-bold text-stone-800">
                    Loved by Customers & Professionals
                </h2>

                <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
                    Thousands of people trust Kalasetu to discover skilled professionals
                    and grow their businesses.
                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

                {testimonials.map((item, index) => (

                    <div
                        key={index}
                        className="rounded-3xl bg-white shadow-lg border border-stone-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                    >

                        <p className="text-amber-500 text-xl">
                            {item.rating}
                        </p>

                        <p className="mt-6 leading-8 text-stone-600 italic">
                            "{item.review}"
                        </p>

                        <div className="mt-8 flex items-center">

                            <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">

                                {item.name.charAt(0)}

                            </div>

                            <div className="ml-4">

                                <h3 className="font-bold text-stone-800">
                                    {item.name}
                                </h3>

                                <p className="text-stone-500 text-sm">
                                    {item.city}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Testimonials;