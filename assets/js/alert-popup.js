let countdown=60,interval;function createAlertBox(){const e=document.createElement("div");e.id="alertBox",e.innerHTML=`<h1>We have a message for you!</h1><p>We put our hearts into every video just for you! 💖<br>A small tap on Subscribe means the world to us. 🌍✨<br>If you'd rather wait, no worries—just <span id="countdown">60</span> seconds! ⏳<br>But we'd love to have you with us. 🥰</p><button id="subscribeButton">Subscribe on YouTube!</button>`,e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);color:white;visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;z-index:9999;transition:visibility 0s linear .3s,opacity .3s ease-in-out;opacity:0;",e.classList.add("hidden"),document.body.appendChild(e)}function showPopup(){let e=document.getElementById("alertBox");e||(createAlertBox(),e=document.getElementById("alertBox")),e.classList.remove("hidden"),e.style.visibility="visible",e.style.opacity="1";const t=document.getElementById("countdown");t.textContent=countdown,interval=setInterval(()=>{countdown--,t.textContent=countdown,countdown<=0&&(clearInterval(interval),closePopup())},1e3)}function closePopup(){const e=document.getElementById("alertBox");e&&(e.style.visibility="hidden",e.style.opacity="0"),clearInterval(interval)}document.addEventListener("DOMContentLoaded",(function(){setTimeout(showPopup,500),document.body.addEventListener("click",(function(e){"subscribeButton"===e.target.id&&(localStorage.setItem("subscribed","true"),closePopup(),window.open("https://www.youtube.com/@quickplaymobile?sub_confirmation=1","_blank"))})),setInterval(()=>{"true"!==localStorage.getItem("subscribed")&&showPopup()},3e5)}));