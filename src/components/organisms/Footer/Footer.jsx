import React from 'react';
import * as styles from './Footer.module.css';

import Container from '../../atoms/Container';

const Footer = () => {
  
  return (
    <div className={styles.root}>
      <Container>
        <p>© 2021 Ever Glory Metal</p>
      </Container>
    </div>
  );
};

export default Footer;
