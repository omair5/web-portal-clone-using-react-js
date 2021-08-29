import Advertisement from "../../components/Home/Advertisement";
import Blogs from "../../components/Home/Blogs";
import CarouselSlider from "../../components/Home/CarouselSlider";
import NewProjects from "../../components/Home/NewProjects";
import PopularCitiesForRent from "../../components/Home/PopularCitiesForRent";
import PopularCitiesToBuyProperties from "../../components/Home/PopularCitiesToBuyProperties";
import PopularLocationsForHome from "../../components/Home/PopularLocationsForHome";
import SimpleTabs from "../../components/Home/Tabs"
import AlertDialogSlide from "../../components/HomePopUpAdvertisement";
import Layout from "../../components/Layout/Layout";
import GoToTop from "../../GoToTop";

const Home = () => {
    return (
        <Layout FooterDisplay={true}>
            <AlertDialogSlide />
            <SimpleTabs />
            <CarouselSlider />
            {/* <Advertisement /> */}
            <NewProjects />
            <PopularCitiesToBuyProperties />
            <PopularLocationsForHome />
            <PopularCitiesForRent />
            <Blogs />
            <GoToTop />
        </Layout >
    );
}
export default Home;