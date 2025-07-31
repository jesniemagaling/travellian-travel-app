import { stays, rooms } from '../utils/stays.js';
import {
  setupMobileNav,
  initUserDropdown,
  createTabSwitcher,
} from '../utils/nav.js';

const imageBase = `${import.meta.env.BASE_URL}assets`;

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  initUserDropdown();
  createTabSwitcher({
    activeTab: document.querySelector('.stays-btn'),
    inactiveTab: document.querySelector('.flights-btn'),
  });
  const { stayId, roomId } = getParamsFromURL();

  const stay = stays.find((s) => s.id === stayId);
  const room = rooms.find((r) => r.id === roomId);

  if (!stay || !room) return;

  renderConfirmation(stay, room);
});

function getParamsFromURL() {
  const params = new URLSearchParams(window.location.search);
  return {
    stayId: params.get('stay'),
    roomId: params.get('room'),
  };
}

function renderConfirmation(stay, room) {
  const bookingDetails = document.querySelector('.hotel-details-wrapper');

  if (!bookingDetails) return;

  // booking details
  bookingDetails.querySelector('.hotel-details-heading').innerHTML = `
    <h1 class="fs-28 fw-bold">${stay.name}</h1>
    <h2 class="fs-32 fw-bold">$${room.price}</h2>
  `;

  bookingDetails.querySelector('.hotel-details-location').innerHTML = `
    <img src="${imageBase}/location-icon.svg" alt="" />
    <p class="fs-14">${stay.location}</p>
  `;

  bookingDetails.querySelector('.room-info').innerHTML = `
    <h2 class="fs-14 fw-bold">${room.name} - ${room.subtitle}</h2>
  `;
}
