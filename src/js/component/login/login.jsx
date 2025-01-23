import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm} from "formik";
import * as Yup from "yup";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo inválido").required("Correo es requerido"),
    password: Yup.string().required("Contraseña es requerida"),
  });

  const navigate = useNavigate();
  const signIn = useSignIn();
  const handleSubmit = async (values) => {
      console.log("The: ", values);

      try {
        const response = await axios.post('http://localhost:9053/api/users/login', values);
        console.log("Si");
        signIn({
          auth: {
            token: response.data.token,
          },
          userState: {name: values.email, uid: 123456}
        })
        navigate("/menu");
      } catch (error) {
        console.log("No")
        console.error('Error en login:', error);
      }
      
    };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {({ handleSubmit, values }) => (
        <Row>
          <Col md={6} className="col-12 bg-primary text-center text-white">
            <h3 className="text-center mt-5">Gruas</h3>
            <h2 className="text-center">UCAB</h2>
            <h1 className="text-center">Pico</h1>
          </Col>
          <Col>
            <Row className="justify-content-md-center min-vh-100">
              <Col md={6}>
                <Card className="mt-5 p-3">
                  <h2>Inicio de sesión</h2>
                  <FormikForm onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Dirección de corrreo electrónico</Form.Label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Correo"
                        className="form-control"
                        value={values.email}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                      Iniciar sesión
                    </Button>
                  </FormikForm>
                  <Card.Footer><Link to="/forgotPassword">¿Olvidó su contraseña?</Link></Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Formik>
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
