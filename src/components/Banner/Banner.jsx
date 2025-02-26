import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx'; 
import css from './Banner.module.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={css.banner}>
      <h1 className={css.heading}>Welcome to RentalCar</h1>
      <p className={css.slogan}>Find your perfect car for rent</p>
      <img src="/public/Car-Rentals-Banner.png" alt="Car" className={css.banner} />
      <Button className={css.button} onClick={() => navigate('/catalog')}>View Catalog</Button>
    </div>
  );
};

export default Banner;