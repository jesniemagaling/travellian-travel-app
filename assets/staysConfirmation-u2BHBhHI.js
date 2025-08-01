import"./swiper-DolsZaOw.js";import{a as s,i as n,c as i}from"./styles-CO8zrl36.js";/* empty css                     *//* empty css                     */import{s as c,r as l}from"./stays-BfrsDapl.js";const d="/travellian-travel-app/assets";document.addEventListener("DOMContentLoaded",()=>{s(),n(),i({activeTab:document.querySelector(".stays-btn"),inactiveTab:document.querySelector(".flights-btn")});const{stayId:e,roomId:o}=m(),t=c.find(a=>a.id===e),r=l.find(a=>a.id===o);!t||!r||f(t,r)});function m(){const e=new URLSearchParams(window.location.search);return{stayId:e.get("stay"),roomId:e.get("room")}}function f(e,o){const t=document.querySelector(".hotel-details-wrapper");t&&(t.querySelector(".hotel-details-heading").innerHTML=`
    <h1 class="fs-28 fw-bold">${e.name}</h1>
    <h2 class="fs-32 fw-bold">$${o.price}</h2>
  `,t.querySelector(".hotel-details-location").innerHTML=`
    <img src="${d}/location-icon.svg" alt="" />
    <p class="fs-14">${e.location}</p>
  `,t.querySelector(".room-info").innerHTML=`
    <h2 class="fs-14 fw-bold">${o.name} - ${o.subtitle}</h2>
  `)}
