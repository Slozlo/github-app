import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';

import Header from '../Header';
import ReposList from '../ReposList';

import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <ReposList />
      </div>
    </Provider>
  );
}

export default App;
