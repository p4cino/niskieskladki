import Image from 'next/image'
import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import Carousel from "../../components/Carousel/Carousel";
import CircularProgress, {CircularProgressProps} from '@material-ui/core/CircularProgress';

const SlideBox = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.whiteColor};
  list-style: none;
  min-height: 500px;
`;

const SlideImage = styled.div`
  background-size: cover;
  height: 8rem;
  width: 100%;

  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <div>
            <CircularProgress variant="determinate" color={"secondary"} {...props} />
            <span>{`${Math.round(
                props.value,
            )}%`}</span>
        </div>
    );
}

const sliderOptions = {
    type: 'carousel',
    // autoplay: 5000,
    gap: 25,
    perView: 3,
    breakpoints: {
        800: {
            perView: 2
        },
        500: {
            perView: 1
        }
    }
};

const HomeOurCollections = () => {
    return (
        <section style={{backgroundColor: '#f7f7f7', height: '100%'}}>
            <Container>
                <Row style={{height: '100%'}}>
                    <Col xl="12" lg="12" md="12" sm="12">
                        <Heading>
                            Nasze zbiórki
                        </Heading>
                        <Paragraph>
                            Poniżej znajdują się informacje o zrealizowanych przez nas projektach w ramach akcji
                            #LudzkieDziałanie.
                        </Paragraph>
                        <Carousel
                            element="ourCollectionsSlider"
                            options={sliderOptions}
                        >
                            <SlideBox>
                                <SlideImage>
                                    <img src="https://niskieskladki.pl/assets/img-temp/800x496/zbiorka4.png" alt=""
                                         loading="lazy"/>
                                </SlideImage>
                                <TextContainer>
                                    <Heading
                                        size={"small"}
                                        underline={false}
                                    >
                                        NS dla małej zuzi
                                    </Heading>
                                    <Paragraph style={{paddingBottom: 20}}>
                                        Pani Katarzyna wraz z mężem panem Mariuszem wychowuję dwoje dzieci - Zuzię i
                                        Wiktorka.
                                        Rodzina od kilku lat jest w trudnej sytuacji. Zuzia jest chora, ma białaczkę.
                                        Życie
                                        rodziny to głównie szpitale i wizyty u specjalistów. Obecnie dziewczynka
                                        przebywa w
                                        domu, ale potrzebuje stałej opieki. Musi przebywać w sterylnych warunkach,
                                        ponieważ
                                        nie
                                        ma odporności. Po odjęciu kosztów utrzymania mieszkania oraz leków zostaje im
                                        460zł
                                        na
                                        osobę miesięcznie.
                                    </Paragraph>
                                    <div>
                                        <CircularProgressWithLabel value={75}/>
                                    </div>
                                </TextContainer>
                            </SlideBox>
                            <SlideBox>
                                <SlideImage>
                                    <img src="https://niskieskladki.pl/assets/img-temp/800x496/zbiorka4.png" alt=""
                                         loading="lazy"/>
                                </SlideImage>
                                <TextContainer>
                                    <Heading
                                        size={"small"}
                                        underline={false}
                                    >
                                        NS dla małej zuzi
                                    </Heading>
                                    <Paragraph style={{paddingBottom: 20}}>
                                        Pani Katarzyna wraz z mężem panem Mariuszem wychowuję dwoje dzieci - Zuzię i
                                        Wiktorka.
                                        Rodzina od kilku lat jest w trudnej sytuacji. Zuzia jest chora, ma białaczkę.
                                        Życie
                                        rodziny to głównie szpitale i wizyty u specjalistów. Obecnie dziewczynka
                                        przebywa w
                                        domu, ale potrzebuje stałej opieki. Musi przebywać w sterylnych warunkach,
                                        ponieważ
                                        nie
                                        ma odporności. Po odjęciu kosztów utrzymania mieszkania oraz leków zostaje im
                                        460zł
                                        na
                                        osobę miesięcznie.
                                    </Paragraph>
                                    <div>
                                        <CircularProgressWithLabel value={75}/>
                                    </div>
                                </TextContainer>
                            </SlideBox>
                            <SlideBox>
                                <SlideImage>
                                    <img src="https://niskieskladki.pl/assets/img-temp/800x496/zbiorka4.png" alt=""
                                         loading="lazy"/>
                                </SlideImage>
                                <TextContainer>
                                    <Heading
                                        size={"small"}
                                        underline={false}
                                    >
                                        NS dla małej zuzi
                                    </Heading>
                                    <Paragraph style={{paddingBottom: 20}}>
                                        Pani Katarzyna wraz z mężem panem Mariuszem wychowuję dwoje dzieci - Zuzię i
                                        Wiktorka.
                                        Rodzina od kilku lat jest w trudnej sytuacji. Zuzia jest chora, ma białaczkę.
                                        Życie
                                        rodziny to głównie szpitale i wizyty u specjalistów. Obecnie dziewczynka
                                        przebywa w
                                        domu, ale potrzebuje stałej opieki. Musi przebywać w sterylnych warunkach,
                                        ponieważ
                                        nie
                                        ma odporności. Po odjęciu kosztów utrzymania mieszkania oraz leków zostaje im
                                        460zł
                                        na
                                        osobę miesięcznie.
                                    </Paragraph>
                                    <div>
                                        <CircularProgressWithLabel value={75}/>
                                    </div>
                                </TextContainer>
                            </SlideBox>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomeOurCollections;