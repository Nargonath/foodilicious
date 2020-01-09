import React from 'react';
import PropTypes from 'prop-types';

function formatPlaceAddress(place) {
  let addr = place.street;

  addr += place.additionalAddress ? `\n${place.additionalAddress}` : '';
  addr += `\n${place.postalCode} ${place.city}`;

  return addr;
}

function MarkerDetails({ place }) {
  const phoneUrl = `tel:${place.phone}`;
  const phoneAlt = `${place.name} phone link`;
  const websiteAlt = `${place.name} website link`;
  const address = formatPlaceAddress(place);

  return (
    <>
      <h2>{place.name}</h2>
      <address>
        <p>{address}</p>

        {place.phone ? (
          <a href={phoneUrl} alt={phoneAlt}>
            {place.phone}
          </a>
        ) : null}

        {place.website ? (
          <a href={place.website} alt={websiteAlt}>
            {place.website}
          </a>
        ) : null}
      </address>
    </>
  );
}

MarkerDetails.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    street: PropTypes.string.isRequired,
    additionalAddress: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export { MarkerDetails };
