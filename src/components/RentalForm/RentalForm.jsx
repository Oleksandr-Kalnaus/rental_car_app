import styles from './RentalForm.module.css';

const RentalForm = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="date" placeholder="Start Date" required />
      <input type="date" placeholder="End Date" required />
      <button type="submit">Rent</button>
    </form>
  );
};

export default RentalForm;