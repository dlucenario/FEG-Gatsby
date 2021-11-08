import * as React from 'react';
import * as styles from './Partnership.module.css';

import PartnershipImage from './partnership.png';
import Container from '../../atoms/Container';

const Partnership = () => {
  
  return (
    <Container>
    <div id={'partnership'} className={styles.root}>
      <div className={styles.partnership}>
        <div className={styles.imageContainer}>
          <img src={PartnershipImage} alt={'partnership'}></img>
        </div>
        <div className={styles.content}>
          <h4>Become a Partner</h4>
          <h5 className={styles.title}>
            Grow Your Business
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
        </div>
      </div>
      <div className={styles.contractor}>
          <div className={styles.content}>
            <h4>Got something big planned?</h4>
            <h5 className={styles.title}>
              Roofing Contractor
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={PartnershipImage} alt={'partnership'}></img>
          </div>
      </div>
    </div>
    </Container>
  );
};

export default Partnership;
