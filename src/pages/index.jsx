import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import Cover from '../components/organisms/Cover';
import ProductHightlight from '../components/organisms/ProductHighlight';
import CompanyAttributes from '../components/organisms/CompanyAttributes';
import Partnership from '../components/organisms/Partnership';
import SummaryAbout from '../components/organisms/SummaryAbout';
import ReachOut from '../components/organisms/ReachOut';
import Layout from '../components/layout';

import {EssentialProvider} from '../context/essential';

const IndexPage = () => {

  return (
    <EssentialProvider>
      <Layout pageTitle="Home Page">
        <Cover />
        <ProductHightlight />
        <CompanyAttributes />
        <Partnership />
        <SummaryAbout />
        <ReachOut />
      </Layout>
    </EssentialProvider>
  );
};

export default IndexPage;
