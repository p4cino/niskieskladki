// import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar/Navbar';
import RecruitmentHowToJoin from './components/RecruitmentHowToJoin';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Recruitment = () => {
    const defaultProps = {
        center: {
            lat: 52.231_958_1,
            lng: 21.006_724_9
        },
        zoom: 7,
        key: 'AIzaSyDIvYFBaqtau9k83E1XuADzSJEHvPmPqJA'
    };

    return (
        <>
            <Navbar />
            <section>
                <Hero
                    headingText="Dołącz do nas"
                    backgroundImage="/images/recruitment/join-us.jpg"
                    headingType={'h1'}
                />
            </section>
            <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <RecruitmentHowToJoin />
            </section>
            <section style={{ height: '50vh' }}>
                Test mapy
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: defaultProps.key
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        // @ts-ignore
                        lat={52.231_958_1}
                        lng={21.006_724_9}
                        text="MARKER Warszawa"
                    />
                    <AnyReactComponent
                        // @ts-ignore
                        lat={50.013_064}
                        lng={22.016_143_457_294_312}
                        text="MARKER Rzeszów"
                    />
                </GoogleMapReact>
            </section>
        </>
    );
};

export default Recruitment;
