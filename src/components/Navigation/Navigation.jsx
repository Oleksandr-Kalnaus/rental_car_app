import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";
import Logo from "../Logo/Logo.jsx";

function Navigation() {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/car/");
  return (
    <header className={css.header}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive || isDetailsPage ? `${css.link} ${css.active}` : css.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive || isDetailsPage ? `${css.link} ${css.active}` : css.link
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
