const imageBase = `${import.meta.env.BASE_URL}assets`;

export const places = [
  {
    city: 'Istanbul',
    country: 'Turkey',
    image: `${imageBase}/istanbul.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Sydney',
    country: 'Australia',
    image: `${imageBase}/sydney.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Baku',
    country: 'Azerbaijan',
    image: `${imageBase}/baku.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Malé',
    country: 'Maldives',
    image: `${imageBase}/maldives.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Paris',
    country: 'France',
    image: `${imageBase}/paris.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'New York',
    country: 'US',
    image: `${imageBase}/new york.jpg`, // ⚠️ Consider renaming to new-york.jpg (no spaces)
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'London',
    country: 'UK',
    image: `${imageBase}/london.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    image: `${imageBase}/tokyo.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
  {
    city: 'Dubai',
    country: 'UAE',
    image: `${imageBase}/dubai.jpg`,
    services: ['Flights', 'Hotels', 'Resorts'],
    placesCount: 325,
  },
];

export const bookingBanners = [
  {
    destination: 'Melbourne',
    description: 'An amazing journey',
    price: 700,
    image: `${imageBase}/travel-bg-au.svg`,
  },
  {
    destination: 'Paris',
    description: 'A paris adventure',
    price: 700,
    image: `${imageBase}/travel-bg-paris.svg`,
  },
  {
    destination: 'London',
    description: 'London eye adventure',
    price: 700,
    image: `${imageBase}/travel-bg-london.svg`,
  },
  {
    destination: 'Columbia',
    description: 'Amazing Streets',
    price: 700,
    image: `${imageBase}/travel-bg-columbia.svg`,
  },
];
