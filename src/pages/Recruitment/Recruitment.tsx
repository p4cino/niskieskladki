import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import Heading from '../../components/Heading/Heading';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar/Navbar';
import Paragraph from '../../components/Paragraph/Paragraph';
import RecruitmentHowToJoin from './components/RecruitmentHowToJoin';

const AnyReactComponent = ({ text }) => (
    <Marker>
        {/*{text}*/}
        <FaMapMarkerAlt size="1.5rem" />
    </Marker>
);

const Recruitment = () => {
    const defaultProps = {
        center: {
            lat: 52.231_958_1,
            lng: 21.006_724_9
        },
        zoom: 6,
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
            <section>
                <Container fluid>
                    <Row>
                        <Col xl="8" lg="8" md="8" sm="12" noGutter>
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
                        </Col>
                        <Col xl="4" lg="4" md="4" sm="12" noGutter>
                            <Structures>
                                <StructureLider>
                                    <StructureImage>
                                        <Image
                                            blurDataURL={
                                                '/images/structures/Patryk-Mielczarek.png'
                                            }
                                            src={
                                                '/images/structures/Patryk-Mielczarek.png'
                                            }
                                            placeholder="blur"
                                            alt=""
                                            layout="fill"
                                        />
                                    </StructureImage>
                                    <StructureLiderDescription>
                                        <Heading color={'white'} type={'h3'}>
                                            Papryk Mielczarek
                                        </Heading>
                                        <Paragraph color={'white'} center>
                                            Lider Oddziału Dolnośląskiego
                                        </Paragraph>
                                    </StructureLiderDescription>
                                </StructureLider>
                            </Structures>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

const Marker = styled.div`
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    transform: translateX(-50%) translateY(-100%);
    color: ${properties => properties.theme.redColor};

    &:hover {
        color: ${properties => properties.theme.mainColor};
    }
`;

const Structures = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 0 1rem;
    background-color: ${properties => properties.theme.mainColor};
`;

const StructureLider = styled.figure`
    display: block;
`;

const StructureImage = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    display: block;
`;

const StructureLiderDescription = styled.figcaption`
    display: block;
    padding: 1rem;
    color: ${properties => properties.theme.whiteColor};
`;

export default Recruitment;
