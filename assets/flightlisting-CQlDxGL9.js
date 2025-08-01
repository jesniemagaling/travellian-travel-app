import{i as g,a as v,c as h}from"./swiper-D8Rclskd.js";import{r as y}from"./flightForm-BNUiH5sV.js";import{f as m}from"./flights-Bw2lqAzd.js";const b="/travellian-travel-app/assets";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".box");t.forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),t.forEach(r=>{r!==e&&r.classList.remove("active")}),e.classList.toggle("active")})),document.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active"))}),g(),v(),h({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")}),y(),o()});function o(){const t=document.getElementById("flightCardContainer");if(!t)return;const e=E(a),n=S(e,a.sort);w(n.length,m.length),t.innerHTML=n.map(r=>`
        <div class="flight-card">
          <div class="flight-info">
            <img src="${r.logo}" alt="${r.airline}" class="airline-logo" />
            <div class="flight-info-container">
              <div class="rating-badge">
                <div class="rating-badge-ratings flex">
                  <p class="fs-12 fw-medium">${r.rating}</p>
                  <h1 class="fs-12 fw-bold text-muted">
                    ${r.rating>=4.5?"Excellent":"Very Good"}
                  </h1>
                  <h2 class="fs-12 text-muted">${r.reviews} reviews</h2>
                </div>
                <div class="price grid">
                  <h2 class="fw-medium fs-14 text-neutral-grey">starting from</h2>
                  <h1 class="fw-bold text-accent-slamon fs-24">$${r.price}</h1>
                </div>
              </div>
              <div class="grid">
                ${r.departures.map(i=>`
                      <div class="flight-times">
                        <label><input type="checkbox" name="details" /></label>
                        <div>
                          <h1 class="fs-16 fw-semi-bold">${i.time}</h1>
                          <p class="fs-14 text-neutral-grey fw-medium">${r.airline}</p>
                        </div>
                        <p class="fs-14 fw-semi-bold text-neutral-grey flight-non-stop">non stop</p>
                        <div>
                          <h1 class="fs-16 fw-semi-bold">${i.duration}</h1>
                          <p class="fs-14 text-neutral-grey fw-medium">${i.route}</p>
                        </div>
                      </div>
                    `).join("")}
              </div>
              <div class="flight-actions">
                <button class="btn-stroke">
                  <img src="${b}/heart-stroke-icon.svg" alt="" />
                </button>
                <button class="btn-primary full-width" data-id="${r.id}">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      `).join("")}document.addEventListener("click",t=>{const e=t.target.closest(".btn-primary[data-id]");if(!e)return;const n=e.dataset.id;n&&(window.location.href=`flightdetails.html?flight=${n}`)});const a={price:[50,1200],time:[0,1440],rating:4,airlines:[],tripType:[],sort:"recommended"};document.querySelector(".price-slider").addEventListener("input",t=>{const e=parseInt(t.target.value,10);a.price[1]=e,document.querySelector(".max-price").textContent=`$${e}`,o()});document.querySelector(".time-slider").addEventListener("input",t=>{const e=parseInt(t.target.value,10);a.time[1]=e,document.querySelector(".end-time").textContent=$(e),o()});document.querySelectorAll("[data-rating]").forEach(t=>{t.addEventListener("click",e=>{const n=e.target.closest("[data-rating]");if(!n)return;const r=Number(n.dataset.rating);a.rating=r,o()})});document.querySelectorAll('input[name="airlines"]').forEach(t=>{t.addEventListener("change",()=>{a.airlines=Array.from(document.querySelectorAll('input[name="airlines"]:checked')).map(e=>e.value),o()})});document.querySelectorAll('input[name="tripType"]').forEach(t=>{t.addEventListener("change",()=>{a.tripType=Array.from(document.querySelectorAll('input[name="tripType"]:checked')).map(e=>e.value),o()})});document.getElementById("sortSelect").addEventListener("change",t=>{a.sort=t.target.value,o()});document.querySelector(".price-slider").value=1200;document.querySelector(".time-slider").value=1440;function $(t){const e=Math.floor(t/60),n=t%60,r=e>=12?"pm":"am",i=(e+11)%12+1,s=n.toString().padStart(2,"0");return`${i}:${s}${r}`}function E({price:t,time:e,rating:n,airlines:r,tripType:i}){return m.filter(s=>{if(s.price<t[0]||s.price>t[1]||n!=null&&Number(s.rating)<n||r.length&&!r.includes(s.airline))return!1;const f=l=>{const[c]=l.split(" - "),[d,p]=c.split(":"),u=parseInt(d)*60+parseInt(p);return c.includes("pm")&&parseInt(d)!==12?u+720:u};return!(!s.departures.some(l=>{const c=f(l.time.toLowerCase());return c>=e[0]&&c<=e[1]})||i.length&&!i.includes(s.tripType))})}function w(t,e){document.getElementById("result-count").textContent=t,document.getElementById("total-flights").textContent=`${e} flights`}function S(t,e){const n=[...t];switch(e){case"price-low-high":return n.sort((r,i)=>r.price-i.price);case"duration":return n.sort((r,i)=>r.duration-i.duration);case"recommended":default:return n.sort((r,i)=>i.rating-r.rating)}}
