import { useState } from "react";
import css from "./Filter.module.css";
import Button from "../Button/Button.jsx";

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
    <div className={css.filter}>
      <div className={css.filterGroup}>
        <label>Car brand</label>
        <input
          type="text"
          placeholder="Choose a brand"
          onChange={(e) => handleChange("brand", e.target.value)}
        />
      </div>
      <div className={css.filterGroup}>
        <label>Price/1 hour</label>
        <input
          type="number"
          placeholder="Choose a price"
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>
      <div className={css.filterGroup}>
        <label>Car mileage /km</label>
        <div className={css.mileageInputs}>
          <input
            type="number"
            placeholder="From"
            onChange={(e) => handleChange("mileageFrom", e.target.value)}
          />
          <input
            type="number"
            placeholder="To"
            onChange={(e) => handleChange("mileageTo", e.target.value)}
          />
        </div>
      </div>
      <Button className={css.searchButton}>Search</Button>
    </div>
  );
};

export default Filter;
