import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube'
import Heading from "../../../components/Heading/Heading";
import Paragraph from "../../../components/Paragraph/Paragraph";
import ArticleCarousel from "../../../components/ArticleCarousel/ArticleCarousel";

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

const HomeOurLiders = () => {
    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '2rem'}}>
                        <Heading color={"main"} underline={false}>
                            <span>Nasi</span>
                            <span style={{padding: 5, marginLeft: 5, backgroundColor: '#cd0000', color: 'white'}}>Liderzy</span>
                        </Heading>
                    </div>
                    <div style={{paddingBottom: '4rem'}}>
                        <Paragraph color={"heading"} size={"small"} center={true}>
                            Organizacje, które mają dla nas ogromne znaczenie. Razem z nimi chcecmy dzielić trudny i
                            znoje w budowaniu prawdziwie wolnościwego świata
                        </Paragraph>
                    </div>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <ArticleCarousel options={sliderOptions} element="OurLiders">
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
                                            <Heading color={"text"} size={"small"}
                                                     underline={false}>#Posiłekdlalekarza</Heading>
                                        </div>
                                        <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                            <Heading color={"main"} size={"smallest"}
                                                     underline={false}>Współorganizator</Heading>
                                        </div>
                                        <Paragraph color={"black"} size={"small"}>
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
                                            <Heading color={"text"} size={"small"}
                                                     underline={false}>#Posiłekdlalekarza</Heading>
                                        </div>
                                        <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                            <Heading color={"main"} size={"smallest"}
                                                     underline={false}>Współorganizator</Heading>
                                        </div>
                                        <Paragraph color={"black"} size={"small"}>
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

export default HomeOurLiders;