import{r as g}from"./flightForm-BNUiH5sV.js";import{r as d}from"./stayForm-BQbN_MYX.js";import{s as p}from"./swiper-D8Rclskd.js";import{p as v}from"./places-m7fFGoKg.js";const n="/travellian-travel-app/assets",f=[{title:"“A real sense of community, nurtured”",message:"Really appreciate the help and support from the staff during these tough times. Shout out to Katie for everything!",stars:5,name:"Olga",location:"Weave Studios – Kai Tak",platform:"Google",platformIcon:`${n}/google-icon.svg`,bannerImage:`${n}/review-banner-1.svg`},{title:"“Supportive and friendly staff”",message:"Living here has been a great experience. The community vibe and staff support are unmatched.",stars:4,name:"James",location:"Weave Studios – Kowloon",platform:"Google",platformIcon:`${n}/google-icon.svg`,bannerImage:`${n}/review-banner-2.svg`},{title:"“Feels like home”",message:"Comfortable stay, modern amenities, and always clean. Would recommend to anyone looking for convenience.",stars:5,name:"Mei",location:"Weave Studios – Mong Kok",platform:"Google",platformIcon:`${n}/google-icon.svg`,bannerImage:`${n}/review-banner-3.svg`},{title:"“Safe and vibrant community”",message:"The facilities are great, and I’ve made some lifelong friends here. Thank you to the helpful staff!",stars:4,name:"Carlos",location:"Weave Studios – Central",platform:"Google",platformIcon:`${n}/google-icon.svg`,bannerImage:`${n}/review-banner-1.svg`}],a="/travellian-travel-app/assets";p({lightAssets:{logo:`${a}/company-logo-white.svg`,flight:`${a}/airplane-white-icon.svg`,stays:`${a}/bed-white-icon.svg`,menu:`${a}/open-icon-white.svg`,close:`${a}/close-icon-white.svg`},darkAssets:{logo:`${a}/company-logo.svg`,flight:`${a}/airplane-icon.svg`,stays:`${a}/bed-icon.svg`,menu:`${a}/open-icon.svg`,close:`${a}/close-icon-nav.svg`}});g();d();$();b();const r=document.querySelectorAll(".nav-booking-tab");r.forEach(t=>{t.addEventListener("click",()=>{r.forEach(e=>e.classList.remove("active")),t.classList.add("active")})});const c=document.querySelectorAll(".booking-tab"),u=document.getElementById("flight-content"),h=document.getElementById("stay-content");c.forEach(t=>{t.addEventListener("click",()=>{c.forEach(s=>s.classList.remove("active")),t.classList.add("active");const e=t.dataset.target==="flightForm";u.classList.toggle("hidden",!e),h.classList.toggle("hidden",e)})});const m=document.querySelector(".swap-icon"),o=document.getElementById("fromToInput");m&&o&&m.addEventListener("click",()=>{const t=o.value.split(" - ");t.length===2&&(o.value=`${t[1].trim()} - ${t[0].trim()}`)});o.addEventListener("input",t=>{const e=o.selectionStart;let s=o.value;if(!s.includes(" - ")){const l=s.split("-");l.length===2?s=l[0].trim()+" - "+l[1].trim():s="From - To"}const i=s.split(" - ");i.length>2&&(s=i[0]+" - "+i.slice(1).join(" ")),o.value=s,o.setSelectionRange(e,e)});function $(){const t=document.getElementById("placesCard");t.innerHTML=v.map(({city:e,country:s,image:i,services:l})=>`
        <div class="places-content flex">
          <img src="${i}" alt="${e}, ${s}" />
          <div class="grid">
            <p class="fw-semi-bold heading-normal-txt">${e}, ${s}</p>
            <p class="fw-medium fs-14">
              ${l.join("&nbsp;&nbsp;•&nbsp;&nbsp;")}
            </p>
          </div>
        </div>
      `).join("")}function b(){const t=document.getElementById("swiperWrapper");t.innerHTML=f.map(e=>`
        <div class="swiper-slide">
          <div class="grid swiper-content">
            <h1 class="fs-24 fw-bold">${e.title}</h1>
            <p class="fs-14 text-neutral-grey">${e.message}</p>
            <button class="btn-black">View More</button>
            <div class="star-icon">
              ${`<img src="${a}/star-icon.svg" alt="star" />`.repeat(e.stars)}
            </div>
            <div>
              <h1 class="fs-14 fw-bold">${e.name}</h1>
              <h2 class="fs-12 fw-medium text-neutral-grey">${e.location}</h2>
              <div class="flex">
                <img src="${e.platformIcon}" alt="${e.platform}" />
                <span class="fs-12 fw-bold text-neutral-grey">&nbsp;${e.platform}</span>
              </div>
            </div>
            <div class="swiper-content-img">
              <img src="${e.bannerImage}" alt="${e.name}'s review banner" />
            </div>
          </div>
        </div>
      `).join("")}
