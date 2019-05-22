import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './releaseStyles.css';

function Release({ releaseArt, releaseName, releaseId, artist }) {
  return (
    <div className={styles.release}>
      <Link to={`/songs/${artist}/${releaseId}`}>
        <img width="100px" src={`${releaseArt}`} />
        <p>{releaseName}</p>
      </Link>
    </div>
  );
}

Release.propTypes = {
  releaseName: PropTypes.string,
  releaseArt: PropTypes.string,
  releaseId: PropTypes.string,
  artist: PropTypes.string
};

export default Release;
