import Navbar from "../../components/Navbar/Navbar";
import HomeHeroSlider from "./HomeHeroSlider";
import HomeAboutUs from "./HomeAboutUs";
import HomeOurCollections from "./HomeOurCollections";

const Home = () => {
    return (
        <>
            <Navbar/>
            <section>
                <HomeHeroSlider/>
            </section>
            <section style={{height: `100vh`}}>
                <HomeAboutUs/>
            </section>
            <section style={{height: `100vh`}}>
                <HomeOurCollections/>
            </section>
        </>
    );
}

export default Home;