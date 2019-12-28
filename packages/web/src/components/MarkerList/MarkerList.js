import React from 'react';
import { Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

function MarkerList({ places }) {
  return (
    <>
      {places.map(place => (
        <Marker
          key={place.id}
          position={{ lat: place.lat, lng: place.lng }}
        ></Marker>
      ))}
    </>
  );
}

MarkerList.propTypes = {
  places: PropTypes.array.isRequired,
};

export { MarkerList };
