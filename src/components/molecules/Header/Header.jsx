import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';
import Logo from '../../atoms/Logo';

const Header = () => {
  const [transparent, setTransparent] = useState(true);

  const handleScroll = () => {
    if(175 < window.pageYOffset) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={`${styles.root} ${transparent === true ? styles.inactive : styles.active}`}>
      <nav>
        <Logo />
        <Link to="/#home">
          <div className={styles.link}>
            <p>Home</p>
            <hr />
          </div>
        </Link>
        <Link to="/#productHighlight">
          <div className={styles.link}>
            <p>Products</p>
            <hr />
          </div>
        </Link>
        <Link to="/#partnership">
          <div className={styles.link}>
            <p>Partnership</p>
            <hr />
          </div>
        </Link>
        <Link to="/#">
          <div className={styles.link}>
            <p>Blogs</p>
            <hr />
          </div>
        </Link>
        <Link to="/#about">
          <div className={styles.link}>
            <p>About Us</p>
            <hr />
          </div>
        </Link>
        <Link to="/#contact">
          <div className={styles.link}>
            <p>Contact</p>
            <hr />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
