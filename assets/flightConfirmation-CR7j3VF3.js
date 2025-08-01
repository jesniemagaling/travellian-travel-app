import"./swiper-DolsZaOw.js";import{a as g,i as b,c as y}from"./styles-CO8zrl36.js";/* empty css                      *//* empty css                      *//* empty css                           */import{f as w}from"./flights-Bw2lqAzd.js";const e="/travellian-travel-app/assets";document.addEventListener("DOMContentLoaded",()=>{g(),b(),y({activeTab:document.querySelector(".flights-btn"),inactiveTab:document.querySelector(".stays-btn")});const i=$(),a=w.find(s=>s.id===i);a?k(a):console.warn("Flight not found")});function $(){return new URLSearchParams(window.location.search).get("flight")}function k(i,a={}){const s=document.getElementById("flight-details");if(!s)return;const t=i.departures[0],{passengerName:r="Jesnie Magaling",boardingPass:l="1234567890",classType:n="Economy",date:c="Aug 5, 2025",gate:d="B12",seat:f="24A",codePrefix:h="EK",code:m="84920124"}=a,[o,p]=t.time.split(" - "),[v,u]=t.route.split("-");s.innerHTML=`
    <section>
      <div class="flight-details-wrapper">
        <div class="flight-details-heading">
          <h1 class="fs-28 fw-bold">${i.airline}</h1>
          <h2 class="fs-32 fw-bold">$${i.price}</h2>
        </div>
        <div class="flight-confirmation flight-details-info">
          <div>
            <div class="flight-details-location">
              <img src="${e}/location-icon.svg" alt="" />
              <p class="fs-14">${t.route}</p>
            </div>
          </div>
          <div class="flight-details-btn">
            <button class="btn-stroke">
              <img src="${e}/share-icon.svg" alt="" />
            </button>
            <button class="btn-primary">Download</button>
          </div>
        </div>
        <div class="flight-details-confirmation">
          <div class="flight-ticket">
            <div class="flight-time">
              <h1 class="fs-32 fw-semi-bold">${o}</h1>
              <p class="fs-14 text-neutral-grey fw-medium">${v}</p>
              <img src="${e}/airplanevert-icon.svg" alt="" />
              <h1 class="fs-32 fw-semi-bold">${p}</h1>
              <p class="fs-14 text-neutral-grey fw-medium">${u}</p>
            </div>
            <div class="ticket-info">
              <div class="ticket-profile">
                <div class="flex">
                  <img src="${e}/profile-icon.svg" alt="" />
                  <div class="profile-name">
                    <h1 class="fs-20 fw-bold">${r}</h1>
                    <p class="fs-14">Boarding Pass N’${l}</p>
                  </div>
                </div>
                <h2 class="fs-14 fw-bold">${n}</h2>
              </div>
              <div class="plane-details grid-4">
                <div class="flex">
                  <img src="${e}/calendar-primary-icon.svg" alt="" />
                  <div class="profile-name">
                    <h1 class="text-neutral-grey fs-14 fw-semi-bold">Date</h1>
                    <p class="fs-12 fw-medium">${c}</p>
                  </div>
                </div>
                <div class="flex">
                  <img src="${e}/clock-icon.svg" alt="" />
                  <div class="profile-name">
                    <h1 class="text-neutral-grey fs-14 fw-semi-bold">Time</h1>
                    <p class="fs-12 fw-medium">${o}</p>
                  </div>
                </div>
                <div class="flex">
                  <img src="${e}/door-icon.svg" alt="" />
                  <div class="profile-name">
                    <h1 class="text-neutral-grey fs-14 fw-semi-bold">Gate</h1>
                    <p class="fs-12 fw-medium">${d}</p>
                  </div>
                </div>
                <div class="flex">
                  <img src="${e}/airlineseat-primary-icon.svg" alt="" />
                  <div class="profile-name">
                    <h1 class="text-neutral-grey fs-14 fw-semi-bold">Seat</h1>
                    <p class="fs-12 fw-medium">${f}</p>
                  </div>
                </div>
              </div>
              <div class="ticket-barcode">
                <div class="ticket-code">
                  <h1 class="fs-32 fw-semi-bold">${h}</h1>
                  <p class="fw-medium fs12">${m}</p>
                </div>
                <img src="${e}/barcode-icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="flight-terms">
            <h1 class="fw-semi-bold fs-24">Terms and Conditions</h1>
            <h2 class="fs-20 fw-medium">Payments</h2>
            <ul>
              <li>
                <span>
                  If you are purchasing your ticket using a debit or credit card
                  via the Website, we will process these payments via the
                  automated secure common payment gateway which will be subject
                  to fraud screening purposes.
                </span>
              </li>
              <li>
                <span>
                  If you do not supply the correct card billing address and/or
                  cardholder information, your booking will not be confirmed and
                  the overall cost may increase. We reserve the right to cancel
                  your booking if payment is declined for any reason or if you
                  have supplied incorrect card information. If we become aware
                  of, or is notified of, any fraud or illegal activity
                  associated with the payment for the booking, the booking will
                  be cancelled and you will be liable for all costs and expenses
                  arising from such cancellation, without prejudice to any
                  action that may be taken against us.
                </span>
              </li>
              <li>
                <span>
                  Golobe may require the card holder to provide additional
                  payment verification upon request by either submitting an
                  online form or visiting the nearest Golobe office, or at the
                  airport at the time of check-in. Golobe reserves the right to
                  deny boarding or to collect a guarantee payment (in cash or
                  from another credit card) if the card originally used for the
                  purchase cannot be presented by the cardholder at check-in or
                  when collecting the tickets, or in the case the original
                  payment has been withheld or disputed by the card issuing
                  bank. Credit card details are held in a secured environment
                  and transferred through an internationally accepted system.
                </span>
              </li>
            </ul>
            <h3 class="fs-20 fw-medium">Contact Us</h3>
            <div>
              <p>
                If you have any questions about our Website or our Terms of Use,
                please contact:
              </p>
              <p>Golobe Group Q.C.S.C</p>
              <p>Golobe Tower</p>
              <p>P.O. Box: 22550</p>
              <p>Doha, State of Qatar</p>
              <p>
                Further contact details can be found at
                <a href="#">golobe.com/help</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}
