
import { useEffect, useState } from 'react';
import CarDetails from '../../components/CarDetails/CarDetails.jsx';
import RentalForm from '../../components/RentalForm/RentalForm.jsx';
import styles from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch car details from API
  }, []);

  return (
    <div className={styles.carPage}>
      {car && <CarDetails car={car} />}
      <RentalForm onSubmit={(e) => e.preventDefault()} />
    </div>
  );
};

export default CarDetailsPage;