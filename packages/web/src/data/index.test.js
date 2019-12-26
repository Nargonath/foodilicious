import {
  places,
  countries,
  placeTypes,
  episodes,
  shows,
  platforms,
  all,
} from './';

describe('data module', () => {
  it('exports places', () => {
    expect(places).toBeDefined();
  });

  it('exports countries', () => {
    expect(countries).toBeDefined();
  });

  it('exports places types', () => {
    expect(placeTypes).toBeDefined();
  });

  it('exports episodes', () => {
    expect(episodes).toBeDefined();
  });

  it('exports shows', () => {
    expect(shows).toBeDefined();
  });

  it('exports platforms', () => {
    expect(platforms).toBeDefined();
  });

  it('exports "all" object', () => {
    expect(all).toBeDefined();
  });

  it('has "all" containing all elements', () => {
    const length =
      places.length +
      episodes.length +
      countries.length +
      shows.length +
      platforms.length +
      placeTypes.length;
    expect(Object.keys(all)).toHaveLength(length);
  });

  it.todo('has "all" object with key as entity@id format');
});
