import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import Paragraph from '../../components/Paragraph/Paragraph';
import A11yText from '../A11yText/A11yText';

const Footer = () => {
    return (
        <section
            style={{
                paddingBottom: '2rem',
                paddingTop: '2rem',
                backgroundColor: '#cd0000'
            }}
        >
            <Container>
                <Row alignItems="center">
                    <Col xl="6" lg="6" md="6" sm="6" xs={'6'}>
                        <Paragraph color={'white'} size={'small'}>
                            © Niskie Składki 2020 Create with
                            <a
                                style={{ textDecoration: 'none' }}
                                href="https://www.linkedin.com/in/🚀wojciech-puzio-311422137/"
                                target="_blank"
                            >
                                🚀
                            </a>
                        </Paragraph>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs={'6'}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <a
                                rel="noopener"
                                href="https://twitter.com/NiskieSkladki"
                                target="_blank"
                                style={{ marginRight: '1rem' }}
                            >
                                <Icon>
                                    <FiTwitter />
                                </Icon>
                                <A11yText>Profil na twitterze</A11yText>
                            </a>
                            <a
                                rel="noopener"
                                href="https://www.facebook.com/niskieskladki"
                                target="_blank"
                            >
                                <Icon>
                                    <FiFacebook />
                                </Icon>
                                <A11yText>Fanpage na Facebook</A11yText>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const Icon = styled.h2`
    display: flex;
    justify-content: center;
    background-color: #333;
    padding: 0.5rem;
    color: ${props => props.theme.whiteColor};
`;

export default Footer;
