import css from './Logo.module.css';

export function Logo() {
  return (
    <div>
      <img className={css.logo} src="/public/car-silhouette-logo-template-vector.svg" alt="Logo" />
    </div>
  );
}

export default Logo;