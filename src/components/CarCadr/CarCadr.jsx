import styles from './CarCard.module.css';

const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <button>Read more</button>
    </div>
  );
};

export default CarCard;