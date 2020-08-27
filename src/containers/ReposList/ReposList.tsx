import React from 'react';
import { useSelector } from 'react-redux';

import { RepoItem, Loader } from '../../components';

import styles from './ReposList.module.scss';

export default () => {
  const repos = useSelector((state: any) => state.repos.data);
  const isReposLoading = useSelector((state: any) => state.repos.loading);

  return (
    <div>
      {isReposLoading ? (
        <Loader />
      ) : (
        <div className={styles['list-wrapper']}>
          {repos.map((repo: any) => (
            <RepoItem
              forksCount={repo.forks_count}
              watchersCount={repo.watchers_count}
              url={repo.html_url}
              starsCount={repo.stargazers_count}
              className={styles.item}
              name={repo.name}
              key={repo.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
