import Navbar from "../../components/Navbar/Navbar";
import HomeHeroSlider from "./HomeHeroSlider";
import HomeAboutUs from "./HomeAboutUs";
import HomeOurCollections from "./HomeOurCollections";
import HomeOurActivities from "./HomeOurActivities";

const Home = () => {
    return (
        <>
            <Navbar/>
            <section>
                <HomeHeroSlider/>
            </section>
            <section style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
                <HomeAboutUs/>
            </section>
            <section style={{backgroundColor: '#f7f7f7', paddingTop: '4rem', paddingBottom: '4rem'}}>
                <HomeOurCollections/>
            </section>
            <section style={{backgroundColor: '#0b4987', paddingTop: '4rem', paddingBottom: '4rem'}}>
                <HomeOurActivities/>
            </section>
        </>
    );
}

export default Home;