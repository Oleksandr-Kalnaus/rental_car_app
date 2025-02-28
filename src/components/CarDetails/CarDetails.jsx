import RentalForm from "../RentalForm/RentalForm";
import css from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  return (
    <div className={css.details}>
      <div className={css.imageContainer}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
        />
        <RentalForm />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h2 className={css.title}>
            {car.brand} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </h2>
          <p className={css.location}>
            {/* треба вставини іконки */}
            {car.address.split(", ").slice(1).join(", ")} | Mileage:{" "}
            {car.mileage.toLocaleString()} km
          </p>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.description}>{car.description}</p>
        </div>

        <div className={css.features}>
          <div className={css.rentalConditions}>
            <h3 className={css.headindSpecs}>Rental Conditions:</h3>
            <ul>
              {car.rentalConditions.map((condition, index) => (
                <li key={index}>
                  {/* треба вставини іконки */}
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.specifications}>
            <h3 className={css.headindSpecs}>Car Specifications:</h3>
            <ul>
              <li>
                {/* треба вставини іконки */} Year: {car.year}
              </li>
              <li>
                {/* треба вставини іконки */} Type: {car.type}
              </li>
              <li>
                {/* треба вставини іконки */} Fuel Consumption:{" "}
                {car.fuelConsumption}
              </li>
              <li>
                {/* треба вставини іконки */} Engine Size: {car.engineSize}
              </li>
            </ul>
          </div>

          <div className={css.accessories}>
            <h3 className={css.headindSpecs}>
              Accessories and functionalities:
            </h3>
            <ul>
              {[...car.accessories, ...car.functionalities].map(
                (item, index) => (
                  <li key={index}>
                    {/* треба вставини іконки */} {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
