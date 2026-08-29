import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

function Home() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_18%_12%,#fff0d9_0%,transparent_32%),radial-gradient(circle_at_82%_18%,#eee8ff_0%,transparent_38%),linear-gradient(135deg,#fff8ed_0%,#fffdf9_48%,#f7f1ff_100%)] pt-20 sm:pt-24">

            <Navbar />

            <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-6 sm:pt-14 lg:px-8">

                <h1 className="max-w-3xl bg-linear-to-r from-[#3f2136] via-[#522843] to-[#c65b2a] bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                    Find Trusted Professionals
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                    Search thousands of verified artisans, freelancers,
                    technicians and service providers near you.
                </p>

            </section>

            <HomeContent />

            <Footer />

        </div>
    );
}

export default Home;
