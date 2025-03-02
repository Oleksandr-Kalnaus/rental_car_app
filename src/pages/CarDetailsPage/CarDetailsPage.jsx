import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import { fetchCarDetails } from "../../redux/cars/operations.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCarDetails,
  selectLoading,
  selectError,
} from "../../redux/cars/selectors.js";
import Loader from "../../components/Loader/Loader.jsx";
import toast from "react-hot-toast";

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return toast.error({ error });
  if (!car) return <div>Car not found</div>;

  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
};

export default CarDetailsPage;
