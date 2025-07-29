export function renderFlightForm() {
  let flightFormHTML = '';

  flightFormHTML += `
    <!-- Flights Form -->
    <div id="flightForm" class="booking-form booking-flight-form">
      <div class="grid">
        <div class="form-group">
          <label>From - To</label>
          <input
            type="text"
            id="fromToInput"
            value="Lahore - Karachi"
            placeholder="Lahore - Karachi"
          />
          <span class="fs-16 swap-icon">⇄</span>
        </div>

        <div class="form-group trip">
          <label>Trip</label>
          <select>
            <option>Return</option>
            <option>One Way</option>
          </select>
        </div>

        <div class="return-depart">
          <div class="form-group">
            <label>Depart</label>
            <div class="input-with-icon input-calendar">
              <input type="date" />
              <img
                src="/assets/calendar-icon.svg"
                alt="Calendar"
                class="input-icon-right input-calendar-icon"
              />
            </div>
          </div>

          <div class="form-group">
            <label>Return</label>
            <div class="input-with-icon input-calendar">
              <input type="date" />
              <img
                src="/assets/calendar-icon.svg"
                alt="Calendar"
                class="input-icon-right input-calendar-icon"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>Passenger - Class</label>
          <input type="text" placeholder="1 Passenger, Economy" />
        </div>
      </div>
    </div>

    <!-- Flights Actions -->
    <div class="actions flight-actions">
      <a href="">
        <button class="inline-flex btn-black flight-btn">
          <img src="/assets/plus-icon.svg" alt="" />&nbsp;Add Promo Code
        </button>
      </a>
      <a href="">
        <button class="inline-flex btn-primary flight-btn">
          <img src="/assets/show-icon.svg" alt="" />&nbsp;Show Flights
        </button>
      </a>
    </div>
  `;

  document.getElementById('flight-content').innerHTML = flightFormHTML;
}
