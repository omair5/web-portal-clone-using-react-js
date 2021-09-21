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
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout FooterDisplay={true}>
            <AlertDialogSlide />
            <SimpleTabs />

            <LazyLoadComponent>
                <CarouselSlider />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <Advertisement />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <NewProjects />
            </LazyLoadComponent>

            <PopularCitiesToBuyProperties />
            <PopularLocationsForHome />
            <PopularCitiesForRent />

            <LazyLoadComponent>
                <Blogs />
            </LazyLoadComponent>

            <GoToTop />
        </Layout >
    );
}
export default Home;