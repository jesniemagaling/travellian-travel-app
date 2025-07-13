const userBtn = document.querySelector('.user-profile-btn');
const userNav = document.getElementById('userNav');

userBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from bubbling
  userNav.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!userNav.contains(e.target) && !userBtn.contains(e.target)) {
    userNav.classList.remove('show');
  }
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
