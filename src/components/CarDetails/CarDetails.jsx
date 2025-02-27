import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  return (
    <div className={styles.details}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={styles.image}
      />

      <div className={styles.header}>
        <h2>
          {car.brand} <span className={styles.model}>{car.model}</span>,{" "}
          {car.year}
        </h2>
        <span className={styles.price}>${car.rentalPrice}</span>
      </div>

      <p className={styles.location}>
        📍 {car.address.split(", ").slice(1).join(", ")} | Mileage:{" "}
        {car.mileage.toLocaleString()} km
      </p>

      <p className={styles.description}>{car.description}</p>

      <div className={styles.specifications}>
        <h3>Car Specifications:</h3>
        <ul>
          <li>📅 Year: {car.year}</li>
          <li>🚗 Type: {car.type}</li>
          <li>⛽ Fuel Consumption: {car.fuelConsumption} L/100km</li>
          <li>⚙️ Engine Size: {car.engineSize}</li>
        </ul>
      </div>

      <div className={styles.rentalConditions}>
        <h3>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions.map((condition, index) => (
            <li key={index}>✔ {condition}</li>
          ))}
        </ul>
      </div>

      <div className={styles.accessories}>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {[...car.accessories, ...car.functionalities].map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
