import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Logo from "../Logo/Logo.jsx";

function Navigation() {
  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
