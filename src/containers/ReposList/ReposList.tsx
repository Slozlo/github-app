import React from 'react';
import { useSelector } from 'react-redux';

import { RepoItem, Loader } from '../../components';

import styles from './ReposList.module.scss';
import { RootState } from '../../types/rootState';

export default () => {
  const repos = useSelector((state: RootState) => state.repos.data);
  const isReposLoading = useSelector((state: RootState) => state.repos.loading);

  return (
    <div>
      {isReposLoading ? (
        <Loader />
      ) : (
        <div className={styles['list-wrapper']}>
          {repos.map((repo) => (
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
