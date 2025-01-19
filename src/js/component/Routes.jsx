import { Route } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import LoginForm from "../component/login/login";
import RootLayout from "../pages/RootLayout";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import UsersCRUD from "../component/users/Users";
import ProvidersCRUD from "../component/providers/providers";
import What from "../pages/what";

const AppRoutes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        <Fragment>
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
        </Fragment>
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    
    <Route path="login" element={<LoginForm />} />
  ];
  

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default AppRoutes;
