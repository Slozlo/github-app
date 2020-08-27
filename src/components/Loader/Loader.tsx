import React from 'react';

import Progress from '@material-ui/core/CircularProgress';

import styles from './Loader.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <Progress />
  </div>
);
