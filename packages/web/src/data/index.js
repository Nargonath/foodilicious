export const places = [
  {
    id: 1,
    placeType: 'placeType@1',
    name: `Totonno's`,
    lat: 40.578918,
    lng: -73.983823,
    tags: ['pizzeria'],
    website: 'https://www.totonnosconeyisland.com/',
    phone: '+1 718-372-8606',
    street: '1524 Neptune Ave',
    additionalAddress: 'Brooklyn',
    postalCode: '11224',
    city: 'New York',
    country: 'country@1',
    episode: 'episode@1',
  },
];

export const countries = [
  {
    id: 1,
    name: 'USA',
  },
];

export const placeTypes = [
  {
    id: 1,
    label: 'restaurant',
  },
];

export const episodes = [
  {
    id: 1,
    show: 'show@1',
    season: 1,
    episode: 1,
  },
];

export const shows = [
  {
    id: 1,
    title: 'Ugly & Delicious',
    platform: 'platform@1',
  },
];

export const platforms = [
  {
    id: 1,
    name: 'Netflix',
  },
];

function addToAll(dest, elements, prefix) {
  for (const element of elements) {
    dest[`${prefix}@${element.id}`] = element;
  }
}

function buildAll() {
  const all = {};

  addToAll(all, places, 'place');
  addToAll(all, countries, 'country');
  addToAll(all, placeTypes, 'placeType');
  addToAll(all, episodes, 'episode');
  addToAll(all, shows, 'show');
  addToAll(all, platforms, 'platform');
  return all;
}

export const all = buildAll();
