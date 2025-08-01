import"./swiper-DolsZaOw.js";import{s as M,c as O}from"./styles-CO8zrl36.js";import{r as P}from"./flightForm-BNUiH5sV.js";import{b as q}from"./places-m7fFGoKg.js";const d="/travellian-travel-app/assets",C=[{id:1,name:"James Doe",boardingPass:"Boarding Pass N'123",image:`${d}/people-1.svg`},{id:2,name:"Emily Smith",boardingPass:"Boarding Pass N'456",image:`${d}/people-2.svg`},{id:3,name:"Michael Lee",boardingPass:"Boarding Pass N'789",image:`${d}/people-3.svg`},{id:4,name:"Sophie Tan",boardingPass:"Boarding Pass N'101",image:`${d}/people-4.svg`},{id:5,name:"Liam Patel",boardingPass:"Boarding Pass N'112",image:`${d}/people-5.svg`}],r="/travellian-travel-app/assets";M({lightAssets:{logo:`${r}/company-logo-white.svg`,flight:`${r}/airplane-white-icon.svg`,stays:`${r}/bed-white-icon.svg`,menu:`${r}/open-icon-white.svg`,close:`${r}/close-icon-white.svg`},darkAssets:{logo:`${r}/company-logo.svg`,flight:`${r}/airplane-icon.svg`,stays:`${r}/bed-icon.svg`,menu:`${r}/open-icon.svg`,close:`${r}/close-icon-nav.svg`}});O({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")});P();k();A();function k(){const o=document.getElementById("mapContent");o.innerHTML=C.map(({id:l,name:c,boardingPass:n,image:i})=>`
        <div class="map-user-overlay-${l} user-overlay flex user-hidden">
          <img src="${i}" alt="${c}" />
          <div class="grid">
            <h1 class="fs-12 fw-bold">${c}</h1>
            <p class="fs-10 text-neutral-grey">${n}</p>
          </div>
        </div>
      `).join("")}function A(){const o=document.getElementById("bookingContent");o.innerHTML=q.map(({destination:l,description:c,price:n,image:i})=>`
        <div class="box">
          <img class="image-box" src="${i}" />
          <div class="card-overlay">
            <div class="flex">
              <div class="grid">
                <h1>${l}</h1>
                <p>${c}</p>
              </div>
              <h2 class="fw-semi-bold fs-24">$ ${n}</h2>
            </div>
            <button class="travel-bundle-btn inline-flex btn-primary">
              Book Flight
            </button>
          </div>
        </div>
      `).join("")}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("mapContainer"),l=o.querySelector("svg"),c=document.querySelectorAll(".user-overlay"),n=new Map;let i=1;function h(t,e,s){e.classList.add("show"),y(t,e),n.has(s)&&clearTimeout(n.get(s));const a=setTimeout(()=>{e.classList.remove("show"),n.delete(s)},1e4);n.set(s,a)}function v(){c.forEach(t=>t.classList.remove("show")),n.forEach(t=>clearTimeout(t)),n.clear()}function y(t,e){const s=t.getBoundingClientRect(),a=o.getBoundingClientRect(),T=-14,B=20,g=10;let f=s.left-a.left+T,u=s.top-a.top+B;const S=a.width-e.offsetWidth-g,x=a.height-e.offsetHeight-g;f=Math.min(Math.max(f,g),S),u=Math.min(Math.max(u,g),x),e.style.left=`${f}px`,e.style.top=`${u}px`}function m(){n.forEach((t,e)=>{const s=o.querySelector(`.map-dot[data-user="${e}"]`),a=document.querySelector(`.map-user-overlay-${e}`);s&&a&&y(s,a)})}function $(){i=window.innerWidth<=768?2:1,l.style.transformOrigin="center center",l.style.transform=`scale(${i})`,v(),(window.innerWidth<=768?["4"]:["1","4"]).forEach(e=>{const s=o.querySelector(`.map-dot[data-user="${e}"]`),a=document.querySelector(`.map-user-overlay-${e}`);s&&a&&h(s,a,e)}),m()}window.addEventListener("load",$),window.addEventListener("resize",$),window.addEventListener("scroll",m),document.addEventListener("click",t=>{const e=o.contains(t.target),s=t.target.closest(".user-overlay");!e&&!s&&v()}),o.addEventListener("click",t=>{const e=t.target;if(e.tagName.toLowerCase()==="svg"){v();return}const s=e.dataset.user;if(e.classList.contains("map-dot")&&s&&e.getAttribute("opacity")==="1"){const a=document.querySelector(`.map-user-overlay-${s}`);a&&h(e,a,s)}});let p=!1,L=0,w=0,b=0,E=0;o.addEventListener("mousedown",t=>{p=!0,L=t.pageX-o.offsetLeft,w=t.pageY-o.offsetTop,b=o.scrollLeft,E=o.scrollTop,o.classList.add("dragging")}),document.addEventListener("mouseup",()=>{p=!1,o.classList.remove("dragging")}),document.addEventListener("mousemove",t=>{if(!p)return;t.preventDefault();const e=t.pageX-o.offsetLeft,s=t.pageY-o.offsetTop;o.scrollLeft=b-(e-L),o.scrollTop=E-(s-w),m()}),o.addEventListener("wheel",t=>{if(!t.ctrlKey)return;t.preventDefault();const e=.1,s=.2,a=2;i+=t.deltaY<0?e:-e,i=Math.min(Math.max(i,s),a),l.style.transform=`scale(${i})`,m()})});
