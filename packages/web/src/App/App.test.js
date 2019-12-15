import React from 'react';
import { render } from '@testing-library/react';
import { queryHelpers } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const queryAllBySrc = queryHelpers.queryAllByAttribute.bind(null, 'src');

it('adds google maps script to DOM', () => {
  render(<App />);
  expect(queryAllBySrc(document, /maps.*googleapis/).length).toBeGreaterThan(0);
});
