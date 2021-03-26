import {Col, Container, Row} from "styled-bootstrap-grid";
import Heading from "../../../components/Heading/Heading";
import Paragraph from "../../../components/Paragraph/Paragraph";

const HomeAboutUs = () => {
    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '2rem'}}>
                        <Heading color="main" underline={false}>
                            <span>Kilka słów</span>
                            <span style={{padding: 5, marginLeft: 5, backgroundColor: '#cd0000', color: 'white'}}>
                                o nas
                            </span>
                        </Heading>
                    </div>
                    <Paragraph center>
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
                </Col>
            </Row>
        </Container>
    );
}

export default HomeAboutUs;