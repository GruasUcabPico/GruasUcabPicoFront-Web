import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";
import AddUserModal from "../addUserModal";
import DeleteUserModal from "../deleteUserModal";
import EditUserModal from "../editUserModal";

const UsersCRUD = ({ users, onEdit, onDelete }) => {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h1>Usuarios</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <AddUserModal />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Correo electrónico</th>
            <th>Número telefónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Administrar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(user.id)}>
                      <EditUserModal
                        id={user.id}
                        name={user.fullName}
                        email={user.email}
                        phoneNumber={user.phoneNumber}
                      />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => onDelete(user.id)}>
                      <DeleteUserModal id={user.id} name={user.fullName} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersCRUD;

/*
import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";
import AddUserModal from "../modal";

const UsersCRUD = ({ users, onEdit, onDelete }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h1>Usuarios</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <AddUserModal />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Correo electrónico</th>
            <th>Número telefónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Administrar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(user.id)}>
                      Editar
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => onDelete(user.id)}>
                      Delete user
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersCRUD;
*/

//<Button variant="success" onClick={() => onEdit(null)}>Yeah</Button>
