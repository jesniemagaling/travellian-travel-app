import { renderStayForm } from '../utils/stayForm';
import { setupStickyNav, createTabSwitcher } from '../utils/nav.js';
import { places, bookingBanners } from '../utils/places.js';

const imageBase = `${import.meta.env.BASE_URL}assets`;

setupStickyNav({
  lightAssets: {
    logo: `${imageBase}/company-logo-white.svg`,
    flight: `${imageBase}/airplane-white-icon.svg`,
    stays: `${imageBase}/bed-white-icon.svg`,
    menu: `${imageBase}/open-icon-white.svg`,
    close: `${imageBase}/close-icon-white.svg`,
  },
  darkAssets: {
    logo: `${imageBase}/company-logo.svg`,
    flight: `${imageBase}/airplane-icon.svg`,
    stays: `${imageBase}/bed-icon.svg`,
    menu: `${imageBase}/open-icon.svg`,
    close: `${imageBase}/close-icon-nav.svg`,
  },
});
createTabSwitcher({
  activeTab: document.querySelector('.stays-btn'),
  inactiveTab: document.querySelector('.flights-btn'),
});

renderStayForm();
renderPopularDestination();
renderTravelBundle();

function renderPopularDestination() {
  const destinationContainer = document.getElementById('popularDestination');

  destinationContainer.innerHTML = places
    .slice(0, 4)
    .map(
      ({ city, country, image, placesCount }) => `
      <div class="places-heading-hotel places-content flex">
        <img src="${image}" alt="" />
        <div class="grid">
          <p class="fw-semi-bold">${city} ${country}</p>
          <p class="fs-12">${placesCount} places</p>
        </div>
      </div>
    `
    )
    .join('');
}

function renderTravelBundle() {
  const travelBundleHTML = document.getElementById('bookingContent');

  travelBundleHTML.innerHTML = bookingBanners
    .map(
      ({ destination, description, price, image }) => `
        <div class="box">
          <img class="image-box" src="${image}" />
          <div class="card-overlay">
            <div class="flex">
              <div class="grid">
                <h1>${destination}</h1>
                <p>${description}</p>
              </div>
              <h2 class="fw-semi-bold fs-24">$ ${price}</h2>
            </div>
            <button class="travel-bundle-btn inline-flex btn-primary">
              Book Stay
            </button>
          </div>
        </div>
      `
    )
    .join('');
}
