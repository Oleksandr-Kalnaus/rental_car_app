import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.image}
        loading="lazy"
      />
      <div className={css.header}>
        <h3 className={css.title}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </h3>
        <p className={css.price}>${car.rentalPrice}</p>
      </div>
      <p className={css.address}>
        {car.address.split(", ").slice(1).join(" | ")} | {car.rentalCompany}
      </p>
      <p className={css.details}>
        {car.type} | {car.mileage.toLocaleString()} km
      </p>
      <Button
        className={css.button}
        onClick={() => navigate("/cars/" + car.id)}
      >
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
