import { renderStayForm } from '../utils/stayForm';

renderStayForm();

const flightsTab = document.querySelector('.flights-btn');
const staysTab = document.querySelector('.stays-btn');

// Mark if "Find Flights" was clicked
let isFlightsClicked = false;

// On hover: remove .active from stays, add to flights
flightsTab.addEventListener('mouseenter', () => {
  if (!isFlightsClicked) {
    staysTab.classList.remove('active');
    flightsTab.classList.add('active');
  }
});

// On mouse leave: restore active to stays if not clicked
flightsTab.addEventListener('mouseleave', () => {
  if (!isFlightsClicked) {
    flightsTab.classList.remove('active');
    staysTab.classList.add('active');
  }
});

// On click: keep flights tab active permanently
flightsTab.addEventListener('click', () => {
  staysTab.classList.remove('active');
  flightsTab.classList.add('active');
  isFlightsClicked = true;
});
