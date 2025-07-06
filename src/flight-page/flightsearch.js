const navTabs = document.querySelectorAll('.nav-booking-tab');
const flightsTab = document.querySelector('.flights-btn');
const staysTab = document.querySelector('.stays-btn');

let isStaysClicked = false;

// Click logic: set active permanently on click
navTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    navTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    // Set clicked state
    isStaysClicked = tab.classList.contains('stays-btn');
  });
});

// Hover logic
navTabs.forEach((tab) => {
  tab.addEventListener('mouseenter', () => {
    navTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Reset on mouse leave (only if stays wasn't clicked)
staysTab.addEventListener('mouseleave', () => {
  if (!isStaysClicked) {
    navTabs.forEach((t) => t.classList.remove('active'));
    flightsTab.classList.add('active');
  }
});
