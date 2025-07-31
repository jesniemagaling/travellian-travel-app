import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';
import { renderStayForm } from '../utils/stayForm';
import { stays } from '../utils/stays';

const imageBase = `${import.meta.env.BASE_URL}assets`;

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  initUserDropdown();
  createTabSwitcher({
    activeTab: document.querySelector('.stays-btn'),
    inactiveTab: document.querySelector('.flights-btn'),
  });

  renderStayForm();
  renderStays();

  // Interactive Cards (Hover or Tap)
  const boxes = document.querySelectorAll('.box');

  // Toggle active card on click (for mobile)
  boxes.forEach((box) =>
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      boxes.forEach((other) => {
        if (other !== box) other.classList.remove('active');
      });
      box.classList.toggle('active');
    })
  );

  // Close all cards when clicking outside
  document.addEventListener('click', () => {
    boxes.forEach((box) => box.classList.remove('active'));
  });
});

function renderStays() {
  const stayContainer = document.getElementById('stayCardContainer');
  if (!stayContainer) return;

  const filteredStays = filterStays(stays, stayFilters);
  const sortedStays = sortStays(filteredStays, stayFilters.sort);

  stayContainer.innerHTML = sortedStays
    .map(
      (stay) => `
        <div class="hotel-card stays-listing">
          <div class="hotel-info">
            <div class="hotel-logo">
              <img src="${stay.image}" alt="Bed" />
              <div class="hotel-logo-overlay">
                <p class="fs-12 fw-medium">${stay.imagesCount} images</p>
              </div>
            </div>
            <div class="hotel-info-container">
              <div class="hotel-badge">
                <div class="hotel-details">
                  <h1 class="fs-20 fw-bold text-muted">
                    ${stay.name}
                  </h1>
                  <div class="hotel-location">
                    <img src="${imageBase}/location-icon.svg" alt="" />
                    <p class="fs-12 fw-medium">
                      ${stay.location}
                    </p>
                  </div>
                  <div class="hotel-rating-badge">
                    <div class="flex">
                      <img src="${imageBase}/starslamon-icon.svg" alt="star" />
                      <img src="${imageBase}/starslamon-icon.svg" alt="star" />
                      <img src="${imageBase}/starslamon-icon.svg" alt="star" />
                      <img src="${imageBase}/starslamon-icon.svg" alt="star" />
                      <img src="${imageBase}/starslamon-icon.svg" alt="star" />
                      <p class="fs-12 fw-medium">&nbsp;Star Hotel</p>
                    </div>
                    <div class="flex">
                      <img src="${imageBase}/cup-icon.svg" alt="" />
                      <p class="fw-medium fs-12">
                        <span class="fs-12 fw-bold">&nbsp;${stay.amenities}+</span
                        >&nbsp;Amenities
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <h2 class="fw-medium fs-12">starting from</h2>
                  <h1 class="fw-bold text-accent-slamon fs-24">
                    ${stay.currency}${stay.price}<span class="fs-14">/night</span>
                  </h1>
                  <h3 class="fw-medium fs-12">${stay.tax}</h3>
                </div>
              </div>
              <div class="rating-badge-ratings flex">
                <p class="fs-12 fw-medium">${stay.rating}</p>
                <h1 class="fs-12 fw-bold text-muted">${stay.reviewLabel}</h1>
                <h2 class="fs-12 text-muted">${stay.reviews} reviews</h2>
              </div>
              <div class="hotel-actions">
                <button class="btn-stroke">
                  <img src="${imageBase}/heart-stroke-icon.svg" alt="" />
                </button>
                <button class="btn-primary full-width" data-id="${stay.id}">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('');
  stayVisibleCount.textContent = sortedStays.length;
  stayTotalCount.textContent = `${stays.length} places`;
}

document.addEventListener('click', (e) => {
  const button = e.target.closest('.btn-primary[data-id]');
  if (!button) return;

  const stayId = button.dataset.id;
  if (stayId) {
    window.location.href = `staysdetails.html?stay=${stayId}`;
  }
});

// STAYS LISTING FILTERING
const stayFilters = {
  price: [0, 1000],
  rating: null,
  type: '', // hotel, motel, etc.
  sort: 'recommended',
};

function filterStays(stays, { price, rating, type }) {
  return stays.filter((stay) => {
    if (stay.price < price[0] || stay.price > price[1]) return false;
    if (rating !== null && stay.rating < rating) return false;
    if (type && stay.type !== type) return false;
    return true;
  });
}

function sortStays(stays, sortOption) {
  switch (sortOption) {
    case 'priceLowHigh':
      return [...stays].sort((a, b) => a.price - b.price);
    case 'priceHighLow':
      return [...stays].sort((a, b) => b.price - a.price);
    case 'ratingHighLow':
      return [...stays].sort((a, b) => b.rating - a.rating);
    default:
      return stays;
  }
}

document.querySelectorAll('[data-rating]').forEach((btn) =>
  btn.addEventListener('click', (e) => {
    stayFilters.rating = Number(
      e.target.closest('[data-rating]').dataset.rating
    );
    renderStays();
  })
);

document.getElementById('staySortSelect')?.addEventListener('change', (e) => {
  stayFilters.sort = e.target.value;
  renderStays();
});

// for stay type buttons (hotel, motel, etc.)
document.querySelectorAll('.sort-btn').forEach((btn) =>
  btn.addEventListener('click', (e) => {
    document
      .querySelectorAll('.sort-btn')
      .forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');

    const label = e.target.textContent.toLowerCase();
    stayFilters.type = label.includes('hotel')
      ? 'hotel'
      : label.includes('motel')
        ? 'motel'
        : label.includes('resort')
          ? 'resort'
          : label.includes('hostel')
            ? 'hostel'
            : '';

    renderStays();
  })
);
