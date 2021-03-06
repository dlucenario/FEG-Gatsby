import * as React from 'react';
import * as styles from './Container.module.css';

const Container = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default Container;