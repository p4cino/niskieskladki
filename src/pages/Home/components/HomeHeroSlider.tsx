import styled from 'styled-components';
import {Col, Container, Row} from "styled-bootstrap-grid";
import Button from "../../../components/Button/Button";
import Carousel from "../../../components/Carousel/Carousel";

const sliderOptions = {
    type: 'carousel',
    // autoplay: 5000,
    gap: 0,
    perView: 1
};

const SlideBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  :before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const SliderHeading = styled.h2`
  //margin: 0;
  padding: 0;
  color: ${props => props.theme.whiteColor};
  font-size: 5vw;
  font-weight: normal;
  text-align: left;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

const SliderDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.whiteColor};
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  letter-spacing: 3px;
  margin-bottom: 3rem;
`;

const SliderButtonWrapper = styled.div`
  display: flex;
`;

const SliderButtonItem = styled.div`
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }
`;

const HomeHeroSlider = () => {
    return (
        <Carousel
            element="heroSlider"
            options={sliderOptions}
        >
            <SlideBox style={{backgroundImage: 'url(/images/img1.jpg)'}}>
                <Container style={{height: '100%'}}>
                    <Row style={{height: '100%'}}>
                        <Col xl="12" lg="12" md="12" sm="12" alignSelf={"center"}>
                            <SliderHeading>
                                Niskie Składki<br/>
                                <span style={{fontWeight: 'bold'}}>
                                        Twoje Źródło RIGCZU
                                    </span>
                            </SliderHeading>
                            <SliderDescription>
                                Aby zmienić świat trzeba zaczać od zmiany jednostki. Rozwój jednostki jest
                                gwarancją
                                rozwoju całej cywilizacji.
                            </SliderDescription>
                            <SliderButtonWrapper>
                                <SliderButtonItem>
                                    <Button>Współpraca</Button>
                                </SliderButtonItem>
                                <SliderButtonWrapper>
                                    <Button>Nasze zbiórki</Button>
                                </SliderButtonWrapper>
                            </SliderButtonWrapper>
                        </Col>
                    </Row>
                </Container>
            </SlideBox>
            <SlideBox style={{backgroundImage: 'url(/images/img2.jpg)'}}>
                <Container style={{height: '100%'}}>
                    <Row style={{height: '100%'}}>
                        <Col xl="12" lg="12" md="12" sm="12" alignSelf={"center"}>
                            <SliderHeading>
                                Niskie Składki<br/>
                                <span style={{fontWeight: 'bold', paddingLeft: '6px'}}>
                                        Twoje Źródło RIGCZU
                                    </span>
                            </SliderHeading>
                        </Col>
                    </Row>
                </Container>
            </SlideBox>
            <SlideBox style={{backgroundImage: 'url(/images/img1.jpg)'}}>
                <Container style={{height: '100%'}}>
                    <Row style={{height: '100%'}}>
                        <Col xl="12" lg="12" md="12" sm="12" alignSelf={"center"}>
                            <SliderHeading>
                                Niskie Składki<br/>
                                <span style={{fontWeight: 'bold', paddingLeft: '6px'}}>
                                        Twoje Źródło RIGCZU
                                    </span>
                            </SliderHeading>
                        </Col>
                    </Row>
                </Container>
            </SlideBox>
        </Carousel>
    );
}

export default HomeHeroSlider;