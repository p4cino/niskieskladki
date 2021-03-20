import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube'
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import ArticleCarousel from "../../components/ArticleCarousel/ArticleCarousel";

const SlideBox = styled.li`
  width: 100%;
  //min-height: 300px;
  position: relative;
  list-style: none;
`;

// const SlideImage = styled.div`
//   background-size: cover;
//   height: 8rem;
//   width: 100%;
//
//   img {
//     width: 100%;
//   }
// `;
//
const SlideVideo = styled.div`
  padding: 1rem;
`;

const TextContainer = styled.div`
  padding-top: 4rem;
`;

const sliderOptions = {
    type: 'carousel',
    gap: 0,
    perView: 1,
};

const HomeOurActivities = () => {
    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '2rem'}}>
                        <Heading color={"white"}>Nasze Działania</Heading>
                    </div>
                    <div style={{paddingBottom: '4rem'}}>
                        <Paragraph color={"white"} size={"small"} center={true}>
                            Głównym celem stowarzyszenia jest propagowanie idei liberalizmu gospodarczego,
                            decentralizacji władzy
                            publicznej oraz wolności osobistej człowieka. Stowarzyszenie wspiera i promuje
                            przedsiębiorczość, wolny
                            handel oraz swobodny przepływ kapitału, towarów i ludzi oraz zajmuje się szerzeniem wiedzy
                            na temat
                            ekonomii, historii, nauk społecznych oraz innych dyscyplin naukowych wspierających rozwój
                            społeczny i
                            obywatelski. Kreując dyskusje na temat reformy systemu gospodarczego kraju, ma na celu
                            likwidację
                            zbędnych przepisów oraz regulacji uniemożliwiających rozwój społeczny i gospodarczy
                            obywateli. Poprzez
                            współtworzenie i wspieranie programów oraz inicjatyw, dąży do reformy instytucji publicznych
                            i
                            zapewniających budowę Państwa Prawa oraz sprawiedliwych, sprawnych i efektywnych rządów.
                            Niskie Składki
                            promują idee pluralizmu tolerancji ze względu na poglądy polityczne oraz prowadzą
                            działalność na rzecz
                            praw człowieka, swobód obywatelskich oraz wolności słowa i wyrażanych poglądów. Działa na
                            rzecz
                            aktywizacji społecznej obywateli w zakresie ich udziału w życiu społeczno - gospodarczym
                            oraz
                            samokształcenia, poprzez promowanie i kształcenie nowych liderów opinii publicznej,
                            społeczników,
                            samorządowców i działaczy politycznych. Stowarzyszenie wspiera również inicjatywy związane z
                            promocją
                            postaw ekologicznych i ochrony środowiska. Jednym z ważniejszych celów stowarzyszenia jest
                            też pomoc
                            osobom w trudnej sytuacji życiowej na zasadach dobrowolności i subsydiarności oraz promocja
                            postaw
                            dobroczynnych.
                        </Paragraph>
                    </div>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <ArticleCarousel options={sliderOptions} element="OurActivities">
                        <SlideBox>
                            <Row alignItems="center">
                                <Col xl="6" lg="6" md="12" sm="12" xs="12" xsOrder={1}>
                                    <div>
                                        <ReactPlayer
                                            height={290}
                                            width="100%"
                                            url='https://www.youtube.com/watch?v=9_3YFNGttgI'
                                            controls={true}
                                        />
                                    </div>
                                </Col>
                                <Col xl="6" lg="6" md="12" sm="12" xs="12" xsOrder={0}>
                                    <TextContainer>
                                        <div style={{display: 'flex', width: '100%'}}>
                                            <Heading color={"white"} size={"small"}>#Posiłekdlalekarza</Heading>
                                        </div>
                                        <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                            <Heading color={"white"} size={"smallest"}>Współorganizator</Heading>
                                        </div>
                                        <Paragraph color={"white"} size={"small"}>
                                            Największą i najbardziej rozpoznawalną akcją dobroczynną jest zorganizowana
                                            w 2020 roku, przez Stowarzyszenie Niskie Składki, Fundację Otwarty Dialog,
                                            Spontaniczny Sztab Obywatelski, ze wsparciem Patryka Wachowca (FOR)
                                            ogólnopolska akcja Posiłek Dla Lekarza. Akcja polegała na zwrocie
                                            (refundacji) udokumentowanych kosztów zamówień posiłków dostarczanych przez
                                            restauracje osobom zatrudnionym w służbie zdrowia, a także hospitalizowanym
                                            w związku z zarażeniem koronawirusem i tym, które się nimi opiekowały w
                                            placówkach służby zdrowia. Łącznie podczas zbiórki zebrano ponad pół miliona
                                            złotych, a o akcji informowały największe portale oraz stacje telewizyjne.
                                        </Paragraph>
                                    </TextContainer>
                                </Col>
                            </Row>
                        </SlideBox>
                        <SlideBox>
                            <Row alignItems="center">
                                <Col xl="6" lg="6" md="12" sm="12" xs="12" xsOrder={1}>
                                    <div>
                                        <img style={{width: "100%"}} src="/images/section/Veto_TVP.png" alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" lg="6" md="12" sm="12" xs="12" xsOrder={0}>
                                    <TextContainer>
                                        <div style={{display: 'flex', width: '100%'}}>
                                            <Heading color={"white"} size={"small"}>#Posiłekdlalekarza</Heading>
                                        </div>
                                        <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                            <Heading color={"white"} size={"smallest"}>Współorganizator</Heading>
                                        </div>
                                        <Paragraph color={"white"} size={"small"}>
                                            Największą i najbardziej rozpoznawalną akcją dobroczynną jest zorganizowana
                                            w 2020 roku, przez Stowarzyszenie Niskie Składki, Fundację Otwarty Dialog,
                                            Spontaniczny Sztab Obywatelski, ze wsparciem Patryka Wachowca (FOR)
                                            ogólnopolska akcja Posiłek Dla Lekarza. Akcja polegała na zwrocie
                                            (refundacji) udokumentowanych kosztów zamówień posiłków dostarczanych przez
                                            restauracje osobom zatrudnionym w służbie zdrowia, a także hospitalizowanym
                                            w związku z zarażeniem koronawirusem i tym, które się nimi opiekowały w
                                            placówkach służby zdrowia. Łącznie podczas zbiórki zebrano ponad pół miliona
                                            złotych, a o akcji informowały największe portale oraz stacje telewizyjne.
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
}

export default HomeOurActivities;