import * as React from 'react';
import * as styles from './ContentHeader.module.css';

const ContentHeader = ({header = '', subHeader = ''}) => {
  return (
    <div className={styles.contentHeader}>
      <h5>{subHeader}</h5>
      <h3>{header}</h3>
    </div>
  );
};

export default ContentHeader;
