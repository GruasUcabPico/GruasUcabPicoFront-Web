import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CRUDMenu = () => {
    return (
        <Container className="text-center mt-5">
            <h1>¿Qué desea administrar?</h1>
            <Row className="mt-4 justify-content-center">
                    <Col>
                        <Link to="/users">
                            <Button variant="primary" size="lg">
                                Usuarios
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/cranes">
                            <Button variant="primary" size="lg">
                                Grúas
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/ratekms">
                            <Button variant="primary" size="lg">
                                Tasas por KM
                            </Button>
                        </Link>
                    </Col>
            </Row>
        </Container>
    );
};

export default CRUDMenu;