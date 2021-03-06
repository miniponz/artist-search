import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagingStyles.css';

function Paging({ currentPage, nextPage, previousPage, totalPages }) {
  return (
    <div className={styles.paging}>
      {currentPage > 1 && <button onClick={previousPage}>Previous</button>}
      <span>Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages && <button onClick={nextPage}>Next</button>}
    </div>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
