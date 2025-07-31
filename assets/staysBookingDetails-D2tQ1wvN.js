import"./swiper-DolsZaOw.js";import"./nav-BRbo9wLN.js";/* empty css                     *//* empty css                     */import{s as p,r as y}from"./stays-BfrsDapl.js";import{g as b}from"./staysdetails-GhJhBYeD.js";document.addEventListener("DOMContentLoaded",()=>{const{stayId:e,roomId:t}=g(),o=p.find(n=>n.id===e),s=y.find(n=>n.id===t);!o||!s||v(o,s)});function g(){const e=new URLSearchParams(window.location.search);return{stayId:e.get("stay"),roomId:e.get("room")}}function v(e,t){const o=document.querySelector(".hotel-booking-payment"),s=document.querySelector(".booking-total-container");if(!o||!s)return;o.querySelector(".room-details-heading").innerHTML=`
    <h1 class="fs-28 fw-bold">${t.name} - <span class="fs-22 fw-bold">${t.subtitle}</span></h1>
    <h2 class="fs-32 fw-bold text-accent-slamon">$${t.price}</h2>
  `,o.querySelector(".hotel-itinerary .hotel-logo").innerHTML=`
    <img src="${e.logo}" alt="" /> 
  `,o.querySelector(".hotel-itinerary .itinerary-hotel-info").innerHTML=`
    <h2 class="fw-semi-bold fs-24">${e.name}</h2>
    <div class="hotel-location">
      <img src="/assets/location-icon.svg" alt="" />
      <p class="fs-14 fw-medium">${e.location}</p>
    </div>
  `,s.querySelector(".booking-total-heading").innerHTML=`
    <h2 class="fs-14 fw-medium text-neutral-grey limit-text-to-1-line">
      ${e.name}
    </h2>
    <h2 class="fs-18 fw-semi-bold">${t.name}</h2>
    <div class="rating-badge">
      <div class="rating-badge-ratings flex">
        <p class="fs-12 fw-medium">${e.rating}</p>
        <h1 class="fs-12 fw-bold text-muted">${e.reviewLabel}</h1>
        <h2 class="fs-12 text-muted">${e.reviews} reviews</h2>
      </div>
    </div>
  `,s.querySelector(".booking-total-banner img").src=e.image;const n=t.price,r=20,a=5,d=n+r+a;s.querySelector(".booking-price-details").innerHTML=`
    <h1 class="fw-bold">Price Details</h1>
    <div class="price"><p>Base Fare</p><h2 class="fw-semi-bold">$${n}</h2></div>
    <div class="price"><p>Discount</p><h2 class="fw-semi-bold">$0</h2></div>
    <div class="price"><p>Taxes</p><h2 class="fw-semi-bold">$${r}</h2></div>
    <div class="price"><p>Service Fee</p><h2 class="fw-semi-bold">$${a}</h2></div>
  `,s.querySelector(".price:last-child").innerHTML=`
    <p class="fw-bold">Total</p>
    <h2 class="fw-semi-bold">$${d}</h2>
  `,s.querySelector(".confirm-button").innerHTML=`
    <button class="btn-primary confirm-btn" data-room-id="${t.id}">Confirm</button>
  `;const c=document.querySelector(".confirm-btn"),m=b();c&&c.addEventListener("click",f=>{const u=f.currentTarget.getAttribute("data-room-id"),h=`staysconfirmation.html?stay=${m}&room=${u}`;window.location.href=h})}const l=document.querySelectorAll(".payment-option");l.forEach(e=>{e.addEventListener("click",()=>{l.forEach(o=>o.classList.remove("selected")),e.classList.add("selected");const t=e.querySelector('input[type="radio"]');t.checked=!0})});const w=document.querySelector(".payment-method-btn"),i=document.getElementById("addCardModal"),$=i.querySelector(".modal-close"),L=i.querySelector(".modal-overlay");w.addEventListener("click",()=>{i.style.display="block"});$.addEventListener("click",()=>{i.style.display="none"});L.addEventListener("click",()=>{i.style.display="none"});
