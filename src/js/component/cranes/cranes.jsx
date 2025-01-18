import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";

import AddCraneModal from "./addCraneModal";
import DeleteCraneModal from "./deleteCraneModal";
import EditCraneModal from "./editCraneModal";

const CranesCRUD = ({ cranes, onAdd, onEdit, onDelete }) => {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h1>Grúas</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <AddCraneModal />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Año</th>
            <th>Placa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cranes.map((crane) => (
            <tr key={crane.id}>
              <td>{crane.id}</td>
              <td>{crane.fullName}</td>
              <td>{crane.email}</td>
              <td>{crane.phoneNumber}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Administrar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(crane.id)}>
                      <EditCraneModal
                        id={crane.id}
                        name={crane.fullName}
                        email={crane.email}
                        phoneNumber={crane.phoneNumber}
                      />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => onDelete(crane.id)}>
                      <DeleteCraneModal id={crane.id} name={crane.fullName} />
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

export default CranesCRUD;
