import React, { useState, useEffect } from "react";

import * as styles from './GoogleMaps.module.css';

import GoogleMapReact from 'google-map-react';
import Icon from '../../atoms/Icons/Icon';

const AnyReactComponent = () => 
  <div className={styles.markerElement}>
    {<Icon symbol={'mapMarker'}></Icon>}
  </div>;

const GoogleMaps = (props) => {

  const {lat, long} = props;
  const [center, setCenter] = React.useState();

  useEffect(() => {
    if(lat !== undefined && long !== undefined) {
      setCenter({ lat: lat, lng: long });
    }
  }, [lat,long]);

  const defaultProps = {
    center: {
      lat: 20,
      lng: 20,
    },
    zoom: 15,
  };

  return (
    <div className={styles.root}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCt-PvOYkLFOlk8iWFMQPhSYfiHIbs7rio" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={center}
        >
          <AnyReactComponent
            lat={lat}
            lng={long}
          />
        </GoogleMapReact>
      
    </div>
  );
};

export default GoogleMaps;
