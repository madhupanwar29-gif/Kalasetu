function WhyChoose() {

    const features = [

        {
            icon: "✔️",
            title: "Verified Professionals",
            description: "Every service provider goes through a verification process to ensure trust and authenticity."
        },

        {
            icon: "⭐",
            title: "Quality Services",
            description: "Discover skilled professionals committed to delivering quality work with excellence."
        },

        {
            icon: "🤝",
            title: "Trusted Community",
            description: "A platform where customers and professionals build lasting relationships through trust."
        },

        {
            icon: "🔒",
            title: "Secure & Reliable",
            description: "Your bookings and personal information remain protected with secure processes."
        }

    ];

    return (

        <section className="why-choose">

            <h2>Why Choose Kalasetu?</h2>

            <p>
                We connect talented professionals with people who value
                quality, trust, and craftsmanship.
            </p>

            <div className="feature-grid">

                {features.map((feature, index) => (

                    <div className="feature-card" key={index}>

                        <div className="feature-icon">
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default WhyChoose;