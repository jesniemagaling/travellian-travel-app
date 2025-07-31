export function renderFlightDetails(flight) {
  const detailsContainer = document.querySelector('.flight-details-wrapper');
  const featuresContainer = document.querySelector(
    '.flight-features-container'
  );
  if (!detailsContainer || !featuresContainer || !flight) return;

  // flight details
  detailsContainer.querySelector('.flight-details-heading').innerHTML = `
    <h1 class="fs-28 fw-bold">${flight.airline} ${flight.aircraft}</h1>
    <h2 class="fs-32 fw-bold text-accent-slamon">$${flight.price}</h2>
  `;

  const departure = flight.departures[0];

  detailsContainer.querySelector('.flight-details-location').innerHTML = `
    <img src="/assets/location-icon.svg" alt="" />
    <p class="fs-14">
      ${departure.route}
    </p>
  `;

  detailsContainer.querySelector('.rating-badge-ratings').innerHTML = `
    <p class="fs-12 fw-medium">${flight.rating}</p>
    <h1 class="fs-12 fw-bold text-muted">${flight.ratingInfo}</h1>
    <h2 class="fs-12 text-muted">${flight.reviews} reviews</h2>
  `;

  detailsContainer.querySelector('.flight-details-banner').innerHTML = `
    <img src="${flight.banner}" alt="" />
  `;

  detailsContainer.querySelector('.flight-book-btn').innerHTML = `
    <button class="btn-primary book-now-btn" data-flight-id="${flight.id}">Book Now</button>
  `;

  const bookNowButton = document.querySelector('.book-now-btn');

  if (bookNowButton) {
    bookNowButton.addEventListener('click', (e) => {
      const flightId = e.currentTarget.getAttribute('data-flight-id');
      const bookingURL = `flightbookingdetails.html?flight=${flightId}`;
      window.location.href = bookingURL;
    });
  }

  // Flight Policies
  const policiesWrapper = featuresContainer.querySelector(
    '.flight-policies-wrapper'
  );
  if (policiesWrapper) {
    policiesWrapper.querySelector('h1').textContent =
      `${flight.airline} Policies`;
    policiesWrapper.querySelector('.flight-policies p').textContent =
      flight.policy || 'Standard airline safety policies apply.';
  }

  const itineraryContainers = featuresContainer.querySelectorAll(
    '.flight-itinerary-container'
  );

  flight.departures.forEach((departure, index) => {
    const itineraryEl = itineraryContainers[index];
    if (!itineraryEl) return;

    // Date & Duration
    itineraryEl.querySelector('.flight-itinerary-date h1').textContent =
      `Flight Route: ${departure.route}`;
    itineraryEl.querySelector('.flight-itinerary-date p').textContent =
      `Duration: ${departure.duration}`;

    // Airline
    itineraryEl.querySelector('.itinerary-airlines img').src = flight.logo;
    itineraryEl.querySelector('.itinerary-airlines-info h2').textContent =
      flight.airline;
    itineraryEl.querySelector('.itinerary-airlines-info p').textContent =
      flight.aircraft || 'Aircraft Info: Not specified';

    // Time
    const [departTime, arrivalTime] = departure.time.split(' - ');
    const [departLocation, arrivalLocation] = departure.route.split('-');

    const times = itineraryEl.querySelectorAll('.itinerary-time');
    if (times.length >= 2) {
      times[0].querySelector('h3').textContent = departTime;
      times[0].querySelector('p').textContent = departLocation;

      times[1].querySelector('h3').textContent = arrivalTime;
      times[1].querySelector('p').textContent = arrivalLocation;
    }
  });
}
