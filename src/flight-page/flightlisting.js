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

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  const toggleMobileNav = () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
    console.log('Toggled!');
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
});
