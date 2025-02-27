import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  return (
    <div className={styles.details}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={styles.image}
      />
      <h2 className={styles.title}>{`${car.brand} ${car.model}`}</h2>
      <p className={styles.description}>{car.description}</p>

      <div className={styles.info}>
        <p>
          <strong>Year:</strong> {car.year}
        </p>
        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Fuel Consumption:</strong> {car.fuelConsumption} L/100km
        </p>
        <p>
          <strong>Engine Size:</strong> {car.engineSize}
        </p>
        <p>
          <strong>Price:</strong> ${car.rentalPrice}/day
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage} km
        </p>
      </div>

      <div className={styles.accessories}>
        <h3>Accessories:</h3>
        <ul>
          {car.accessories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.functionalities}>
        <h3>Functionalities:</h3>
        <ul>
          {car.functionalities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.rentalConditions}>
        <h3>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>

      <div className={styles.rentalInfo}>
        <p>
          <strong>Rental Company:</strong> {car.rentalCompany}
        </p>
        <p>
          <strong>Address:</strong> {car.address}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
