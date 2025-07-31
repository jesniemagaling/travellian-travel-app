import"./swiper-DolsZaOw.js";import{a as n,i as a,c as i}from"./nav-BRbo9wLN.js";/* empty css                     *//* empty css                     */import{s as c,r as l}from"./stays-BfrsDapl.js";document.addEventListener("DOMContentLoaded",()=>{n(),a(),i({activeTab:document.querySelector(".stays-btn"),inactiveTab:document.querySelector(".flights-btn")});const{stayId:e,roomId:o}=d(),t=c.find(r=>r.id===e),s=l.find(r=>r.id===o);!t||!s||m(t,s)});function d(){const e=new URLSearchParams(window.location.search);return{stayId:e.get("stay"),roomId:e.get("room")}}function m(e,o){const t=document.querySelector(".hotel-details-wrapper");t&&(t.querySelector(".hotel-details-heading").innerHTML=`
    <h1 class="fs-28 fw-bold">${e.name}</h1>
    <h2 class="fs-32 fw-bold">$${o.price}</h2>
  `,t.querySelector(".hotel-details-location").innerHTML=`
    <img src="/assets/location-icon.svg" alt="" />
    <p class="fs-14">${e.location}</p>
  `,t.querySelector(".room-info").innerHTML=`
    <h2 class="fs-14 fw-bold">${o.name} - ${o.subtitle}</h2>
  `)}
