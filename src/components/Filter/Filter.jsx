import { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Brand"
        onChange={(e) => handleChange("brand", e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => handleChange("price", e.target.value)}
      />
      <input
        type="number"
        placeholder="Mileage from"
        onChange={(e) => handleChange("mileageFrom", e.target.value)}
      />
      <input
        type="number"
        placeholder="Mileage to"
        onChange={(e) => handleChange("mileageTo", e.target.value)}
      />
    </div>
  );
};

export default Filter;
