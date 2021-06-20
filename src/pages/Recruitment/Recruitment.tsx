// import styled from 'styled-components';

import Navbar from '../../components/Navbar/Navbar';
import HomeHeroSlider from '../Home/components/HomeHeroSlider';
import RecruitmentHowToJoin from './components/RecruitmentHowToJoin';

const Recruitment = () => {
    return (
        <>
            <Navbar />
            <section>
                <HomeHeroSlider />
            </section>
            <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <RecruitmentHowToJoin />
            </section>
            {/*<section*/}
            {/*    style={{*/}
            {/*        backgroundColor: '#0b4987',*/}
            {/*        paddingTop: '4rem',*/}
            {/*        paddingBottom: '4rem',*/}
            {/*        minHeight: '100vh'*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <span>Test</span>*/}
            {/*</section>*/}
        </>
    );
};

// const BackgroundSection = styled.div`
//     background-size: cover;
//     background-position: center;
//     align-items: center;
//     min-height: 50vh;
//     padding-top: 4rem;
//     padding-bottom: 4rem;
//     position: relative;
//     display: flex;
//
//     :before {
//         content: '';
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         left: 0;
//         top: 0;
//         background: rgba(0, 0, 0, 0.7);
//     }
// `;

export default Recruitment;
