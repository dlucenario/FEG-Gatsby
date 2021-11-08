import * as React from 'react';
import * as styles from './Button.module.css';

import Icon from '../Icons/Icon';

const Button = (props) => {
  const { text, variant, symbol, fullWidth, type='button', onClick } = props;

  let buttonVariant = styles.primary;
  switch (variant) {
    case 'secondary':
      buttonVariant = styles.secondary;
      break;
    default:
      buttonVariant = styles.primary;
      break;
  }

  return (
    <div onClick={onClick} className={`${styles.root} ${fullWidth === true ? styles.fullWidth : ''}`}>
      <button className={buttonVariant} type={type}>
        <p>{text || 'Click Me'}</p>
        {symbol && (
        <div className={styles.iconContainer}>
          <Icon symbol={symbol} />
        </div>
        )}
      </button>
    </div>
  );
};

export default Button;
