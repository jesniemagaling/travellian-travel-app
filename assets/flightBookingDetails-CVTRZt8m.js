import"./swiper-DolsZaOw.js";import{a as w,i as $,c as k}from"./nav-BRbo9wLN.js";/* empty css                      *//* empty css                      */import{f as x}from"./flights-Bw2lqAzd.js";document.addEventListener("DOMContentLoaded",()=>{w(),$(),k({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")});const e=L(),t=x.find(s=>s.id===e);t?S(t):console.warn("Flight not found")});function L(){return new URLSearchParams(window.location.search).get("flight")}function S(e){const t=document.querySelector(".flight-booking-payment"),s=e.departures?.[0];if(!t||!s)return;const[y,g]=s.time.split(" - "),[u,b]=s.route.split("-"),l=e.price,o=20,r=10,c=l+o+r;t.innerHTML=`
    <div class="booking-payment-wrapper">
      <div class="flight-details-heading">
        <h1 class="fs-28 fw-bold">${e.aircraft}</h1>
        <h2 class="fs-32 fw-bold text-accent-slamon">$${l}</h2>
      </div>

      <div class="flight-itinerary-container">
        <div class="flight-itinerary-date">
          <h1 class="fs-20 fw-bold">Return Flight</h1>
          <p class="fs-20 fw-medium text-neutral-grey">${s.duration}</p>
        </div>

        <div class="flight-itinerary-airlines">
          <div class="itinerary-airlines flex">
            <img src="${e.logo}" alt="${e.airline}" width="74px" />
            <div class="itinerary-airlines-info">
              <h2 class="fw-semi-bold fs-28">${e.airline}</h2>
              <p class="text-neutral-grey fs-16">${e.aircraft}</p>
            </div>
          </div>
          <div class="itinerary-details">
            <img src="/assets/airplane-icon.svg" alt="" />
            <img src="/assets/wifi-icon.svg" alt="" />
            <img src="/assets/stopwatch-icon.svg" alt="" />
            <img src="/assets/foods-icon.svg" alt="" />
            <img src="/assets/airlineseat-icon.svg" alt="" />
          </div>
        </div>

        <div class="flight-itinerary-timeframe">
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${y}</h3>
            <p class="text-neutral-grey fw-medium">${u}</p>
          </div>
          <img src="/assets/airplane-icon.svg" alt="" />
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${g}</h3>
            <p class="text-neutral-grey fw-medium">${b}</p>
          </div>
        </div>
      </div>

      <div class="payment-options">
        <label class="payment-option selected">
          <div class="payment-info">
            <h3 class="fs-16 fw-bold">Pay in full</h3>
            <p>Pay the total and you are all set</p>
          </div>
          <input type="radio" name="payment" checked />
        </label>
        <label class="payment-option">
          <div class="payment-info">
            <h3 class="fs-16 fw-bold">Pay part now, part later</h3>
            <p>Pay $${(c/2).toFixed(2)} now, and the rest later. No extra fees.</p>
            <a href="#">More info</a>
          </div>
          <input type="radio" name="payment" />
        </label>
      </div>

      <div class="payment-method-wrapper">
        <label class="payment-method selected">
          <div class="payment-info">
            <img src="/assets/visa-icon.svg" alt="Visa" />
            <h3 class="fs-16 fw-bold">**** 4321 <span class="fw-regular fs-14">02/27</span></h3>
          </div>
          <input type="radio" name="paymentMethod" checked />
        </label>
        <button class="payment-method-btn">
          <img src="/assets/addcircle-icon.svg" alt="" />
          <p class="fw-medium fs-12 text-neutral-grey">Add a new card</p>
        </button>
      </div>
    </div>

    <aside class="booking-total-container">
      <div class="booking-total-wrapper flex">
        <div class="booking-total-banner">
          <img src="${e.banner}" alt="" />
        </div>
        <div class="booking-total-heading">
          <h2 class="fw-medium text-neutral-grey">${e.class||"Economy"}</h2>
          <h2 class="fs-20 fw-semi-bold">${e.aircraft}</h2>
          <div class="rating-badge">
            <div class="rating-badge-ratings flex">
              <p class="fs-12 fw-medium">${e.rating}</p>
              <h1 class="fs-12 fw-bold text-muted">${e.ratingInfo}</h1>
              <h2 class="fs-12 text-muted">${e.reviews} reviews</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="booking-price-info">
        <p class="fw-medium">
          Your booking is protected by <strong class="fw-bold">golobe</strong>
        </p>
        <div class="booking-price-details fw-medium">
          <h1 class="fw-bold">Price Details</h1>
          <div class="price"><p>Base Fare</p><h2 class="fw-semi-bold">$${l}</h2></div>
          <div class="price"><p>Discount</p><h2 class="fw-semi-bold">$0</h2></div>
          <div class="price"><p>Taxes</p><h2 class="fw-semi-bold">$${o}</h2></div>
          <div class="price"><p>Service Fee</p><h2 class="fw-semi-bold">$${r}</h2></div>
        </div>
        <div class="price">
          <p class="fw-bold">Total</p>
          <h2 class="fw-semi-bold">$${c}</h2>
        </div>
        <div class="confirm-payment">
          <button class="btn-primary full-width confirm-btn" data-flight-id="${e.id}">
          Confirm</button>
        </div>
      </div>
    </aside>
  `;const d=document.querySelector(".confirm-btn");d&&d.addEventListener("click",i=>{const n=`flightconfirmation.html?flight=${i.currentTarget.getAttribute("data-flight-id")}`;window.location.href=n});const m=document.querySelectorAll(".payment-option");m.forEach(i=>{i.addEventListener("click",()=>{m.forEach(n=>n.classList.remove("selected")),i.classList.add("selected");const h=i.querySelector('input[type="radio"]');h.checked=!0})});const p=document.querySelector(".payment-method-btn"),a=document.getElementById("addCardModal"),f=a?.querySelector(".modal-close"),v=a?.querySelector(".modal-overlay");p&&a&&f&&v&&(p.addEventListener("click",()=>{a.style.display="block"}),f.addEventListener("click",()=>{a.style.display="none"}),v.addEventListener("click",()=>{a.style.display="none"}))}
