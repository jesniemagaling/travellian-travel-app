// Tabs Toggle
document.querySelectorAll('.booking-tab').forEach((tab) =>
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.booking-tab')
      .forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
  })
);

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
