import"./swiper-DolsZaOw.js";/* empty css               *//* empty css                     */import{a as l,i as d,c as m}from"./nav-BUibuh3s.js";import{r as u}from"./stayForm-BQbN_MYX.js";import{s as c}from"./stays-BfrsDapl.js";const i="/travellian-travel-app/assets";document.addEventListener("DOMContentLoaded",()=>{l(),d(),m({activeTab:document.querySelector(".stays-btn"),inactiveTab:document.querySelector(".flights-btn")}),u(),o();const e=document.querySelectorAll(".box");e.forEach(a=>a.addEventListener("click",s=>{s.stopPropagation(),e.forEach(t=>{t!==a&&t.classList.remove("active")}),a.classList.toggle("active")})),document.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active"))})});function o(){const e=document.getElementById("stayCardContainer");if(!e)return;const a=v(c,r),s=f(a,r.sort);e.innerHTML=s.map(t=>`
        <div class="hotel-card stays-listing">
          <div class="hotel-info">
            <div class="hotel-logo">
              <img src="${t.image}" alt="Bed" />
              <div class="hotel-logo-overlay">
                <p class="fs-12 fw-medium">${t.imagesCount} images</p>
              </div>
            </div>
            <div class="hotel-info-container">
              <div class="hotel-badge">
                <div class="hotel-details">
                  <h1 class="fs-20 fw-bold text-muted">
                    ${t.name}
                  </h1>
                  <div class="hotel-location">
                    <img src="${i}/location-icon.svg" alt="" />
                    <p class="fs-12 fw-medium">
                      ${t.location}
                    </p>
                  </div>
                  <div class="hotel-rating-badge">
                    <div class="flex">
                      <img src="${i}/starslamon-icon.svg" alt="star" />
                      <img src="${i}/starslamon-icon.svg" alt="star" />
                      <img src="${i}/starslamon-icon.svg" alt="star" />
                      <img src="${i}/starslamon-icon.svg" alt="star" />
                      <img src="${i}/starslamon-icon.svg" alt="star" />
                      <p class="fs-12 fw-medium">&nbsp;Star Hotel</p>
                    </div>
                    <div class="flex">
                      <img src="${i}/cup-icon.svg" alt="" />
                      <p class="fw-medium fs-12">
                        <span class="fs-12 fw-bold">&nbsp;${t.amenities}+</span
                        >&nbsp;Amenities
                      </p>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <h2 class="fw-medium fs-12">starting from</h2>
                  <h1 class="fw-bold text-accent-slamon fs-24">
                    ${t.currency}${t.price}<span class="fs-14">/night</span>
                  </h1>
                  <h3 class="fw-medium fs-12">${t.tax}</h3>
                </div>
              </div>
              <div class="rating-badge-ratings flex">
                <p class="fs-12 fw-medium">${t.rating}</p>
                <h1 class="fs-12 fw-bold text-muted">${t.reviewLabel}</h1>
                <h2 class="fs-12 text-muted">${t.reviews} reviews</h2>
              </div>
              <div class="hotel-actions">
                <button class="btn-stroke">
                  <img src="${i}/heart-stroke-icon.svg" alt="" />
                </button>
                <button class="btn-primary full-width" data-id="${t.id}">View Deals</button>
              </div>
            </div>
          </div>
        </div>
      `).join(""),stayVisibleCount.textContent=s.length,stayTotalCount.textContent=`${c.length} places`}document.addEventListener("click",e=>{const a=e.target.closest(".btn-primary[data-id]");if(!a)return;const s=a.dataset.id;s&&(window.location.href=`staysdetails.html?stay=${s}`)});const r={price:[0,1e3],rating:null,type:"",sort:"recommended"};function v(e,{price:a,rating:s,type:t}){return e.filter(n=>!(n.price<a[0]||n.price>a[1]||s!==null&&n.rating<s||t&&n.type!==t))}function f(e,a){switch(a){case"priceLowHigh":return[...e].sort((s,t)=>s.price-t.price);case"priceHighLow":return[...e].sort((s,t)=>t.price-s.price);case"ratingHighLow":return[...e].sort((s,t)=>t.rating-s.rating);default:return e}}document.querySelectorAll("[data-rating]").forEach(e=>e.addEventListener("click",a=>{r.rating=Number(a.target.closest("[data-rating]").dataset.rating),o()}));document.getElementById("staySortSelect")?.addEventListener("change",e=>{r.sort=e.target.value,o()});document.querySelectorAll(".sort-btn").forEach(e=>e.addEventListener("click",a=>{document.querySelectorAll(".sort-btn").forEach(t=>t.classList.remove("active")),a.target.classList.add("active");const s=a.target.textContent.toLowerCase();r.type=s.includes("hotel")?"hotel":s.includes("motel")?"motel":s.includes("resort")?"resort":s.includes("hostel")?"hostel":"",o()}));
