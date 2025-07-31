import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';
import { stays } from '../utils/stays';
import {
  renderAmenitiesSlides,
  renderReviewsSlides,
  renderRoomSlides,
  renderStaysDetails,
  renderStaysLocation,
  renderStaysOverview,
} from './staysInfo';

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  initUserDropdown();
  createTabSwitcher({
    activeTab: document.querySelector('.stays-btn'),
    inactiveTab: document.querySelector('.flights-btn'),
  });

  const stayId = getStayFromURL();
  const selectedStay = stays.find((stay) => stay.id === stayId);

  if (selectedStay) {
    renderStaysDetails(selectedStay);
    renderStaysOverview(selectedStay);
    renderStaysLocation(selectedStay);
  }

  renderRoomSlides();
  renderAmenitiesSlides();
  renderReviewsSlides();
});

// Gets `stay` from the URL, e.g. ?stay=familyRoom
export function getStayFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('stay');
}
