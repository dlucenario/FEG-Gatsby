import React, { useRef, useContext, useEffect } from 'react';
import Button from '../../atoms/Button';
import * as styles from './Cover.module.css';

import CoverImage from './cover.jpg';
import FullLogo from './logo-eg.png';

import EssentialContext from '../../../context/essential';

const Cover = () => {
  const refAnchor = useRef();

  const { setBodyPosition } = useContext(EssentialContext);

  useEffect(() => {
    if(refAnchor?.current?.offsetTop) {
      setBodyPosition(refAnchor?.current?.offsetTop);
    }
  }, [])

  return (
    <div className={styles.root} id={'home'}>
      <img alt="cover" className={styles.coverImage} src={CoverImage} />
      <div className={styles.coverContent}>
        <img className={styles.egLogo} alt="logo_full" src={FullLogo} />
        <div className={styles.coverHeadlineContainer}>
          <p className={styles.headlineText}>
            Your
            {' '}
            <span className={styles.highlight}>roofing</span>
            {' '}
            needs right on your doorstep.
            {' '}
            <span className={styles.highlight}>High-quality</span>
            {' '}
            and
            {' '}
            <span className={styles.highlight}>affordable. </span>
          </p>
          <p className={styles.headlineSubText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <a href={'#contact'}>
            <Button  fullWidth text={'Get in Touch'}></Button>
          </a>
          <Button fullWidth text={'Download Catalogue'} variant={'secondary'}></Button>
        </div>
      </div>
      <div className={styles.anchor} ref={refAnchor}></div>
    </div>
  );
};

export default Cover;
