// Import the stays array
import { rooms, amenities, reviews } from '../utils/stays';
import { getStayFromURL } from './staysdetails';

const imageBase = `${import.meta.env.BASE_URL}assets`;

// Render the details of a single stay
export function renderStaysDetails(stay) {
  const container = document.getElementById('staysDetailsContainer');
  if (!container || !stay) return;

  container.innerHTML = `
    <div class="hotel-details-heading">
      <div class="hotel-name flex">
        <h1 class="fs-28 fw-bold">${stay.name}</h1>
      </div>
    </div>

    <div class="hotel-details-info">
      <div>
        <div class="hotel-details-location">
          <img src="${imageBase}/location-icon.svg" alt="location icon" />
          <p class="fs-14">${stay.location}</p>
        </div>
        <div class="rating-badge">
          <div class="rating-badge-ratings flex">
            <p class="fs-12 fw-medium">${stay.rating}</p>
            <h1 class="fs-12 fw-bold text-muted">${stay.reviewLabel}</h1>
            <h2 class="fs-12 text-muted">${stay.reviews} reviews</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="hotel-location-wrapper">
      ${stay.images
        .map(
          (img, i) => `
            <div class="hotel-location-card card-${i + 1}">
              <img src="${img}" alt="stay image ${i + 1}" />
            </div>`
        )
        .join('')}
    </div>
  `;
}

// Render the overview of a single stay
export function renderStaysOverview(stay) {
  const overviewContainer = document.querySelector('.overview-container');
  if (!overviewContainer || !stay) return;

  overviewContainer.innerHTML = `
    <div class="overview-heading">
      <h1 class="fs-20 fw-bold">Overview</h1>
      <p class="fw-medium">
        ${stay.overview}
      </p>
    </div>
  `;
}

export function renderStaysLocation(stay) {
  const overviewContainer = document.querySelector('.map-container');
  if (!overviewContainer || !stay) return;

  overviewContainer.innerHTML = `
    <iframe
      src="${stay.locationMap}"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;
}

export function renderRoomSlides() {
  const container = document.querySelector('.swiper-wrapper');
  if (!container || !Array.isArray(rooms)) return;

  container.innerHTML = ''; // Clear any existing content

  rooms.forEach((room) => {
    const slide = document.createElement('article');
    slide.className = 'rooms-content swiper-slide';
    slide.id = room.id;

    slide.innerHTML = `
      <div class="modal-image-container">
        <div class="modal-swiper swiper">
          <div class="swiper-wrapper">
            ${room.images
              .map(
                (src) => `
              <div class="modal-images swiper-slide">
                <img src="${src}" alt="${room.name}" class="modal-img" />
              </div>
            `
              )
              .join('')}
          </div>
        </div>
        <div class="modal-swiper-controls">
          <div class="modal-swiper-button-prev"></div>
          <div class="modal-swiper-button-next"></div>
        </div>
      </div>
      <div class="modal-details">
        <div class="modal-heading">
          <h1 class="fs-28 fw-bold">${room.name}</h1>
          <h2 class="fs-18 fw-semi-bold">${room.subtitle}</h2>
          <p>${room.description}</p>
        </div>
        <div class="room-amenities">
          <h3 class="fs-18 fw-semi-bold">In-Room Amenities</h3>
          <ul class="amenities">
            ${room.amenities.map((a) => `<li>${a}</li>`).join('')}
          </ul>
        </div>
        <div class="rooms-cta flex">
          <h2 class="hotel-per-night fs-32 fw-bold text-accent-slamon">
            $${room.price}<span class="fs-14">/night</span>
          </h2>
          <div class="rooms-btn">
            <button class="book-now-btn btn-stroke" data-room-id="${room.id}">Book Now</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(slide);
  });

  const bookButtons = container.querySelectorAll('.book-now-btn');
  const stayId = getStayFromURL();

  bookButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room-id');
      const bookingURL = `staysbookingdetails.html?stay=${stayId}&room=${roomId}`;
      window.location.href = bookingURL;
    });
  });
}

export function renderAmenitiesSlides() {
  const wrapper = document.querySelector('.amenities-swiper .swiper-wrapper');
  if (!wrapper) return;

  amenities.forEach((amenity) => {
    const article = document.createElement('article');
    article.className = 'amenities-article swiper-slide';
    article.innerHTML = `
      <div class="amenities-image">
        <img
          src="${amenity.image}"
          alt="${amenity.title}"
          class="amenities-img"
        />
        <div class="amenities-data">
          <h3 class="fs-20 fw-semi-bold">${amenity.title}</h3>
          <p class="fw-medium">${amenity.description}</p>
        </div>
      </div>
    `;
    wrapper.appendChild(article);
  });
}
export function renderReviewsSlides() {
  const wrapper = document.querySelector('.stays-testimonial');
  if (!wrapper) return;

  wrapper.innerHTML = ''; // Clear existing slides

  const maxCardsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / maxCardsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement('article');
    slide.className = 'testimonials-details swiper-slide';

    const start = i * maxCardsPerSlide;
    const end = start + maxCardsPerSlide;

    reviews.slice(start, end).forEach((review) => {
      const card = `
        <div class="testimonial-card">
          <img src="${review.profileImage}" alt="${review.name}" />
          <div class="fs-14 testimonial-info">
            <div class="testimonials-heading">
              <div class="testimonials-ratings flex">
                <h2 class="fw-semi-bold">${review.rating}</h2>
                <span>|</span>
                <p>${review.name}</p>
              </div>
              <img src="${review.flagImage}" alt="flag" />
            </div>
            <p class="testimonials-feedback">
              ${review.feedback}
            </p>
          </div>
        </div>
      `;
      slide.innerHTML += card;
    });

    wrapper.appendChild(slide);
  }
}
