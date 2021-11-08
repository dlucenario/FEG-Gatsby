import React, { useState } from 'react';
import * as styles from './ReachOut.module.css';

import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import ContentHeader from '../../atoms/ContentHeader';
import ContactForm from '../../organisms/ContactForm';
import GoogleMaps from '../GoogleMaps';

const ReachOut = () => {

  const [mode, setMode] = useState('office');

  const officeInformation = {
    address: '102 West Avenue, Quezon City, Barangay PhilAm, 1105, Philippines',
    email: 'sales@example.com',
    contact: ['+(63)-917-111-1111', '+(02)-8-371-66-55'],
    officeHours: '9AM - 6PM (Monday - Friday)',
    coordinates: {
      lat: 14.648451411200657,
      long: 121.02847625239275
    }
  }

  const plantInformation = {
    address: 'KM78 Leviste Highway, Brgy. Bulacnin, Lipa City, Batangas',
    email: 'sales@example.com',
    contact: ['+(63)-917-811-8427', '(043)741-3844'],
    officeHours: '9AM - 5PM (Monday - Saturday)',
    coordinates: {
      lat: 13.9726085,
      long: 121.1506845
    }
  }

  const information = mode === 'office' ? officeInformation : plantInformation;

  return (
    <Container>
    <div id={'contact'} className={styles.root}>
      <ContentHeader header="Reach Out to Us" subHeader="Let's Start a Conversation" />
      <div className={styles.reachContainer}>
        <div className={styles.connectContainer}>
          <h4>Ask how we can help you</h4>
          <h5>Connect</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          <h5>Connect</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          <h5>Connect</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
      </div>
      <div className={`${styles.reachContainer} ${styles.contactContainer}`}>
        <div>
          <h4>Office Information</h4>
          <div className={styles.buttonContainer}>
            <Button 
              symbol={'building'} 
              variant={`${mode === 'office' ? 'primary' : 'secondary'}`} 
              text='Sales Office'
              onClick={() => setMode('office')}
            />
            <Button 
              variant={`${mode === 'plant' ? 'primary' : 'secondary'}`}  
              symbol={'manufacturing'} 
              text='Manufacturing Plant'
              onClick={() => setMode('plant')}
            />
          </div>
          <div className={styles.addressContainer}>
            <p className={styles.contentHeader}>Address</p>
            <p className={styles.content}>{information.address}</p>
            <p className={styles.content}>Get Directions from Waze</p>
          </div>
          <div className={styles.infoContainer}>
            <div>
              <p className={styles.contentHeader}>Email and Contact</p>
              <p className={styles.content}>{information.email}</p>
              {information.contact.map((contact,index) => {
               return <p key={`info-${index}`} className={styles.content}>{contact}</p>
              })}
            </div>
            <div>
              <p className={styles.contentHeader}>Office Hours</p>
              <p className={styles.content}>{information.officeHours}</p>
            </div>
          </div>
        </div>
        <div>
          <GoogleMaps 
            lat = {information.coordinates.lat}
            long = {information.coordinates.long}
          />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default ReachOut;
