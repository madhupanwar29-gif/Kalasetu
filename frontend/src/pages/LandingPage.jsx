import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";
import "../styles/landing.css";

function LandingPage() {

    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <WhyChoose />
        </>
    );

}

export default LandingPage;