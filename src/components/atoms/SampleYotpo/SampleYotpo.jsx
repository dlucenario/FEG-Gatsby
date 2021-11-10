import * as React from 'react';
import * as styles from './SampleYotpo.module.css';

const SampleYotpo = () => {
  
  return (
    <div className={styles.root}>
      <div class="yotpo yotpo-main-widget"
        data-product-id="abc12345"
        data-price="Product Prices"
        data-currency="AUD"
        data-name="My Product"
        data-url="https://www.everglory.ph/about/"
        data-image-url="https://www.everglory.ph/about/">
      </div>
    </div>
  );
};

export default SampleYotpo;
