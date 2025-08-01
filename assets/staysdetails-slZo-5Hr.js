import{a as v,i as p,c as f}from"./nav-BUibuh3s.js";import{r,a as h,b as d,s as w}from"./stays-BfrsDapl.js";const u="/travellian-travel-app/assets";function g(e){const i=document.getElementById("staysDetailsContainer");!i||!e||(i.innerHTML=`
    <div class="hotel-details-heading">
      <div class="hotel-name flex">
        <h1 class="fs-28 fw-bold">${e.name}</h1>
      </div>
    </div>

    <div class="hotel-details-info">
      <div>
        <div class="hotel-details-location">
          <img src="${u}/location-icon.svg" alt="location icon" />
          <p class="fs-14">${e.location}</p>
        </div>
        <div class="rating-badge">
          <div class="rating-badge-ratings flex">
            <p class="fs-12 fw-medium">${e.rating}</p>
            <h1 class="fs-12 fw-bold text-muted">${e.reviewLabel}</h1>
            <h2 class="fs-12 text-muted">${e.reviews} reviews</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="hotel-location-wrapper">
      ${e.images.map((a,s)=>`
            <div class="hotel-location-card card-${s+1}">
              <img src="${a}" alt="stay image ${s+1}" />
            </div>`).join("")}
    </div>
  `)}function b(e){const i=document.querySelector(".overview-container");!i||!e||(i.innerHTML=`
    <div class="overview-heading">
      <h1 class="fs-20 fw-bold">Overview</h1>
      <p class="fw-medium">
        ${e.overview}
      </p>
    </div>
  `)}function $(e){const i=document.querySelector(".map-container");!i||!e||(i.innerHTML=`
    <iframe
      src="${e.locationMap}"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `)}function S(){const e=document.querySelector(".swiper-wrapper");if(!e||!Array.isArray(r))return;e.innerHTML="",r.forEach(s=>{const t=document.createElement("article");t.className="rooms-content swiper-slide",t.id=s.id,t.innerHTML=`
      <div class="modal-image-container">
        <div class="modal-swiper swiper">
          <div class="swiper-wrapper">
            ${s.images.map(n=>`
              <div class="modal-images swiper-slide">
                <img src="${n}" alt="${s.name}" class="modal-img" />
              </div>
            `).join("")}
          </div>
        </div>
        <div class="modal-swiper-controls">
          <div class="modal-swiper-button-prev"></div>
          <div class="modal-swiper-button-next"></div>
        </div>
      </div>
      <div class="modal-details">
        <div class="modal-heading">
          <h1 class="fs-28 fw-bold">${s.name}</h1>
          <h2 class="fs-18 fw-semi-bold">${s.subtitle}</h2>
          <p>${s.description}</p>
        </div>
        <div class="room-amenities">
          <h3 class="fs-18 fw-semi-bold">In-Room Amenities</h3>
          <ul class="amenities">
            ${s.amenities.map(n=>`<li>${n}</li>`).join("")}
          </ul>
        </div>
        <div class="rooms-cta flex">
          <h2 class="hotel-per-night fs-32 fw-bold text-accent-slamon">
            $${s.price}<span class="fs-14">/night</span>
          </h2>
          <div class="rooms-btn">
            <button class="book-now-btn btn-stroke" data-room-id="${s.id}">Book Now</button>
          </div>
        </div>
      </div>
    `,e.appendChild(t)});const i=e.querySelectorAll(".book-now-btn"),a=c();i.forEach(s=>{s.addEventListener("click",t=>{const n=t.currentTarget.getAttribute("data-room-id"),l=`staysbookingdetails.html?stay=${a}&room=${n}`;window.location.href=l})})}function y(){const e=document.querySelector(".amenities-swiper .swiper-wrapper");e&&h.forEach(i=>{const a=document.createElement("article");a.className="amenities-article swiper-slide",a.innerHTML=`
      <div class="amenities-image">
        <img
          src="${i.image}"
          alt="${i.title}"
          class="amenities-img"
        />
        <div class="amenities-data">
          <h3 class="fs-20 fw-semi-bold">${i.title}</h3>
          <p class="fw-medium">${i.description}</p>
        </div>
      </div>
    `,e.appendChild(a)})}function L(){const e=document.querySelector(".stays-testimonial");if(!e)return;e.innerHTML="";const i=3,a=Math.ceil(d.length/i);for(let s=0;s<a;s++){const t=document.createElement("article");t.className="testimonials-details swiper-slide";const n=s*i,l=n+i;d.slice(n,l).forEach(o=>{const m=`
        <div class="testimonial-card">
          <img src="${o.profileImage}" alt="${o.name}" />
          <div class="fs-14 testimonial-info">
            <div class="testimonials-heading">
              <div class="testimonials-ratings flex">
                <h2 class="fw-semi-bold">${o.rating}</h2>
                <span>|</span>
                <p>${o.name}</p>
              </div>
              <img src="${o.flagImage}" alt="flag" />
            </div>
            <p class="testimonials-feedback">
              ${o.feedback}
            </p>
          </div>
        </div>
      `;t.innerHTML+=m}),e.appendChild(t)}}document.addEventListener("DOMContentLoaded",()=>{v(),p(),f({activeTab:document.querySelector(".stays-btn"),inactiveTab:document.querySelector(".flights-btn")});const e=c(),i=w.find(a=>a.id===e);i&&(g(i),b(i),$(i)),S(),y(),L()});function c(){return new URLSearchParams(window.location.search).get("stay")}export{c as g};
