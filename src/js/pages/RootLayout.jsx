/* Original
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};
export default RootLayout;
*/

import { Outlet, Link, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login (si)
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/providers"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Proveedores
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <footer>
        <p>UCABGruero</p>
      </footer>
    </>
  );
}

export default RootLayout;
