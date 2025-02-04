import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm} from "formik";
import * as Yup from "yup";
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const LoginForm = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo inválido").required("Correo es requerido"),
    password: Yup.string().required("Contraseña es requerida"),
  });

  const signIn = useSignIn();
  const handleSubmit = async (values) => {
      console.log(values);
      signIn({
          token: response.data.token,
          expiresIn: 2400,
          tokenType: 'Bearer',
          authState: { email: values.email },
      })
    };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, values }) => (
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
                  <FormikForm onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Dirección de correo electrónico</Form.Label>
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
                    <Button variant="primary" type="submit">
                      Iniciar sesión
                    </Button>
                  </FormikForm>
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
