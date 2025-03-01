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
            {car.brand} <span className={css.model}>{car.model}</span>,
          </h2>
          <p className={css.location}>
            <img
              src="/public/location.svg"
              alt="location"
              className={css.locationIcon}
            />
            {car.address.split(", ").slice(1).join(", ")} | Mileage:
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
                  <img
                    src="/public/check.svg"
                    alt="check"
                    className={css.checkIcon}
                  />
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className={css.specifications}>
            <h3 className={css.headindSpecs}>Car Specifications:</h3>
            <ul className={css.specifications}>
              <li>
                <img
                  src="/public/calendar.svg"
                  alt="calendar"
                  className={css.calendarIcon}
                />
                Year: {car.year}
              </li>
              <li>
                <img src="/public/car.svg" alt="car" className={css.carIcon} />
                Type: {car.type}
              </li>
              <li>
                <img
                  src="/public/fuel.svg"
                  alt="fuel"
                  className={css.fuelIcon}
                />
                Fuel Consumption: {car.fuelConsumption}
              </li>
              <li>
                <img
                  src="/public/gear.svg"
                  alt="gear"
                  className={css.gearIcon}
                />
                Engine Size: {car.engineSize}
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
                    <img
                      src="/public/check.svg"
                      alt="check"
                      className={css.checkIcon}
                    />{" "}
                    {item}
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
