import Banner from "../../components/Banner/Banner.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <Banner />
      <Layout />
    </div>
  );
};

export default HomePage;
