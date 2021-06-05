import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import Image from 'next/image';
import Heading from "../../../components/Heading/Heading";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Carousel from "../../../components/Carousel/Carousel";
import CircularProgress, {CircularProgressProps} from '@material-ui/core/CircularProgress';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    if (props.value > 100) {
        props.value = 100;
    }

    return (
        <CircularProgressComponent>
            <ProgressContainer>
                <CircularProgress variant="determinate" color={"secondary"} {...props} />
                <ProgressLabel>{`${Math.round(props.value,)}%`}</ProgressLabel>
            </ProgressContainer>
            <CircularCollected>
                1234zł<br/>
                123456zł
            </CircularCollected>
        </CircularProgressComponent>
    );
}

const sliderOptions = {
    type: 'carousel',
    gap: 16,
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
        <Container>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '2rem'}}>
                        <Heading color="main" underline={false}>
                            <span>Nasze</span>
                            <span style={{
                                padding: 5,
                                marginLeft: 5,
                                backgroundColor: '#cd0000',
                                color: 'white'
                            }}>zbiórki</span>
                        </Heading>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        paddingBottom: '3rem',
                        textAlign: 'center'
                    }}>
                        <Paragraph>
                            Poniżej znajdują się informacje o zrealizowanych przez nas projektach w ramach akcji
                            <strong>#LudzkieDziałanie</strong>.
                        </Paragraph>
                    </div>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12">
                    <Carousel
                        element="ourCollectionsSlider"
                        options={sliderOptions}
                    >
                        <SlideBox>
                            <SlideImage>
                                <Image src={"/images/collections/ns-dla-malej-zuzi.png"} width={359} height={125}/>
                            </SlideImage>
                            <SlideHeading>
                                <Heading size={"small"} underline={false}>
                                    NS dla małej zuzi
                                </Heading>
                            </SlideHeading>
                            <TextContainer>
                                <Paragraph color={"heading"} size={"small"}>
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
                            </TextContainer>
                            <SlideFooter>
                                <CircularProgressWithLabel value={75}/>
                            </SlideFooter>
                        </SlideBox>
                        <SlideBox>
                            <SlideImage>
                                <Image src={"/images/collections/dzien-dziecka-z-grupa-niskie-skladki.png"} width={359}
                                       height={125}/>
                            </SlideImage>
                            <SlideHeading>
                                <Heading size={"small"} underline={false}>
                                    NS dla małej zuzi
                                </Heading>
                            </SlideHeading>
                            <TextContainer>
                                <Paragraph color={"heading"} size={"small"}>
                                    W maju 2019 roku postanowiliśmy w ramach Ludzkiego Działania wspomóc budowę
                                    placu zabaw dla Pogotowia Opiekuńczego w Lublinie. Zebraliśmy na ten cel 4 256
                                    zł. Realizacja inwestycji pomoże dzieciom przejść łagodniej przez traumatyczne
                                    przeżycie, jakim jest umieszczenie w placówce opiekuńczo-wychowawczej.
                                </Paragraph>
                            </TextContainer>
                            <SlideFooter>
                                <CircularProgressWithLabel value={100}/>
                            </SlideFooter>
                        </SlideBox>
                        <SlideBox>
                            <SlideImage>
                                <Image src={"/images/collections/fundusz-stypendialny.png"} width={359} height={125}/>
                            </SlideImage>
                            <SlideHeading>
                                <Heading size={"small"} underline={false}>
                                    Stypendium NS
                                </Heading>
                            </SlideHeading>
                            <TextContainer>
                                <Paragraph color={"heading"} size={"small"}>
                                    Jedna z pierwszych odnotowanych zbiórek dotyczyła wsparcia członkini naszej
                                    grupy. Znalazła się ona w nieciekawej sytuacji finansowej, a dzięki pozostałym
                                    użytkownikom Niskich Składek mogła kontynuować swoją edukację, oraz chociaż na
                                    pewien czas przestać martwić się o swoją przyszłość. Ta zbiórka udowodniła nam
                                    jaką Niskie Składki stanowią siłę oraz, że wbrew obiegowej opinii, ludzie nie są
                                    obojętni na ludzką krzywdę.
                                </Paragraph>
                            </TextContainer>
                            <SlideFooter>
                                <CircularProgressWithLabel value={17}/>
                            </SlideFooter>
                        </SlideBox>
                    </Carousel>

                </Col>
            </Row>
        </Container>
    );
}

const SlideBox = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.whiteColor};
  list-style: none;
  min-height: 200px;
`;

const SlideImage = styled.div`
  background-size: cover;
  height: 8rem;
  width: 100%;

  img {
    width: 100%;
  }
`;

const SlideHeading = styled.div`
  padding: ${props => props.theme.space[0]};
`;

const TextContainer = styled.div`
  min-height: 240px;
  padding: 0 1rem;
`;

const SlideFooter = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const CircularProgressComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const CircularCollected = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding-left: ${props => props.theme.space[0]};
`;

const ProgressContainer = styled.div`
  width: 40px;
  position: relative;
  display: flex;
  padding: 1rem 0;
`;

const ProgressLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-weight: bold;
  font-size: 0.7rem;
`;

export default HomeOurCollections;