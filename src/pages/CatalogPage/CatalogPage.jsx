import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard/CarCard.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import {
  selectCars,
  selectTotalPages,
  selectFilter,
} from "../../redux/cars/selectors.js";
import { setFilter } from "../../redux/filters/slice.js";
import { resetCars } from "../../redux/cars/slice.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilter);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars({ page, ...filters }));
  }, [dispatch, page, filters]);

  const handleFilterChange = (newFilters) => {
    dispatch(resetCars());
    dispatch(setFilter(newFilters));
    setPage(1);
    dispatch(fetchCars({ page: 1, ...newFilters }));
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.catalog}>
      <ul className={css.catalogPage}>
        <Filter onFilterChange={handleFilterChange} />
        <li className={css.carList}>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </li>

        {page < totalPages && (
          <Button onClick={handleLoadMore} className={css.loadMoreButton}>
            Load More
          </Button>
        )}
      </ul>
    </div>
  );
};

export default CatalogPage;
