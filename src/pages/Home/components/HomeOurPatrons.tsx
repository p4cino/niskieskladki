// import Image from 'next/image';
// import Skeleton from '@material-ui/lab/Skeleton';
import ReactPlayer from 'react-player/youtube';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import ArticleCarousel from '../../../components/ArticleCarousel/ArticleCarousel';
import Heading from '../../../components/Heading/Heading';
import Paragraph from '../../../components/Paragraph/Paragraph';

const sliderOptions = {
    type: 'carousel',
    gap: 0,
    perView: 1
};

const HomeOurPatrons = () => {
    return (
        <Container style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            paddingBottom: '2rem'
                        }}
                    >
                        <Heading color={'white'} underline={false}>
                            <span>Nasi</span>
                            <span
                                style={{
                                    padding: 5,
                                    marginLeft: 5,
                                    backgroundColor: '#cd0000'
                                }}
                            >
                                Partnerzy
                            </span>
                        </Heading>
                    </div>
                    <div style={{ paddingBottom: '4rem' }}>
                        <Paragraph color={'gray'} size={'small'} center={true}>
                            Organizacje, które mają dla nas ogromne znaczenie.
                            Razem z nimi chcecmy dzielić trudny i znoje w
                            budowaniu prawdziwie wolnościwego świata
                        </Paragraph>
                    </div>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <ArticleCarousel
                        options={sliderOptions}
                        element="OurPatrons"
                    >
                        <SlideBox>
                            <Row alignItems="center">
                                <Col
                                    xl="6"
                                    lg="6"
                                    md="12"
                                    sm="12"
                                    xs="12"
                                    xsOrder={1}
                                >
                                    <div style={{ height: 350 }}>
                                        <ReactPlayer
                                            height="350px"
                                            width="100%"
                                            url="https://www.youtube.com/watch?v=9_3YFNGttgI"
                                            controls={true}
                                            // onReady={() => console.log('kek')}
                                        />
                                    </div>
                                </Col>
                                <Col
                                    xl="6"
                                    lg="6"
                                    md="12"
                                    sm="12"
                                    xs="12"
                                    xsOrder={0}
                                >
                                    <TextContainer>
                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '100%'
                                            }}
                                        >
                                            <Heading
                                                color={'white'}
                                                size={'small'}
                                                underline={false}
                                            >
                                                Instytut Misesa
                                            </Heading>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                paddingBottom: '1rem'
                                            }}
                                        >
                                            <Heading
                                                color={'white'}
                                                size={'smallest'}
                                                underline={false}
                                            >
                                                Partner Strategiczny
                                            </Heading>
                                        </div>
                                        <Paragraph
                                            color={'white'}
                                            size={'small'}
                                        >
                                            Instytut Edukacji Ekonomicznej im.
                                            Ludwiga von Misesa– organizacja
                                            powstała w 2003 roku, mająca na celu
                                            rozpropagowanie myśli Austriackiej
                                            Szkoły Ekonomii, czyli poglądów
                                            określanych jako „klasyczny
                                            liberalizm” oraz libertariańskiej
                                            myśli politycznej. Zajmują się
                                            głównie działalnością
                                            naukowo-badawczą. Kształtują młode
                                            pokolenia ekonomistów, odwołując się
                                            do najlepszych myślicieli ASE.
                                        </Paragraph>
                                    </TextContainer>
                                </Col>
                            </Row>
                        </SlideBox>
                        <SlideBox>
                            <Row alignItems="center">
                                <Col
                                    xl="6"
                                    lg="6"
                                    md="12"
                                    sm="12"
                                    xs="12"
                                    xsOrder={1}
                                >
                                    <div>
                                        <img
                                            style={{ width: '100%' }}
                                            src="/images/section/Veto_TVP.png"
                                            alt=""
                                        />
                                    </div>
                                </Col>
                                <Col
                                    xl="6"
                                    lg="6"
                                    md="12"
                                    sm="12"
                                    xs="12"
                                    xsOrder={0}
                                >
                                    <TextContainer>
                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '100%'
                                            }}
                                        >
                                            <Heading
                                                color={'white'}
                                                size={'small'}
                                                underline={false}
                                            >
                                                Fundacja Wolności i
                                                Przedsiębiorczości
                                            </Heading>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                paddingBottom: '1rem'
                                            }}
                                        >
                                            <Heading
                                                color={'white'}
                                                size={'smallest'}
                                                underline={false}
                                            >
                                                Partner strategiczny
                                            </Heading>
                                        </div>
                                        <Paragraph
                                            color={'white'}
                                            size={'small'}
                                        >
                                            Fundacja Wolności i
                                            Przedsiębiorczości – powstała w 2012
                                            roku organizacja i skupia się na
                                            edukacji społeczeństwa poprzez
                                            promowanie wolnościowych rozwiązań
                                            wśród polskiego społeczeństwa.
                                            Starają się poprzez swoje działania
                                            dotrzeć do przedsiębiorców, by
                                            przedstawić wolnościowe działania,
                                            które mogą wspomóc rozwój
                                            przedsiębiorstw. Do głównych
                                            inicjatyw i projektów fundacji
                                            należą – przypominanie o Krakowskiej
                                            Szkole Ekonomii, Polsko-Amerykańska
                                            Szkoła Liderów oraz Project Arizona.
                                        </Paragraph>
                                    </TextContainer>
                                </Col>
                            </Row>
                        </SlideBox>
                    </ArticleCarousel>
                </Col>
            </Row>
        </Container>
    );
};

const SlideBox = styled.li`
    width: 100%;
    //min-height: 300px;
    position: relative;
    list-style: none;
`;

// const SlideVideo = styled.div`
//   padding: 1rem;
// `;

const TextContainer = styled.div`
    padding-top: ${properties => properties.theme.space[3]};
`;

export default HomeOurPatrons;
