import {
  setupMobileNav,
  createTabSwitcher,
  initUserDropdown,
} from '../utils/nav';

document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  initUserDropdown();
  createTabSwitcher({
    activeTab: document.querySelector('.flights-btn'),
    inactiveTab: document.querySelector('.stays-btn'),
  });
});

const paymentOptions = document.querySelectorAll('.payment-option');

paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    // Remove .selected from all options
    paymentOptions.forEach((opt) => opt.classList.remove('selected'));

    // Add .selected to the clicked one
    option.classList.add('selected');

    // Manually check the radio
    const radio = option.querySelector('input[type="radio"]');
    radio.checked = true;
  });
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
