import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';
import { renderFlightForm } from '../utils/flightForm.js';
import { flights } from '../utils/flights.js';

const imageBase = `${import.meta.env.BASE_URL}assets`;

document.addEventListener('DOMContentLoaded', () => {
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

  initUserDropdown();
  setupMobileNav();
  createTabSwitcher({
    activeTab: document.querySelector('.flights-btn'),
    inactiveTab: document.querySelector('.stays-btn'),
  });

  renderFlightForm();
  renderFlights();
});

function renderFlights() {
  const flightContainer = document.getElementById('flightCardContainer');
  if (!flightContainer) return;

  flightContainer.innerHTML = flights
    .map(
      (flight) => `
        <div class="flight-card">
          <div class="flight-info">
            <img src="${flight.logo}" alt="${flight.airline}" class="airline-logo" />
            <div class="flight-info-container">
              <div class="rating-badge">
                <div class="rating-badge-ratings flex">
                  <p class="fs-12 fw-medium">${flight.rating}</p>
                  <h1 class="fs-12 fw-bold text-muted">
                    ${flight.rating >= 4.5 ? 'Excellent' : 'Very Good'}
                  </h1>
                  <h2 class="fs-12 text-muted">${Math.floor(Math.random() * 200) + 20} reviews</h2>
                </div>
                <div class="price grid">
                  <h2 class="fw-medium fs-14 text-neutral-grey">starting from</h2>
                  <h1 class="fw-bold text-accent-slamon fs-24">$${flight.price}</h1>
                </div>
              </div>
              <div class="grid">
                ${flight.departures
                  .map(
                    (dep) => `
                    <div class="flight-times">
                      <label><input type="checkbox" name="details" /></label>
                      <div>
                        <h1 class="fs-16 fw-semi-bold">${dep.time}</h1>
                        <p class="fs-14 text-neutral-grey fw-medium">${flight.airline}</p>
                      </div>
                      <p class="fs-14 fw-semi-bold text-neutral-grey flight-non-stop">non stop</p>
                      <div>
                        <h1 class="fs-16 fw-semi-bold">${dep.duration}</h1>
                        <p class="fs-14 text-neutral-grey fw-medium">${dep.route}</p>
                      </div>
                    </div>`
                  )
                  .join('')}
              </div>
              <div class="flight-actions">
                <button class="btn-stroke">
                  <img src="${imageBase}/heart-stroke-icon.svg" alt="" />
                </button>
                <button class="btn-primary full-width">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}
