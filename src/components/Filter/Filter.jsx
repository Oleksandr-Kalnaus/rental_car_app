import styles from './Filter.module.css';

const Filter = ({ onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <input type="text" placeholder="Brand" onChange={(e) => onFilterChange('brand', e.target.value)} />
      <input type="number" placeholder="Price" onChange={(e) => onFilterChange('price', e.target.value)} />
      <input type="number" placeholder="Mileage from" onChange={(e) => onFilterChange('mileageFrom', e.target.value)} />
      <input type="number" placeholder="Mileage to" onChange={(e) => onFilterChange('mileageTo', e.target.value)} />
    </div>
  );
};

export default Filter;