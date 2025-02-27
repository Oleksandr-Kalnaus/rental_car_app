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
      <h3 className={css.title}>{`${car.brand} ${car.model}`}</h3>
      <p className={css.description}>{car.description}</p>
      <div className={css.details}>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Price:</strong> ${car.rentalPrice}/day
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage} km
        </p>
      </div>
      <Button
        className={css.button}
        onClick={() => navigate("/cars/" + car.id)}
      >
        Read More
      </Button>
    </div>
  );
};

export default CarCard;
