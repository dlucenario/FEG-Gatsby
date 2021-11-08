import React from 'react';
import Slider from 'react-slick';
import Button from '../../components/atoms/Button';
import Header from '../../components/molecules/Header';
import * as styles from './base.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Components = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.root}>
      <h1>Components</h1>
      <h2>Buttons</h2>
      <div className={styles.buttonContainer}>
        <Button variant="primary" symbol="close" text="Submit" />
        <Button variant="secondary" symbol="close" />
        <Button variant="primary" text="No Icon" />
        <Button variant="secondary" text="No Icon" />
      </div>
      <h2>Typography</h2>
      <div className={styles.typographyContainer}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Body</p>
      </div>
      <h2>Header</h2>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <h2>Slider</h2>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <p>Category 1</p>
          <p>Category 2</p>
          <p>Category 3</p>
          <p>Category 4</p>
        </Slider>

      </div>
    </div>
  );
};

export default Components;
