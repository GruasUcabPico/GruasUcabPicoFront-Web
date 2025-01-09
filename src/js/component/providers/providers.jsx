import React from "react";
import { Container, Table, Dropdown } from "react-bootstrap";

const ProvidersCRUD = ({ providers, onEdit, onDelete }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id}>
              <td>{provider.id}</td>
              <td>{provider.name}</td>
              <td>{provider.phoneNumber}</td>
              <td>{provider.address}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Manage
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(provider.id)}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => onDelete(provider.id)}>
                      Delete provider
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

export default ProvidersCRUD;
