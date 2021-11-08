import * as React from 'react';
import * as styles from './Select.module.css';

const Select = (props) => {
  
  const {label, id, name, onChange, options } = props;

  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <select onChange={onChange} id={id} name={name}>
        {options.map((item,index) => {
          return <option
          key={`option-${index}`}
          value={item.value}>{item.label}
          </option>
        })}
      </select>
    </div>
  );
};

export default Select;
