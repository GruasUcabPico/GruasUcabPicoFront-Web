import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const What = () => (
  <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
    <Map
      style={{width: '50%', height: '300px'}}
      defaultCenter={{lat: 10.4642128, lng: -66.976491}}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);

export default What;

/*
//<APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
  <APIProvider apiKey={AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4}>

    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
*/