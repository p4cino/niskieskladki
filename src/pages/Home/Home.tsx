import styled from 'styled-components';

import Navbar from '../../components/Navbar/Navbar';
import HomeAboutUs from './components/HomeAboutUs';
import HomeHeroSlider from './components/HomeHeroSlider';
import HomeOurActivities from './components/HomeOurActivities';
import HomeOurCollections from './components/HomeOurCollections';
import HomeOurLiders from './components/HomeOurLiders';
import HomeOurPatron from './components/HomeOurPatron';
import HomeOurPatrons from './components/HomeOurPatrons';

const Home = () => {
    return (
        <>
            <Navbar />
            <section>
                <HomeHeroSlider />
            </section>
            <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <HomeAboutUs />
            </section>
            <section
                style={{
                    backgroundColor: '#f7f7f7',
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                <HomeOurCollections />
            </section>
            <section
                style={{
                    backgroundColor: '#0b4987',
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                <HomeOurActivities />
            </section>
            <BackgroundSection
                style={{
                    backgroundImage: 'url(/images/section/mises.jpg)'
                }}
            >
                <HomeOurPatron />
            </BackgroundSection>
            <section
                style={{
                    minHeight: '50vh',
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                <HomeOurLiders />
            </section>
            <BackgroundSection
                style={{
                    backgroundImage: 'url(/images/section/hands.jpg)'
                }}
            >
                <HomeOurPatrons />
            </BackgroundSection>
        </>
    );
};

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

export default Home;
