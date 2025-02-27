import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import RentalForm from "../../components/RentalForm/RentalForm.jsx";
import styles from "./CarDetailsPage.module.css";
import { fetchCarDetails } from "../../redux/cars/operations.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCarDetails,
  selectLoading,
  selectError,
} from "../../redux/cars/selectors.js";

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <div className={styles.carPage}>
      <div className={styles.carDetailsContainer}>
        <CarDetails car={car} />
        <RentalForm />
      </div>
    </div>
  );
};

export default CarDetailsPage;
