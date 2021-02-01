import styled from 'styled-components';
import {Col, Container, Row} from "styled-bootstrap-grid";

const HomeOurCollections = () => {
    return (
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xl="12" lg="12" md="12" sm="12">
                    <h2>NASZE ZBIÓRKI</h2>
                    <p>
                        Poniżej znajdują się informacje o zrealizowanych przez nas projektach w ramach akcji
                        #LudzkieDziałanie.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeOurCollections;