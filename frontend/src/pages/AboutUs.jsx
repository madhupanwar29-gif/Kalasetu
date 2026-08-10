import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/AboutHero";
import OurMission from "../components/OurMission";
import WhyChooseUs from "../components/WhyChooseUs";
import ImpactStats from "../components/ImpactStats";
import OurVision from "../components/OurVision";
import JoinCommunity from "../components/JoinCommunity";

function AboutUs() {
    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-violet-50 pt-24">

            <Navbar />

            <AboutHero />

            <OurMission />

            <WhyChooseUs />

            <ImpactStats />

            <OurVision />

            <JoinCommunity />

            <Footer />

        </div>
    );
}

export default AboutUs;