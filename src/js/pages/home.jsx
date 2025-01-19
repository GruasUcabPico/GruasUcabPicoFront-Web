import React from "react";
import LoginForm from "../component/login/login";
import RootLayout from "../pages/RootLayout";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import UsersCRUD from "../component/users/Users";
import CranesCRUD from "../component/cranes/cranes";
import ProvidersCRUD from "../component/providers/providers";
import What from "../pages/what";

import { AuthProvider as MyAuthProvider } from "../component/auth/AuthProvider";
import ProtectedRoute from "../component/auth/ProtectedRoute";

import createStore from 'react-auth-kit/createStore';
import AuthProvider from "react-auth-kit";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

//check if user is logged in

//create your first component
const Home = () => {

  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });
  
  const users = [
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

  const providers = [
    {
      id: 1,
      name: "Provider One",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Provider Two",
      phoneNumber: "987-654-3210",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Provider Three",
      phoneNumber: "555-555-5555",
      address: "789 Oak St",
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

  return (
    <AuthProvider store={store}>
      <BrowserRouter>
        <header>
          <h1>UCABGruero</h1>
          <NavLink to="/login">Login (si)</NavLink>
          <NavLink to="/">Menú principal</NavLink>
          <NavLink to="/users">Usuarios</NavLink>
          <NavLink to="/test">Proveedores</NavLink>
          <NavLink to="/orders">Órdenes</NavLink>
          <NavLink to="/cranes">Grúas</NavLink>
        </header>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route index element={<Menu />} />
          <Route
            path="users"
            element={
              <UsersCRUD
                users={users}
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
          <Route path="cranes" element={<CranesCRUD />} />
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
