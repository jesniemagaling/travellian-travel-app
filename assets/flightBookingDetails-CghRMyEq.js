import"./swiper-DolsZaOw.js";import{a as $,i as k,c as x}from"./nav-BRbo9wLN.js";/* empty css                      *//* empty css                      */import{f as L}from"./flights-Bw2lqAzd.js";const a="/travellian-travel-app/assets";document.addEventListener("DOMContentLoaded",()=>{$(),k(),x({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")});const e=S(),t=L.find(i=>i.id===e);t?F(t):console.warn("Flight not found")});function S(){return new URLSearchParams(window.location.search).get("flight")}function F(e){const t=document.querySelector(".flight-booking-payment"),i=e.departures?.[0];if(!t||!i)return;const[y,u]=i.time.split(" - "),[b,w]=i.route.split("-"),n=e.price,o=20,c=10,d=n+o+c;t.innerHTML=`
    <div class="booking-payment-wrapper">
      <div class="flight-details-heading">
        <h1 class="fs-28 fw-bold">${e.aircraft}</h1>
        <h2 class="fs-32 fw-bold text-accent-slamon">$${n}</h2>
      </div>

      <div class="flight-itinerary-container">
        <div class="flight-itinerary-date">
          <h1 class="fs-20 fw-bold">Return Flight</h1>
          <p class="fs-20 fw-medium text-neutral-grey">${i.duration}</p>
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
            <img src="${a}/airplane-icon.svg" alt="" />
            <img src="${a}/wifi-icon.svg" alt="" />
            <img src="${a}/stopwatch-icon.svg" alt="" />
            <img src="${a}/foods-icon.svg" alt="" />
            <img src="${a}/airlineseat-icon.svg" alt="" />
          </div>
        </div>

        <div class="flight-itinerary-timeframe">
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${y}</h3>
            <p class="text-neutral-grey fw-medium">${b}</p>
          </div>
          <img src="${a}/airplane-icon.svg" alt="" />
          <div class="itinerary-time flex">
            <h3 class="fs-24 fw-semi-bold">${u}</h3>
            <p class="text-neutral-grey fw-medium">${w}</p>
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
            <p>Pay $${(d/2).toFixed(2)} now, and the rest later. No extra fees.</p>
            <a href="#">More info</a>
          </div>
          <input type="radio" name="payment" />
        </label>
      </div>

      <div class="payment-method-wrapper">
        <label class="payment-method selected">
          <div class="payment-info">
            <img src="${a}/visa-icon.svg" alt="Visa" />
            <h3 class="fs-16 fw-bold">**** 4321 <span class="fw-regular fs-14">02/27</span></h3>
          </div>
          <input type="radio" name="paymentMethod" checked />
        </label>
        <button class="payment-method-btn">
          <img src="${a}/addcircle-icon.svg" alt="" />
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
          <div class="price"><p>Base Fare</p><h2 class="fw-semi-bold">$${n}</h2></div>
          <div class="price"><p>Discount</p><h2 class="fw-semi-bold">$0</h2></div>
          <div class="price"><p>Taxes</p><h2 class="fw-semi-bold">$${o}</h2></div>
          <div class="price"><p>Service Fee</p><h2 class="fw-semi-bold">$${c}</h2></div>
        </div>
        <div class="price">
          <p class="fw-bold">Total</p>
          <h2 class="fw-semi-bold">$${d}</h2>
        </div>
        <div class="confirm-payment">
          <button class="btn-primary full-width confirm-btn" data-flight-id="${e.id}">
          Confirm</button>
        </div>
      </div>
    </aside>
  `;const m=document.querySelector(".confirm-btn");m&&m.addEventListener("click",l=>{const r=`travellian-travel-app/flight/flightconfirmation.html?flight=${l.currentTarget.getAttribute("data-flight-id")}`;window.location.href=r});const p=document.querySelectorAll(".payment-option");p.forEach(l=>{l.addEventListener("click",()=>{p.forEach(r=>r.classList.remove("selected")),l.classList.add("selected");const g=l.querySelector('input[type="radio"]');g.checked=!0})});const f=document.querySelector(".payment-method-btn"),s=document.getElementById("addCardModal"),v=s?.querySelector(".modal-close"),h=s?.querySelector(".modal-overlay");f&&s&&v&&h&&(f.addEventListener("click",()=>{s.style.display="block"}),v.addEventListener("click",()=>{s.style.display="none"}),h.addEventListener("click",()=>{s.style.display="none"}))}
