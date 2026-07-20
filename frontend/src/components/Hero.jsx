import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <p className="hero-tag">
                    Empowering Skills Across India
                </p>

                <h1>
                    Every Skill Deserves Recognition.
                    <br />
                    Every Dream Deserves a Chance.
                </h1> 

                <div className="hero-divider"></div>

                <p className="hero-text">
                    Kalasetu bridges skilled professionals with people who
                    value quality work. From traditional artisans to modern
                    service providers, every talent deserves an opportunity
                    to grow.
                </p>

                <div className="hero-buttons">

    <Link to="/signup">

        <button className="primary-btn">
            Explore Services
        </button>

    </Link>

    <button className="secondary-btn">
        Learn More
    </button>

</div>

            </div>

            <div className="hero-right">

                <div className="hero-placeholder">

                    <div className="placeholder-border">

                        <h2>Hero Illustration</h2>

                        <p>
                            Custom artwork will be placed here.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;