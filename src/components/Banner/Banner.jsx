import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import css from "./Banner.module.css";

import bannerX1 from "/Car-Rentals-Banner-x1.jpg";
import bannerX2 from "/Car-Rentals-Banner-x2.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={css.bannerBox}>
      <img
        srcSet={`${bannerX1} 1x, ${bannerX2} 2x`}
        src={bannerX1}
        alt="Car"
        className={css.bannerImg}
      />
      <div className={css.textOverlay}>
        <h1 className={css.heading}>Find your perfect rental car</h1>
        <p className={css.slogan}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button
          type="button"
          className={css.button}
          onClick={() => navigate("/catalog")}
        >
          View Catalog
        </Button>
      </div>
    </div>
  );
};

export default Banner;
