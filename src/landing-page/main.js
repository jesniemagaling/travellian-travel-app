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
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = header.querySelectorAll('a.nav-link');
const logoImg = header.querySelector('.company-logo-nav img');
const flightIcon = header.querySelector('.flights-btn-nav img');
const staysIcon = header.querySelector('.stays-btn-nav img');
const menuIcon = header.querySelector('.menu-nav');
const closeIcon = header.querySelector('.close-nav');

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

// scroll sticky navbar
function updateNavStyle() {
  const isScrolled = window.scrollY > 20;
  const isHamburgerActive = hamburger.classList.contains('active');

  if (isScrolled || isHamburgerActive) {
    header.classList.add('sticky');

    navLinks.forEach((link) => {
      link.classList.add('links-black');
    });

    logoImg.src = '/assets/company-logo.svg';
    flightIcon.src = '/assets/airplane-icon.svg';
    staysIcon.src = '/assets/bed-icon.svg';
    menuIcon.src = '/assets/open-icon.svg';
    closeIcon.src = '/assets/close-icon-nav.svg';
  } else {
    header.classList.remove('sticky');

    navLinks.forEach((link) => {
      link.classList.remove('links-black');
    });

    logoImg.src = '/assets/company-logo-white.svg';
    flightIcon.src = '/assets/airplane-white-icon.svg';
    staysIcon.src = '/assets/bed-white-icon.svg';
    menuIcon.src = '/assets/open-icon-white.svg';
    closeIcon.src = '/assets/close-icon-white.svg';
  }
}

// Call on scroll
window.addEventListener('scroll', updateNavStyle);

// Call on hamburger toggle
const toggleMobileNav = () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('show');
  updateNavStyle(); // Ensure nav styling updates
};

const closeMobileNav = () => {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('show');
  updateNavStyle(); // Ensure nav styling resets
};

hamburger?.addEventListener('click', toggleMobileNav);

// Responsive close
window.addEventListener('resize', () => {
  if (window.innerWidth > 976) closeMobileNav();
});

// Interactive cards
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) =>
  box.addEventListener('click', (e) => {
    e.stopPropagation();
    boxes.forEach((other) => {
      if (other !== box) other.classList.remove('active');
    });
    box.classList.toggle('active');
  })
);
document.addEventListener('click', () => {
  boxes.forEach((box) => box.classList.remove('active'));
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

fromToInput.addEventListener('input', (e) => {
  const caretPos = fromToInput.selectionStart;
  let value = fromToInput.value;

  // Ensure " - " exists exactly once
  if (!value.includes(' - ')) {
    const parts = value.split('-');
    if (parts.length === 2) {
      // Correcting spacing
      value = parts[0].trim() + ' - ' + parts[1].trim();
    } else {
      // Restore default format
      value = 'From - To';
    }
  }

  // Split into parts
  const parts = value.split(' - ');

  // Limit to two parts
  if (parts.length > 2) {
    value = parts[0] + ' - ' + parts.slice(1).join(' ');
  }

  // Set updated value
  fromToInput.value = value;

  // Optionally move caret if needed
  fromToInput.setSelectionRange(caretPos, caretPos);
});
