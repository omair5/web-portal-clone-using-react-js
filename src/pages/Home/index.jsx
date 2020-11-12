import Advertisement from "../../components/Home/Advertisement";
import Blogs from "../../components/Home/Blogs";
import CarouselSlider from "../../components/Home/CarouselSlider";
import NewProjects from "../../components/Home/NewProjects";
import PopularCitiesForRent from "../../components/Home/PopularCitiesForRent";
import PopularCitiesToBuyProperties from "../../components/Home/PopularCitiesToBuyProperties";
import PopularLocationsForHome from "../../components/Home/PopularLocationsForHome";
import SimpleTabs from "../../components/Home/Tabs"
import Layout from "../../components/Layout/Layout";

const Home = () => {
    return (
        <Layout >
            <SimpleTabs />
            <CarouselSlider />
            <Advertisement />
            <NewProjects />
            <PopularCitiesToBuyProperties />
            <PopularLocationsForHome />
            <PopularCitiesForRent />
            <Blogs />
        </Layout >
    );
}
export default Home;