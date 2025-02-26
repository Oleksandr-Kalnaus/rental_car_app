import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Navigation from "./../Navigation/Navigation.jsx";

function Layout() {
  return (
    <div className={css.layoutContainer}>
      <Navigation />
      <main className={css.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
