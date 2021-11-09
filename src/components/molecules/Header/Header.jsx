import React, {useEffect, useState} from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icons/Icon';

const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  const renderLinks = () => {
    return (
      <div className={styles.linkContainer} onClick={() => setShowMobileMenu(false)}>
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
      </div>
    )
  }

  return (
    <div>
      <div className={`${styles.root} ${transparent === true ? styles.inactive : styles.active}`}>
        <nav>
          <Logo width={'50px'} height={'55px'} />
          {renderLinks()}
        </nav>
      </div>
      <div className={styles.mobileRoot}>
        <div className={styles.mobileContent}>
          <Logo width={'32px'} height={'36px'} />
          <div className={styles.burgerContainer} onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon symbol={'hamburger'}></Icon>
          </div>
        </div>
        <div className={`${styles.mobileMenuContainer} ${showMobileMenu === true ? styles.mmShow : styles.mmHide}`}>
          {renderLinks()}
        </div>
      </div>
    </div>
  );
};

export default Header;
