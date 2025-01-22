import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import AddUserModal from "./addUserModal";
import DeleteUserModal from "./deleteUserModal";
import EditUserModal from "./editUserModal";
import AssignCraneModal from "./assignCraneModal";

const UsersCRUD = ({ drivers, operators }) => {

  const cranes = [
    {
      id: 1,
      brand: "Liebherr",
      model: "LTM 11200-9.1",
      craneType: "Mobile",
      year: 2018,
      plate: "ABC123",
    },
    {
      id: 2,
      brand: "Tadano",
      model: "ATF 400G-6",
      craneType: "All Terrain",
      year: 2019,
      plate: "XYZ789",
    },
    {
      id: 3,
      brand: "Grove",
      model: "GMK6300L",
      craneType: "All Terrain",
      year: 2020,
      plate: "LMN456",
    },
  ];

  const users = drivers.concat(operators);

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
                    <Dropdown.Item >
                      <EditUserModal user={user} />
                    </Dropdown.Item>
                    {drivers.some(driver => driver.id === user.id) && (
                      <Dropdown.Item>
                        <AssignCraneModal
                          user={user}
                          cranes={cranes}
                        />
                      </Dropdown.Item>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <DeleteUserModal user={user} />
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
