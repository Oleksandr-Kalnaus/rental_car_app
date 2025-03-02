import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./Filter.module.css";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCarsBrands } from "../../redux/cars/operations.js";

const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.cars.brands);

  const [openDropdown, setOpenDropdown] = useState({
    brand: false,
    price: false,
  });

  useEffect(() => {
    dispatch(fetchCarsBrands());
  }, [dispatch]);

  const initialValues = {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  };

  const validationSchema = Yup.object({
    brand: Yup.string(),
    price: Yup.number(),
    mileageFrom: Yup.number().positive("Mileage must be positive"),
    mileageTo: Yup.number().positive("Mileage must be positive"),
  });

  const handleSubmit = (values) => {
    const filters = {
      brand: values.brand || "",
      rentalPrice: values.price ? String(values.price) : "",
      minMileage: values.mileageFrom ? String(values.mileageFrom) : "",
      maxMileage: values.mileageTo ? String(values.mileageTo) : "",
    };

    if (!values.mileageFrom && values.mileageTo) {
      filters.minMileage = "";
    }

    if (!values.mileageTo && values.mileageFrom) {
      filters.maxMileage = "";
    }
    onFilterChange(filters);
  };

  const prices = ["30", "40", "50", "60", "70", "80", "90", "100"];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.filter}>
          <div className={css.filterGroup}>
            <label>Car brand</label>
            <div className={css.inputWrapper}>
              <Field
                as="select"
                name="brand"
                className={css.selectBrand}
                onFocus={() =>
                  setOpenDropdown((prev) => ({ ...prev, brand: true }))
                }
                onBlur={() =>
                  setOpenDropdown((prev) => ({ ...prev, brand: false }))
                }
              >
                <option value="">Choose a brand</option>
                {brands.map((brand, index) => (
                  <option key={`${brand}-${index}`} value={brand}>
                    {brand}
                  </option>
                ))}
              </Field>
              <img
                src={
                  openDropdown.brand
                    ? "/public/chevronUp.svg"
                    : "/public/chevronDown.svg"
                }
                alt="Dropdown Icon"
                className={css.dropdownIcon}
              />
            </div>
          </div>
          <div className={css.filterGroup}>
            <label>Price/ 1 hour</label>
            <div className={css.inputWrapper}>
              <Field
                as="select"
                name="price"
                className={css.selectPrice}
                onFocus={() =>
                  setOpenDropdown((prev) => ({ ...prev, price: true }))
                }
                onBlur={() =>
                  setOpenDropdown((prev) => ({ ...prev, price: false }))
                }
              >
                <option value="">Choose a price</option>
                {prices.map((price, index) => (
                  <option key={`price-${index}`} value={price}>
                    {price}
                  </option>
                ))}
              </Field>
              <img
                src={
                  openDropdown.price
                    ? "/public/chevronUp.svg"
                    : "/public/chevronDown.svg"
                }
                alt="Dropdown Icon"
                className={css.dropdownIcon}
              />
            </div>
          </div>
          <div className={css.filterGroup}>
            <label>Car mileage / km</label>
            <div className={css.mileageInputs}>
              <Field
                type="number"
                name="mileageFrom"
                placeholder="From"
                className={css.inputFrom}
              />
              <Field
                type="number"
                name="mileageTo"
                placeholder="To"
                className={css.inputTo}
              />
            </div>
          </div>
          <Button type="submit" className={css.searchButton}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
