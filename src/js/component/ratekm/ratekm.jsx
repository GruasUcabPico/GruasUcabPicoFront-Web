import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import AddRateKMModal from "./addRateKMModal";
import DeleteRateKMModal from "./deleteRateKMModal";
import EditRateKMModal from "./editRateKMModal";

const RateKMCRUD = ({ rates }) => {

  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <h1>Tasa por Km</h1>
        </Col>
        <Col className="d-flex flex-row-reverse">
          <AddRateKMModal />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Radio (Kms)</th>
            <th>Tarifa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.id}>
              <td>{rate.id}</td>
              <td>{rate.coverageRadius}</td>
              <td>{rate.priceKM}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Administrar
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(rate.id)}>
                      <EditRateKMModal
                        id={rate.id}
                      />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => onDelete(rate.id)}>
                      <DeleteRateKMModal id={rate.id} />
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

export default RateKMCRUD;