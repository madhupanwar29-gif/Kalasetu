function Stats() {

    const stats = [

        {
            number: "10,000+",
            title: "Verified Professionals"
        },

        {
            number: "50,000+",
            title: "Happy Customers"
        },

        {
            number: "25,000+",
            title: "Successful Bookings"
        },

        {
            number: "98%",
            title: "Customer Satisfaction"
        }

    ];

    return (

        <section className="py-20 bg-gradient-to-r from-violet-600 to-orange-500">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">

                    <p className="uppercase tracking-[0.25em] text-orange-200 font-semibold">
                        Kalasetu in Numbers
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-white">
                        Growing Every Day
                    </h2>

                    <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
                        Thousands of professionals and customers trust Kalasetu
                        to connect, collaborate and grow together.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-center py-10 px-6 hover:bg-white/20 transition duration-300"
                        >

                            <h3 className="text-5xl font-extrabold text-white">
                                {item.number}
                            </h3>

                            <p className="mt-4 text-lg text-orange-100">
                                {item.title}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Stats;