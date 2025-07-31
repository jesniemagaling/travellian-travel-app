import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';
import { flights } from '../utils/flights';
import { renderFlightDetails } from './flightsinfo';

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
    renderFlightDetails(selectedFlight);
  } else {
    console.warn('Flight not found');
  }
});

function getFlightFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('flight');
}
