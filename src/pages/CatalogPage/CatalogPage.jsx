import { useEffect, useState } from 'react';
import CarCard from '../../components/CarCadr/CarCadr.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const fetchCars = async () => {
    // Fetch cars from API
  };

useEffect(() => {
    fetchCars();
  }, [filters, page]);

  return (
    <div className={styles.catalogPage}>
      <Filter onFilterChange={setFilters} />
      <div className={styles.carList}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination onPageChange={(direction) => setPage(direction === 'next' ? page + 1 : page - 1)} />
    </div>
  );
};

export default CatalogPage;