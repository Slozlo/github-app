import React from 'react';
import Paper from '@material-ui/core/Paper';
import cn from 'classnames';

import starIcon from './assets/star.svg';

import styles from './RepoItem.module.scss';

interface Props {
  name: string;
  className?: string;
  starsCount: number;
  url: string;
  forksCount: number;
  watchersCount: number;
}

export default ({
  name,
  className,
  starsCount,
  url,
  forksCount,
  watchersCount
}: Props) => (
  <Paper className={cn(styles.paper, className)}>
    <div>
      <div className={styles.field}>
        <span className={styles.label}>Название:</span> {name}
      </div>
      <div className={styles.field}>
        <span className={styles.label}>Ссылка:</span> <a href={url}>{url}</a>
      </div>
      <div className={styles.field}>
        <span className={styles.label}>Кол-во форков:</span> {forksCount}
      </div>
      <div className={styles.field}>
        <span className={styles.label}>Кол-во вотчеров:</span> {watchersCount}
      </div>
    </div>
    <div>
      <div className={styles.field}>
        <img className={styles.icon} src={starIcon} alt="" />
        {starsCount}
      </div>
    </div>
  </Paper>
);
