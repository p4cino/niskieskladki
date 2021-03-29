import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import Image from 'next/image';
import Heading from "../../../components/Heading/Heading";
import Paragraph from "../../../components/Paragraph/Paragraph";
import LidersCarousel from "../../../components/LidersCarousel/LidersCarousel";
import Button from "../../../components/Button/Button";

const SlideBox = styled.li`
  width: 100%;
  //min-height: 300px;
  position: relative;
  list-style: none;
  background-size: cover;
  padding: 3rem;
  background-color: ${props => props.theme.blackColor};
`;

// const SlideVideo = styled.div`
//   padding: 1rem;
// `;

const TextContainer = styled.div`
  max-width: 210px;
  padding-bottom: ${props => props.theme.space[2]};
`;

const sliderOptions = {
    type: 'carousel',
    gap: 32,
    perView: 2,
    breakpoints: {
        500: {
            perView: 1
        }
    }
};

const HomeOurLiders = () => {
    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '2rem'}}>
                        <Heading color={"main"} underline={false}>
                            <span>Nasi</span>
                            <span style={{
                                padding: 5,
                                marginLeft: 5,
                                backgroundColor: '#cd0000',
                                color: 'white'
                            }}>Liderzy</span>
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
                    <LidersCarousel options={sliderOptions} element="OurLiders">
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Dariusz-Szczotkowski.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Dariusz Szczotkowski
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Jedna z lokomotyw stowarzyszenia. Znany w środowisku wolnościowym jako "nawrócony
                                    lewak".
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Patryk-Mielczarek.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Patryk Mielczarek
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Malkontent, KoLibrant, członek Porozumienia. Lubi konserwatyzm w tandemie z
                                    liberalizmem.
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Mateusz-Chrzaszcz.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Mateusz Chrząszcz
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Jeden z najaktywniejszych adminów. Ironia, poczucie humoru, Niebywałe wyczucie smaku
                                    - to cały on!
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Kuba-Hérnandez.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Kuba Hérnandez
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Czołowy przedstawiciel #teamKonserwa. Młody, elokwentny, ambitny inżynier.
                                    Specjalista w swoich fachu.
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Jan-Moszczuk.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Jan Moszczuk
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Znawca broni, jeden z członków założycieli stowarzyszenia. Szef struktur
                                    marowieckich naszego stowarzyszenia.
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                        <SlideBox style={{backgroundImage: 'url(/images/liders/Lukasz-Kulis.png)'}}>
                            <TextContainer>
                                <div style={{display: 'flex', width: '100%'}}>
                                    <Heading color={"white"} size={"smallest"} underline={false}>
                                        Łukasz Kulis
                                    </Heading>
                                </div>
                                <Paragraph color={"white"} size={"small"}>
                                    Jeden z najstarszych adminów grupy, z której powstało Stowarzyszenie. Zawsze służy
                                    cennymi wskazówkami.
                                </Paragraph>
                            </TextContainer>
                            <Button>Zobacz Profil</Button>
                        </SlideBox>
                    </LidersCarousel>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeOurLiders;