import React from "react";
import { Container, Table, Dropdown } from "react-bootstrap";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const ProvidersCRUD = ({ providers, onEdit, onDelete }) => {
  return (
        <APIProvider apiKey={AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4}>
          <Map
            style={{ width: "100vw", height: "100vh" }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider>
  );
};

export default ProvidersCRUD;
