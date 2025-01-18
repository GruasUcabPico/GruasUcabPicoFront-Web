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
                <NavLink to="/login">Login (si)</NavLink>
                <NavLink to="/">Usuarios</NavLink>
                <NavLink to="/test">Proveedores</NavLink>
      </header>

      <footer>
        <p>UCABGruero</p>
      </footer>
    </>
  );
}

export default RootLayout;

/*
<header>
<NavLink
  to="/login"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Login (si)
</NavLink>
<NavLink
  to="/"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Usuarios
</NavLink>
<NavLink
  to="/providers"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Proveedores
</NavLink>
</header>
*/