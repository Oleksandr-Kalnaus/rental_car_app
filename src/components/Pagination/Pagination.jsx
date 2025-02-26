import styles from './Pagination.module.css';

const Pagination = ({ onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => onPageChange('prev')}>Previous</button>
      <button onClick={() => onPageChange('next')}>Next</button>
    </div>
  );
};

export default Pagination;