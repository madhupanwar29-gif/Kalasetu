import SearchSection from "./SearchSection";
import FeaturedProfessionals from "./FeaturedProfessionals";
import HomeCategories from "./HomeCategories";
import PopularServices from "./PopularServices";
import BecomeProvider from "./BecomeProvider"; 
import Testimonials from "./Testimonials";
import Stats from "./Stats";



function HomeIndex() {
    return (
        <>
            <SearchSection />
            <FeaturedProfessionals />
            <HomeCategories /> 

            {/* Next Components */}

            <PopularServices /> 


             
             <BecomeProvider />

            < Testimonials />

            < Stats />

        </>
    );
}

export default HomeIndex;