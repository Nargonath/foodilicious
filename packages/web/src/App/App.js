import React from 'react';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import './App.css';

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap
        id="map"
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={{ lat: 45.74507, lng: 4.825822 }}
        zoom={8}
      ></GoogleMap>
    );
  };

  if (loadError) {
    return <p>An error occurred while loading the map</p>;
  }

  return isLoaded ? renderMap() : <p>loading...</p>;
}

export default App;
