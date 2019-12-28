import React from 'react';
import { Marker } from '@react-google-maps/api';
import { render } from '@testing-library/react';

import { MarkerList } from '.';
import { places } from 'data';

jest.mock('@react-google-maps/api', () => ({
  __esModule: true,
  Marker: jest.fn().mockReturnValue(<div></div>),
}));

describe('MarkerList', () => {
  it('renders without errors', () => {
    expect(() => render(<MarkerList places={[]}></MarkerList>)).not.toThrow();
  });

  it('displays as many markers as places there are', () => {
    render(<MarkerList places={places}></MarkerList>);
    expect(Marker).toHaveBeenCalledTimes(places.length);
  });
});
