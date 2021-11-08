import React, {useRef, createRef} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Footer from '../components/organisms/Footer';
import Header from './molecules/Header';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

  const bodyRef = useRef();

  return (
    <div>
      <Header bodyPos = {bodyRef} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
