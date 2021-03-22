import Navbar from "../../components/Navbar/Navbar";
import HomeHeroSlider from "./HomeHeroSlider";
import HomeAboutUs from "./HomeAboutUs";
import HomeOurCollections from "./HomeOurCollections";
import HomeOurActivities from "./HomeOurActivities";
import HomeOurPatron from "./HomeOurPatron";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Stowarzyszenie Niskie Składki - #LudzkieDziałanie nie jest nam obce</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Niskie Składki promują idee pluralizmu tolerancji ze względu na poglądy polityczne oraz prowadzą działalność na rzecz praw człowieka, swobód obywatelskich oraz wolności słowa i wyrażanych poglądów."
                />
                <meta
                    name="keywords"
                    content="#LudzkieDziałanie, Niskie Składki, Niskie, Składki, NS, Ludzkie,Działanie"
                />
                <meta property="og:title" content="Stowarzyszenie Niskie Składki" />
                <meta property="og:type" content="website" />
                {/*<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />*/}
                {/*<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
            </Head>
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
            <section style={{
                backgroundImage: 'url(/images/section/mises.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                paddingTop: '4rem',
                paddingBottom: '4rem'
            }}>
                <HomeOurPatron/>
            </section>
        </>
    );
}

export default Home;