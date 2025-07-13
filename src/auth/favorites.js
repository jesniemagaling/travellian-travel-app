let isStaysClicked = false;

const favoritesTabs = document.querySelectorAll('.favorites-tab');
const favoritesFlightsTab = document.querySelector('.favorites-flights-btn');
const favoritesStaysTab = document.querySelector('.favorites-stays-btn');

const flightsList = document.querySelector('.flights-list');
const staysList = document.querySelector('.stays-list');

favoritesTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Toggle tab button active
    favoritesTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    // Toggle content
    const isStays = tab.classList.contains('favorites-stays-btn');
    isStaysClicked = isStays;

    staysList.classList.toggle('hidden', !isStays);
    staysList.classList.toggle('active', isStays);

    flightsList.classList.toggle('hidden', isStays);
    flightsList.classList.toggle('active', !isStays);
  });
});
