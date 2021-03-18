import {Col, Container, Row} from "styled-bootstrap-grid";
import styled from 'styled-components';
import {FiFacebook, FiTwitter} from "react-icons/fi";
import Paragraph from "../../components/Paragraph/Paragraph";

const Icon = styled.h2`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 0.5rem;
  color: white;
`;

const Footer = () => {
    return (
        <section style={{paddingBottom: '2rem', paddingTop: '2rem', backgroundColor: '#cd0000'}}>
            <Container>
                <Row alignItems="center">
                    <Col xl="6" lg="6" md="6" sm="6" xs={'6'}>
                        <Paragraph color={"gray"} size={"small"}>
                            © Niskie Składki 2020 Create with <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/🚀wojciech-puzio-311422137/">❤️</a>
                        </Paragraph>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs={'6'}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <a href="https://twitter.com/NiskieSkladki" target="_blank" style={{marginRight: '1rem'}}>
                                <Icon>
                                    <FiTwitter/>
                                </Icon>
                            </a>
                            <a href="https://www.facebook.com/niskieskladki" target="_blank">
                                <Icon>
                                    <FiFacebook/>
                                </Icon>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;