import * as React from 'react';
import * as styles from './Input.module.css';

const Input = (props) => {
  
  const {label, placeholder, id, name, value, onChange, type = 'text'} = props;

  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input
        value={value} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
