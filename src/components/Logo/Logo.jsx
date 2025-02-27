import css from "./Logo.module.css";

export function Logo() {
  return (
    <div className={css.logoContainer}>
      <img className={css.logo} src="/RentalCar.svg" alt="Logo" />
    </div>
  );
}

export default Logo;
