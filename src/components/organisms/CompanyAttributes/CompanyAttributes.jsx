import * as React from 'react';
import * as styles from './CompanyAttributes.module.css';
import Container from '../../atoms/Container';
import Icon from '../../atoms/Icons/Icon';
import ContentHeader from '../../atoms/ContentHeader';

const CompanyAttributes = () => {
  
  return (
    <Container>
      <div className={styles.root}>
        <ContentHeader subHeader='Leading Manufacturer' header='Why People Choose Us' />
        <div className={styles.attributeList}>
          <div className={styles.attribute}>
            <div className={styles.attributeIconContainer}>
              <Icon symbol={'heart'}></Icon>
            </div>
            <h4>High Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div className={styles.attribute}>
            <div className={styles.attributeIconContainer}>
              <Icon symbol={'search'}></Icon>
            </div>
            <h4>High Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div className={styles.attribute}>
            <div className={styles.attributeIconContainer}>
              <Icon symbol={'heart'}></Icon>
            </div>
            <h4>High Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div className={styles.attribute}>
            <div className={styles.attributeIconContainer}>
              <Icon symbol={'heart'}></Icon>
            </div>
            <h4>High Quality</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CompanyAttributes;
