import{s as a,c as l}from"./swiper-D8Rclskd.js";import{r as c}from"./stayForm-BQbN_MYX.js";import{p as r,b as d}from"./places-m7fFGoKg.js";const e="/travellian-travel-app/assets";a({lightAssets:{logo:`${e}/company-logo-white.svg`,flight:`${e}/airplane-white-icon.svg`,stays:`${e}/bed-white-icon.svg`,menu:`${e}/open-icon-white.svg`,close:`${e}/close-icon-white.svg`},darkAssets:{logo:`${e}/company-logo.svg`,flight:`${e}/airplane-icon.svg`,stays:`${e}/bed-icon.svg`,menu:`${e}/open-icon.svg`,close:`${e}/close-icon-nav.svg`}});l({activeTab:document.querySelector(".stays-btn"),inactiveTab:document.querySelector(".flights-btn")});c();v();g();function v(){const s=document.getElementById("popularDestination");s.innerHTML=r.slice(0,4).map(({city:n,country:i,image:o,placesCount:t})=>`
      <div class="places-heading-hotel places-content flex">
        <img src="${o}" alt="" />
        <div class="grid">
          <p class="fw-semi-bold">${n} ${i}</p>
          <p class="fs-12">${t} places</p>
        </div>
      </div>
    `).join("")}function g(){const s=document.getElementById("bookingContent");s.innerHTML=d.map(({destination:n,description:i,price:o,image:t})=>`
        <div class="box">
          <img class="image-box" src="${t}" />
          <div class="card-overlay">
            <div class="flex">
              <div class="grid">
                <h1>${n}</h1>
                <p>${i}</p>
              </div>
              <h2 class="fw-semi-bold fs-24">$ ${o}</h2>
            </div>
            <button class="travel-bundle-btn inline-flex btn-primary">
              Book Stay
            </button>
          </div>
        </div>
      `).join("")}
