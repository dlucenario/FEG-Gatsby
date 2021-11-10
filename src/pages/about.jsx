import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => (
  // <Layout pageTitle="About Me">
    
  // </Layout>
  <div>
    Sample Yotpo Integration
    <div class="yotpo yotpo-main-widget"
      data-product-id="1957"
      data-price="50"
      data-currency="USD"
      data-name="Soap"
      data-url="www.item.com/soap"
      data-image-url="www.url.com">
    </div>
  </div>
);

export default AboutPage;
