import styles from './CarDetails.module.css';

const CarDetails = ({ car }) => {
  return (
    <div className={styles.details}>
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
      <p>Mileage: {car.mileage}</p>
    </div>
  );
};

export default CarDetails;