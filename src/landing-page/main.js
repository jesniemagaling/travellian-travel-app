// Nav Booking Tab
const navTabs = document.querySelectorAll('.nav-booking-tab');

navTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    navTabs.forEach((t) => t.classList.remove('active')); // remove active from all
    tab.classList.add('active'); // add active to the clicked one
  });
});

// Booking Tabs Toggle
const tabs = document.querySelectorAll('.booking-tab');
const flightForm = document.getElementById('flightForm');
const stayForm = document.getElementById('stayForm');
const flightActions = document.querySelector('.flight-actions');
const staysActions = document.querySelector('.stays-actions');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Toggle active tab styling
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    // Determine which tab is selected
    const isFlight = tab.dataset.target === 'flightForm';

    // Toggle visibility of forms
    flightForm.classList.toggle('hidden', !isFlight);
    stayForm.classList.toggle('hidden', isFlight);

    // Toggle visibility of action buttons
    flightActions.classList.toggle('hidden', !isFlight);
    staysActions.classList.toggle('hidden', isFlight);
  });
});

// Swap From - To values in flight form
const swapIcon = document.querySelector('.swap-icon');
const fromToInput = document.getElementById('fromToInput');

if (swapIcon && fromToInput) {
  swapIcon.addEventListener('click', () => {
    const parts = fromToInput.value.split(' - ');
    if (parts.length === 2) {
      fromToInput.value = `${parts[1].trim()} - ${parts[0].trim()}`;
    }
  });
}

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

const toggleMobileNav = () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('show');
};

const closeMobileNav = () => {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('show');
};

hamburger?.addEventListener('click', toggleMobileNav);

// Close mobile nav if window is resized beyond mobile
window.addEventListener('resize', () => {
  if (window.innerWidth > 976) closeMobileNav();
});

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
