import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MarkerDetails } from './';
import { places } from 'data';

describe('MarkerDetails', () => {
  it('renders without errors', () => {
    const place = places[0];

    expect(() =>
      render(<MarkerDetails place={place}></MarkerDetails>),
    ).not.toThrow();
  });

  it('displays the name of the place as heading', () => {
    const place = places[0];
    const { queryByRole } = render(
      <MarkerDetails place={place}></MarkerDetails>,
    );

    expect(queryByRole('heading')).toHaveTextContent(place.name);
  });

  it('displays the phone number as a clickable link', () => {
    const place = places[0];
    const { queryAllByRole, queryByText } = render(
      <MarkerDetails place={place}></MarkerDetails>,
    );

    const elements = queryAllByRole('link');
    expect(elements.map(e => e.textContent)).toEqual(
      expect.arrayContaining([place.phone]),
    );
    const element = queryByText(place.phone);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', `tel:${place.phone}`);
  });

  it('displays the address of the place', () => {
    const place = places[0];
    const { queryByText } = render(
      <MarkerDetails place={place}></MarkerDetails>,
    );

    expect(queryByText(place.phone)).toBeInTheDocument();
    expect(queryByText(place.street, { exact: false })).toBeInTheDocument();
    expect(queryByText(place.website)).toBeInTheDocument();
    expect(queryByText(place.city, { exact: false })).toBeInTheDocument();
    expect(queryByText(place.postalCode, { exact: false })).toBeInTheDocument();
  });

  it('displays the website of the place as clickable link', () => {
    const place = places[0];
    const { queryAllByRole, queryByText } = render(
      <MarkerDetails place={place}></MarkerDetails>,
    );

    const elements = queryAllByRole('link');
    expect(elements.map(e => e.textContent)).toEqual(
      expect.arrayContaining([place.website]),
    );
    const element = queryByText(place.website);
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', place.website);
  });
});
