import {useEffect, useRef, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {Col, Container, Row} from "styled-bootstrap-grid";
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";

const HomeOurPatron = () => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef = useRef(() => {
    });

    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(100);
                setBuffer(90);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12" style={{paddingBottom: '2rem'}}>
                    <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                        <Heading color={"white"} underline={false}>Nasz Patron</Heading>
                    </div>
                    <div style={{display: 'flex', width: '100%', paddingBottom: '2rem'}}>
                        <Heading size={"large"} color={"white"} underline={false} type={"h3"}>LUDWIG VON MISES</Heading>
                    </div>
                    <Paragraph color={"white"}>
                        Ludwig von Mises był najwybitniejszym obrońcą kapitalizmu i krytykiem socjalizmu w XX wieku,
                        najważniejszym przedstawicielem austriackiej szkoły ekonomii, nauczycielem Hayeka, Rothbarda
                        oraz wielu innych ekonomistów i naukowców. Przez całe dorosłe życie pisał i wykładał w wielu
                        krajach. Jest autorem kilkudziesięciu książek i ponad 250 artykułów. Pierwsza dłuższa praca
                        Theorie des Geldes und der Umlaufsmittel (Teoria pieniądza i kredytu, 1912) przyniosła mu
                        uznanie w całej Europie. W kolejnej znakomitej książce Die Gemeinwirtschaft: Untersuchungen über
                        den Sozialismus (Socjalizm, 1922) Mises przewidział upadek socjalizmu. Po Anschlussie Austrii
                        Mises wyjeżdża do Szwajcarii, gdzie publikuje Nationalökonomie: Theorie des Handelns und
                        Wirtschaftens (1940). W 1940 roku przenosi się do USA. Tu ukazuje się Human Action (1949) –
                        rozszerzona, angielska wersja Nationalökonomie. Human Action, czyli Ludzkie działanie – opus
                        magnum Misesa – zostało przetłumaczone na większość języków europejskich.
                    </Paragraph>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12" xs="12" style={{paddingBottom: '3rem'}}>
                    <Row>
                        <Col xl="6" lg="6" md="6" sm="6" xs="12">
                            <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                <Heading color={"white"} underline={false}>Edukacja</Heading>
                            </div>
                            <Paragraph color={"white"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem eius et facere,
                                fuga, hic itaque natus officia optio praesentium quae quasi, quisquam sunt ullam
                                veritatis!
                                Dignissimos itaque laboriosam qui.
                            </Paragraph>
                        </Col>
                        <Col xl="6" lg="6" md="6" sm="6" xs="12">
                            <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                                <Heading color={"white"} underline={false}>Edukacja</Heading>
                            </div>
                            <Paragraph color={"white"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad blanditiis
                                consectetur consequatur consequuntur cumque hic inventore, iste, maiores minima modi
                                molestiae placeat qui reprehenderit saepe sunt ullam voluptatem.
                            </Paragraph>
                        </Col>
                    </Row>
                </Col>
                <Col xl="12" lg="12" md="12" sm="12" xs="12">
                    <div style={{display: 'flex', width: '100%', paddingBottom: '1rem'}}>
                        <Heading color={"white"} underline={false}>Cel zbiórki</Heading>
                    </div>
                    <LinearProgress color="secondary" variant="buffer" value={progress} valueBuffer={buffer}/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeOurPatron;