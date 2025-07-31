const i="/travellian-travel-app/assets";function s(){let t="";t+=`
    <!-- Stays Form -->
    <div id="stayForm" class="booking-form booking-stay-form">
      <div class="grid">
        <div class="form-group">
          <label>Enter Destination</label>
          <div class="input-with-icon">
            <img src="${i}/bed-icon.svg" alt="Bed" class="input-icon" />
            <input type="text" placeholder="Istanbul, Turkey" />
          </div>
        </div>

        <div class="form-group">
          <label>Check In</label>
          <div class="input-with-icon input-calendar">
            <input type="date" />
            <img
              src="${i}/calendar-icon.svg"
              alt="Calendar"
              class="input-icon-right input-calendar-icon"
            />
          </div>
        </div>

        <div class="form-group">
          <label>Check Out</label>
          <div class="input-with-icon input-calendar">
            <input type="date" />
            <img
              src="${i}/calendar-icon.svg"
              alt="Calendar"
              class="input-icon-right input-calendar-icon"
            />
          </div>
        </div>

        <div class="form-group">
          <label>Rooms & Guests</label>
          <div class="input-with-icon">
            <img
              src="${i}/user-icon.svg"
              alt="User"
              class="input-icon"
            />
            <select>
              <option>1 room, 2 guests</option>
              <option>2 rooms, 4 guests</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Stays Actions -->
    <div class="actions stays-actions">
      <a href="">
        <button class="inline-flex btn-black stays-btn">
          <img src="${i}/plus-icon.svg" alt="" />&nbsp;Add Promo Code
        </button>
      </a>
      <a href="">
        <button class="inline-flex btn-primary stays-btn">
          <img src="${i}/building-icon.svg" alt="" />&nbsp;Show Stays
        </button>
      </a>
    </div>
  `,document.getElementById("stay-content").innerHTML=t}export{s as r};
