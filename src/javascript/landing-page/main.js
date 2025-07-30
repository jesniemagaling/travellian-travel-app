import { renderFlightForm } from '../utils/flightForm';
import { renderStayForm } from '../utils/stayForm';
import { setupStickyNav } from '../utils/nav.js';
import { places } from '../utils/places.js';
import { reviews } from '../utils/reviews.js';

const imageBase = `${import.meta.env.BASE_URL}assets`;

setupStickyNav({
  lightAssets: {
    logo: `${imageBase}/company-logo-white.svg`,
    flight: `${imageBase}/airplane-white-icon.svg`,
    stays: `${imageBase}/bed-white-icon.svg`,
    menu: `${imageBase}/open-icon-white.svg`,
    close: `${imageBase}/close-icon-white.svg`,
  },
  darkAssets: {
    logo: `${imageBase}/company-logo.svg`,
    flight: `${imageBase}/airplane-icon.svg`,
    stays: `${imageBase}/bed-icon.svg`,
    menu: `${imageBase}/open-icon.svg`,
    close: `${imageBase}/close-icon-nav.svg`,
  },
});
renderFlightForm();
renderStayForm();
renderPlaces();
renderReviews();

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
const flightForm = document.getElementById('flight-content');
const stayForm = document.getElementById('stay-content');

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
  });
});

/*
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
*/

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

function renderPlaces() {
  const placesContainer = document.getElementById('placesCard');

  placesContainer.innerHTML = places
    .map(
      ({ city, country, image, services }) => `
        <div class="places-content flex">
          <img src="${image}" alt="${city}, ${country}" />
          <div class="grid">
            <p class="fw-semi-bold heading-normal-txt">${city}, ${country}</p>
            <p class="fw-medium fs-14">
              ${services.join('&nbsp;&nbsp;•&nbsp;&nbsp;')}
            </p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderReviews() {
  const reviewsContainer = document.getElementById('swiperWrapper');

  reviewsContainer.innerHTML = reviews
    .map(
      (reviews) => `
        <div class="swiper-slide">
          <div class="grid swiper-content">
            <h1 class="fs-24 fw-bold">${reviews.title}</h1>
            <p class="fs-14 text-neutral-grey">${reviews.message}</p>
            <button class="btn-black">View More</button>
            <div class="star-icon">
              ${`<img src="${imageBase}/star-icon.svg" alt="star" />`.repeat(reviews.stars)}
            </div>
            <div>
              <h1 class="fs-14 fw-bold">${reviews.name}</h1>
              <h2 class="fs-12 fw-medium text-neutral-grey">${reviews.location}</h2>
              <div class="flex">
                <img src="${reviews.platformIcon}" alt="${reviews.platform}" />
                <span class="fs-12 fw-bold text-neutral-grey">&nbsp;${reviews.platform}</span>
              </div>
            </div>
            <div class="swiper-content-img">
              <img src="${reviews.bannerImage}" alt="${reviews.name}'s review banner" />
            </div>
          </div>
        </div>
      `
    )
    .join('');
}
