import React from 'react';

// Alphabetical order please
import ArrowDown from './arrowDown';
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import Bag from './bag';
import Bin from './bin';
import Building from './building';
import CaretDown from './caretDown';
import Close from './close';
import Currency from './currency';
import Edit from './edit';
import Equaliser from './equaliser';
import Facebook from './facebook';
import GenericArrow from './genericArrow';
import GiftBox from './gift-box';
import Hamburger from './hamburger';
import Heart from './heart';
import HelpCircle from './help-circle';
import Instagram from './instagram';
import Linkedin from './linkedin';
import MapMarker from './map-marker';
import Manufacturing from './manufacturing';
import Paypal from './paypal';
import Pinterest from './pinterest';
import QuickView from './quickView';
import Search from './search';
import Star from './star';
import Swatch from './swatch';
import Tick from './tick';
import Translate from './translate';
import Twitter from './twitter';
import User from './user';
import View from './view';
import WhiteBag from './whiteBag';
import Youtube from './youtube';
import ZipLogo from './zip-logo';

function Icon(props) {
  switch (props.symbol) {
    case 'arrowDown':
      return <ArrowDown />;
    case 'arrowLeft':
      return <ArrowLeft />;
    case 'arrowRight':
      return <ArrowRight />;
    case 'bag':
      return <Bag />;
    case 'bin':
      return <Bin />;
    case 'building':
      return <Building />;
    case 'caretDown':
      return <CaretDown />;
    case 'close':
      return <Close />;
    case 'currency':
      return <Currency />;
    case 'edit':
      return <Edit />;
    case 'equaliser':
      return <Equaliser />;
    case 'facebook':
      return <Facebook />;
    case 'genericArrow':
      return <GenericArrow {...props} />;
    case 'giftbox':
      return <GiftBox />;
    case 'hamburger':
      return <Hamburger />;
    case 'heart':
      return <Heart />;
    case 'helpCircle':
      return <HelpCircle />;
    case 'instagram':
      return <Instagram />;
    case 'linkedin':
      return <Linkedin />;
    case 'manufacturing':
      return <Manufacturing />;
    case 'mapMarker':
        return <MapMarker />;
    case 'paypal':
      return <Paypal />;
    case 'pinterest':
      return <Pinterest />;
    case 'quickView':
      return <QuickView />;
    case 'search':
      return <Search />;
    case 'star':
      return <Star />;
    case 'swatch':
      return <Swatch />;
    case 'tick':
      return <Tick />;
    case 'translate':
      return <Translate />;
    case 'twitter':
      return <Twitter />;
    case 'user':
      return <User />;
    case 'view':
      return <View />;
    case 'whiteBag':
      return <WhiteBag />;
    case 'youtube':
      return <Youtube />;
    case 'zipLogo':
      return <ZipLogo />;
    default:
      return (
        <span>
          Unknown icon:
          {props.symbol}
        </span>
      );
  }
}

export default Icon;
