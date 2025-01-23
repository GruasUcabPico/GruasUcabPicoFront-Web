import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
        <header>
          <h1>GruasUCABPico</h1>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/menu">Menú principal</NavLink>
          <NavLink to="/orders">Órdenes</NavLink>
          <NavLink to="/crudmenu">Administrar</NavLink>
        </header>
        </div>
    );
}

export default Header;