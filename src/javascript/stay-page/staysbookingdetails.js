import { stays, rooms } from '../utils/stays.js';
import { getStayFromURL } from './staysdetails.js';
import {
  setupMobileNav,
  initUserDropdown,
  createTabSwitcher,
} from '../utils/nav.js';

const imageBase = `${import.meta.env.BASE_URL}assets`;

document.addEventListener('DOMContentLoaded', () => {
  const { stayId, roomId } = getParamsFromURL();

  const stay = stays.find((s) => s.id === stayId);
  const room = rooms.find((r) => r.id === roomId);

  if (!stay || !room) return;

  renderBookingSummary(stay, room);
});

function getParamsFromURL() {
  const params = new URLSearchParams(window.location.search);
  return {
    stayId: params.get('stay'),
    roomId: params.get('room'),
  };
}

function renderBookingSummary(stay, room) {
  const bookingContainer = document.querySelector('.hotel-booking-payment');
  const asideContainer = document.querySelector('.booking-total-container');

  if (!bookingContainer || !asideContainer) return;

  // Main booking section
  bookingContainer.querySelector('.room-details-heading').innerHTML = `
    <h1 class="fs-28 fw-bold">${room.name} - <span class="fs-22 fw-bold">${room.subtitle}</span></h1>
    <h2 class="fs-32 fw-bold text-accent-slamon">$${room.price}</h2>
  `;

  bookingContainer.querySelector('.hotel-itinerary .hotel-logo').innerHTML = `
    <img src="${stay.logo}" alt="" /> 
  `;

  bookingContainer.querySelector(
    '.hotel-itinerary .itinerary-hotel-info'
  ).innerHTML = `
    <h2 class="fw-semi-bold fs-24">${stay.name}</h2>
    <div class="hotel-location">
      <img src="${imageBase}/location-icon.svg" alt="" />
      <p class="fs-14 fw-medium">${stay.location}</p>
    </div>
  `;

  // Aside booking summary section
  asideContainer.querySelector('.booking-total-heading').innerHTML = `
    <h2 class="fs-14 fw-medium text-neutral-grey limit-text-to-1-line">
      ${stay.name}
    </h2>
    <h2 class="fs-18 fw-semi-bold">${room.name}</h2>
    <div class="rating-badge">
      <div class="rating-badge-ratings flex">
        <p class="fs-12 fw-medium">${stay.rating}</p>
        <h1 class="fs-12 fw-bold text-muted">${stay.reviewLabel}</h1>
        <h2 class="fs-12 text-muted">${stay.reviews} reviews</h2>
      </div>
    </div>
  `;

  asideContainer.querySelector('.booking-total-banner img').src = stay.image;

  // Pricing (you can calculate dynamically if needed)
  const baseFare = room.price;
  const taxes = 20;
  const serviceFee = 5;
  const total = baseFare + taxes + serviceFee;

  asideContainer.querySelector('.booking-price-details').innerHTML = `
    <h1 class="fw-bold">Price Details</h1>
    <div class="price"><p>Base Fare</p><h2 class="fw-semi-bold">$${baseFare}</h2></div>
    <div class="price"><p>Discount</p><h2 class="fw-semi-bold">$0</h2></div>
    <div class="price"><p>Taxes</p><h2 class="fw-semi-bold">$${taxes}</h2></div>
    <div class="price"><p>Service Fee</p><h2 class="fw-semi-bold">$${serviceFee}</h2></div>
  `;

  asideContainer.querySelector('.price:last-child').innerHTML = `
    <p class="fw-bold">Total</p>
    <h2 class="fw-semi-bold">$${total}</h2>
  `;

  asideContainer.querySelector('.confirm-button').innerHTML = `
    <button class="btn-primary confirm-btn" data-room-id="${room.id}">Confirm</button>
  `;

  const confirmButton = document.querySelector('.confirm-btn');
  const stayId = getStayFromURL();

  if (confirmButton) {
    confirmButton.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room-id');
      const bookingURL = `staysconfirmation.html?stay=${stayId}&room=${roomId}`;
      window.location.href = bookingURL;
    });
  }
}

// Modal
const paymentOptions = document.querySelectorAll('.payment-option');

paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    paymentOptions.forEach((opt) => opt.classList.remove('selected'));

    option.classList.add('selected');

    const radio = option.querySelector('input[type="radio"]');
    radio.checked = true;
  });
});

const openModalBtn = document.querySelector('.payment-method-btn');
const modal = document.getElementById('addCardModal');
const closeModalBtn = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
  modal.style.display = 'none';
});
