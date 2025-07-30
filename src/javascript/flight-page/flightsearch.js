import { renderFlightForm } from '../utils/flightForm';
import { setupStickyNav, createTabSwitcher } from '../utils/nav.js';
import { bookingBanners } from '../utils/places.js';
import { userOverlays } from '../utils/userOverlays.js';

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
createTabSwitcher({
  activeTab: document.querySelector('.flights-btn'),
  inactiveTab: document.querySelector('.stays-btn'),
});

renderFlightForm();
renderUserOverlays();
renderTravelBundle();

function renderUserOverlays() {
  const mapContainerHTML = document.getElementById('mapContent');

  mapContainerHTML.innerHTML = userOverlays
    .map(
      ({ id, name, boardingPass, image }) => `
        <div class="map-user-overlay-${id} user-overlay flex user-hidden">
          <img src="${image}" alt="${name}" />
          <div class="grid">
            <h1 class="fs-12 fw-bold">${name}</h1>
            <p class="fs-10 text-neutral-grey">${boardingPass}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderTravelBundle() {
  const travelBundleHTML = document.getElementById('bookingContent');

  travelBundleHTML.innerHTML = bookingBanners
    .map(
      ({ destination, description, price, image }) => `
        <div class="box">
          <img class="image-box" src="${image}" />
          <div class="card-overlay">
            <div class="flex">
              <div class="grid">
                <h1>${destination}</h1>
                <p>${description}</p>
              </div>
              <h2 class="fw-semi-bold fs-24">$ ${price}</h2>
            </div>
            <button class="travel-bundle-btn inline-flex btn-primary">
              Book Flight
            </button>
          </div>
        </div>
      `
    )
    .join('');
}

// === Map Overlay Logic ===
document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.getElementById('mapContainer');
  const svg = mapContainer.querySelector('svg');
  const allOverlays = document.querySelectorAll('.user-overlay');
  const shownOverlays = new Map();
  let scale = 1;

  function showOverlay(dot, overlay, userId) {
    overlay.classList.add('show');
    positionOverlay(dot, overlay);

    if (shownOverlays.has(userId)) clearTimeout(shownOverlays.get(userId));

    const timeoutId = setTimeout(() => {
      overlay.classList.remove('show');
      shownOverlays.delete(userId);
    }, 10000);

    shownOverlays.set(userId, timeoutId);
  }

  function hideAllOverlays() {
    allOverlays.forEach((overlay) => overlay.classList.remove('show'));
    shownOverlays.forEach((timeoutId) => clearTimeout(timeoutId));
    shownOverlays.clear();
  }

  function positionOverlay(dot, overlay) {
    const dotRect = dot.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();

    const offsetX = -14;
    const offsetY = 20;
    const padding = 10;

    let left = dotRect.left - containerRect.left + offsetX;
    let top = dotRect.top - containerRect.top + offsetY;

    const maxLeft = containerRect.width - overlay.offsetWidth - padding;
    const maxTop = containerRect.height - overlay.offsetHeight - padding;
    left = Math.min(Math.max(left, padding), maxLeft);
    top = Math.min(Math.max(top, padding), maxTop);

    overlay.style.left = `${left}px`;
    overlay.style.top = `${top}px`;
  }

  function repositionAllOverlays() {
    shownOverlays.forEach((_, userId) => {
      const dot = mapContainer.querySelector(`.map-dot[data-user="${userId}"]`);
      const overlay = document.querySelector(`.map-user-overlay-${userId}`);
      if (dot && overlay) positionOverlay(dot, overlay);
    });
  }

  function applyResponsiveZoomAndOverlays() {
    scale = window.innerWidth <= 768 ? 2 : 1;
    svg.style.transformOrigin = 'center center';
    svg.style.transform = `scale(${scale})`;

    hideAllOverlays();

    const defaultIds = window.innerWidth <= 768 ? ['4'] : ['1', '4'];
    defaultIds.forEach((id) => {
      const dot = mapContainer.querySelector(`.map-dot[data-user="${id}"]`);
      const overlay = document.querySelector(`.map-user-overlay-${id}`);
      if (dot && overlay) showOverlay(dot, overlay, id);
    });

    repositionAllOverlays();
  }

  window.addEventListener('load', applyResponsiveZoomAndOverlays);
  window.addEventListener('resize', applyResponsiveZoomAndOverlays);
  window.addEventListener('scroll', repositionAllOverlays);

  document.addEventListener('click', (e) => {
    const isInsideMap = mapContainer.contains(e.target);
    const isOverlay = e.target.closest('.user-overlay');
    if (!isInsideMap && !isOverlay) hideAllOverlays();
  });

  mapContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === 'svg') {
      hideAllOverlays();
      return;
    }

    const userId = target.dataset.user;
    if (
      target.classList.contains('map-dot') &&
      userId &&
      target.getAttribute('opacity') === '1'
    ) {
      const overlay = document.querySelector(`.map-user-overlay-${userId}`);
      if (overlay) showOverlay(target, overlay, userId);
    }
  });

  // Drag logic
  let isDragging = false;
  let startX = 0,
    startY = 0,
    scrollLeft = 0,
    scrollTop = 0;

  mapContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - mapContainer.offsetLeft;
    startY = e.pageY - mapContainer.offsetTop;
    scrollLeft = mapContainer.scrollLeft;
    scrollTop = mapContainer.scrollTop;
    mapContainer.classList.add('dragging');
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    mapContainer.classList.remove('dragging');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - mapContainer.offsetLeft;
    const y = e.pageY - mapContainer.offsetTop;
    mapContainer.scrollLeft = scrollLeft - (x - startX);
    mapContainer.scrollTop = scrollTop - (y - startY);
    repositionAllOverlays();
  });

  mapContainer.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();

    const zoomStep = 0.1;
    const minScale = 0.2;
    const maxScale = 2;

    scale += e.deltaY < 0 ? zoomStep : -zoomStep;
    scale = Math.min(Math.max(scale, minScale), maxScale);

    svg.style.transform = `scale(${scale})`;
    repositionAllOverlays();
  });
});
