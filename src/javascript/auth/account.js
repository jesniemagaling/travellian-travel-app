import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';

initUserDropdown();
setupMobileNav();
createTabSwitcher({
  activeTab: document.querySelector('.flights-btn'),
  inactiveTab: document.querySelector('.stays-btn'),
});

const openModalBtn = document.querySelector('.payment-method-btn');
const modal = document.getElementById('addCardModal');
const closeModalBtn = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

// Show modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Hide modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
  modal.style.display = 'none';
});
