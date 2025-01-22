import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <Container className="text-center mt-5">
            <h1>Bienvenido de vuelta, operador</h1>
            <Row className="mt-4 justify-content-center">
                    <Col>
                        <Link to="/orders">
                            <Button variant="primary" size="lg">
                                Órdenes
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/crudmenu">
                            <Button variant="secondary" size="lg">
                                Administrar datos
                            </Button>
                        </Link>
                    </Col>
            </Row>
        </Container>
    );
};

export default Menu;