import { useEffect, useState } from "react";
import CarCard from "../../components/CarCadr/CarCadr.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import styles from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectFilteredCars } from "../../redux/cars/slice.js";
import { setFilter } from "../../redux/filters/slice.js";
import {
  selectTotalCars,
  selectTotalPages,
} from "../../redux/cars/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);
  const totalCars = useSelector(selectTotalCars);
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
    setPage(1);
  };

  const itemsPerPage = 6;
  const paginatedCars = cars.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className={styles.catalogPage}>
      <Filter onFilterChange={handleFilterChange} />
      <div className={styles.carList}>
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalItems={totalCars}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default CatalogPage;
