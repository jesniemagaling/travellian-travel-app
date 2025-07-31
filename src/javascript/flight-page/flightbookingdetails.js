import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';
import { flights } from '../utils/flights';

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  initUserDropdown();
  createTabSwitcher({
    activeTab: document.querySelector('.flights-btn'),
    inactiveTab: document.querySelector('.stays-btn'),
  });

  const flightId = getFlightFromURL();
  const selectedFlight = flights.find((flight) => flight.id === flightId);

  if (selectedFlight) {
    renderFlightBooking(selectedFlight);
  } else {
    console.warn('Flight not found');
  }
});

function getFlightFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('flight');
}

function renderFlightBooking(flight) {
  const bookingContainer = document.querySelector('.flight-booking-payment');
  const departure = flight.departures?.[0]; // Use the first departure by default

  if (!bookingContainer || !departure) return;

  const [departureTime, arrivalTime] = departure.time.split(' - ');
  const [departureAirport, arrivalAirport] = departure.route.split('-');

  const baseFare = flight.price;
  const taxes = 20;
  const serviceFee = 10;
  const total = baseFare + taxes + serviceFee;

  bookingContainer.innerHTML = `
    <div class="booking-payment-wrapper">
      <div class="flight-details-heading">
        <h1 class="fs-28 fw-bold">${flight.aircraft}</h1>
        <h2 class="fs-32 fw-bold text-accent-slamon">$${baseFare}</h2>
      </div>

      <div class="flight-itinerary-container">
        <div class="flight-itinerary-date">
          <h1 class="fs-20 fw-bold">Return Flight</h1>
          <p class="fs-20 fw-medium text-neutral-grey">${departure.duration}</p>
        </div>

        <div class="flight-itinerary-airlines">
          <div class="itinerary-airlines flex">
            <img src="${flight.logo}" alt="${flight.airline}" width="74px" />
            <div class="itinerary-airlines-info">
              <h2 class="fw-semi-bold fs-28">${flight.airline}</h2>
              <p class="text-neutral-grey fs-16">${flight.aircraft}</p>
            </div>
          </div>
          <div class="itinerary-details">
            <img src="/assets/airplane-icon.svg" alt="" />
            <img src="/assets/wifi-icon.svg" alt="" />
            <img src="/assets/stopwatch-icon.svg" alt="" />
            <img src="/assets/foods-icon.svg" alt="" />
            <img src="/assets/airlineseat-icon.svg" alt="" />
          </div>
        </div>

        <div class="flight-itinerary-timeframe">
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${departureTime}</h3>
            <p class="text-neutral-grey fw-medium">${departureAirport}</p>
          </div>
          <img src="/assets/airplane-icon.svg" alt="" />
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${arrivalTime}</h3>
            <p class="text-neutral-grey fw-medium">${arrivalAirport}</p>
          </div>
        </div>
      </div>

      <div class="payment-options">
        <label class="payment-option selected">
          <div class="payment-info">
            <h3 class="fs-16 fw-bold">Pay in full</h3>
            <p>Pay the total and you are all set</p>
          </div>
          <input type="radio" name="payment" checked />
        </label>
        <label class="payment-option">
          <div class="payment-info">
            <h3 class="fs-16 fw-bold">Pay part now, part later</h3>
            <p>Pay $${(total / 2).toFixed(2)} now, and the rest later. No extra fees.</p>
            <a href="#">More info</a>
          </div>
          <input type="radio" name="payment" />
        </label>
      </div>

      <div class="payment-method-wrapper">
        <label class="payment-method selected">
          <div class="payment-info">
            <img src="/assets/visa-icon.svg" alt="Visa" />
            <h3 class="fs-16 fw-bold">**** 4321 <span class="fw-regular fs-14">02/27</span></h3>
          </div>
          <input type="radio" name="paymentMethod" checked />
        </label>
        <button class="payment-method-btn">
          <img src="/assets/addcircle-icon.svg" alt="" />
          <p class="fw-medium fs-12 text-neutral-grey">Add a new card</p>
        </button>
      </div>
    </div>

    <aside class="booking-total-container">
      <div class="booking-total-wrapper flex">
        <div class="booking-total-banner">
          <img src="${flight.banner}" alt="" />
        </div>
        <div class="booking-total-heading">
          <h2 class="fw-medium text-neutral-grey">${flight.class || 'Economy'}</h2>
          <h2 class="fs-20 fw-semi-bold">${flight.aircraft}</h2>
          <div class="rating-badge">
            <div class="rating-badge-ratings flex">
              <p class="fs-12 fw-medium">${flight.rating}</p>
              <h1 class="fs-12 fw-bold text-muted">${flight.ratingInfo}</h1>
              <h2 class="fs-12 text-muted">${flight.reviews} reviews</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="booking-price-info">
        <p class="fw-medium">
          Your booking is protected by <strong class="fw-bold">golobe</strong>
        </p>
        <div class="booking-price-details fw-medium">
          <h1 class="fw-bold">Price Details</h1>
          <div class="price"><p>Base Fare</p><h2 class="fw-semi-bold">$${baseFare}</h2></div>
          <div class="price"><p>Discount</p><h2 class="fw-semi-bold">$0</h2></div>
          <div class="price"><p>Taxes</p><h2 class="fw-semi-bold">$${taxes}</h2></div>
          <div class="price"><p>Service Fee</p><h2 class="fw-semi-bold">$${serviceFee}</h2></div>
        </div>
        <div class="price">
          <p class="fw-bold">Total</p>
          <h2 class="fw-semi-bold">$${total}</h2>
        </div>
        <div class="confirm-payment">
          <button class="btn-primary full-width confirm-btn" data-flight-id="${flight.id}">
          Confirm</button>
        </div>
      </div>
    </aside>
  `;

  const confirmPayment = document.querySelector('.confirm-btn');

  if (confirmPayment) {
    confirmPayment.addEventListener('click', (e) => {
      const flightId = e.currentTarget.getAttribute('data-flight-id');
      const bookingURL = `flightconfirmation.html?flight=${flightId}`;
      window.location.href = bookingURL;
    });
  }

  // Attach event listeners after content is rendered
  const paymentOptions = document.querySelectorAll('.payment-option');

  paymentOptions.forEach((option) => {
    option.addEventListener('click', () => {
      paymentOptions.forEach((opt) => opt.classList.remove('selected'));
      option.classList.add('selected');
      const radio = option.querySelector('input[type="radio"]');
      radio.checked = true;
    });
  });

  // Modal logic
  const openModalBtn = document.querySelector('.payment-method-btn');
  const modal = document.getElementById('addCardModal');
  const closeModalBtn = modal?.querySelector('.modal-close');
  const modalOverlay = modal?.querySelector('.modal-overlay');

  if (openModalBtn && modal && closeModalBtn && modalOverlay) {
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modalOverlay.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
}
