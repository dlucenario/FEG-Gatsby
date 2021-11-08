import React, {useState} from 'react';

import Button from '../../atoms/Button';
import BasicInput from '../../atoms/Input';
import BasicSelect from '../../atoms/Select';
import BasicTextArea from '../../atoms/TextArea';
import * as styles from './ContactForm.module.css';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');

  const optionList = [
    { label: 'General Inquiry', value: 'General Inquiry' },
    { label: 'Product Inquiry', value: 'Product Inquiry' },
    { label: 'Project / Construction', value: 'Construction' },
    { label: 'Partnership / Dealership', value: 'Dealership' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Purpose: ', purpose);
    console.log('Message: ', message);

    //submit form
  }

  return (
    <div className={styles.root}>
      <h4>Contact Us</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <BasicInput 
          name={'fullname'} 
          label={'Full Name'} 
          placeholder={'Full Name'} 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <BasicInput 
          name={'Email'} 
          label={'Email'} 
          placeholder={'Email'} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={'email'}
        />
        <BasicSelect
          label={'Purpose'}
          id={'Purpose'}
          options={optionList}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <BasicTextArea 
          label={'Message'}
          id={'message'}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type={'submit'} symbol={'genericArrow'} fullWidth text={'Send Message'} />
      </form>
    </div>
  );
};

export default ContactForm;
