import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectFilteredCars } from "../../redux/cars/slice.js";
import { setFilter } from "../../redux/filters/slice.js";
import { selectTotalCars } from "../../redux/cars/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);
  const totalCars = useSelector(selectTotalCars);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
    setPage(1);
  };

  const itemsPerPage = 12;
  const paginatedCars = cars.slice(0, page * itemsPerPage);

  return (
    <div className={css.catalogPage}>
      <Filter onFilterChange={handleFilterChange} />
      <div className={css.carList}>
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {paginatedCars.length < totalCars && (
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          className={css.loadMoreButton}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default CatalogPage;
