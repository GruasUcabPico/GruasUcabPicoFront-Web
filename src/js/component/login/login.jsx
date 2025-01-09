import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Row>
      <Col md={6} className="col-12 bg-primary text-center text-white">
        <h1 className="text-center mt-5">UCAB</h1>
        <h3 className="text-center">Gruero</h3>
      </Col>
      <Col>
        <Row className="justify-content-md-center min-vh-100">
          <Col md={6}>
            <Card className="mt-5 p-3">
              <h2>Inicio de sesión</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Dirección de correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Correo" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginForm;

/* Código extraído de https://www.urianviera.com/reactjs/react-router-dom-guia
import { useNavigate } from 'react-router-dom';

function LoginPage() {
const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  // Lógica de login aquí
  try {
    await loginUser();
    navigate('/dashboard', { 
      replace: true,
      state: { message: 'Login exitoso' } 
    });
  } catch (error) {
    console.error('Error en login:', error);
  }
};

return (
  <form onSubmit={handleLogin}>
    {// Formulario aquí }
    </form>
);
}
*/
