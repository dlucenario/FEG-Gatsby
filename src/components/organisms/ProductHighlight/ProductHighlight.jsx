import * as React from 'react';
import * as styles from './ProductHighlight.module.css';
import Container from '../../atoms/Container';
import Highlight from '../../organisms/Highlight';

const ProductHighlight = () => {
  
  const productListing = [
    {
      product: 'Colored Metal Panels',
      attribute:[
        {
          title: 'Known for',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Applications',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Benefits',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
        
      ],
      imageGallery: [
        {image: 'https://images.unsplash.com/photo-1528223871781-8f4c984f6164', alt: 'description_1'},
        {image: 'https://images.unsplash.com/photo-1595156065915-cd4b74cbe287', alt: 'description_2'},
      ],
    },

  ]

  return (
    <Container>
      <div className={styles.root} id={'productHighlight'}>
        <Highlight orientation={'left'} product={productListing[0]}></Highlight>
        <Highlight orientation={'right'} product={productListing[0]}></Highlight>
      </div>
    </Container>
  );
};

export default ProductHighlight;
