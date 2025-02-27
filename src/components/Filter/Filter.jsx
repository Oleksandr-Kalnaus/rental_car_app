import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./Filter.module.css";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCarsBrands } from "../../redux/cars/operations.js";

const Filter = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.cars.brands);

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
      ...values,
      price: values.price ? parseFloat(values.price) : null,
      mileageFrom: values.mileageFrom ? parseFloat(values.mileageFrom) : null,
      mileageTo: values.mileageTo ? parseFloat(values.mileageTo) : null,
    };
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
            <Field as="select" name="brand" className={css.selectBrand}>
              <option value="">Choose a brand</option>
              {brands.map((brand, index) => (
                <option key={`${brand}-${index}`} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </div>
          <div className={css.filterGroup}>
            <label>Price/ 1 hour</label>
            <Field as="select" name="price" className={css.selectPrice}>
              <option value="">Choose a price</option>
              {prices.map((price, index) => (
                <option key={`price-${index}`} value={price}>
                  {price}
                </option>
              ))}
            </Field>
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
