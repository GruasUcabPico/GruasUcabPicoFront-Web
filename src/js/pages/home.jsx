import React from "react";
import LoginForm from "../component/login/login";
import RootLayout from "../pages/RootLayout";
import Menu from "./Menu";
import Orders from "./Orders";
import RateKMCRUD from "../component/ratekm/ratekm";
import UsersCRUD from "../component/users/Users";
import CranesCRUD from "../component/cranes/cranes";
import ProvidersCRUD from "../component/providers/providers";
import What from "../pages/what";

import { AuthProvider as MyAuthProvider } from "../component/auth/AuthProvider";
import ProtectedRoute from "../component/auth/ProtectedRoute";

import createStore from 'react-auth-kit/createStore';
import AuthProvider from "react-auth-kit";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import CRUDMenu from "./CRUDMenu";

//check if user is logged in

//create your first component
const Home = () => {

  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });
  
  const drivers = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "987-654-3210",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      phoneNumber: "555-555-5555",
    },
  ];

  const operators = [
    {
      id: 4,
      fullName: "Michael Brown",
      email: "michael.brown@example.com",
      phoneNumber: "111-222-3333",
    },
    {
      id: 5,
      fullName: "Emily Davis",
      email: "emily.davis@example.com",
      phoneNumber: "444-555-6666",
    },
    {
      id: 6,
      fullName: "David Wilson",
      email: "david.wilson@example.com",
      phoneNumber: "777-888-9999",
    },
  ];

  const handleAdd = () => {
    console.log("Add new user");
  };

  const handleEdit = (id) => {
    console.log("Edit user with id: ", id);
  };

  const handleDelete = (id) => {
    console.log("Delete user with id: ", id);
  };

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

  const rateKMs = [
    {
      id: 1,
      coverageRadius: 10,
      priceKM: 5.0,
    },
    {
      id: 2,
      coverageRadius: 20,
      priceKM: 4.5,
    },
    {
      id: 3,
      coverageRadius: 30,
      priceKM: 4.0,
    },
  ];

  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <header>
          <h1>GruasUCABPico</h1>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/">Menú principal</NavLink>
          <NavLink to="/orders">Órdenes</NavLink>
          <NavLink to="/crudmenu">Administrar</NavLink>
        </header>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route index element={<Menu />} />
          <Route
            path="users"
            element={
              <UsersCRUD
                drivers={drivers}
                operators={operators}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path="test"
            element={
              <What />
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="crudmenu" element={<CRUDMenu />} />
          <Route 
            path="cranes" 
            element={
              <CranesCRUD 
                cranes={cranes}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
              } 
          />
          <Route 
            path="ratekms" 
            element={
              <RateKMCRUD 
                rates={rateKMs}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
              } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

/* Intento con routing
const Home = () => {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/login">Login (si)</NavLink>
        <NavLink to="/">Usuarios</NavLink>
        <NavLink to="/providers">Proveedores</NavLink>
      </header>
      
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/">
        <UsersCRUD users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </Route>
      <Route path="/providers">
        <ProvidersCRUD
          providers={providers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Route>
    </BrowserRouter>
  );

  return (
    //<UsersCRUD users={users} onEdit={handleEdit} onDelete={handleDelete} />
    <ProvidersCRUD
      providers={providers}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
*/

export default Home;
