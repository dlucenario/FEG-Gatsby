import * as React from 'react';
import * as styles from './SummaryAbout.module.css';

import ReactPlayer from 'react-player'
import Container from '../../atoms/Container';
import ContentHeader from '../../atoms/ContentHeader';

const SummaryAbout = () => {
  return (
    <Container>
      <div id={'about'} className={styles.root}>
        <ContentHeader header='Get to Know Us' subHeader='Years of Experience' />
        <div className={styles.contentContainer}>
          <div className={styles.contentList}>
            <div className={styles.content}>
              <h6>Setting Goals</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
            </div>
            <div className={styles.content}>
              <h6>Great Team Dynamics</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
            </div>
            <div className={styles.content}>
              <h6>A Higher Professional Standard</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
            </div>
          </div>
            <div className={styles.videoContainer}>
              <ReactPlayer controls={true} url='https://vimeo.com/229235582' />
            </div>
        </div>
      </div>
    </Container>
  );
};

export default SummaryAbout;
