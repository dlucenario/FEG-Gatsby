import * as React from 'react';
import * as styles from './Highlight.module.css';
import Slider from "react-slick";

const Highlight = (props) => {

  const { orientation = 'left', product } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <div className={`${styles.root} ${orientation === 'right' ? styles.rightOrientation : ''}`}>
      <div className={styles.content}>
        <h2>{product.product}</h2>
        {product.attribute.map((atr, index) => {
          return(
          <div key={`highlight-${index}`} className={styles.attributeContainer}>
            <h3>{atr.title}</h3>
            <p>{atr.description}</p>
          </div>);
        })}
      </div>
      <div className={styles.content}>
        <Slider {...settings}>
          {product.imageGallery.map((imageInfo, index) => {
            return(            
            <div key={`highlightImage-${index}`} className={styles.imageContainer}>
              <img src={imageInfo.image} alt={imageInfo.alt}></img>
            </div>);
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Highlight;
