import Head from "next/head";
import styled from 'styled-components';
import Navbar from "../../components/Navbar/Navbar";
import HomeHeroSlider from "./components/HomeHeroSlider";
import HomeAboutUs from "./components/HomeAboutUs";
import HomeOurCollections from "./components/HomeOurCollections";
import HomeOurActivities from "./components/HomeOurActivities";
import HomeOurPatron from "./components/HomeOurPatron";
import HomeOurPatrons from "./components/HomeOurPatrons";
import HomeOurLiders from "./components/HomeOurLiders";

const BackgroundSection = styled.div`
  background-size: cover;
  background-position: center;
  align-items: center;
  min-height: 50vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
  position: relative;
  display: flex;

  :before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
  }
`;

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
                <meta property="og:title" content="Stowarzyszenie Niskie Składki"/>
                <meta property="og:type" content="website"/>
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
            <BackgroundSection style={{
                backgroundImage: 'url(/images/section/mises.jpg)',
            }}>
                <HomeOurPatron/>
            </BackgroundSection>
            <section style={{minHeight: '50vh', paddingTop: '4rem', paddingBottom: '4rem'}}>
                <HomeOurLiders/>
            </section>
            <BackgroundSection style={{
                backgroundImage: 'url(/images/section/hands.jpg)',
            }}>
                <HomeOurPatrons/>
            </BackgroundSection>
        </>
    );
}

export default Home;