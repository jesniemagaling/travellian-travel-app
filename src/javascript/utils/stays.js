const imageBase = `${import.meta.env.BASE_URL}assets`;

export const stays = [
  {
    id: 'eresin-sultanahmet',
    name: 'Eresin Hotels Sultanahmet - Boutique Class',
    image: `${imageBase}/listing-bg-main-2.jpg`,
    images: [
      `${imageBase}/listing-bg-main-2.jpg`,
      `${imageBase}/listing-bg-2.jpg`,
      `${imageBase}/listing-bg-3.jpg`,
      `${imageBase}/listing-bg-8.jpg`,
      `${imageBase}/listing-bg-7.svg`,
    ],
    logo: `${imageBase}/erasin-hotel-logo.svg`,
    imagesCount: 5,
    location: 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
    rating: 4.2,
    stars: 5,
    amenities: '20',
    price: 240,
    currency: '$',
    per: '/night',
    tax: 'excl. tax',
    reviews: 54,
    reviewLabel: 'Very Good',
    overview:
      'Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.',
    locationMap:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9889470590215!2d28.972120545256313!3d41.00361511971126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55db79b3aff2d%3A0x1ff11b840a6d44f4!2sEresin%20Hotel%20Sultanahmet!5e0!3m2!1sen!2sph!4v1752198624275!5m2!1sen!2sph',
  },
  {
    id: 'cvk-bosphorus',
    name: 'CVK Park Bosphorus Hotel Istanbul',
    image: `${imageBase}/listing-bg-main.svg`,
    images: [
      `${imageBase}/listing-bg-main-2.jpg`,
      `${imageBase}/listing-bg-2.jpg`,
      `${imageBase}/listing-bg-3.jpg`,
      `${imageBase}/listing-bg-8.jpg`,
      `${imageBase}/listing-bg-7.svg`,
    ],
    logo: `${imageBase}/cvk-parkbosphorus-hotel-logo.svg`,
    imagesCount: 5,
    location: 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
    rating: 4.2,
    stars: 5,
    amenities: '20',
    price: 513,
    currency: '$',
    per: '/night',
    tax: 'incl. tax',
    reviews: 54,
    reviewLabel: 'Very Good',
    overview:
      'Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.',
    locationMap:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.9694860987364!2d28.98814213269174!3d41.03500928619275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7f1fe239f43%3A0x54477a917ddd623d!2sCVK%20Park%20Bosphorus%20Hotel%20Istanbul!5e0!3m2!1sen!2sph!4v1753880530494!5m2!1sen!2sph',
  },
];

export const rooms = [
  {
    id: 'familyRoom',
    name: 'Family Room',
    subtitle: '2 Queen Beds | 550 sq ft | Garden View',
    description:
      'Designed with families in mind, this spacious 51-square-meter (550 sq ft) room features warm maple hardwood floors and soft neutral tones, creating a cozy yet modern ambiance. The generous layout ensures comfort for all family members.',
    amenities: [
      'Smart TV with satellite channels',
      'Individual climate control',
      'Complimentary high-speed Wi-Fi',
      'Hair dryer & bath amenities',
      'Minibar',
      'In-room safe',
      '24-hour room service',
    ],
    images: [
      `${imageBase}/table-img.jpg`,
      `${imageBase}/kitchen-img.jpg`,
      `${imageBase}/listing-bg-12.jpg`,
      `${imageBase}/sofa-img.jpg`,
      `${imageBase}/window-img.jpg`,
    ],
    price: 240,
  },
  {
    id: 'deluxeRoom',
    name: 'Deluxe Room',
    subtitle: '2 Queen Beds | 550 sq ft | City View',
    description:
      'Crafted for comfort and elegance, the 45-square-meter (484 sq ft) Deluxe Room showcases a modern design with honeyed wood panels, maple hardwood flooring, and soft, light-hued furnishings. A serene space ideal for solo travelers or couples seeking a touch of luxury.',
    amenities: [
      'Smart TV with satellite channels',
      'Individual climate control',
      'Complimentary high-speed Wi-Fi',
      'Hair dryer & bath amenities',
      'Minibar',
      'In-room safe',
      '24-hour room service',
      'Plush robes and slippers',
    ],
    images: [
      `${imageBase}/table-img.jpg`,
      `${imageBase}/kitchen-img.jpg`,
      `${imageBase}/listing-bg-12.jpg`,
      `${imageBase}/sofa-img.jpg`,
      `${imageBase}/window-img.jpg`,
    ],
    price: 280,
  },
  {
    id: 'executiveRoom',
    name: 'Executive Room',
    subtitle: '1 King Bed | 560 sq ft | Skyline View',
    description:
      'Designed for the modern traveler, this 52-square-meter (560 sq ft) Executive Room offers sweeping skyline views, enhanced privacy, and exclusive Club Lounge access. Finished with refined wooden accents and minimalist décor, it combines luxury with business-ready convenience.',
    amenities: [
      'Smart TV with satellite channels',
      'Individual climate control',
      'Complimentary high-speed Wi-Fi',
      'Hair dryer & bath amenities',
      'Minibar',
      'In-room safe',
      '24-hour room service',
      'Complimentary grand club access',
      'Plush robes and slippers',
      'Ergonomic work desk',
    ],
    images: [
      `${imageBase}/table-img.jpg`,
      `${imageBase}/kitchen-img.jpg`,
      `${imageBase}/listing-bg-12.jpg`,
      `${imageBase}/sofa-img.jpg`,
      `${imageBase}/window-img.jpg`,
    ],
    price: 313,
  },
];

export const amenities = [
  {
    title: 'Outdoor Pool',
    description:
      'A refreshing open-air pool perfect for sunbathing and swimming.',
    image: `${imageBase}/outdoor-pool-img.jpg`,
  },
  {
    title: 'Indoor Pool',
    description: 'A climate-controlled pool ideal for year-round use.',
    image: `${imageBase}/indoor-pool-img.jpg`,
  },
  {
    title: 'Wellness Center',
    description: 'A relaxing space offering spa treatments, sauna, and more.',
    image: `${imageBase}/wellness-center-img.jpg`,
  },
  {
    title: 'Restaurant',
    description: 'On-site dining with a variety of delicious meals.',
    image: `${imageBase}/restaurant-img.jpg`,
  },
  {
    title: 'Tea/Coffee Machine',
    description: 'In-room convenience for fresh tea or coffee anytime.',
    image: `${imageBase}/tea-coffee-machine-img.jpg`,
  },
  {
    title: 'Fitness Center',
    description: 'Fully equipped gym for workouts and cardio sessions.',
    image: `${imageBase}/fitness-center-img.jpg`,
  },
  {
    title: 'Bar/Lounge',
    description: 'A cozy spot to unwind with drinks and light snacks.',
    image: `${imageBase}/bar-lounge-img.jpg`,
  },
];

export const reviews = [
  {
    rating: '5.0 Amazing',
    name: 'Jesnie Magaling',
    profileImage: `${imageBase}/profile-icon.svg`,
    flagImage: `${imageBase}/flag-icon.svg`,
    feedback:
      'The hotel exceeded all my expectations—clean, stylish rooms, incredibly friendly staff, and a perfect location. The breakfast buffet was delicious, and everything felt thoughtfully managed. I would definitely come back again. Highly recommended!',
  },
  {
    rating: '5.0 Amazing',
    name: 'Ahmad Pamaylaon',
    profileImage: `${imageBase}/profile-icon-1.svg`,
    flagImage: `${imageBase}/flag-icon.svg`,
    feedback:
      'The hotel exceeded all my expectations—clean, stylish rooms, incredibly friendly staff, and a perfect location. The breakfast buffet was delicious, and everything felt thoughtfully managed. I would definitely come back again. Highly recommended!',
  },
  {
    rating: '5.0 Amazing',
    name: 'Czar Bjorn',
    profileImage: `${imageBase}/profile-icon-2.svg`,
    flagImage: `${imageBase}/flag-icon.svg`,
    feedback:
      'The hotel exceeded all my expectations—clean, stylish rooms, incredibly friendly staff, and a perfect location. The breakfast buffet was delicious, and everything felt thoughtfully managed. I would definitely come back again. Highly recommended!',
  },
  {
    rating: '5.0 Amazing',
    name: 'Jomel Jose',
    profileImage: `${imageBase}/profile-icon-3.svg`,
    flagImage: `${imageBase}/flag-icon.svg`,
    feedback:
      'The hotel exceeded all my expectations—clean, stylish rooms, incredibly friendly staff, and a perfect location. The breakfast buffet was delicious, and everything felt thoughtfully managed. I would definitely come back again. Highly recommended!',
  },
  {
    rating: '5.0 Amazing',
    name: 'Maurice Cabaybay',
    profileImage: `${imageBase}/profile-icon-4.svg`,
    flagImage: `${imageBase}/flag-icon.svg`,
    feedback:
      'The hotel exceeded all my expectations—clean, stylish rooms, incredibly friendly staff, and a perfect location. The breakfast buffet was delicious, and everything felt thoughtfully managed. I would definitely come back again. Highly recommended!',
  },
];
