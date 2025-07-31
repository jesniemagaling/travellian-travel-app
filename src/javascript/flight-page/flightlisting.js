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

  const filteredFlights = filterFlights(filters);
  const sortedFlights = sortFlights(filteredFlights, filters.sort); // <- include sorting

  updateFlightCount(sortedFlights.length, flights.length); // <- dynamic count update

  flightContainer.innerHTML = sortedFlights
    .map((flight) => {
      return `
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
                  <h2 class="fs-12 text-muted">${flight.reviews} reviews</h2>
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
                      </div>
                    `
                  )
                  .join('')}
              </div>
              <div class="flight-actions">
                <button class="btn-stroke">
                  <img src="${imageBase}/heart-stroke-icon.svg" alt="" />
                </button>
                <button class="btn-primary full-width" data-id="${flight.id}">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

document.addEventListener('click', (e) => {
  const button = e.target.closest('.btn-primary[data-id]');
  if (!button) return;

  const flightId = button.dataset.id;
  if (flightId) {
    window.location.href = `flightdetails.html?flight=${flightId}`;
  }
});

// Filtering
const filters = {
  price: [50, 1200],
  time: [0, 1440],
  rating: 4,
  airlines: [],
  tripType: [],
  sort: 'recommended',
};

// PRICE
document.querySelector('.price-slider').addEventListener('input', (e) => {
  const value = parseInt(e.target.value, 10);
  filters.price[1] = value;
  document.querySelector('.max-price').textContent = `$${value}`;
  renderFlights(filters);
});

// TIME
document.querySelector('.time-slider').addEventListener('input', (e) => {
  const value = parseInt(e.target.value, 10);
  filters.time[1] = value;
  document.querySelector('.end-time').textContent = minutesToTime(value);
  renderFlights(filters);
});

// RATING
document.querySelectorAll('[data-rating]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.target.closest('[data-rating]');
    if (!target) return;

    const selectedRating = Number(target.dataset.rating);
    filters.rating = selectedRating;

    renderFlights();
  });
});

// AIRLINES
document.querySelectorAll('input[name="airlines"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    filters.airlines = Array.from(
      document.querySelectorAll('input[name="airlines"]:checked')
    ).map((el) => el.value);
    renderFlights(filters);
  });
});

// TRIP TYPE
document.querySelectorAll('input[name="tripType"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    filters.tripType = Array.from(
      document.querySelectorAll('input[name="tripType"]:checked')
    ).map((el) => el.value);
    renderFlights(filters);
  });
});

// DROPDOWN
document.getElementById('sortSelect').addEventListener('change', (e) => {
  filters.sort = e.target.value;
  renderFlights();
});

document.querySelector('.price-slider').value = 1200;
document.querySelector('.time-slider').value = 1440;

function minutesToTime(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hrs >= 12 ? 'pm' : 'am';
  const formattedHour = ((hrs + 11) % 12) + 1;
  const formattedMins = mins.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMins}${period}`;
}

function filterFlights({ price, time, rating, airlines, tripType }) {
  return flights.filter((flight) => {
    if (flight.price < price[0] || flight.price > price[1]) return false;

    if (rating != null && Number(flight.rating) < rating) return false;

    if (airlines.length && !airlines.includes(flight.airline)) return false;

    const timeInMinutes = (str) => {
      const [time] = str.split(' - ');
      const [hour, minutePart] = time.split(':');
      const minutes = parseInt(hour) * 60 + parseInt(minutePart);
      return time.includes('pm') && parseInt(hour) !== 12
        ? minutes + 720
        : minutes;
    };

    const hasValidDeparture = flight.departures.some((dep) => {
      const departureMinutes = timeInMinutes(dep.time.toLowerCase());
      return departureMinutes >= time[0] && departureMinutes <= time[1];
    });
    if (!hasValidDeparture) return false;

    if (tripType.length && !tripType.includes(flight.tripType)) return false;

    return true;
  });
}

function updateFlightCount(filteredCount, totalCount) {
  document.getElementById('result-count').textContent = filteredCount;
  document.getElementById('total-flights').textContent =
    `${totalCount} flights`;
}

function sortFlights(flightList, sortType) {
  const sorted = [...flightList];
  switch (sortType) {
    case 'price-low-high':
      return sorted.sort((a, b) => a.price - b.price);
    case 'duration':
      return sorted.sort((a, b) => a.duration - b.duration);
    case 'recommended':
    default:
      return sorted.sort((a, b) => b.rating - a.rating);
  }
}
