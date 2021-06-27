import Link from '@material-ui/core/Link';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import Heading from '../../../components/Heading/Heading';
import Paragraph from '../../../components/Paragraph/Paragraph';

const RecruitmentHowToJoin = () => {
    return (
        <Container style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            paddingBottom: '2rem'
                        }}
                    >
                        <Heading color="main" underline={false}>
                            Jak dołączyć
                        </Heading>
                    </div>
                    <Paragraph center>
                        Przed dołączeniem zachęcamy do zapoznania się z naszym
                        Regulaminem oraz poniższą instrukcją.
                    </Paragraph>
                    <Paragraph center>
                        Wpisowe i składki należy opłacić przelewem na konto
                        bankowe Stowarzyszenia:{' '}
                        <span
                            style={{
                                padding: 5,
                                marginLeft: 5,
                                backgroundColor: '#cd0000',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            28 1090 2590 0000 0001 4662 9737
                        </span>
                    </Paragraph>
                    <Paragraph
                        center
                        // @ts-ignore
                        style={{ marginBottom: '1rem' }}
                    >
                        W treści przelewu należy podać swój PESEL oraz okres na
                        który zostają opłacone składki członkowskie.
                    </Paragraph>
                    <Paragraph center>
                        <strong>1.</strong> Pobierz, wydrukuj i wypełnij
                        czytelnie drukowanymi literami deklarację członkowską
                    </Paragraph>
                    <Paragraph
                        center
                        size={'small'}
                        // @ts-ignore
                        style={{ fontWeight: 'bold' }}
                    >
                        Deklarację możesz wypełnić również bez drukowania, za
                        pomocą urządzenia mobilnego.
                    </Paragraph>

                    <Paragraph
                        center
                        // @ts-ignore
                        style={{ margin: '1rem 0' }}
                    >
                        <Link
                            href="/pdf/Instrukcja_Deklaracja_NS.pdf"
                            target="_blank"
                        >
                            Kliknij, aby pobrać instrukcję dla urządzeń
                            mobilnych
                        </Link>
                    </Paragraph>

                    <Paragraph center>
                        <strong>2.</strong> Wyślij jej skan, dobrej jakości
                        zdjęcie lub wypełnioną e-deklarację na adres
                        <span
                            style={{
                                padding: 5,
                                marginLeft: 5,
                                backgroundColor: '#cd0000',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            deklaracje@niskieskladki.pl
                        </span>
                    </Paragraph>
                    <Paragraph center>
                        <strong>3.</strong> W przeciągu 14 dni członek Rady
                        Stowarzyszenia skontaktuje się z Tobą w celu weryfikacji
                        i zada kilka pytań
                    </Paragraph>
                    <Paragraph center>
                        <strong>4.</strong> Decyzję o przyjęciu lub nieprzyjęciu
                        w szeregi Stowarzyszenia otrzymasz na podany przez
                        Ciebie adres e-mail
                    </Paragraph>
                    <Paragraph center>
                        <strong>5.</strong> Załatw formalności finansowe (50
                        złotych wpisowego oraz składki 5 złotych miesięcznie) i
                        działaj wspólnie z nami dla Polski!
                    </Paragraph>
                </Col>
            </Row>
        </Container>
    );
};

export default RecruitmentHowToJoin;
