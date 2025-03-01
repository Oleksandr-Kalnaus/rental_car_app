import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import css from "./CarCard.module.css";
import { useEffect, useState } from "react";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCarFavorite = favorites.some((favCar) => favCar.id === car.id);
    setIsFavorite(isCarFavorite);
  }, [car.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCarFavorite = favorites.some((favCar) => favCar.id === car.id);

    let updatedFavorites;
    if (isCarFavorite) {
      updatedFavorites = favorites.filter((favCar) => favCar.id !== car.id);
    } else {
      updatedFavorites = [...favorites, car];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          loading="lazy"
        />
        <button
          className={`${css.favoriteButton} ${isFavorite ? css.active : ""}`}
          onClick={toggleFavorite}
        >
          <img
            src={isFavorite ? "/public/heart.svg" : "/public/emptyHeart.svg"}
            alt="favoriteIcon"
            className={css.favoriteIcon}
          />
        </button>
      </div>
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
