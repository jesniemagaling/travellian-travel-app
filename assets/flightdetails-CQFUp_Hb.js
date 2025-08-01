import{a as h,i as g,c as m}from"./nav-BUibuh3s.js";import{f as S}from"./flights-Bw2lqAzd.js";const b="/travellian-travel-app/assets";function q(e){const t=document.querySelector(".flight-details-wrapper"),i=document.querySelector(".flight-features-container");if(!t||!i||!e)return;t.querySelector(".flight-details-heading").innerHTML=`
    <h1 class="fs-28 fw-bold">${e.airline} ${e.aircraft}</h1>
    <h2 class="fs-32 fw-bold text-accent-slamon">$${e.price}</h2>
  `;const s=e.departures[0];t.querySelector(".flight-details-location").innerHTML=`
    <img src="${b}/location-icon.svg" alt="" />
    <p class="fs-14">
      ${s.route}
    </p>
  `,t.querySelector(".rating-badge-ratings").innerHTML=`
    <p class="fs-12 fw-medium">${e.rating}</p>
    <h1 class="fs-12 fw-bold text-muted">${e.ratingInfo}</h1>
    <h2 class="fs-12 text-muted">${e.reviews} reviews</h2>
  `,t.querySelector(".flight-details-banner").innerHTML=`
    <img src="${e.banner}" alt="" />
  `,t.querySelector(".flight-book-btn").innerHTML=`
    <button class="btn-primary book-now-btn" data-flight-id="${e.id}">Book Now</button>
  `;const c=document.querySelector(".book-now-btn");c&&c.addEventListener("click",n=>{const r=`flightbookingdetails.html?flight=${n.currentTarget.getAttribute("data-flight-id")}`;window.location.href=r});const a=i.querySelector(".flight-policies-wrapper");a&&(a.querySelector("h1").textContent=`${e.airline} Policies`,a.querySelector(".flight-policies p").textContent=e.policy||"Standard airline safety policies apply.");const u=i.querySelectorAll(".flight-itinerary-container");e.departures.forEach((n,l)=>{const r=u[l];if(!r)return;r.querySelector(".flight-itinerary-date h1").textContent=`Flight Route: ${n.route}`,r.querySelector(".flight-itinerary-date p").textContent=`Duration: ${n.duration}`,r.querySelector(".itinerary-airlines img").src=e.logo,r.querySelector(".itinerary-airlines-info h2").textContent=e.airline,r.querySelector(".itinerary-airlines-info p").textContent=e.aircraft||"Aircraft Info: Not specified";const[d,f]=n.time.split(" - "),[y,p]=n.route.split("-"),o=r.querySelectorAll(".itinerary-time");o.length>=2&&(o[0].querySelector("h3").textContent=d,o[0].querySelector("p").textContent=y,o[1].querySelector("h3").textContent=f,o[1].querySelector("p").textContent=p)})}document.addEventListener("DOMContentLoaded",()=>{h(),g(),m({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")});const e=w(),t=S.find(i=>i.id===e);t?q(t):console.warn("Flight not found")});function w(){return new URLSearchParams(window.location.search).get("flight")}
