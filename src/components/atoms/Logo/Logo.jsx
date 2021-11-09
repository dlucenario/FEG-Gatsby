import React from 'react';
import ImgLogo from './eglogo.png';

const Logo = (props) => {
  const {width, height} = props;
  return(
    <div>
      <img 
        style={{width: width, height: height}}
        src={ImgLogo} 
        alt={'everglory_logo'} />
    </div>
  )
}

export default Logo;
