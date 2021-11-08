import * as React from 'react';
import * as styles from './TextArea.module.css';

const TextArea = (props) => {

  const {id, label, name, rows = 6, onChange} = props;
  
  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <textarea onChange={onChange} id={id} name={name} rows={rows} />
    </div>
  );
};

export default TextArea;
