import React from "react";
import LoginForm from "../component/login/login";
import RootLayout from "../pages/RootLayout";
import UsersCRUD from "../component/users/Users";
import ProvidersCRUD from "../component/providers/providers";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

//check if user is logged in

//create your first component
const Home = () => {
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

  return (
    <BrowserRouter>
      <header>
        <NavLink to="/login">Login (si)</NavLink>
        <NavLink to="/">Usuarios</NavLink>
        <NavLink to="/providers">Proveedores</NavLink>
      </header>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route
          index
          element={
            <UsersCRUD
              users={users}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="providers"
          element={
            <ProvidersCRUD
              providers={providers}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
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
