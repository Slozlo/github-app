import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReposRequest } from '../../store/modules/repos/reposActions';
import useDebounce from '../../hooks/useDebounce';

import TextField from '@material-ui/core/TextField';

import styles from './Header.module.scss';
import { RootState } from '../../types/rootState';

export default () => {
  const dispatch = useDispatch();

  const error = useSelector((state: RootState) => state.repos.error);

  const [orgLogin, setSearchLogin] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearchLogin(e.currentTarget.value),
    [setSearchLogin]
  );

  const debouncedOrgLogin = useDebounce(orgLogin, 500);

  useEffect(() => {
    dispatch(fetchReposRequest(debouncedOrgLogin));
  }, [debouncedOrgLogin, dispatch]);

  return (
    <div className={styles.container}>
      <TextField
        error={Boolean(error)}
        className={styles.input}
        label="Наименование организации"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};
