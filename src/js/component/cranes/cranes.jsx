import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";

import AddCraneModal from "./addCraneModal";
import DeleteCraneModal from "./deleteCraneModal";
import EditCraneModal from "./editCraneModal";

const CranesCRUD = ({ cranes }) => {
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
              <td>{crane.brand}</td>
              <td>{crane.model}</td>
              <td>{crane.craneType}</td>
              <td>{crane.year}</td>
              <td>{crane.plate}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Administrar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(crane.id)}>
                      <EditCraneModal
                        id={crane.id}
                        brand={crane.brand}
                        model={crane.model}
                        type={crane.craneType}
                        year={crane.year}
                        plate={crane.plate}
                      />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => onDelete(crane.id)}>
                      <DeleteCraneModal id={crane.id} brand={crane.brand} model={crane.model} />
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
